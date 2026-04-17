import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vault Products — 10 On-Chain ETFs on Hyperliquid",
  description:
    "Tokenized vault strategies built on Hyperliquid perps. 10 products spanning directional, systematic, and crash-hedging strategies. Each vault issues a token priced by NAV.",
};

const products = [
  {
    num: "01",
    id: "BULL",
    name: "BULL",
    desc: "Long BTC/ETH/SOL/HYPE equal weight",
    dir: "Long",
    lev: "2×",
    cash: "10%",
    rebal: "4hr",
    tagline: "2x long equal-weight crypto blue chips",
    section: "Directional",
    sentiment: "long" as const,
    fullDesc: [
      "Leveraged long exposure to four major crypto assets in equal weight — modeled after FNGU's approach to mega-cap tech. Each token gets 22.5% of vault capital at 2x leverage, creating 180% total notional exposure.",
      "How it works: 10% held in USDC as cash buffer. Remaining 90% deployed equally across BTC, ETH, SOL, and HYPE perps at 2x cross margin on Hyperliquid.",
      "Rebalancing: Every 4 hours, all positions reset to equal weight and leverage corrects to exactly 2x. Prevents single-asset dominance and leverage drift.",
      "Deposits & withdrawals: Epoch-based, aligned to 4-hour rebalance cycle. Deposits receive vault tokens at current NAV. Withdrawals settle at next epoch.",
    ],
    specs: [
      { label: "Direction", value: "Long", color: "long" as const },
      { label: "Assets", value: "BTC / ETH / SOL / HYPE" },
      { label: "Weighting", value: "Equal weight" },
      { label: "Leverage", value: "2×" },
      { label: "Cash", value: "10%" },
      { label: "Rebalance", value: "Every 4 hours" },
      { label: "Notional", value: "180% of NAV" },
    ],
    risks:
      "Volatility decay in choppy markets. Cross margin means one asset's drawdown affects the entire vault. HYPE has lower liquidity, creating rebalance slippage.",
  },
  {
    num: "02",
    id: "BEAR",
    name: "BEAR",
    desc: "Short BTC/ETH/SOL/HYPE equal weight",
    dir: "Short",
    lev: "2×",
    cash: "15%",
    rebal: "4hr",
    tagline: "2x short equal-weight crypto blue chips",
    section: "Directional",
    sentiment: "short" as const,
    fullDesc: [
      "Inverse of BULL — 2x short exposure to the same four-asset basket. Designed for bearish conviction or portfolio hedging.",
      "How it works: 15% cash (higher than BULL for short squeeze buffer). 85% deployed equally across short BTC, ETH, SOL, HYPE perps at 2x. ~170% notional short exposure.",
      "Why 15% cash: Shorts have asymmetric risk — unlimited loss potential. A coordinated pump at 2x could approach liquidation with only 10% buffer. The extra 5% provides meaningful protection.",
      "Funding cost: In bull markets, shorts pay funding to longs. BEAR bleeds from both price and funding. Will underperform the inverse of BULL's return.",
    ],
    specs: [
      { label: "Direction", value: "Short", color: "short" as const },
      { label: "Assets", value: "BTC / ETH / SOL / HYPE" },
      { label: "Weighting", value: "Equal weight" },
      { label: "Leverage", value: "2×" },
      { label: "Cash", value: "15%" },
      { label: "Rebalance", value: "Every 4 hours" },
      { label: "Notional", value: "~170% of NAV" },
    ],
    risks:
      "Short squeeze risk especially on HYPE. Funding drag in bull markets. Not a perfect inverse of BULL due to higher cash and funding asymmetry.",
  },
  {
    num: "03",
    id: "LONG",
    name: "LONG",
    desc: "Long top 10 market-cap weighted",
    dir: "Long",
    lev: "3×",
    cash: "15%",
    rebal: "4hr",
    tagline: "3x long market-cap weighted crypto index",
    section: "Directional",
    sentiment: "long" as const,
    fullDesc: [
      "The TQQQ of crypto. 3x leveraged index weighted by market cap — BTC dominates at ~50-55%, making this a BTC-heavy product with alt exposure. Designed as the flagship for mass adoption and eventual CEX listing.",
      "How it works: Tracks top 10 tokens by 24hr volume on Hyperliquid. Capital allocated by market cap, leveraged 3x cross margin. 15% cash buffer.",
      "Dynamic universe: Top 10 recalculated each rebalance. Tokens dropping below the volume threshold are closed and replaced — a natural quality filter ensuring only the most liquid assets stay.",
      "CEX-ready: Strategy logic is exchange-agnostic. The same market-cap weighted, volume-filtered approach works identically on any exchange.",
    ],
    specs: [
      { label: "Direction", value: "Long", color: "long" as const },
      { label: "Universe", value: "Top 10 by 24hr vol" },
      { label: "Weighting", value: "Market-cap weighted" },
      { label: "Leverage", value: "3×" },
      { label: "Cash", value: "15%" },
      { label: "Rebalance", value: "Every 4 hours" },
      { label: "Notional", value: "~255% of NAV" },
    ],
    risks:
      "3x amplifies volatility decay significantly. Dynamic rotation adds trading costs. A 33% crash approaches liquidation. Higher leverage + broader basket = more slippage.",
  },
  {
    num: "04",
    id: "SHORT",
    name: "SHORT",
    desc: "Short top 10 market-cap weighted",
    dir: "Short",
    lev: "3×",
    cash: "20%",
    rebal: "4hr",
    tagline: "3x short market-cap weighted crypto index",
    section: "Directional",
    sentiment: "short" as const,
    fullDesc: [
      "The SQQQ of crypto — inverse of LONG. 3x short the top 10 by volume, market-cap weighted. Holds 20% cash — the highest directional buffer — for 3x short squeeze protection.",
      "Why 20% cash: A 25% rally at 3x short = 75% loss on deployed capital. With 80% deployed, that's a 60% NAV hit. The 20% floor ensures survival through violent pumps.",
      "Best use: High-conviction bear positioning or hedging a heavily long portfolio. Not for holding through bull markets.",
    ],
    specs: [
      { label: "Direction", value: "Short", color: "short" as const },
      { label: "Universe", value: "Top 10 by 24hr vol" },
      { label: "Weighting", value: "Market-cap weighted" },
      { label: "Leverage", value: "3×" },
      { label: "Cash", value: "20%" },
      { label: "Rebalance", value: "Every 4 hours" },
      { label: "Notional", value: "~240% of NAV" },
    ],
    risks:
      "Highest risk directional product. 3x short with dynamic rotation amplifies decay and funding costs. Sustained bull markets cause severe NAV erosion.",
  },
  {
    num: "05",
    id: "TREND",
    name: "TREND",
    desc: "Long top 5 momentum (24hr)",
    dir: "Long",
    lev: "1×",
    cash: "10%",
    rebal: "4hr",
    tagline: "Dynamic momentum — ride the winners",
    section: "Systematic",
    sentiment: "long" as const,
    fullDesc: [
      "Automatically rotates into the hottest tokens. Scans top 20 by volume and buys the 5 with the highest 24-hour returns. No leverage — pure momentum exposure.",
      "Why 24hr lookback: Shorter timeframes are noise. 24 hours captures meaningful momentum — sustained buying pressure, narrative catalysts, genuine breakouts. Lower turnover, fewer trading costs, more reliable signal.",
      "Volume filter: Only top 20 by 24hr volume are eligible. Prevents chasing illiquid pump-and-dumps. Critical for cross-margin safety.",
    ],
    specs: [
      { label: "Direction", value: "Long", color: "long" as const },
      { label: "Universe", value: "Top 20 by 24hr vol" },
      { label: "Selection", value: "Top 5 by 24hr return" },
      { label: "Leverage", value: "None" },
      { label: "Cash", value: "10%" },
      { label: "Rebalance", value: "Every 4 hours" },
    ],
    risks:
      "May buy near local tops. Trading costs from rotation. Underperforms buy-and-hold in range-bound markets.",
  },
  {
    num: "06",
    id: "WEAK",
    name: "WEAK",
    desc: "Short bottom 5 weakest (7d)",
    dir: "Short",
    lev: "1×",
    cash: "15%",
    rebal: "4hr",
    tagline: "Short structurally weak tokens",
    section: "Systematic",
    sentiment: "short" as const,
    fullDesc: [
      "Shorts tokens showing persistent weakness. Uses a 7-day window to identify genuine downtrends rather than temporary dips likely to bounce.",
      "7-day rationale: A token bleeding for a week has real selling pressure or fundamental problems — not just a bad candle. This captures structural weakness.",
      "Low turnover: 7-day selection means positions rotate slowly. The 4-hour rebalance primarily corrects weight drift. Tokens typically stay for several days.",
    ],
    specs: [
      { label: "Direction", value: "Short", color: "short" as const },
      { label: "Universe", value: "Top 20 by 24hr vol" },
      { label: "Selection", value: "Bottom 5 by 7d return" },
      { label: "Leverage", value: "None" },
      { label: "Cash", value: "15%" },
      { label: "Rebalance", value: "Every 4 hours" },
    ],
    risks:
      "Weak tokens can receive catalysts triggering violent squeezes. One squeezed position impacts the whole vault via cross margin.",
  },
  {
    num: "07",
    id: "YIELD",
    name: "YIELD",
    desc: "Harvest funding rate, bet against crowd",
    dir: "Neutral",
    lev: "1×",
    cash: "50%",
    rebal: "1hr",
    tagline: "Harvest perpetual funding rate APY",
    section: "Systematic",
    sentiment: "neutral" as const,
    fullDesc: [
      "Funding rate arbitrage. Takes the opposite side of crowded trades to collect funding payments. Crowd is long? YIELD goes short and gets paid. Crowd is short? YIELD goes long.",
      "50% cash: Intentionally high. The strategy bets against the crowd, so price often moves against the position initially. Large cash reserve absorbs adverse moves while funding accumulates.",
      "Hourly rebalance: Funding can flip fast. Hourly monitoring exits positions before reversals become costly. If fewer than 10 tokens exceed the 10% APR threshold, remaining capital stays in cash.",
      "Whale-friendly: No leverage and deep cash reserves make this one of the safest products for large allocations.",
    ],
    specs: [
      { label: "Direction", value: "Long or Short", color: "neutral" as const },
      { label: "Universe", value: "Top 50 by 24hr vol" },
      { label: "Selection", value: "Top 10 by funding rate" },
      { label: "Leverage", value: "None" },
      { label: "Cash", value: "50%" },
      { label: "Rebalance", value: "Every 1 hour" },
      { label: "Min APR", value: "10% annualized" },
    ],
    risks:
      "Funding can flip during crashes — price loss and funding payment simultaneously. Capital may sit idle if insufficient tokens meet threshold.",
  },
  {
    num: "08",
    id: "IPO",
    name: "IPO",
    desc: "Pre-IPO unicorns (SpaceX, OpenAI, etc.)",
    dir: "Long",
    lev: "1×",
    cash: "10%",
    rebal: "Daily",
    tagline: "Pre-IPO unicorn exposure on-chain",
    section: "Systematic",
    sentiment: "long" as const,
    fullDesc: [
      "On-chain exposure to pre-IPO companies via Hyperliquid's PIP3 markets. Currently SpaceX, OpenAI, and Anthropic — companies that normally require accredited investor status.",
      "How it works: Equal-weight long across all PIP3 tokens, no leverage. New listings auto-added, delisted tokens auto-removed with weight redistribution.",
      "Daily rebalance: PIP3 listings change rarely. Daily frequency minimizes trading costs in thin markets while keeping weights balanced.",
      'The pitch: "Own SpaceX before it IPOs." The most narratively compelling product — simple enough for anyone to understand.',
    ],
    specs: [
      { label: "Direction", value: "Long", color: "long" as const },
      { label: "Assets", value: "All PIP3 tokens" },
      { label: "Weighting", value: "Equal weight" },
      { label: "Leverage", value: "None" },
      { label: "Cash", value: "10%" },
      { label: "Rebalance", value: "Daily" },
      { label: "Rotation", value: "Auto add / remove" },
    ],
    risks:
      "Very low PIP3 liquidity — significant slippage at scale. Only 3 tokens currently (high concentration). Pricing can be volatile and disconnected from private markets.",
  },
  {
    num: "09",
    id: "VOL",
    name: "VOL",
    desc: "Crash insurance — bleeds slow, prints big",
    dir: "Short",
    lev: "6×",
    cash: "60%",
    rebal: "2hr",
    tagline: "Crash insurance — UVXY on-chain",
    section: "Crash",
    sentiment: "short" as const,
    fullDesc: [
      "Replicates UVXY behavior — bleeds slowly in calm markets, explodes during crashes. Built for hedging, not buy-and-hold.",
      "How it works: 60% cash, 40% deployed in a 6x short on BTC. Every 2 hours, resets to 60/40. The constant reset creates convexity — shorts lose and reset in normal markets (bleed), shorts print and reset during crashes (compounding gains).",
      "Expected behavior: -15 to -30% per month in calm markets. During a 25% BTC drop: ~+98%. During a 45% black swan: ~+219%. The bleed is the price of insurance.",
      "Warning: Like UVXY, this bleeds aggressively and is designed for temporary holds during elevated risk. Long-term holders will experience significant erosion.",
    ],
    specs: [
      { label: "Direction", value: "Short (hedge)", color: "short" as const },
      { label: "Asset", value: "BTC only" },
      { label: "Leverage", value: "6×" },
      { label: "Cash", value: "60%" },
      { label: "Deployed", value: "40%" },
      { label: "Notional", value: "~240% of NAV" },
      { label: "Rebalance", value: "Every 2 hours" },
    ],
    risks:
      "Aggressive bleed of -15 to -30% per month in bull markets. A 10% BTC pump between rebalances costs ~24% of NAV. Concentrated in BTC only. Designed for short-term crash hedging, not buy-and-hold.",
  },
  {
    num: "10",
    id: "BOUNCE",
    name: "BOUNCE",
    desc: "Catches bottoms after liquidation cascades",
    dir: "Long",
    lev: "3×",
    cash: "100%*",
    rebal: "Event",
    tagline: "Catch capitulation bottoms",
    section: "Crash",
    sentiment: "long" as const,
    fullDesc: [
      "Dormant vault that activates during liquidation cascades. 100% cash until trigger fires, then deploys aggressively to catch the bottom.",
      "Trigger (both required): Aggregate OI drops 15%+ within 4 hours AND liquidation volume spikes above threshold. Dual confirmation prevents false triggers.",
      "Severity-based tranches: 3 tranches over 6 hours. OI down 15-25%: deploy 35%. OI down 25-40%: deploy 55%. OI down 40%+: deploy 75%. Minimum 25% cash floor always maintained.",
      "What it buys: Top 5 biggest losers from top 10 by volume, 3x long. Most liquid tokens that fell hardest have the highest recovery probability.",
      "Exit: Unwind when OI recovers to pre-crash levels. Return to 100% cash.",
    ],
    specs: [
      { label: "Direction", value: "Long (triggered)", color: "long" as const },
      { label: "Idle", value: "100% cash" },
      { label: "Trigger", value: "OI -15%/4hr + liq spike" },
      { label: "Universe", value: "Top 10 by volume" },
      { label: "Selection", value: "5 biggest losers" },
      { label: "Leverage", value: "3×" },
      { label: "Deploy", value: "3 tranches / 6hr" },
      { label: "Max deploy", value: "75% (25% floor)" },
      { label: "Exit", value: "OI recovery" },
    ],
    risks:
      "Premature trigger in multi-day crashes = 3x long into further losses. Max deployment at 225% notional amplifies continued drawdowns. May sit idle for months earning nothing.",
  },
];

