import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iran Situational Briefing — Rebel Dividends",
  description:
    "Confidential investor briefing: The US-Iran conflict, three portfolio scenarios, and our hedging playbook. Data current as of March 24, 2026.",
};

const scenarios = [
  {
    id: "A",
    title: "Scenario A: The Deal",
    prob: "20–30%",
    timeline: "5–14 days",
    color: "green",
    summary:
      "Islamabad backchannel produces a framework. Iran agrees to an enrichment cap and inspections. The Strait reopens within weeks. Trump claims the greatest deal ever made.",
    markets: [
      { label: "Oil", val: "$99 → $65–75" },
      { label: "S&P", val: "+10–15%" },
      { label: "BTC", val: "$85–105K" },
      { label: "VIX", val: "27 → 14" },
    ],
    action: "HOLD. Stay fully invested. Risk-on rally sends HYPE higher with crypto.",
  },
  {
    id: "B",
    title: "Scenario B: The Grind",
    prob: "45–55%",
    timeline: "3–5 months",
    color: "yellow",
    summary:
      "March 27 passes with another extension. Ultimatum → extension → repeat. The Strait partially reopens with US Navy escorts by late April. Political math forces resolution before midterms.",
    markets: [
      { label: "Oil", val: "$90–120 Q2, fades $75–85 Q3" },
      { label: "S&P", val: "6,200–6,800 sideways → rallies Q3" },
      { label: "BTC", val: "$65–80K then $100–130K" },
      { label: "Gold", val: "$4,500–5K" },
    ],
    action:
      "ACCUMULATE on every dip. Persistent volatility = more Hyperliquid fees = more revenue for your shares.",
  },
  {
    id: "C",
    title: "Scenario C: Dark Spring",
    prob: "15–25%",
    timeline: "Grid strikes March 27+",
    color: "red",
    summary:
      "Trump follows through. Top 20 Iranian power plants destroyed. Iran retaliates against Gulf desalination. Strait declared permanently mined. 45–60 days of contested mine-clearing.",
    markets: [
      { label: "Oil", val: "$150–250, settles ~$140" },
      { label: "S&P", val: "−25 to −35%" },
      { label: "BTC", val: "−30% initial, then $130–180K+" },
      { label: "Bonds", val: "DESTROYED (10Y yield >6%)" },
    ],
    action:
      "HEDGE IMMEDIATELY. Short HYPE / long oil perps. Accumulate BTC aggressively below $55K. Convert hedge profits back to HYPE once stabilized.",
  },
];

const triggers = [
  {
    label: "Mar 27",
    desc: "Grid strike deadline. No extension = hedge initiates within hours.",
  },
  {
    label: "$120 Oil",
    desc: "Brent crossing $120 = deal collapsed signal. Short HYPE / long oil perps.",
  },
  {
    label: "BTC <$60K",
    desc: "52-week low $60,187. Below that = capitulation. Aggressive BTC accumulation begins.",
  },
  {
    label: "VIX >35",
    desc: "Full risk-off confirmed. Historically 90%+ chance positive 12-month return. Maximum accumulation zone.",
  },
  {
    label: "Nuke Test",
    desc: "Confirmed nuclear test or exclusion zone declaration. Full defensive posture. Maximum hedge + BTC accumulation at distressed prices.",
    critical: true,
  },
];

