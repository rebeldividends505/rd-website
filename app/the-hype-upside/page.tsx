import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The HYPE Upside — The Case for Hyperliquid",
  description: "Why Hyperliquid is the highest-revenue protocol in crypto and how a move to Top 3 by market cap would impact Rebel Dividends investors.",
};

function StatCard({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div className="bg-gray-800 rounded-xl p-4 text-center">
      <div className="text-xl font-bold text-green-400">{value}</div>
      <div className="text-gray-300 text-sm font-medium mt-1">{label}</div>
      {sub && <div className="text-gray-600 text-xs mt-0.5">{sub}</div>}
    </div>
  );
}

function CompTable({
  headers,
  rows,
  highlight,
}: {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  highlight?: number;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-700">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-700 bg-gray-800/50">
            {headers.map((h, i) => (
              <th key={i} className="text-left px-4 py-3 text-gray-400 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={`border-b border-gray-800 last:border-0 transition-colors ${
                highlight === ri ? "bg-green-900/20" : "hover:bg-gray-800/30"
              }`}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-4 py-3 ${
                    highlight === ri ? "text-green-300 font-semibold" : "text-gray-300"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function HypeUpsidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-blue-950 border border-blue-800 rounded-full px-4 py-1.5 text-blue-300 text-sm font-medium mb-6">
          Investment Thesis
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-white">
          The Case for Hyperliquid
          <br />
          <span className="text-green-400">Becoming a Top 3 Coin</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          A ~10x move from ~$32 to ~$320. Here&apos;s why the fundamentals demand it.
        </p>
        <p className="text-gray-600 text-sm mt-3">Data as of March 2026</p>
      </div>

      <div className="space-y-12">
        {/* Section 1 */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            1. This Is Not &ldquo;Just Another Crypto&rdquo;
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Most people hear &ldquo;crypto&rdquo; and think of speculative digital money — Bitcoin,
            meme coins, tokens with no revenue and no real business. Hyperliquid is none of those things.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Hyperliquid is a <strong className="text-white">financial technology platform</strong> — the
            digital tech stack that powers an entire ecosystem of trading, lending, and financial services.
            It earns revenue from transaction fees on every trade, just like CME Group, Nasdaq, or the
            New York Stock Exchange. It processes trades in under 1 second with zero gas fees.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            If a wealth advisor were pitching this to you as a private company, they would call it
            &ldquo;the world&apos;s fastest-growing exchange platform&rdquo; — and nobody would question a 25x P/E ratio.
            Instead, because it lives in the crypto category, it trades at an{" "}
            <strong className="text-green-400">8.6x P/E</strong>. That mispricing is the entire opportunity.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <StatCard value="$955M+" label="Annualized Revenue" sub="2026 run rate" />
            <StatCard value="97%" label="Revenue Burned" sub="buyback & burn daily" />
            <StatCard value="11" label="Employees" sub="no VC, self-funded" />
            <StatCard value="#1" label="Fee Revenue" sub="beats Solana + Ethereum" />
            <StatCard value="~8.6x" label="Effective P/E" sub="vs 25x+ for peers" />
            <StatCard value="$2.7M/day" label="Daily Buybacks" sub="from real revenue" />
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            2. The #1 Revenue-Generating Protocol in Crypto — Right Now
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            This is not our claim — this is third-party data from DefiLlama, one of the most
            trusted analytics platforms in the industry. Hyperliquid generates more fees than any
            other protocol or blockchain in crypto. It&apos;s not close.
          </p>
          <CompTable
            headers={["Protocol", "30-Day Fees", "Annualized", "DefiLlama Rank"]}
            rows={[
              ["Hyperliquid", "$74.29M", "~$891M", "#4"],
              ["Solana", "$22.09M", "~$265M", "#13"],
              ["Ethereum", "$16.1M", "~$193M", "#23"],
            ]}
            highlight={0}
          />
          <div className="mt-6 bg-blue-950/40 border border-blue-800/30 rounded-xl p-4">
            <p className="text-blue-300 text-sm font-semibold mb-1">The Valuation Absurdity</p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Ethereum — a $270 billion asset — is ranked #23 in fee generation</li>
              <li>• Hyperliquid — an $8 billion asset — is ranked #4</li>
              <li>• That is a <strong className="text-white">34x valuation gap</strong> on less than one-sixth the revenue</li>
            </ul>
          </div>
          <div className="mt-6">
            <CompTable
              headers={["Blockchain", "Full Year 2025 Revenue"]}
              rows={[
                ["Solana (hundreds of apps)", "$1.3 Billion"],
                ["Hyperliquid (ONE exchange)", "$844 Million"],
                ["Ethereum (thousands of protocols)", "$524 Million"],
                ["BNB Chain", "$257 Million"],
              ]}
              highlight={1}
            />
          </div>
        </section>

        {/* Section 3 */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            3. Absurdly Cheap for a Tech Platform
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            At an $8 billion market cap with ~$926 million in annualized &ldquo;earnings&rdquo; flowing to
            token holders, Hyperliquid trades at <strong className="text-green-400">8.6x P/E</strong> —
            lower than utilities, lower than banks, lower than the S&P 500 average.
            The only companies that trade at single-digit P/E ratios are businesses the market
            believes are dying. Hyperliquid grew revenue 6x year-over-year.
          </p>
          <CompTable
            headers={["Company / Asset", "What They Do", "P/E Ratio"]}
            rows={[
              ["Banks (avg)", "Lending and deposits", "12–15x"],
              ["Utilities (avg)", "Power and water", "15–18x"],
              ["S&P 500 (avg)", "Broad market", "22–25x"],
              ["CME Group", "Futures exchange", "~25x"],
              ["Nasdaq Inc", "Stock exchange", "~28x"],
              ["Visa / Mastercard", "Payment infrastructure", "30–35x"],
              ["Apple", "Consumer tech", "~33x"],
              ["Nvidia", "AI chips", "~65x"],
              ["Hyperliquid", "Exchange + tech stack", "~8.6x ⬅"],
            ]}
            highlight={8}
          />
          <div className="mt-6 bg-green-900/20 border border-green-700/40 rounded-xl p-5">
            <p className="text-green-300 font-semibold mb-2">What if Hyperliquid were valued like the tech platform it actually is?</p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• At CME Group&apos;s ~25x P/E = $23B market cap = <strong className="text-white">~3x from here</strong></li>
              <li>• At Nasdaq&apos;s ~28x P/E = $26B market cap = <strong className="text-white">~3.3x from here</strong></li>
              <li>• At Visa&apos;s ~32x P/E = $30B market cap = <strong className="text-white">~3.7x from here</strong></li>
              <li>• At Apple&apos;s ~33x P/E = $31B market cap = <strong className="text-white">~3.8x from here</strong></li>
            </ul>
          </div>
        </section>

        {/* Section 4 — Coinbase Killer */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">4. The Coinbase Killer</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            In 2025, Hyperliquid processed <strong className="text-white">$2.95 trillion</strong> in total
            trading volume. Coinbase — a publicly traded company worth ~$50 billion with thousands of
            employees — processed $1.4 trillion.
          </p>
          <div className="bg-amber-900/20 border border-amber-700/40 rounded-xl p-5 mb-4">
            <p className="text-amber-300 font-bold text-xl text-center">
              Hyperliquid did nearly 2x Coinbase&apos;s volume with 11 employees.
            </p>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            Coinbase trades at a ~15x revenue multiple. Hyperliquid trades at 9.5x — nearly half the
            multiple, despite growing 6x year-over-year while Coinbase growth is decelerating.
          </p>
          <div className="bg-gray-800 rounded-xl p-4 text-center">
            <p className="text-gray-400 text-sm">Revenue per employee</p>
            <div className="grid grid-cols-2 gap-4 mt-3">
              <div>
                <p className="text-green-400 font-bold text-2xl">$89M</p>
                <p className="text-gray-300 text-sm">per Hyperliquid employee</p>
              </div>
              <div>
                <p className="text-gray-400 font-bold text-2xl">$900K</p>
                <p className="text-gray-300 text-sm">per Coinbase employee</p>
              </div>
            </div>
            <p className="text-amber-400 text-xs mt-3">~100x more efficient per person</p>
          </div>
        </section>

        {/* The Target */}
        <section className="bg-gradient-to-br from-blue-950 to-gray-900 border border-blue-700/40 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">The Price Target: Top 3 = $320+</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            To reach Top 3 by market cap, Hyperliquid needs a market cap of roughly $80 billion —
            approximately a 10x increase from its ~$8 billion market cap at the time of this analysis.
            That&apos;s a move from ~$32 to ~$320 per token.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            We are not asking for Hyperliquid to be priced like a hyper-growth AI startup. We are
            asking for it to be priced like an exchange business — which it is — at a reasonable
            multiple for the revenue it already generates today.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-800/50 rounded-xl p-4 text-center">
              <p className="text-gray-400 text-xs">Current</p>
              <p className="text-white font-bold text-2xl mt-1">~$32</p>
              <p className="text-gray-500 text-xs">~$8B market cap</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 text-center">
              <p className="text-gray-400 text-xs">Conservative (25x P/E)</p>
              <p className="text-green-400 font-bold text-2xl mt-1">~$100</p>
              <p className="text-gray-500 text-xs">~$24B market cap</p>
            </div>
            <div className="bg-green-900/30 border border-green-700/40 rounded-xl p-4 text-center">
              <p className="text-green-400 text-xs font-semibold">Target (Top 3)</p>
              <p className="text-green-300 font-bold text-3xl mt-1">$320+</p>
              <p className="text-gray-500 text-xs">~$80B market cap</p>
            </div>
          </div>
        </section>

        {/* What This Means for RD Investors */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">What This Means for Rebel Dividends Investors</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            As a Rebel Dividends investor, your capital is deployed into HYPE. This gives you:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded-xl p-5">
              <div className="text-2xl mb-2">💰</div>
              <h3 className="text-white font-semibold mb-2">Weekly Cash Income</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Dividends paid every Friday from fund yield — regardless of where HYPE price is
                on any given day. Real cash in your account, weekly.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-5">
              <div className="text-2xl mb-2">📈</div>
              <h3 className="text-white font-semibold mb-2">Capital Appreciation Upside</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                If HYPE moves from $32 to $320 — a 10x move supported by the fundamentals above —
                your principal grows alongside it. Income plus upside.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-gray-900/50 rounded-xl border border-gray-800/50 p-5 text-xs text-gray-600 leading-relaxed">
          <strong className="text-gray-500">Investment Risk Disclosure:</strong> This content is for
          informational purposes only and does not constitute investment advice. Cryptocurrency
          investments are highly volatile and speculative. Past performance does not guarantee future
          results. Price targets are forward-looking projections based on fundamental analysis and are
          not guaranteed. You could lose some or all of your investment. All investments involve risk.
          Rebel Dividends operates under Regulation D Rule 506(b) and is not available to the general
          public.{" "}
          <Link href="/disclaimer" className="text-gray-500 hover:text-gray-300 underline">
            Read our full disclaimer
          </Link>.
        </div>

        {/* CTA */}
        <div className="text-center py-4">
          <Link
            href="/apply"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-4 rounded-xl text-lg transition"
          >
            Apply to Invest →
          </Link>
          <p className="text-gray-600 text-sm mt-3">
            Minimum $10,000 · Accredited investors · Reg D 506(b)
          </p>
        </div>
      </div>
    </div>
  );
}
