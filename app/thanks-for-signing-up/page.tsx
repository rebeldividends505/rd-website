import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thanks For Signing Up! | Rebel Dividends',
  description: 'Thank you for signing up with Rebel Dividends.',
  robots: 'noindex, nofollow',
}

export default function ThanksForSigningUpPage() {
  return (
    <main className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 bg-green-900/40 border border-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-white mb-3">Thanks For Signing Up!</h1>
        <p className="text-gray-400 text-lg mb-6">
          You&apos;re on the list. We&apos;ll be in touch soon.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg text-sm transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/forward"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-300 font-semibold rounded-lg text-sm transition-colors"
          >
            See the Strategy →
          </Link>
        </div>
      </div>
    </main>
  )
}
