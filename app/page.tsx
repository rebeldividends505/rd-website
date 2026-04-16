import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Hero */}
      <section className="py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-950 border border-blue-800 rounded-full px-4 py-1.5 text-blue-300 text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Weekly dividends — every Friday
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
          Income Investing<br />for the Modern Era
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Real weekly dividends powered by DeFi yield. No lock-ups. No waiting.
          Hyperliquid-backed income streams that compound while you sleep.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/apply" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition">
            Apply for Access →
          </Link>
          <Link href="/forward" className="border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-medium px-8 py-4 rounded-xl text-lg transition">
            How It Works
          </Link>
        </div>
      </section>

      {/* Metrics */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {[
          { label: "Weekly Yield", value: "Variable", sub: "paid every Friday" },
          { label: "Underlying Asset", value: "HYPE", sub: "Hyperliquid protocol" },
          { label: "Regulation", value: "506(b)", sub: "SEC Reg D offering" },
          { label: "Minimum", value: "$10K", sub: "accredited investors" },
        ].map((m) => (
          <div key={m.label} className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-white mb-1">{m.value}</div>
            <div className="text-gray-400 text-sm font-medium">{m.label}</div>
            <div className="text-gray-600 text-xs mt-1">{m.sub}</div>
          </div>
        ))}
      </section>

      {/* Feature Grid */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Rebel Dividends?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "💵",
              title: "Weekly Cash Dividends",
              desc: "Receive actual cash distributions every Friday, not paper gains. Your portfolio works for you around the clock.",
            },
            {
              icon: "🔗",
              title: "DeFi-Native Yield",
              desc: "Powered by Hyperliquid's perpetual DEX fee revenue — one of the most productive on-chain protocols in the world.",
            },
            {
              icon: "📊",
              title: "Full Transparency",
              desc: "Live investor portal with real-time portfolio tracking, dividend history, and on-chain verifiable positions.",
            },
            {
              icon: "🛡️",
              title: "Regulated Offering",
              desc: "Offered under Regulation D Rule 506(b) with full legal compliance, proper investor qualification, and documentation.",
            },
            {
              icon: "📈",
              title: "HYPE Upside",
              desc: "Your principal is deployed into HYPE — giving you both income yield and exposure to one of crypto's fastest-growing protocols.",
            },
            {
              icon: "⚡",
              title: "Fast Execution",
              desc: "No quarterly windows. No waiting periods. Investments processed and portal access granted within 24-48 hours.",
            },
          ].map((f) => (
            <div key={f.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-white text-lg mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-gradient-to-b from-blue-950/30 to-transparent rounded-2xl mb-10 border border-blue-900/30">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to earn weekly dividends?</h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Join accredited investors building passive income with Rebel Dividends.
          Spots are limited — apply today.
        </p>
        <Link href="/apply" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-4 rounded-xl text-lg transition inline-block">
          Apply for Investor Access →
        </Link>
      </section>
    </div>
  );
}
