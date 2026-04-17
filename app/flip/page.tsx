import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tomorrow's Dividend — Why the Dip Is the Opportunity — Rebel Dividends",
  description:
    "Oil spiked past $100, markets sold off, and your shares dipped. But HYPE's $50 target could arrive sooner than expected. Here's why reinvesting now makes sense.",
};

export default function FlipPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-10">
        <div className="text-gray-500 text-sm mb-3">March 22, 2026 · $0.00193 per share</div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
          Tomorrow&apos;s Dividend — and Why the Dip Is the Opportunity
        </h1>
        <p className="text-xl text-gray-400">
          Action required before Monday&apos;s payout
        </p>
      </div>

      <div className="space-y-10">
        <p className="text-gray-300 leading-relaxed text-lg">
          Oil spiked past $100 this week and markets sold off. Your shares dipped — but the war is
          showing signs of resolution and when it ends, the snapback will be fast. HYPE&apos;s $50
          target could arrive sooner than expected. Now is the time to reinvest.
        </p>

        <p className="text-gray-300 leading-relaxed">
          Your dividend is issued tomorrow and hits your account Tuesday. If you reply right now,
          we can switch you to reinvesting before it goes out.
        </p>

        <p className="text-gray-300 leading-relaxed">
          The Iran war escalation and oil spike pushed our share price down this week. But
          Hyperliquid is outperforming every competitor in the space — dominating weekend trading
          in oil, gold, and silver while traditional markets are closed, and about to launch
          prediction markets. The platform is stronger than ever. Trump said the war is
          &ldquo;pretty much complete.&rdquo; When this resolves, the snapback could be fast.
          Every dividend you reinvest right now buys shares at a discount — and those shares ride
          the entire recovery.
        </p>

        {/* Comparison table */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
          <div className="p-4 bg-gray-800 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Here&apos;s the Difference — Same $100K Since the Pivot
          </div>
          {[
            {
              label: "Collecting Cash (You)",
              val: "$184K",
              pct: "+84%",
              highlight: false,
            },
            {
              label: "Reinvesting",
              val: "$250K",
              pct: "+150%",
              highlight: true,
            },
          ].map((row) => (
            <div
              key={row.label}
              className={`flex items-center justify-between p-5 border-t border-gray-800 ${
                row.highlight ? "bg-green-950/30" : ""
              }`}
            >
              <div>
                <div className={`font-semibold text-lg ${row.highlight ? "text-green-300" : "text-gray-300"}`}>
                  {row.label}
                </div>
              </div>
              <div className="text-right">
                <div
                  className={`text-3xl font-black ${row.highlight ? "text-green-400" : "text-gray-300"}`}
                >
                  {row.val}
                </div>
                <div className="text-sm text-gray-500">{row.pct}</div>
              </div>
            </div>
          ))}
          <div className="border-t border-gray-800 p-4 flex items-center justify-between bg-gray-900">
            <div className="text-gray-400">Difference — Same Starting Point</div>
            <div className="text-2xl font-black text-yellow-400">$66K more</div>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
          <p className="text-gray-200 leading-relaxed">
            You&apos;re not giving up your income — you&apos;re choosing to take it in shares
            instead of cash while they&apos;re cheap. You can flip back to collecting cash anytime
            with one reply. This isn&apos;t permanent. It&apos;s a temporary move to end up with
            more cash in your hands later, not less. Once HYPE hits our $150 target, the plan is
            to issue a special dividend and protect the gains.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 border border-[#0a7c42] rounded-2xl p-8 text-center">
          <p className="text-white font-bold text-xl mb-2">
            Email support@rebeldividends.com
          </p>
          <p className="text-gray-400 mb-1">with &ldquo;Switch to reinvesting&rdquo;</p>
          <p className="text-gray-500 mb-6">Or call Dean at (505) 322-7515</p>
          <Link
            href="/apply"
            className="inline-block bg-[#0a7c42] text-white font-bold py-3 px-8 rounded-xl text-lg hover:bg-[#0a6a38] transition-colors"
          >
            Not yet invested? Start here
          </Link>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          {[
            {
              q: "Can I switch back later?",
              a: "Yes. One reply and you're back to collecting cash. No fees, no lock-up.",
            },
            {
              q: "What if I need the cash right now?",
              a: "Then keep collecting. But if you can go without it for a few months while shares are at a discount, reinvesting now means more shares, more dividends, and more cash later when you flip back.",
            },
          ].map((item) => (
            <div key={item.q} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="font-semibold text-white mb-2">&ldquo;{item.q}&rdquo;</div>
              <div className="text-gray-400 text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-600 leading-relaxed">
          Past performance does not guarantee future results. Cryptocurrency markets are highly
          volatile with substantial risk of partial or total loss. Price targets are projections,
          not guarantees. This is not financial advice. Consult qualified advisors before making
          investment decisions. The fund experienced significant losses during its prior leveraged
          ETH strategy period (2022-2024). All performance data shown reflects results only since
          the April 2024 pivot to an unleveraged, spot HYPE strategy. Rebel Dividends Corporation
          charges a 20% management fee on all dividends distributed to shareholders.
        </p>
      </div>
    </div>
  );
}
