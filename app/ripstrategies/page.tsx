import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RIP Strategies — Hypurr NFT Position — Rebel Dividends",
  description:
    "We bought 30 Hypurr NFTs at $13–15K each. Cost ~$420K. Now worth ~$500K and climbing. If HYPE triples, our position 12×'s to $5M. Here's the full thesis.",
};

const priceTable = [
  { hype: "$40", floor: "420", perNft: "$16.8K", position: "$500K", pctRd: "3.8%", per1k: "$1,000" },
  { hype: "$75", floor: "800", perNft: "$60K", position: "$1.8M", pctRd: "13%", per1k: "$3,570" },
  { hype: "$112", floor: "1,500", perNft: "$168K", position: "$5M", pctRd: "37%", per1k: "$10,000" },
  { hype: "$150", floor: "1,500", perNft: "$225K", position: "$6.75M", pctRd: "50%", per1k: "$13,400" },
  { hype: "$300", floor: "3,000", perNft: "$900K", position: "$27M", pctRd: "201%", per1k: "$53,600" },
];

const pudgyTable = [
  { project: "PENGU Token (their own)", value: "$120,000" },
  { project: "Dymension", value: "$11,000" },
  { project: "zkSync", value: "$2,800" },
  { project: "Omni Network", value: "$2,000" },
  { project: "LayerZero", value: "$1,090" },
];

const streams = [
  {
    label: "Stream 1",
    title: "Position Appreciation",
    val: "$420K → $5M",
    desc: "Already up 20%. HYPE triples, we 12×. At $300: $27M.",
  },
  {
    label: "Stream 2",
    title: "Airdrop Income",
    val: "$3.4M–$19.9M",
    desc: "From every app that ever launches on Hyperliquid + Season 3. Recurring for years.",
  },
  {
    label: "Stream 3",
    title: "Vault Fees (5%)",
    val: "$10M+/yr",
    desc: "This funds your dividends forever. rHYPURR is vault one — platform supports rPUNKS, rAPES, rPENGU, spot baskets.",
  },
];

