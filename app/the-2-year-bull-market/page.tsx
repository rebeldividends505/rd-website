import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 2-Year Bull Market — Rebel Dividends",
  description:
    "The macroeconomic catalysts driving this extended market cycle. How Fed rate cuts, AI adoption, and historical precedent set up the next major wealth creation period.",
};

export default function TwoYearBullMarketPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="text-gray-500 text-sm mb-3">March 2026 · Research Report</div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          The 2-Year Bull Market
        </h1>
        <p className="text-xl text-gray-400">
          The macroeconomic catalysts driving this extended cycle.
        </p>
        <p className="text-sm text-gray-600 mt-3">By Jason Cox · Rebel Dividends</p>
      </div>

      {/* Section: This Has Happened Before */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">This Has Happened Before</h2>
          <p className="text-gray-300 leading-relaxed text-base mb-4">
            In the early 1990s, the Federal Reserve cut interest rates from nearly 10% down toward
            3%. Bonds and CDs stopped paying meaningful income. Capital moved into stocks. A new
            technology — the internet — arrived at the same time, giving companies a way to cut
            costs and grow faster. The S&P 500 tripled over the following eight years.
          </p>
          <p className="text-gray-300 leading-relaxed text-base">
            Today the setup is remarkably similar.
          </p>
        </div>

        {/* Comparison table */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 bg-gray-800 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            <div className="p-4">Factor</div>
            <div className="p-4 border-l border-gray-700">1989–1995</div>
            <div className="p-4 border-l border-gray-700">2022–2027</div>
          </div>
          {[
            ["Peak interest rate", "9.75%", "5.50%"],
            ["Rate 3 years later", "3.00%", "3.50%"],
            ["New technology", "Internet", "AI"],
            ["What followed", "S&P 500 tripled", "?"],
          ].map(([factor, then, now]) => (
            <div
              key={factor}
              className="grid grid-cols-3 border-t border-gray-800 text-sm"
            >
              <div className="p-4 text-gray-400">{factor}</div>
              <div className="p-4 border-l border-gray-800 text-gray-200">{then}</div>
              <div className="p-4 border-l border-gray-800 text-blue-400 font-medium">{now}</div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed text-base">
            The Fed has already cut 175 basis points since September 2024 and is guiding toward 3%.
            Every major central bank except Japan is cutting at the same time. AI is already
            delivering 20–40% cost reductions at real companies — not projections, audited results.
            And every Fed easing cycle in the past 30 years has been followed by a significant
            stock rally.
          </p>
          <p className="text-gray-300 leading-relaxed text-base">
            Secular bull markets average 19 years. This one is 17 years in.
          </p>
        </div>

        {/* Key thesis boxes */}
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: "📉",
              title: "Rate Cuts = Capital Movement",
              body: "As rates fall from 5.5% toward 3%, capital exits bonds and CDs in search of yield. It flows into equities, crypto, and real assets — exactly as it did in the 1990s.",
            },
            {
              icon: "🤖",
              title: "AI Is the New Internet",
              body: "Companies reporting 20–40% cost reductions from AI adoption. This drives earnings growth that justifies higher valuations — the same dynamic that powered the dot-com era's early years.",
            },
            {
              icon: "💰",
              title: "M2 Money Supply Expanding",
              body: "Global central banks are adding liquidity simultaneously. Historically, expanding M2 precedes significant asset price appreciation across equities, crypto, and hard assets.",
            },
            {
              icon: "📈",
              title: "Historical Precedent",
              body: "Every Fed easing cycle in the past 30 years has been followed by a meaningful market rally. The 2024–2025 easing cycle has barely begun its impact on asset prices.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-gray-900 border border-gray-800 rounded-xl p-5"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        {/* Rebel Dividends positioning */}
        <div className="bg-blue-950/40 border border-blue-800/50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-3">
            Where Rebel Dividends Fits
          </h2>
          <p className="text-gray-300 leading-relaxed text-base mb-4">
            Rebel Dividends is positioned at the intersection of all these forces. Hyperliquid —
            the protocol generating our dividends — sits at the confluence of DeFi adoption, AI
            agent commerce, and the global shift away from traditional financial rails.
          </p>
          <p className="text-gray-300 leading-relaxed text-base">
            In a 2-year bull market driven by rate cuts and AI, hard assets and DeFi protocol fees
            are among the most asymmetric opportunities available to sophisticated investors.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-gray-600 text-xs leading-relaxed">
            For informational purposes only. Not investment advice. Consult a financial advisor
            before making investment decisions. Past performance does not guarantee future results.
            Cryptocurrency markets are highly volatile with substantial risk of partial or total
            loss.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <Link
          href="/apply"
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3 rounded-xl text-sm transition inline-block mr-4"
        >
          Apply for Investor Access →
        </Link>
        <Link href="/updates" className="text-gray-500 hover:text-white text-sm transition">
          ← All Updates
        </Link>
      </div>
    </div>
  );
}
