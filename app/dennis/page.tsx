import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "After the Bloodbath, Who's Recovering Fastest? — Rebel Dividends",
  description:
    "Rebel Dividends vs. ETHA, FETH, CLSK, BMNR since the January 30th bottom. +57% vs −16% to −22%. March 2026 investor briefing.",
};

const sinceBottom = [
  {
    name: "Rebel Dividends",
    detail: "$0.00131 → $0.00194 + $0.00012 in dividends",
    return: "+57.3%",
    positive: true,
    highlight: true,
  },
  {
    name: "ETHA — iShares Ethereum ETF",
    detail: "$20.60 → $16.20 · No dividends",
    return: "−21.4%",
    positive: false,
  },
  {
    name: "FETH — Fidelity Ethereum Fund",
    detail: "$27.22 → $21.31 · No dividends",
    return: "−21.7%",
    positive: false,
  },
  {
    name: "CLSK — CleanSpark",
    detail: "$12.29 → $10.16 · No dividends",
    return: "−17.3%",
    positive: false,
  },
  {
    name: "BMNR — BitMine",
    detail: "$26.00 → $21.88 · No dividends",
    return: "−15.8%",
    positive: false,
  },
];

const sincePivot = [
  {
    name: "Rebel Dividends",
    detail: "Share price + cash dividends",
    return: "+84.5%",
    divs: "97 wks · $20M+",
    positive: true,
    highlight: true,
  },
  {
    name: "ETHA — iShares Ethereum",
    detail: "",
    return: "−39%",
    divs: "$0",
    positive: false,
  },
  {
    name: "FETH — Fidelity Ethereum",
    detail: "",
    return: "−39%",
    divs: "$0",
    positive: false,
  },
  {
    name: "CLSK — CleanSpark",
    detail: "",
    return: "−48%",
    divs: "$0",
    positive: false,
  },
];

