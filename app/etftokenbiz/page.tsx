import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ensemble Finance — The Next ProShares on Hyperliquid — Rebel Dividends",
  description:
    "What if you could build the next ProShares — but on infrastructure that never closes? Leveraged ETFs are a $100 billion business. We're building the same model on Hyperliquid. First token launches in 60 days.",
};

const tokens = [
  { name: "BULL", desc: "Like FNGU — 2× long crypto blue chips", dir: "Long", rev: "2–3%" },
  { name: "BEAR", desc: "Like inverse FNGU — 2× short", dir: "Short", rev: "2–3%" },
  { name: "LONG", desc: "Like TQQQ — 3× long crypto index", dir: "Long", rev: "3–5%" },
  { name: "SHORT", desc: "Like SQQQ — 3× short crypto index", dir: "Short", rev: "3–5%" },
  { name: "TREND", desc: "Momentum — rides the winners", dir: "Long", rev: "3–5%" },
  { name: "WEAK", desc: "Shorts the weakest coins", dir: "Short", rev: "2–3%" },
  { name: "YIELD", desc: "Earns interest — bets against the crowd", dir: "Neutral", rev: "3–5%" },
  { name: "IPO", desc: "Own SpaceX before it IPOs", dir: "Long", rev: "1%" },
  { name: "VOL", desc: "Like UVXY — crash insurance", dir: "Hedge", rev: "5–8%" },
  { name: "BOUNCE", desc: "Buys crashes automatically", dir: "Trigger", rev: "2–3%" },
];

const revenueTable = [
  { aum: "$100 Million", trading: "$3M", other: "$300–500K", total: "~$3.5M" },
  { aum: "$500 Million", trading: "$15M", other: "$2–3M", total: "~$18M" },
  { aum: "$1 Billion", trading: "$30M", other: "$4–6M", total: "~$35M" },
  { aum: "$5 Billion", trading: "$150M", other: "$15–20M", total: "~$170M" },
];

const comps = [
  { name: "Ethena", launched: "Feb 2024", hit1b: "3 months", size: "$12.4B" },
  { name: "EigenLayer", launched: "Mid-2023", hit1b: "6 months", size: "$18.5B" },
  { name: "Aave", launched: "Jan 2020", hit1b: "9 months", size: "$26.8B" },
  { name: "BlackRock BUIDL", launched: "Mar 2024", hit1b: "18 months", size: "$2.3B" },
];

const acquirers = [
  {
    name: "Robinhood",
    desc: "Needs a crypto product shelf for 24 million users. Our 10 tokens = instant product line + volume revenue.",
  },
  {
    name: "BlackRock",
    desc: 'Already on-chain with BUIDL. Paid $1.05B for Aperio. We\'re the "Aperio for crypto."',
  },
  {
    name: "Galaxy Digital",
    desc: "$9B in assets. Completes their full-stack crypto platform with our vault infrastructure.",
  },
  {
    name: "Major Exchange",
    desc: "10 ready-made products with sticky assets. Acquiring us is faster and cheaper than building.",
  },
];