const roadmap = [
  {
    phase: "Phase 1",
    title: "Ship what's built",
    products: "BULL · BEAR",
    desc: "Equal-weight static basket, 2x leverage. Simplest architecture — BEAR is a one-variable flip of BULL.",
    status: "In testing",
    statusClass: "text-green-400 border-green-400/30 bg-green-400/8",
  },
  {
    phase: "Phase 2",
    title: "Crash insurance",
    products: "VOL",
    desc: "Same static basket engine as BULL/BEAR — just different params (4x short, 80/20 split, 2hr rebalance). No new architecture needed. First-to-market on-chain UVXY. Nothing like this exists in crypto.",
    status: "Up next",
    statusClass: "text-yellow-400 border-yellow-400/30 bg-yellow-400/8",
  },
  {
    phase: "Phase 3",
    title: "Dynamic weighting",
    products: "LONG · SHORT",
    desc: "Market-cap weighted, dynamic top-10 universe. Adds volume filtering + mcap weighting logic on top of the static basket engine.",
    status: "Planned",
    statusClass: "text-gray-300 border-white/15 bg-white/4",
  },
  {
    phase: "Phase 4",
    title: "Selection engine",
    products: "IPO · TREND · WEAK",
    desc: "IPO is simple — auto-detect PIP3 listings. TREND and WEAK add return-based ranking to select tokens from the universe. Ship together.",
    status: "Planned",
    statusClass: "text-gray-300 border-white/15 bg-white/4",
  },
  {
    phase: "Phase 5",
    title: "New data feeds",
    products: "YIELD",
    desc: "Requires funding rate API integration and direction-agnostic positioning logic. Different data pipeline than everything before.",
    status: "Planned",
    statusClass: "text-gray-300 border-white/15 bg-white/4",
  },
  {
    phase: "Phase 6",
    title: "Event-driven architecture",
    products: "BOUNCE",
    desc: "Most complex product. Real-time OI monitoring, liquidation tracking, trigger logic, severity tiers, tranche scheduling. Entirely different architecture from everything else.",
    status: "Planned",
    statusClass: "text-gray-300 border-white/15 bg-white/4",
  },
];