export default function DennisPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-10">
        <div className="text-gray-500 text-sm mb-3">March 13, 2026 · Investor Briefing</div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
          After a 5-Month Crypto Bloodbath, Who&apos;s Recovering Fastest?
        </h1>
        <p className="text-xl text-gray-400">
          Rebel Dividends vs. Your Current Holdings · January 30 – March 13, 2026
        </p>
        <p className="text-sm text-gray-600 mt-3">By Jason Cox · Rebel Dividends</p>
      </div>

      <div className="space-y-10">
        {/* Hero numbers */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-950 border border-green-800 rounded-2xl p-8 text-center">
            <div className="text-5xl font-black text-green-400 mb-2">+57%</div>
            <div className="text-gray-300 font-medium">Rebel Dividends</div>
          </div>
          <div className="bg-red-950 border border-red-800 rounded-2xl p-8 text-center">
            <div className="text-5xl font-black text-red-400 mb-2">−16%</div>
            <div className="text-gray-300 font-medium">to −22%</div>
            <div className="text-gray-500 text-sm">Your Holdings</div>
          </div>
        </div>

        {/* Since Bottom Table */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Since the January 30th Bottom</h2>
          <p className="text-gray-400 mb-5 text-sm">
            Our share price bottomed on January 30. After a prolonged selloff, the smartest move
            is to look at who&apos;s recovering fastest. That&apos;s your leader for the next
            cycle.
          </p>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-800 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              <div className="p-4 col-span-2">Investment</div>
              <div className="p-4 border-l border-gray-700 text-right">Return</div>
            </div>
            {sinceBottom.map((row) => (
              <div
                key={row.name}
                className={`border-t border-gray-800 ${row.highlight ? "bg-green-950/30" : ""}`}
              >
                <div className="grid grid-cols-3 items-center">
                  <div className="p-4 col-span-2">
                    <div
                      className={`font-semibold ${
                        row.highlight ? "text-green-400" : "text-gray-300"
                      }`}
                    >
                      {row.name}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">{row.detail}</div>
                  </div>
                  <div
                    className={`p-4 border-l border-gray-800 text-right font-bold text-lg ${
                      row.positive ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {row.return}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blockbuster vs Netflix */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Ethereum Is the Blockbuster. We Pivoted to the Netflix.
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            In April 2024, we saw the writing on the wall. We were an Ethereum fund and we loved
            what it stood for — but the execution had stalled. Scaling problems. Layer 2s
            fragmenting the ecosystem instead of unifying it.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            So we pivoted — entirely — to Hyperliquid. Sub-second finality. Fully on-chain order
            book. Billions in daily volume. Hundreds of millions in real fee revenue. A platform
            that runs like a financial technology company — think CME or Nasdaq — not a
            speculative token.
          </p>

          {/* Since Pivot Table */}
          <h3 className="text-lg font-bold text-white mb-3 mt-6">Since the April 2024 Pivot</h3>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-4 bg-gray-800 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              <div className="p-4 col-span-2">Investment</div>
              <div className="p-4 border-l border-gray-700 text-right">Return</div>
              <div className="p-4 border-l border-gray-700 text-right">Dividends</div>
            </div>
            {sincePivot.map((row) => (
              <div
                key={row.name}
                className={`border-t border-gray-800 ${row.highlight ? "bg-green-950/30" : ""}`}
              >
                <div className="grid grid-cols-4 items-center">
                  <div className="p-4 col-span-2">
                    <div
                      className={`font-semibold ${
                        row.highlight ? "text-green-400" : "text-gray-300"
                      }`}
                    >
                      {row.name}
                    </div>
                    {row.detail && (
                      <div className="text-xs text-gray-500 mt-0.5">{row.detail}</div>
                    )}
                  </div>
                  <div
                    className={`p-4 border-l border-gray-800 text-right font-bold text-lg ${
                      row.positive ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {row.return}
                  </div>
                  <div
                    className={`p-4 border-l border-gray-800 text-right text-sm ${
                      row.positive ? "text-green-300" : "text-gray-600"
                    }`}
                  >
                    {row.divs}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reinvestment comparison */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">
            But Here&apos;s Where It Gets Interesting
          </h2>
          <p className="text-gray-300 mb-5 text-sm leading-relaxed">
            Everything above assumes you collected your dividends as cash. If you reinvested those
            dividends — letting each weekly payment buy more shares — the numbers change
            dramatically:
          </p>
          <div className="space-y-3">
            {[
              {
                label: "Collecting dividends as cash",
                sub: "Take the income, keep same shares",
                val: "+84.5%",
                highlight: false,
              },
              {
                label: "Reinvesting dividends",
                sub: "10,000 shares → 38,705 shares",
                val: "+152.8%",
                highlight: true,
              },
            ].map((row) => (
              <div
                key={row.label}
                className={`flex items-center justify-between p-4 rounded-xl border ${
                  row.highlight
                    ? "border-green-700 bg-green-950/40"
                    : "border-gray-700 bg-gray-800"
                }`}
              >
                <div>
                  <div className={`font-semibold ${row.highlight ? "text-green-300" : "text-gray-300"}`}>
                    {row.label}
                  </div>
                  <div className="text-xs text-gray-500">{row.sub}</div>
                </div>
                <div
                  className={`text-2xl font-black ${
                    row.highlight ? "text-green-400" : "text-gray-300"
                  }`}
                >
                  {row.val}
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-4 leading-relaxed">
            Same fund. Same time period. But a reinvestor turned 10,000 shares into 38,705
            shares — nearly 4× the original position. Every weekly dividend bought more shares,
            and every rally that followed had more shares participating in the upside.
          </p>
        </section>

        {/* Closing */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center">
          <p className="text-gray-300 mb-2 text-lg font-medium">
            The gap between +152.8% and −48% isn&apos;t a rounding error.
          </p>
          <p className="text-gray-400 mb-6 text-sm">
            You&apos;re already taking crypto risk. The only question is whether it&apos;s pointed
            in the right direction.
          </p>
          <p className="text-white font-bold mb-1">Call Dean at (505) 322-7515</p>
          <p className="text-gray-500 text-sm mb-6">15 minutes — let&apos;s walk through the full picture.</p>
          <Link
            href="/apply"
            className="inline-block bg-[#0a7c42] text-white font-bold py-3 px-8 rounded-xl text-lg hover:bg-[#0a6a38] transition-colors"
          >
            Invest in Rebel Dividends
          </Link>
        </div>

        <p className="text-xs text-gray-600 leading-relaxed">
          Past performance does not guarantee future results. Cryptocurrency markets are highly
          volatile with substantial risk of partial or total loss. Rebel Dividends Corporation
          charges a 20% management fee. Prior to April 2024, Rebel Dividends operated a leveraged
          Ethereum strategy that resulted in significant losses for early investors. All performance
          figures reflect returns since the April 2024 pivot only and do not include the prior
          period&apos;s losses. ETHA and FETH launched in July 2024; since-pivot returns use
          Ethereum&apos;s price as a proxy. This is not financial advice. Data as of March 13, 2026.
        </p>
      </div>
    </div>
  );
}