export default function EtftokenbizPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-10">
        <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">
          Ensemble Finance · March 2026 Investor Briefing
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
          The Proven Business — on Infrastructure That Never Closes
        </h1>
        <p className="text-xl text-gray-400">
          What if you could build the next ProShares — but on Hyperliquid?
        </p>
        <p className="text-sm text-gray-600 mt-3">By Jason Cox · Rebel Dividends</p>
      </div>

      <div className="space-y-10">
        {/* ProShares context */}
        <section>
          <p className="text-gray-300 leading-relaxed mb-4 text-lg">
            Leveraged ETFs are a $100 billion business that prints money in every market condition.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            ProShares manages $100 billion across 163 products — TQQQ, SQQQ, UVXY. Automated funds
            that rebalance daily and collect fees on every dollar managed. Bull market, bear market,
            sideways — fees keep flowing. Since 2006.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { val: "$100B", label: "ProShares AUM" },
              { val: "163", label: "ETF Products" },
              { val: "20 yrs", label: "Since 2006" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
                <div className="text-3xl font-black text-white mb-1">{s.val}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-300 leading-relaxed">
            Same concept — built on Hyperliquid, the #3 derivatives exchange globally. Our markets
            never close. Settlement is instant. And we earn fees on every trade our funds make.
          </p>
        </section>

        {/* Token Table */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">10 Products — Every Market Condition</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-4 bg-gray-800 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              <div className="p-3">Token</div>
              <div className="p-3 border-l border-gray-700 col-span-2">What It Does</div>
              <div className="p-3 border-l border-gray-700 text-right">Yearly Rev.</div>
            </div>
            {tokens.map((t) => (
              <div key={t.name} className="grid grid-cols-4 border-t border-gray-800 text-sm">
                <div className="p-3 font-bold text-white">{t.name}</div>
                <div className="p-3 border-l border-gray-800 text-gray-300 col-span-2">
                  {t.desc}
                  <span className="ml-2 text-xs text-gray-600">({t.dir})</span>
                </div>
                <div className="p-3 border-l border-gray-800 text-right text-green-400 font-mono">
                  {t.rev}
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-3">
            Each fund automatically trades and rebalances every few hours. Average revenue across
            all 10: ~3% per year. <strong className="text-white">First token launches in 60 days.</strong>
          </p>
        </section>

        {/* Revenue model */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Three Ways We Earn Revenue</h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { pct: "0.1%", label: "Trading Volume Fee", desc: "Earned automatically on every trade our funds make." },
              { pct: "1.0%", label: "Deposit Fee", desc: "When outside investors put money into our funds." },
              { pct: "0.4%", label: "Withdrawal Fee", desc: "When outside investors take money out." },
            ].map((f) => (
              <div key={f.label} className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
                <div className="text-3xl font-black text-green-400 mb-1">{f.pct}</div>
                <div className="font-semibold text-white text-sm mb-1">{f.label}</div>
                <div className="text-xs text-gray-500">{f.desc}</div>
              </div>
            ))}
          </div>

          <div className="bg-green-950 border border-green-800 rounded-xl p-5 text-center mb-6">
            <div className="text-3xl font-black text-green-400">$30M+ per year</div>
            <div className="text-gray-400 text-sm mt-1">
              at $1 billion in assets under management — 3× what a traditional fund manager earns
              on the same capital
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-4 bg-gray-800 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              {["Assets Managed", "Trading Fees", "Other Fees", "Total Revenue"].map((h) => (
                <div key={h} className="p-3 border-l border-gray-700 first:border-0">{h}</div>
              ))}
            </div>
            {revenueTable.map((r) => (
              <div key={r.aum} className="grid grid-cols-4 border-t border-gray-800 text-sm">
                <div className="p-3 text-white font-medium">{r.aum}</div>
                <div className="p-3 border-l border-gray-800 text-gray-300">{r.trading}</div>
                <div className="p-3 border-l border-gray-800 text-gray-300">{r.other}</div>
                <div className="p-3 border-l border-gray-800 text-green-400 font-bold">{r.total}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Timeline</h2>
          <div className="space-y-3">
            {[
              { phase: "Day 60", event: "First token live — BULL, BEAR, or VOL" },
              { phase: "Day 90", event: "Marketing live. Distribution begins." },
              { phase: "Year 1", event: "Full suite — all 10 tokens trading." },
              { phase: "Year 2", event: "$100M AUM target → ~$3.5M/yr revenue" },
              { phase: "Year 3–5", event: "$500M–$1B · Multi-chain expansion" },
              { phase: "Year 6–10", event: "$5–10B · Binance, Coinbase, OKX listings" },
            ].map((t) => (
              <div key={t.phase} className="flex gap-4 items-center bg-gray-900 border border-gray-800 rounded-xl p-4">
                <div className="font-mono text-xs text-yellow-400 bg-yellow-950 px-2 py-1 rounded whitespace-nowrap">
                  {t.phase}
                </div>
                <div className="text-gray-300 text-sm">{t.event}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Comps */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">How Conservative Is $100M?</h2>
          <p className="text-gray-400 text-sm mb-4">
            Multiple financial platforms built on this same technology have grown from zero to over
            $1 billion — most of them in under a year.
          </p>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-4 bg-gray-800 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              {["Platform", "Launched", "Hit $1B", "Size Today"].map((h) => (
                <div key={h} className="p-3 border-l border-gray-700 first:border-0">{h}</div>
              ))}
            </div>
            {comps.map((c) => (
              <div key={c.name} className="grid grid-cols-4 border-t border-gray-800 text-sm">
                <div className="p-3 text-white font-medium">{c.name}</div>
                <div className="p-3 border-l border-gray-800 text-gray-400">{c.launched}</div>
                <div className="p-3 border-l border-gray-800 text-green-400">{c.hit1b}</div>
                <div className="p-3 border-l border-gray-800 text-gray-300 font-bold">{c.size}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-3">
            Our $100M target in Year 2 is what Ethena achieved in its first 2 weeks.
          </p>
        </section>

        {/* The Exit */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">The Exit</h2>
          <p className="text-gray-400 text-sm italic mb-4">&ldquo;They&apos;re going to fight over us.&rdquo;</p>
          <p className="text-gray-300 leading-relaxed mb-6">
            On-chain leveraged ETFs are a brand-new category — and we&apos;re building the first
            complete product suite. When Robinhood, BlackRock, or a major exchange wants to enter
            this space, they have two choices: spend years and tens of millions building it
            themselves, or acquire the company that already has 10 products, a track record, and
            billions in assets under management.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {acquirers.map((a) => (
              <div key={a.name} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <div className="font-bold text-white mb-2">{a.name}</div>
                <p className="text-gray-400 text-xs leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What this means for you */}
        <div className="bg-gray-900 border border-[#0a7c42] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">What This Means for You</h2>
          <p className="text-gray-300 mb-2">
            Every dollar of Ensemble revenue flows directly to Rebel Dividends shareholders.
          </p>
          <p className="text-gray-400 text-sm mb-6">
            This isn&apos;t a separate investment. It&apos;s a new revenue engine for the company you
            already own. As Ensemble grows, your weekly dividends grow with it.
          </p>
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { val: "+$3.5M", label: "at $100M managed" },
              { val: "+$30M+", label: "at $1B managed" },
              { val: "$2.5–5B+", label: "exit payday" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-800 rounded-xl p-4 text-center">
                <div className="text-xl font-black text-green-400 mb-1">{s.val}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-300 font-medium mb-6">
            Your shares in Rebel Dividends are your shares in Ensemble Finance.
            When Ensemble grows, your dividends grow.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-[#0a7c42] text-white font-bold py-3 px-8 rounded-xl text-lg hover:bg-[#0a6a38] transition-colors"
          >
            Invest in Rebel Dividends
          </Link>
          <p className="text-gray-500 text-sm mt-4">Call Dean: (505) 322-7515</p>
        </div>

        <p className="text-xs text-gray-600 leading-relaxed">
          This communication is for informational purposes only and does not constitute an offer
          to sell, a solicitation of an offer to buy, or a recommendation of any security or
          investment product. Forward-looking projections are based on assumptions that may not
          reflect actual future results. All AUM targets, revenue projections, and valuation
          estimates are illustrative and depend on market conditions and successful execution.
          Ensemble Finance uses decentralized finance strategies with unique risks including smart
          contract risk, liquidity risk, and potential loss of principal. Leveraged products
          amplify both gains and losses. Rebel Dividends Corporation is not a registered
          investment advisor, broker-dealer, or bank. Consult your own advisors before making
          investment decisions. © 2026 Rebel Dividends Corporation. All rights reserved.
        </p>
      </div>
    </div>
  );
}
