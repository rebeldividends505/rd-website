import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer — Rebel Dividends",
  description: "Important disclaimers for Rebel Dividends content, communications, and investment information.",
  robots: { index: false, follow: false },
};

export default function DisclaimerPage() {
  const lastUpdated = "April 2026";

  return (
    <div className="min-h-screen bg-gray-950 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Disclaimer</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: {lastUpdated}</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-gray-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Not Investment Advice</h2>
            <p>
              Nothing on this website, in our emails, SMS messages, webinars, videos, social media accounts,
              or any other Rebel Dividends communications constitutes investment advice, financial advice,
              trading advice, or any other sort of advice. The content provided is for informational and
              educational purposes only.
            </p>
            <p className="mt-3">
              You should not make any investment decision based solely on the information found on this website.
              Always conduct your own due diligence and consult with a qualified financial advisor, attorney,
              or accountant before making any investment decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">No Offer to Sell Securities</h2>
            <p>
              Nothing on this website constitutes an offer to sell, or a solicitation of an offer to buy,
              any securities. Any securities offerings by Rebel Dividends, LLC are made exclusively pursuant
              to Rule 506(b) of Regulation D under the Securities Act of 1933, as amended, and are available
              only to accredited investors and a limited number of sophisticated investors as defined under
              applicable federal securities laws.
            </p>
            <p className="mt-3">
              There is no general solicitation associated with any Rebel Dividends securities offering.
              This website does not constitute general solicitation or general advertising.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Past Performance</h2>
            <p>
              Past performance is not indicative of future results. Any historical dividend amounts, yields,
              returns, or performance metrics referenced on this website or in our communications are provided
              for informational purposes only. Future performance may differ materially from historical results.
            </p>
            <p className="mt-3">
              All investments carry risk, including the risk of total loss of principal. You should be
              prepared to lose the entire amount of your investment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Digital Asset and DeFi Risks</h2>
            <p>
              Rebel Dividends operates in the digital asset and decentralized finance (DeFi) sector.
              This sector involves unique and substantial risks not typically associated with traditional
              investments, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400 mt-3 ml-4">
              <li>Extreme price volatility of digital assets</li>
              <li>Smart contract vulnerabilities and exploits</li>
              <li>Protocol risk and potential for protocol failure</li>
              <li>Regulatory uncertainty and potential adverse regulation</li>
              <li>Liquidity risk and potential inability to exit positions</li>
              <li>Technology risk including network downtime and hacks</li>
              <li>Loss of private keys or access credentials</li>
            </ul>
            <p className="mt-3">
              Please review our full{" "}
              <Link href="/risk-disclosure" className="text-blue-400 hover:text-blue-300 underline">
                Risk Disclosure
              </Link>{" "}
              before making any investment decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Forward-Looking Statements</h2>
            <p>
              This website may contain forward-looking statements regarding future events, performance,
              or results. These statements involve known and unknown risks, uncertainties, and other factors
              that may cause actual results to differ materially from those expressed or implied.
              Forward-looking statements are not guarantees of future performance.
            </p>
            <p className="mt-3">
              Words such as &quot;may,&quot; &quot;will,&quot; &quot;expect,&quot; &quot;intend,&quot;
              &quot;plan,&quot; &quot;anticipate,&quot; &quot;project,&quot; &quot;believe,&quot;
              &quot;estimate,&quot; and similar expressions are intended to identify forward-looking statements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Third-Party Content and Links</h2>
            <p>
              This website may contain links to third-party websites or reference third-party information.
              Rebel Dividends does not endorse, sponsor, or recommend any third-party content, products,
              or services. We are not responsible for the accuracy, completeness, or legality of third-party
              content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">No Guarantee of Dividends</h2>
            <p>
              Any references to &quot;dividends&quot; on this website refer to distributions from the Rebel Dividends
              fund to investors, which are contingent on the fund generating sufficient returns. There is no
              guarantee that dividends will be paid at any particular rate or at all. Distribution amounts
              may fluctuate significantly or may be suspended entirely.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Tax Considerations</h2>
            <p>
              Any tax information provided on this website is for general informational purposes only.
              Tax treatment of investments in Rebel Dividends will depend on each investor&apos;s individual
              circumstances. We strongly recommend consulting with a qualified tax professional before investing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p>
              If you have questions about this disclaimer or any content on this website, contact us at{" "}
              <a href="mailto:info@rebeldividends.com" className="text-blue-400 hover:text-blue-300">
                info@rebeldividends.com
              </a>
              .
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap gap-4 text-sm">
          <Link href="/legal" className="text-blue-400 hover:text-blue-300">Legal Notices</Link>
          <Link href="/risk-disclosure" className="text-blue-400 hover:text-blue-300">Risk Disclosure</Link>
          <Link href="/privacy" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link>
          <Link href="/" className="text-gray-500 hover:text-gray-300">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
