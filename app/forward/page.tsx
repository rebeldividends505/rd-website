import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Hyperliquid Hits $150 — Rebel Dividends",
  description: "The investment thesis: How Hyperliquid reaches $150 in 12 months or less and what that means for your dividend income.",
};

export default function ForwardPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-blue-950 border border-blue-800 rounded-full px-4 py-1.5 text-blue-300 text-sm font-medium mb-6">
          The Thesis
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-white">
          How Hyperliquid Hits<br />
          <span className="text-green-400">$150</span> in 12 Months or Less
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          The bull case for HYPE — and why early investors in Rebel Dividends
          are positioned to earn both yield AND upside.
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-invert prose-lg max-w-none space-y-8">
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Why Hyperliquid?</h2>
          <p className="text-gray-300">
            Hyperliquid is the fastest-growing perpetual DEX in crypto history. In less than 18 months
            it went from zero to the dominant on-chain perps venue — processing billions in daily volume
            with fees that flow directly to HYPE stakers and liquidity providers.
          </p>
          <p className="text-gray-300 mt-4">
            Unlike most DeFi protocols, Hyperliquid actually generates real revenue.
            Real fees. Real volume. Real yield — paid out weekly through Rebel Dividends.
          </p>
        </section>

        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">The $150 Path</h2>
          <div className="space-y-4">
            {[
              { phase: "Phase 1", price: "$20–40", desc: "Accumulation zone. Early investors build positions as protocol metrics compound." },
              { phase: "Phase 2", price: "$40–80", desc: "Recognition phase. Institutional awareness grows. TVL and volume expand dramatically." },
              { phase: "Phase 3", price: "$80–150", desc: "Price discovery. Hyperliquid becomes the default perps venue. HYPE becomes a blue-chip DeFi asset." },
            ].map((p) => (
              <div key={p.phase} className="flex gap-4 p-4 bg-gray-800 rounded-xl">
                <div className="min-w-fit">
                  <div className="text-xs text-gray-500 font-medium">{p.phase}</div>
                  <div className="text-xl font-bold text-green-400">{p.price}</div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">The Double Win</h2>
          <p className="text-gray-300">
            Rebel Dividends investors don&apos;t have to choose between income and growth.
            Your principal earns weekly dividends <em>and</em> participates in HYPE price appreciation.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-blue-950 border border-blue-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-300">Income</div>
              <div className="text-gray-400 text-sm">Weekly cash dividends from protocol fees</div>
            </div>
            <div className="bg-green-950 border border-green-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-300">Growth</div>
              <div className="text-gray-400 text-sm">HYPE price appreciation to $150+</div>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Risk Factors</h2>
          <ul className="text-gray-400 space-y-2 text-sm list-disc list-inside">
            <li>Crypto markets are highly volatile — HYPE can decline in value</li>
            <li>DeFi protocols carry smart contract and technical risk</li>
            <li>Dividend amounts vary based on protocol fee revenue</li>
            <li>This is a private placement — investment is illiquid</li>
            <li>Past performance does not guarantee future results</li>
          </ul>
        </section>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to position yourself?</h2>
        <p className="text-gray-400 mb-8">Accredited and sophisticated investors welcome. Limited spots available.</p>
        <Link href="/apply" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-4 rounded-xl text-lg transition inline-block">
          Apply for Investor Access →
        </Link>
      </div>
    </div>
  );
}
