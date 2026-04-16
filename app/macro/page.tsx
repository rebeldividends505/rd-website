import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Macro Themes — Rebel Dividends",
  description: "The 4 macro forces driving the next wealth cycle: Gold→BTC rotation, M2/Debt expansion, AI Agents, and the Tech Revolution.",
};

const themes = [
  {
    number: "01",
    title: "Gold → Bitcoin Rotation",
    icon: "🥇",
    color: "from-yellow-900/40 to-yellow-950/40 border-yellow-800/50",
    headerColor: "text-yellow-400",
    description: "The greatest capital rotation in financial history is underway. $13 trillion in gold is slowly migrating to a 21-million-coin digital asset. Institutions can't ignore Bitcoin anymore — and the flow is just beginning.",
    bullets: [
      "Central banks diversifying reserves into BTC",
      "ETF inflows accelerating institutional adoption",
      "Fixed supply vs. infinite money printing",
      "Digital gold narrative reaching mainstream finance",
    ],
  },
  {
    number: "02",
    title: "M2 Money Supply & The Debt Supercycle",
    icon: "📊",
    color: "from-red-900/40 to-red-950/40 border-red-800/50",
    headerColor: "text-red-400",
    description: "Global M2 money supply is at all-time highs and accelerating. The debt supercycle means governments will inflate their way out — and hard assets, crypto, and real yield will be the only escape routes.",
    bullets: [
      "US debt exceeding $35 trillion and climbing",
      "Fed forced to monetize — inflation is the plan",
      "Real yields negative in most asset classes",
      "HYPE protocol fees = inflation-resistant income",
    ],
  },
  {
    number: "03",
    title: "AI Agents",
    icon: "🤖",
    color: "from-blue-900/40 to-blue-950/40 border-blue-800/50",
    headerColor: "text-blue-400",
    description: "Autonomous AI agents are becoming economic actors — holding wallets, executing trades, paying for services. DeFi rails are the natural settlement layer for machine-to-machine commerce. Hyperliquid is built for this.",
    bullets: [
      "AI agent wallets need on-chain settlement rails",
      "Hyperliquid's speed/cost profile ideal for AI trading",
      "Agent-driven volume = exponential fee growth",
      "First-mover DeFi infrastructure for the AI economy",
    ],
  },
  {
    number: "04",
    title: "The Tech Revolution",
    icon: "⚡",
    color: "from-purple-900/40 to-purple-950/40 border-purple-800/50",
    headerColor: "text-purple-400",
    description: "We are in the early innings of a technological supercycle. Compute is getting cheaper, AI is getting smarter, and the on-chain economy is growing faster than any previous technology adoption curve.",
    bullets: [
      "Exponential improvements in compute cost/performance",
      "DeFi TVL doubling year-over-year",
      "On-chain derivatives market nascent vs. TradFi",
      "Hyperliquid positioned to capture enormous market share",
    ],
  },
];

export default function MacroPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-purple-950 border border-purple-800 rounded-full px-4 py-1.5 text-purple-300 text-sm font-medium mb-6">
          The Big Picture
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-white">
          4 Macro Forces<br />Driving the Next Wealth Cycle
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Rebel Dividends is positioned at the intersection of four massive macro tailwinds.
          Understanding these themes explains why now is the time to build income from DeFi.
        </p>
      </div>

      {/* Themes */}
      <div className="space-y-6 mb-16">
        {themes.map((theme) => (
          <div key={theme.number} className={`bg-gradient-to-r ${theme.color} border rounded-2xl p-8`}>
            <div className="flex items-start gap-6">
              <div className="text-4xl">{theme.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-gray-600 font-mono text-sm">{theme.number}</span>
                  <h2 className={`text-2xl font-bold ${theme.headerColor}`}>{theme.title}</h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-5">{theme.description}</p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {theme.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="text-gray-600 mt-0.5">→</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Convergence */}
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 text-center mb-16">
        <h2 className="text-2xl font-bold text-white mb-4">Where All Four Themes Converge</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Hyperliquid — and by extension, Rebel Dividends — sits at the intersection of all four forces.
          It&apos;s a hard-money DeFi protocol generating real yield, built for the AI economy, on infrastructure
          that benefits directly from the tech revolution.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link href="/apply" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-4 rounded-xl text-lg transition inline-block">
          Apply for Investor Access →
        </Link>
      </div>
    </div>
  );
}
