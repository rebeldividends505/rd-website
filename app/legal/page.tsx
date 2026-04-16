import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Legal Notices | Rebel Dividends',
  description: 'Legal notices, terms of use, and regulatory disclosures for Rebel Dividends.',
  robots: 'noindex, nofollow',
}

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-300 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Legal Notices</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: April 2026</p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">1. Company Information</h2>
          <p className="leading-relaxed">
            Rebel Dividends is operated by Jason Cox. All investment-related activities are conducted in
            accordance with applicable federal and state securities laws.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">2. Regulation D / Rule 506(b) Offering</h2>
          <p className="leading-relaxed mb-3">
            Securities offered through Rebel Dividends are offered pursuant to an exemption from registration
            under the Securities Act of 1933, as amended, specifically Rule 506(b) of Regulation D
            promulgated by the U.S. Securities and Exchange Commission (SEC).
          </p>
          <p className="leading-relaxed mb-3">
            Under Rule 506(b), securities may be sold to an unlimited number of accredited investors and
            up to 35 sophisticated (non-accredited) investors per offering. These securities have not been
            registered with the SEC or any state securities authority.
          </p>
          <p className="leading-relaxed">
            This offering is not subject to review by any federal or state agency. You should rely only
            on the information provided directly to you by Rebel Dividends in connection with any
            investment decision.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">3. No General Solicitation</h2>
          <p className="leading-relaxed">
            This website does not constitute a general solicitation or public offering of securities. Access
            to investment materials and offering documents is restricted to individuals who have a
            pre-existing substantive relationship with Rebel Dividends or who have been specifically
            invited to review such materials.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">4. Not Investment Advice</h2>
          <p className="leading-relaxed">
            Nothing on this website constitutes investment advice, financial advice, trading advice, or
            any other sort of advice. You should conduct your own due diligence and consult qualified
            financial, legal, and tax advisors before making any investment decision. Past performance
            is not indicative of future results.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">5. Risk of Loss</h2>
          <p className="leading-relaxed">
            Investing involves significant risk, including the possible loss of principal. Digital asset
            investments are particularly volatile and subject to regulatory, technical, and market risks.
            You should not invest money you cannot afford to lose.
          </p>
          <p className="mt-3">
            See our full{' '}
            <Link href="/risk-disclosure" className="text-blue-400 hover:underline">
              Risk Disclosure
            </Link>{' '}
            for details.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">6. Resale Restrictions</h2>
          <p className="leading-relaxed">
            Securities issued under Rule 506(b) are &ldquo;restricted securities&rdquo; as defined in
            Rule 144 under the Securities Act. They may not be resold or transferred without registration
            or an applicable exemption. There is no established trading market for these securities.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">7. Forward-Looking Statements</h2>
          <p className="leading-relaxed">
            This website may contain forward-looking statements, including projected returns, yield
            estimates, and price targets. These statements are based on current expectations and are
            subject to risks and uncertainties that could cause actual results to differ materially.
            Rebel Dividends undertakes no obligation to update forward-looking statements.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">8. Contact</h2>
          <p className="leading-relaxed">
            For legal or compliance inquiries, contact:{' '}
            <a href="mailto:jason@rebeldividends.com" className="text-blue-400 hover:underline">
              jason@rebeldividends.com
            </a>
          </p>
        </section>

        <div className="border-t border-gray-800 pt-8 mt-8 flex gap-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/risk-disclosure" className="hover:text-gray-300">Risk Disclosure</Link>
          <Link href="/apply" className="hover:text-gray-300">Apply</Link>
        </div>
      </div>
    </main>
  )
}
