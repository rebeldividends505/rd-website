import { NextRequest, NextResponse } from 'next/server'

/**
 * Rate limiting + security headers middleware
 * Hardened plan security checklist: "Rate limiting on /apply and magic link endpoints"
 *
 * NOTE: This in-memory store resets per cold start. For global state across
 * all Vercel edge instances, upgrade to Vercel KV (Redis):
 * https://vercel.com/docs/storage/vercel-kv/quickstart
 */

const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

// 15-minute sliding window, max 5 apply submissions per IP
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000
const APPLY_RATE_LIMIT_MAX = 5

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'
  )
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const method = request.method

  // --- Rate limit /api/apply (POST only) ---
  if (pathname === '/api/apply' && method === 'POST') {
    const ip = getClientIp(request)
    const key = `apply:${ip}`
    const now = Date.now()
    const entry = rateLimitStore.get(key)

    if (!entry || now > entry.resetAt) {
      // First request or window expired — start fresh
      rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    } else {
      entry.count++

      if (entry.count > APPLY_RATE_LIMIT_MAX) {
        const retryAfter = Math.ceil((entry.resetAt - now) / 1000)
        return NextResponse.json(
          {
            error: 'Too many applications submitted from this IP. Please try again later.',
            retryAfter,
          },
          {
            status: 429,
            headers: {
              'Retry-After': String(retryAfter),
              'X-RateLimit-Limit': String(APPLY_RATE_LIMIT_MAX),
              'X-RateLimit-Remaining': '0',
              'X-RateLimit-Reset': new Date(entry.resetAt).toUTCString(),
            },
          }
        )
      }
    }
  }

  // --- Security headers on all responses ---
  const response = NextResponse.next()

  // Prevent clickjacking
  response.headers.set('X-Frame-Options', 'DENY')
  // Prevent MIME sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff')
  // Referrer policy
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  // Disable browser features not needed
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=()'
  )
  // Content Security Policy — allows same-origin scripts + inline (Next.js needs both)
  // Tighten in production if no inline styles needed
  response.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",  // Next.js requires unsafe-eval in dev
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "connect-src 'self' https://*.supabase.co https://api.coingecko.com",
      "frame-ancestors 'none'",
    ].join('; ')
  )

  return response
}

export const config = {
  matcher: [
    // Match all API routes
    '/api/:path*',
    // Match all pages (exclude Next.js internals and static files)
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}
