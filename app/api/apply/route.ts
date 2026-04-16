import { NextRequest, NextResponse } from 'next/server'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://thqimnjwbmupxyfjreta.supabase.co'
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRocWltbmp3Ym11cHh5ZmpyZXRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYxNjQ0MjgsImV4cCI6MjA5MTc0MDQyOH0.v-CRqVOxVVRktzuo1KChseRj_OKSopn0qxGn5E3Ske4'
const BREVO_API_KEY = process.env.BREVO_API_KEY || ''
// Set ENABLE_LEAD_NOTIFICATIONS=true in Vercel env to send admin email on new lead
const ENABLE_LEAD_NOTIFICATIONS = process.env.ENABLE_LEAD_NOTIFICATIONS === 'true'
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'jason@rebeldividends.com'

export const dynamic = 'force-dynamic'

interface ApplyPayload {
  first_name: string
  last_name: string
  email: string
  phone?: string
  investment_amount?: string | null
  investor_type: string
  how_heard?: string
  message?: string
  utm_source?: string | null
  utm_medium?: string | null
  utm_campaign?: string | null
}

async function sendAdminNotification(lead: ApplyPayload) {
  if (!ENABLE_LEAD_NOTIFICATIONS || !BREVO_API_KEY) return

  const name = `${lead.first_name} ${lead.last_name}`
  const investorLabel = lead.investor_type === 'sophisticated' ? '⚠️ SOPHISTICATED (506b slot)' : '✅ Accredited'

  const body = {
    sender: { name: 'Rebel Dividends', email: 'noreply@rebeldividends.com' },
    to: [{ email: ADMIN_EMAIL, name: 'Jason Cox' }],
    subject: `New RD Lead: ${name} — ${lead.investor_type}`,
    htmlContent: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#1e40af">New Investor Application</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px;font-weight:bold;background:#f1f5f9">Name</td><td style="padding:8px">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f1f5f9">Email</td><td style="padding:8px">${lead.email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f1f5f9">Phone</td><td style="padding:8px">${lead.phone || '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f1f5f9">Amount</td><td style="padding:8px">$${lead.investment_amount?.toLocaleString() || '?'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f1f5f9">Type</td><td style="padding:8px">${investorLabel}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f1f5f9">Source</td><td style="padding:8px">${lead.how_heard || '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f1f5f9">Notes</td><td style="padding:8px">${lead.message || '—'}</td></tr>
        </table>
        <p style="color:#64748b;font-size:12px;margin-top:16px">
          Submitted via rebeldividends.com/apply — ${new Date().toLocaleString('en-US', { timeZone: 'America/Denver' })} MDT
        </p>
      </div>
    `,
  }

  try {
    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
  } catch (err) {
    console.error('[apply] Brevo notification failed:', err)
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { first_name, last_name, email, phone, investment_amount, investor_type, how_heard, message, utm_source, utm_medium, utm_campaign } = body

    // Basic validation
    if (!first_name?.trim() || !last_name?.trim() || !email?.trim()) {
      return NextResponse.json({ error: 'first_name, last_name, and email are required' }, { status: 400 })
    }
    if (!email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const payload = {
      first_name: first_name.trim(),
      last_name: last_name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone?.trim() || null,
      investment_amount: investment_amount || null,
      investor_type: investor_type || 'accredited',
      source: 'website',
      status: 'new',
      utm_source: utm_source || null,
      utm_medium: utm_medium || null,
      utm_campaign: utm_campaign || null,
      notes: [
        how_heard ? `How heard: ${how_heard}` : '',
        message ? `Message: ${message}` : '',
      ].filter(Boolean).join(' | ') || null,
    }

    // Use service key server-side (not exposed to browser)
    const authKey = SUPABASE_SERVICE_KEY || SUPABASE_ANON_KEY
    const res = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': authKey,
        'Authorization': `Bearer ${authKey}`,
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('[apply] Supabase error:', err)
      // Don't leak DB errors to client
      return NextResponse.json({ error: 'Failed to save application. Please try again.' }, { status: 500 })
    }

    // Fire-and-forget admin notification (to Jason only, NOT to investor)
    sendAdminNotification(payload as ApplyPayload).catch(() => {})

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    console.error('[apply] Unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
