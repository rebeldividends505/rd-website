import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Power of Compounding — Rebel Dividends",
  description:
    "The undeniable math behind reinvesting your Rebel Dividends weekly dividends. Collect vs. reinvest — what the numbers actually show across every market scenario.",
};

export default function PowerOfCompoundingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="text-gray-500 text-sm mb-3">Investor Education · Jason Cox</div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          The Power of Compounding
        </h1>
        <p className="text-xl text-gray-400">
          Collect vs. Reinvest — what you make, and what you leave on the table.
        </p>
      </div>

      <div className="space-y-10">
        {/* Core thesis */}
        <div>
          <p className="text-gray-300 leading-relaxed text-base mb-4">
            If you believe our $150 HYPE target is realistic — and we have laid out exactly why we
            think it is — then this page answers the most important question: should you collect
            your weekly dividends as cash, or reinvest them?
          </p>
          <p className="text-gray-300 leading-relaxed text-base">
            The answer is not close. Every dollar you pull out is a dollar that stops compounding.
            And here is the key: the crashes and corrections that scare most people are actually the
            reinvestor&apos;s biggest weapon. Every dip means cheaper shares. Every correction loads
            the spring.
          </p>
        </div>

        {/* Why crashes help reinvestors */}
        <div className="bg-green-950/30 border border-green-800/40 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-4">
            Why Volatility Works in the Reinvestor&apos;s Favor
          </h2>
          <p className="text-gray-300 leading-relaxed text-base mb-4">
            When HYPE drops 50% from $48 to $24, a collector just watches their account get cut in
            half. But a reinvestor is buying shares at fire-sale prices — getting twice as many
            shares per dollar of dividend. Those cheap shares then ride the entire next wave up.
          </p>
          <p className="text-gray-300 leading-relaxed text-base">
            Over 25 months since the April 2024 pivot, the share price fell in 13 of those months
            — and every single week it fell, the reinvestor&apos;s dividend bought more shares at a
            lower price. That&apos;s not a bug. That&apos;s the engine. Every dip is an automatic buy.
          </p>
        </div>

        {/* The scenarios */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">
            Every Scenario — Reinvesting Wins
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                hype: "$75",
                collect: "$157K",
                reinvest: "$191K",
                edge: "+$34K",
              },
              {
                hype: "$100",
                collect: "$210K",
                reinvest: "$268K",
                edge: "+$58K",
              },
              {
                hype: "$150",
                collect: "$315K",
                reinvest: "$421K",
                edge: "+$106K",
              },
            ].map((s) => (
              <div
                key={s.hype}
                className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center"
              >
                <div className="text-blue-400 font-bold text-lg mb-3">HYPE @ {s.hype}</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Collector</span>
                    <span className="text-gray-300 font-mono">{s.collect}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-400 font-medium">Reinvestor</span>
                    <span className="text-green-400 font-mono font-bold">{s.reinvest}</span>
                  </div>
                  <div className="border-t border-gray-800 pt-2 mt-2">
                    <span className="text-gray-600 text-xs">Reinvestor advantage: </span>
                    <span className="text-green-400 font-bold text-xs">{s.edge}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-3 text-center">
            Based on $100,000 invested at $0.00170/share. Hypothetical projections — not a
            guarantee of results.
          </p>
        </div>

        {/* Real track record */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-4">The Proven Track Record</h2>
          <p className="text-gray-300 leading-relaxed text-base mb-4">
            Since the April 2024 pivot, Reinvestors have turned $100K into $296K — while the
            S&P 500 is down 7% in 2026 and collectors have turned the same $100K into $211K.
            That&apos;s a $101,000 Reinvestor Advantage on every $100K invested — and 4.7× more weekly
            dividend income today.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center bg-gray-800/50 rounded-xl p-4">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Collector</div>
              <div className="text-2xl font-bold text-white">$211K</div>
              <div className="text-gray-400 text-xs mt-1">+111% total return</div>
            </div>
            <div className="text-center bg-green-950/40 border border-green-800/40 rounded-xl p-4">
              <div className="text-xs text-green-500 uppercase tracking-wider mb-1">Reinvestor</div>
              <div className="text-2xl font-bold text-green-400">$296K</div>
              <div className="text-green-600 text-xs mt-1">+196% total return</div>
            </div>
          </div>
        </div>

        {/* The exit strategy */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">We Have a Plan for the Top</h2>
          <p className="text-gray-300 leading-relaxed text-base mb-6">
            We&apos;re not asking you to reinvest forever. We&apos;re asking you to reinvest during the bull
            run — while prices are climbing and every reinvested dollar multiplies.
          </p>
          <div className="space-y-3">
            {[
              {
                n: "1",
                title: "Massive Special Dividend",
                body: "When we believe HYPE is approaching peak cycle prices, we distribute a large special dividend to all shareholders — locking in gains as real cash.",
              },
              {
                n: "2",
                title: "Aggressive Short / Hedge Positions",
                body: "We flip to defensive mode. Short positions and hedges protect the portfolio from the inevitable bear market correction.",
              },
              {
                n: "3",
                title: "Protect the Gains",
                body: "While others watch portfolios collapse 60–80%, our shareholders have already taken profit AND are positioned to profit on the way down.",
              },
              {
                n: "4",
                title: "Reload at the Bottom",
                body: "When the cycle resets, we redeploy capital at bear market prices — setting up for the next run.",
              },
            ].map((step) => (
              <div key={step.n} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {step.n}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">{step.title}</div>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
          <h2 className="text-lg font-bold text-white mb-2">
            Ready to Switch to Reinvesting?
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Contact Dean to opt in to dividend reinvestment. Your weekly dividends will
            automatically purchase additional shares instead of being paid out as cash.
          </p>
          <div className="space-y-2 text-sm">
            <div className="text-gray-300">
              📞 Call/Text:{" "}
              <a href="tel:5053227515" className="text-blue-400 hover:text-blue-300 transition">
                (505) 322-7515
              </a>
            </div>
            <div className="text-gray-300">
              ✉️ Email:{" "}
              <a
                href="mailto:support@rebeldividends.com"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                support@rebeldividends.com
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-gray-600 text-xs leading-relaxed">
            Important Disclaimer: Projected returns are hypothetical illustrations based on
            assumptions about future HYPE price appreciation. Actual results may vary
            significantly. Past performance does not guarantee future results. Cryptocurrency
            markets are highly volatile with substantial risk of partial or total loss. This is
            not financial advice. Consult qualified advisors before making investment decisions.
            Rebel Dividends Corporation charges a 20% management fee on all dividends
            distributed to shareholders.
          </p>
          <p className="text-gray-600 text-xs mt-3">
            By <span className="text-gray-400">Jason Cox</span>, CEO &amp; Founder, Rebel Dividends Corporation
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