function dirColor(sentiment: "long" | "short" | "neutral") {
  if (sentiment === "long") return "text-green-400";
  if (sentiment === "short") return "text-red-400";
  return "text-yellow-400";
}

function specValueColor(color?: "long" | "short" | "neutral") {
  if (color === "long") return "text-green-400";
  if (color === "short") return "text-red-400";
  if (color === "neutral") return "text-yellow-400";
  return "text-white";
}

const sections = ["Directional", "Systematic", "Crash"];

export default function VaultProductsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      {/* Hero */}
      <div className="mb-16">
        <p className="font-mono text-xs text-gray-400 tracking-widest uppercase mb-3">
          10 On-Chain ETFs · Hyperliquid
        </p>
        <h1 className="text-5xl font-black tracking-tight text-white mb-4">Vault Products</h1>
        <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
          Tokenized vault strategies built on Hyperliquid perps. Each vault issues a token priced
          by NAV. Deposits and withdrawals via epochs. Cross margin on all strategies.
        </p>
      </div>

      {/* Summary Table */}
      <div className="mb-16">
        <p className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-4">
          All Products
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800 bg-gray-900/50">
                <th className="text-left px-4 py-3 font-mono text-xs text-gray-500 uppercase tracking-wider">#</th>
                <th className="text-left px-4 py-3 font-mono text-xs text-gray-500 uppercase tracking-wider">Name</th>
                <th className="text-left px-4 py-3 font-mono text-xs text-gray-500 uppercase tracking-wider hidden sm:table-cell">Description</th>
                <th className="text-left px-4 py-3 font-mono text-xs text-gray-500 uppercase tracking-wider">Dir</th>
                <th className="text-right px-4 py-3 font-mono text-xs text-gray-500 uppercase tracking-wider">Lev</th>
                <th className="text-right px-4 py-3 font-mono text-xs text-gray-500 uppercase tracking-wider">Cash</th>
                <th className="text-right px-4 py-3 font-mono text-xs text-gray-500 uppercase tracking-wider hidden md:table-cell">Rebal</th>
              </tr>
            </thead>
            <tbody>
              {sections.map((section) => (
                <>
                  <tr key={`section-${section}`} className="bg-gray-900/30">
                    <td colSpan={7} className="px-4 py-2">
                      <span className="font-mono text-xs text-gray-500 tracking-widest uppercase">{section}</span>
                    </td>
                  </tr>
                  {products
                    .filter((p) => p.section === section)
                    .map((p) => (
                      <tr
                        key={p.id}
                        className="border-b border-gray-800/60 last:border-0 hover:bg-gray-800/30 transition-colors"
                      >
                        <td className="px-4 py-3 font-mono text-xs text-gray-500">{p.num}</td>
                        <td className="px-4 py-3">
                          <a
                            href={`#${p.id}`}
                            className="font-bold text-white hover:text-blue-400 transition-colors"
                          >
                            {p.name}
                          </a>
                        </td>
                        <td className="px-4 py-3 text-gray-400 text-xs hidden sm:table-cell">{p.desc}</td>
                        <td className={`px-4 py-3 font-mono text-xs font-semibold ${dirColor(p.sentiment)}`}>
                          {p.dir}
                        </td>
                        <td className="px-4 py-3 font-mono text-xs text-gray-300 text-right">{p.lev}</td>
                        <td className="px-4 py-3 font-mono text-xs text-gray-300 text-right">{p.cash}</td>
                        <td className="px-4 py-3 font-mono text-xs text-gray-400 text-right hidden md:table-cell">{p.rebal}</td>
                      </tr>
                    ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Build Roadmap */}
      <div className="mb-16">
        <p className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-6">
          Build Roadmap
        </p>
        <div className="space-y-0 border border-gray-800 rounded-xl overflow-hidden">
          {roadmap.map((phase, i) => (
            <div
              key={phase.phase}
              className={`flex gap-4 p-5 ${i < roadmap.length - 1 ? "border-b border-gray-800" : ""}`}
            >
              <div className="min-w-[80px] flex-shrink-0">
                <span className={`font-mono text-xs font-bold ${i < 2 ? "text-green-400" : "text-gray-400"}`}>
                  {phase.phase}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-start gap-3 flex-wrap mb-1">
                  <span className="font-bold text-white text-sm">{phase.title}</span>
                  <span className="font-mono text-xs font-semibold text-gray-300">{phase.products}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{phase.desc}</p>
              </div>
              <div className="flex-shrink-0">
                <span className={`font-mono text-xs font-semibold tracking-wide uppercase px-2 py-1 rounded border ${phase.statusClass}`}>
                  {phase.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mb-16" />

      {/* Detailed Specs */}
      <div className="mb-4">
        <h2 className="text-3xl font-extrabold text-white tracking-tight mb-2">
          Detailed Specifications
        </h2>
        <p className="text-gray-400 text-base">
          Full mechanics, rules, and risk disclosures for each product.
        </p>
      </div>

      <div className="space-y-16 mt-12">
        {products.map((p, i) => (
          <div
            key={p.id}
            id={p.id}
            className={`pb-12 ${i < products.length - 1 ? "border-b border-gray-800" : ""}`}
          >
            <div className="flex items-baseline gap-4 flex-wrap mb-6">
              <h3 className="text-2xl font-black text-white tracking-tight">{p.name}</h3>
              <span className="text-gray-400 text-base">{p.tagline}</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
              {/* Text */}
              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                {p.fullDesc.map((para, pi) => (
                  <p key={pi}>{para}</p>
                ))}
              </div>
              {/* Specs */}
              <div className="space-y-3">
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                  <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4">
                    Specifications
                  </p>
                  <div className="space-y-0">
                    {p.specs.map((spec, si) => (
                      <div
                        key={si}
                        className={`flex justify-between items-center py-2 ${
                          si < p.specs.length - 1 ? "border-b border-gray-800" : ""
                        }`}
                      >
                        <span className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                          {spec.label}
                        </span>
                        <span
                          className={`font-mono text-xs font-semibold ${specValueColor(
                            (spec as { label: string; value: string; color?: "long" | "short" | "neutral" }).color
                          )}`}
                        >
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-red-950/30 border border-red-900/40 rounded-lg p-4">
                  <p className="font-mono text-xs text-red-400 uppercase tracking-widest mb-2">
                    Key Risks
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">{p.risks}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-16 pt-10 border-t border-gray-800 text-center">
        <p className="font-mono text-xs text-gray-500 leading-loose">
          All vaults tokenized on Hyperliquid · Vault tokens priced by NAV
          <br />
          Cross margin on all strategies · Epoch-based deposits/withdrawals
          <br />
          All leveraged and derivative products carry substantial risk of loss.
        </p>
      </div>
    </div>
  );
}