export default function RipStrategiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-10">
        <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">
          RIP Strategies · March 2026 Investor Briefing
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
          How a $17,000 Collectible 12×&apos;s
        </h1>
        <p className="text-xl text-gray-400">
          And why Rebel Dividends owns 30 of them.
        </p>
        <p className="text-sm text-gray-600 mt-3">By Jason Cox · Rebel Dividends</p>
      </div>

      <div className="space-y-10">
        {/* 60-Second Version */}
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6">
          <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">
            The 60-Second Version
          </div>
          <p className="text-gray-200 leading-relaxed mb-4">
            We bought 30 Hypurr NFTs at $13–$15K each. Cost: ~$420K. Now worth ~$500K — up 20%
            buying the bottom, and just getting started. If HYPE triples, our position 12×&apos;s
            to $5M. Then we built a product that earns 5% fees on everyone who wants the same
            exposure. All on a company valued at $13.39M.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { val: "$500K", label: "Cost ~$420K (up ~20%)" },
              { val: "$5M", label: "12× if HYPE triples" },
              { val: "$10M+", label: "Fee rev. at scale" },
              { val: "$13.39M", label: "RD market cap" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-800 rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-white mb-1">{s.val}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* What is Hypurr */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">The Asset</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            4,600 Hypurr NFTs exist — the official collectible of Hyperliquid, the #1 derivatives
            exchange. $735M/yr in revenue. $4.4B in deposits. Floor: ~$17,000. HYPE: $40.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Hypurr is priced in HYPE. Double-leverage: HYPE goes up and Hypurr&apos;s HYPE price
            goes up. The dollar return multiplies:
          </p>
        </section>

        {/* Price table */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-5 bg-gray-800 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            {["HYPE", "Floor", "Per NFT", "Our 30", "$1K →"].map((h) => (
              <div key={h} className="p-3 border-l border-gray-700 first:border-0">{h}</div>
            ))}
          </div>
          {priceTable.map((row, i) => (
            <div
              key={row.hype}
              className={`grid grid-cols-5 border-t border-gray-800 text-sm ${
                i === 2 ? "bg-green-950/20" : ""
              }`}
            >
              <div className="p-3 text-white font-bold">{row.hype}</div>
              <div className="p-3 border-l border-gray-800 text-gray-300">{row.floor}</div>
              <div className="p-3 border-l border-gray-800 text-gray-300">{row.perNft}</div>
              <div className={`p-3 border-l border-gray-800 font-bold ${i >= 2 ? "text-green-400" : "text-gray-300"}`}>
                {row.position}
              </div>
              <div className="p-3 border-l border-gray-800 text-gray-400">{row.per1k}</div>
            </div>
          ))}
        </div>

        <div className="bg-green-950 border border-green-800 rounded-xl p-5 text-center">
          <div className="text-3xl font-black text-green-400 mb-1">$420K → $5M</div>
          <p className="text-gray-300 text-sm">
            HYPE triples. We 12×. We outperform HYPE by 3.6×.{" "}
            <span className="text-white">At $150 our position reaches $6.75M.</span>{" "}
            <span className="text-gray-400">At $300: $27M — 2× the entire company.</span>
          </p>
        </div>

        {/* Why people pay holders */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Why People Will Pay Hypurr Holders for Doing Nothing
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            In crypto, new apps need users. The fastest way? Give free tokens to the most valuable
            community on the chain. Like a credit card company giving $500 bonuses to AmEx
            Platinum holders — proven high-value customers are worth paying for.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Hypurr holders are the verified genesis community of Hyperliquid. Every new app has a
            direct incentive to airdrop tokens to Hypurr holders — 4,600 wallets guaranteed to be
            real, active, high-value users.
          </p>
          <h3 className="text-lg font-bold text-white mb-3">
            Proof: $137,000 Per Holder from Cartoon Penguins
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            No blockchain. No ecosystem. No revenue. $137,000 per holder. Pudgy Penguins. 8,888
            supply. Created by college students. Five projects gave them free tokens over 2 years:
          </p>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden mb-4">
            <div className="grid grid-cols-2 bg-gray-800 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              <div className="p-3">Project</div>
              <div className="p-3 border-l border-gray-700">Value Per NFT</div>
            </div>
            {pudgyTable.map((r) => (
              <div key={r.project} className="grid grid-cols-2 border-t border-gray-800 text-sm">
                <div className="p-3 text-gray-300">{r.project}</div>
                <div className="p-3 border-l border-gray-800 text-green-400 font-bold">{r.value}</div>
              </div>
            ))}
            <div className="grid grid-cols-2 border-t border-gray-700 text-sm bg-gray-800">
              <div className="p-3 text-white font-bold">TOTAL — 5 Projects, 2 Years</div>
              <div className="p-3 border-l border-gray-700 text-green-400 font-black text-lg">~$137,000</div>
            </div>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Pudgy had nothing. No blockchain. No pipeline. Imagine what happens when the collectible
            IS the ecosystem. Hypurr at $77M on a $9B platform is the most undervalued collectible
            in crypto.
          </p>
        </section>

        {/* rHYPURR */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-3">
            The Accelerant — rHYPURR
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            We built the product that makes our own position more valuable. Tokenized vault. $17K
            barrier becomes $10 entry point. 3,600 holders become millions. Structural price floor
            no meme coin has. We earn 5% on every dollar in.
          </p>
          <p className="text-gray-400 text-sm mt-3">
            If Hypurr outperforms HYPE — everyone who missed HYPE chases Hypurr through rHYPURR.
            The demand doesn&apos;t come from marketing. It comes from the leaderboard. Every
            dollar that enters pays us 5%.
          </p>
        </section>

        {/* Three Revenue Streams */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Three Revenue Streams</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {streams.map((s) => (
              <div key={s.label} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <div className="text-xs font-mono text-gray-500 uppercase mb-1">{s.label}</div>
                <div className="text-lg font-bold text-white mb-1">{s.title}</div>
                <div className="text-2xl font-black text-green-400 mb-3">{s.val}</div>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Scale callout */}
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 text-center">
          <p className="text-gray-500 mb-2 text-sm">At scale, RIP Strategies could generate:</p>
          <div className="text-4xl font-black text-white mb-2">$20–40M+ per year</div>
          <p className="text-gray-500 text-sm mb-1">on a company valued at</p>
          <div className="text-2xl font-bold text-yellow-400">$13.39 million</div>
          <p className="text-gray-400 text-sm mt-4">
            The $420,000 we invested — already worth $500K and climbing — could be the
            highest-returning capital deployment in the history of this company.
          </p>
          <p className="text-white font-bold mt-4">Every share you own captures this.</p>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 border border-[#0a7c42] rounded-2xl p-8 text-center">
          <p className="text-white font-bold text-lg mb-1">The Vault Is Live. The Pipeline Is Loaded.</p>
          <p className="text-gray-400 mb-6">Call Dean: (505) 322-7515</p>
          <Link
            href="/apply"
            className="inline-block bg-[#0a7c42] text-white font-bold py-3 px-8 rounded-xl text-lg hover:bg-[#0a6a38] transition-colors"
          >
            Invest in Rebel Dividends
          </Link>
        </div>

        <p className="text-xs text-gray-600 leading-relaxed">
          For informational purposes only. Not an offer to sell or recommendation. All projections
          are illustrative scenario analysis. The 12× scenario requires HYPE ~$112 and floor at
          1,500. Higher scenarios require HYPE $300+. Airdrop estimates use peak prices. Season 3
          and app projections not confirmed by any project. DeFi products with smart contract, NFT
          market, liquidity risk, and potential total loss. Not a registered investment advisor.
          Market cap ($13.39M) and share price ($0.00194) as of March 2026. 20% management fee.
          Consult your own advisors. © 2026 Rebel Dividends Corporation.
        </p>
      </div>
    </div>
  );
}
