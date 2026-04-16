import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Risk Disclosure | Rebel Dividends',
  description: 'Full risk disclosure for Rebel Dividends investment opportunities.',
  robots: 'noindex, nofollow',
}

export default function RiskDisclosurePage() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-300 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Risk Disclosure</h1>
        <p className="text-gray-500 text-sm mb-4">Last updated: April 2026</p>
        <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4 mb-10 text-yellow-200 text-sm">
          <strong>Important:</strong> Please read this Risk Disclosure carefully before making any
          investment decision. This is not exhaustive — additional risks may apply to your specific
          situation. Consult a qualified financial advisor.
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">1. Loss of Principal</h2>
          <p className="leading-relaxed">
            Investments in Rebel Dividends involve a high degree of risk. You may lose some or all of
            your investment. Do not invest funds you cannot afford to lose entirely. Unlike bank deposits,
            investments in this offering are not FDIC-insured or otherwise guaranteed by any government agency.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">2. Digital Asset Volatility</h2>
          <p className="leading-relaxed mb-3">
            The underlying strategy involves digital assets, including HYPE (Hyperliquid) and other
            cryptocurrencies. Digital asset markets are highly volatile. Prices can decline by 50% or
            more in short time periods. Volatility affects both portfolio value and dividend generation
            capacity.
          </p>
          <p className="leading-relaxed">
            Historical price performance of any digital asset is not a reliable indicator of future
            performance. Projected dividends and yield estimates are based on assumptions that may not
            be realized.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">3. DeFi Protocol Risk</h2>
          <p className="leading-relaxed mb-3">
            The strategy utilizes decentralized finance (DeFi) protocols, including Hyperliquid.
            DeFi protocols carry unique risks including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400 ml-2">
            <li>Smart contract bugs or exploits</li>
            <li>Protocol governance changes</li>
            <li>Liquidation risk in leveraged positions</li>
            <li>Oracle manipulation or failure</li>
            <li>Bridge failures or cross-chain risks</li>
            <li>Loss of private keys or custody failures</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">4. Regulatory Risk</h2>
          <p className="leading-relaxed">
            The regulatory environment for digital assets and DeFi protocols is rapidly evolving.
            Future regulations may adversely affect the strategy, impose restrictions on operations,
            or require registration that is not currently required. Changes in U.S. or international
            law could materially reduce or eliminate the viability of the investment strategy.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">5. Liquidity Risk</h2>
          <p className="leading-relaxed">
            Your investment is illiquid. There is no established secondary market for interests in
            Rebel Dividends. You may be unable to exit your investment when desired. Redemption
            is subject to available liquidity and terms agreed upon at the time of investment.
            You should only invest funds you do not need access to for an extended period.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">6. Counterparty Risk</h2>
          <p className="leading-relaxed">
            The strategy involves reliance on centralized and decentralized exchanges, custodians,
            and other counterparties. If any counterparty fails, is hacked, or becomes insolvent,
            some or all assets may be lost. Rebel Dividends cannot guarantee the security or
            solvency of any third-party platform.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">7. Tax Risk</h2>
          <p className="leading-relaxed">
            Digital asset investments may result in complex tax obligations including capital gains,
            ordinary income recognition, and reporting requirements. Tax laws applicable to digital
            assets are evolving. Consult a qualified tax advisor regarding the tax treatment of your
            investment and any distributions received.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">8. Strategy Risk</h2>
          <p className="leading-relaxed">
            The investment strategy depends on market conditions that may not persist. Yield farming,
            staking, and liquidity provision strategies are subject to changing protocol rewards,
            declining APYs, and competitive dynamics. There is no guarantee that any particular
            yield level will continue or that the strategy will remain profitable.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">9. Operational Risk</h2>
          <p className="leading-relaxed">
            The business depends on key personnel (Jason Cox). Loss of key personnel, operational
            disruptions, cybersecurity incidents, or system failures could adversely affect operations
            and your investment. Rebel Dividends does not maintain a formal disaster recovery program.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">10. No Guarantees</h2>
          <p className="leading-relaxed">
            No representation is made that any specific yield, return, or dividend will be achieved.
            Weekly dividend amounts are variable and may decrease or be suspended entirely based on
            market conditions. Past dividends paid to investors are not a guarantee of future dividends.
          </p>
        </section>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-5 mb-10">
          <p className="text-sm text-gray-400">
            <strong className="text-white">Acknowledgment:</strong> By submitting an application to invest
            with Rebel Dividends, you acknowledge that you have read and understood this Risk Disclosure,
            that you are able to bear the economic risk of the investment, and that you qualify as an
            accredited or sophisticated investor as applicable under SEC definitions.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex gap-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/legal" className="hover:text-gray-300">Legal Notices</Link>
          <Link href="/apply" className="hover:text-gray-300">Apply</Link>
        </div>
      </div>
    </main>
  )
}
