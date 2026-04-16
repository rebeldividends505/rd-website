import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Application Received | Rebel Dividends',
  description: 'Your application to invest with Rebel Dividends has been received.',
  robots: 'noindex, nofollow',
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Icon */}
        <div className="w-20 h-20 bg-green-900/40 border border-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-white mb-3">Application Received!</h1>
        <p className="text-gray-400 text-lg mb-2">
          Thanks for applying to invest with Rebel Dividends.
        </p>
        <p className="text-gray-500 mb-8">
          Jason reviews every application personally and will reach out within <strong className="text-gray-300">48 hours</strong> to
          schedule a call and discuss next steps.
        </p>

        {/* What to expect */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-left mb-8 space-y-4">
          <h2 className="text-white font-semibold mb-2">What happens next:</h2>
          <div className="flex gap-3">
            <div className="w-6 h-6 bg-blue-900 border border-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-300 text-xs font-bold">1</span>
            </div>
            <p className="text-gray-400 text-sm">
              Jason reviews your application and verifies accredited/sophisticated investor status.
            </p>
          </div>
          <div className="flex gap-3">
            <div className="w-6 h-6 bg-blue-900 border border-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-300 text-xs font-bold">2</span>
            </div>
            <p className="text-gray-400 text-sm">
              You&apos;ll receive a call or email to discuss the strategy, current portfolio performance, and your fit.
            </p>
          </div>
          <div className="flex gap-3">
            <div className="w-6 h-6 bg-blue-900 border border-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-300 text-xs font-bold">3</span>
            </div>
            <p className="text-gray-400 text-sm">
              If approved, you&apos;ll receive a private investor portal invite with onboarding docs and wire instructions.
            </p>
          </div>
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/daily"
            className="bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-xl transition"
          >
            📊 View Today&apos;s HYPE Price
          </Link>
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-300 font-medium px-6 py-3 rounded-xl border border-gray-800 hover:border-gray-600 transition"
          >
            Back to Home
          </Link>
        </div>

        <p className="text-gray-600 text-sm mt-8">
          Questions?{' '}
          <a href="mailto:jason@rebeldividends.com" className="text-blue-400 hover:underline">
            jason@rebeldividends.com
          </a>
          {' '}·{' '}
          <a href="tel:+15053227515" className="text-blue-400 hover:underline">
            (505) 322-7515
          </a>
        </p>
      </div>
    </main>
  )
}