export default function IranPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-10">
        <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">
          Rebel Dividends · Confidential Investor Briefing
        </div>
        <div className="text-gray-500 text-sm mb-3">
          March 24, 2026 · Data current as of 1:30 PM MST (Day 25)
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
          The Nuclear Clock and What Comes Next: Three Scenarios for Your Portfolio
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          We are on Day 25 of the US-Iran conflict. The Strait of Hormuz remains effectively
          closed. Brent crude has been swinging between $95 and $119 on every headline.
        </p>
        <p className="text-sm text-gray-600 mt-3">By Jason Cox · Rebel Dividends</p>
      </div>

      <div className="space-y-12">
        {/* Situation Report */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">
            Situation Report — Where We Stand
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              { val: "Day 25", label: "Operation Epic Fury" },
              { val: "~$99", label: "Brent Crude (peaked $119)" },
              { val: "95%", label: "Hormuz Tanker Traffic Down" },
              { val: "~200", label: "Injured Near Dimona (Fri)" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-white mb-1">{s.val}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            Operation Epic Fury began February 28, 2026, with 900 airstrikes in the first 12
            hours. The opening salvo included a decapitation strike that killed Supreme Leader Ali
            Khamenei. The coalition has destroyed approximately 70% of Iran&apos;s ballistic
            missile launchers. More than 2,000 people have been killed across the region.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The IEA calls it the largest supply disruption in the history of global oil markets.
            Only 4.2 million barrels per day can be rerouted via pipelines — less than a quarter
            of the volume at risk.
          </p>
        </section>

        {/* The Nuclear Math */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">The Nuclear Math — Why We&apos;re Here</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              { val: "440 kg", label: "Uranium at 60% (weapons = 90%)" },
              { val: "40×", label: "Over JCPOA Permitted Limit" },
              { val: "7 days", label: "Breakout Time to Weapons-Grade" },
              { val: "10 Weapons", label: "Possible in 3 Weeks" },
            ].map((s) => (
              <div key={s.label} className="bg-red-950 border border-red-900 rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-red-400 mb-1">{s.val}</div>
                <div className="text-xs text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            Iran accumulated 440.9 kilograms of uranium enriched to 60% U-235 — a level with
            zero civilian use. The stockpile surged 50% in spring 2025, standing at 40 times the
            JCPOA limit. Intelligence concluded Iran had performed 99% of the centrifuge work for
            nine bombs.
          </p>
          <p className="text-gray-300 leading-relaxed">
            In June 2025, Operation Rising Lion was supposed to fix this. It hadn&apos;t. The 440
            kg of enriched uranium survived underground. Iran immediately began rebuilding. By
            February 2026, the assessment was that Iran had reached a terminal breakout
            point — less than two weeks from a bomb. Operation Epic Fury launched on February 28.
          </p>
        </section>

        {/* Three Scenarios */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">
            Three Scenarios for the Next 90 Days
          </h2>
          <p className="text-gray-500 mb-6">The critical insight: scarce assets outperform in all three.</p>
          <div className="space-y-6">
            {scenarios.map((s) => (
              <div
                key={s.id}
                className={`bg-gray-900 border rounded-2xl p-6 ${
                  s.color === "green"
                    ? "border-green-800"
                    : s.color === "yellow"
                    ? "border-yellow-800"
                    : "border-red-800"
                }`}
              >
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <h3 className="text-xl font-bold text-white">{s.title}</h3>
                  <div className="flex gap-2">
                    <span
                      className={`text-xs px-2 py-1 rounded font-mono ${
                        s.color === "green"
                          ? "bg-green-900 text-green-400"
                          : s.color === "yellow"
                          ? "bg-yellow-900 text-yellow-400"
                          : "bg-red-900 text-red-400"
                      }`}
                    >
                      {s.prob}
                    </span>
                    <span className="text-xs px-2 py-1 rounded font-mono bg-gray-800 text-gray-400">
                      {s.timeline}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{s.summary}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                  {s.markets.map((m) => (
                    <div key={m.label} className="bg-gray-800 rounded-lg p-3">
                      <div className="text-xs text-gray-500 mb-1">{m.label}</div>
                      <div className="text-sm font-bold text-white">{m.val}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-800 rounded-lg p-3 text-sm">
                  <span className="text-gray-500 font-mono text-xs">OUR MOVE: </span>
                  <span className="text-gray-200">{s.action}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bitcoin Thesis */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Why Every Scenario Leads to Bitcoin
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "De-dollarization in real time",
                body: "Every time the US weaponizes the dollar — sanctions, SWIFT cutoffs, asset freezes — it pushes countries to find alternatives. Bitcoin is the only globally liquid asset no single government controls. It trades 24/7, crosses borders without permission, and cannot be sanctioned, frozen, or seized.",
              },
              {
                title: "The deficit gets worse in every scenario",
                body: "$39 trillion national debt. $1.9 trillion annual deficit. Over $1 trillion in annual interest. Now add a war: Deal = deficit stays $1.9T. Grind = $200B Pentagon supplemental. Dark Spring = wartime spending balloons toward $3T+. In every case: more borrowing, more printing, more dollar debasement. Bitcoin has a fixed supply of 21 million coins.",
              },
              {
                title: "Bitcoin is proving its crisis-hedge thesis right now",
                body: "On Monday, oil crashed 14% when Trump announced the extension. Bitcoin rallied 3.8% and reclaimed $71,000 — outperforming equities despite being classified as a risk asset. After initial risk-off selloffs, BTC's recovery has been robust and increasingly independent of stock market direction.",
              },
            ].map((f) => (
              <div key={f.title} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Asset matrix */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Asset Performance by Scenario</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-4 bg-gray-800 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              <div className="p-3">Asset</div>
              <div className="p-3 border-l border-gray-700">A: Deal</div>
              <div className="p-3 border-l border-gray-700">B: Grind</div>
              <div className="p-3 border-l border-gray-700">C: Dark Spring</div>
            </div>
            {[
              ["Bitcoin", "→ $85–105K", "Coil → $100–130K", "Dip → $130–180K+"],
              ["Gold", "Pulls back", "$4,500–5K", "$5K–7.5K"],
              ["Stocks", "+10–15%", "Sideways → rally", "−25–35%"],
              ["Bonds", "Flat", "Bleed", "DESTROYED"],
              ["Dollar", "Deficit $1.9T", "Deficit $2T+", "Deficit $3T+"],
            ].map(([asset, a, b, c]) => (
              <div key={asset} className="grid grid-cols-4 border-t border-gray-800 text-sm">
                <div className="p-3 text-gray-400 font-medium">{asset}</div>
                <div className="p-3 border-l border-gray-800 text-green-400">{a}</div>
                <div className="p-3 border-l border-gray-800 text-yellow-400">{b}</div>
                <div className="p-3 border-l border-gray-800 text-red-400">{c}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Hedging Playbook */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Our Hedging Playbook</h2>
          <p className="text-gray-400 mb-6 text-sm">
            We&apos;re not holding and hoping. Here are the triggers we&apos;re watching.
          </p>
          <div className="space-y-3">
            {triggers.map((t) => (
              <div
                key={t.label}
                className={`flex gap-4 items-start p-4 rounded-xl border ${
                  t.critical
                    ? "bg-red-950 border-red-800"
                    : "bg-gray-900 border-gray-800"
                }`}
              >
                <div
                  className={`font-mono text-xs font-bold px-2 py-1 rounded whitespace-nowrap ${
                    t.critical ? "bg-red-900 text-red-400" : "bg-gray-800 text-yellow-400"
                  }`}
                >
                  {t.critical ? "⚠ CRITICAL" : "TRIGGER"}
                  <br />
                  {t.label}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
          <p className="text-gray-400 mb-4">
            Whether you&apos;re adding to your position or have questions —
          </p>
          <p className="text-xl font-bold text-white mb-2">Call Dean Gallagher</p>
          <p className="text-gray-400 mb-6">(505) 322-7515</p>
          <Link
            href="/apply"
            className="inline-block bg-[#0a7c42] text-white font-bold py-3 px-8 rounded-xl text-lg hover:bg-[#0a6a38] transition-colors"
          >
            Invest in Rebel Dividends
          </Link>
        </section>

        {/* Disclaimer */}
        <p className="text-xs text-gray-600 leading-relaxed">
          This material is for informational purposes only and is not a recommendation to buy,
          sell, or hold any security. Scenario probabilities are estimates, not guarantees. Price
          targets are potential ranges based on scenario modeling, not predictions. Past performance
          does not guarantee future results. Cryptocurrency and perpetual futures involve
          significant risk of loss including total loss of principal. Nuclear conflict scenarios
          are modeled from open-source intelligence, not classified information. Rebel Dividends
          Corporation charges a 20% management fee on all dividends distributed to shareholders.
        </p>
      </div>
    </div>
  );
}
