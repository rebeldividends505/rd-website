import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rebel Dividends Briefing",
  description:
    "The latest investor briefing from Rebel Dividends — share price, market commentary, and the case for adding capital now.",
  robots: { index: false, follow: false }, // private investor email; don't index
};

// ── Static data — update each week when the briefing is refreshed ─────────
const BRIEFING = {
  date: "March 6, 2026",
  sharePrice: "$0.00162",
  dailyReturn: "-2.01%",
  dailyReturnPositive: false,
  webinarTitle: "The Software That Could Change Everything",
  webinarBlurb:
    "Jason reveals the two products we're building on Hyperliquid — bringing the ETF world onto the platform and creating entirely new revenue streams for shareholders beyond just holding HYPE.",
  webinarDate: "Tuesday 3:30 PM EST",
};

export default function BriefingPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Top bar */}
      <div className="border-b border-gray-800 bg-gray-900/60 backdrop-blur">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg tracking-tight">
            <span className="text-white">Rebel</span>
            <span className="text-red-400">Dividends</span>
          </Link>
          <span className="text-gray-500 text-sm">{BRIEFING.date}</span>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 py-12 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-950 border border-blue-800 rounded-full px-4 py-1.5 text-blue-300 text-sm font-medium">
            📋 Investor Briefing
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">
            Your Weekly Briefing
          </h1>
          <p className="text-gray-400">{BRIEFING.date}</p>
        </div>

        {/* Live Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
              Share Price
            </p>
            <p className="text-2xl font-bold text-white">{BRIEFING.sharePrice}</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
              Daily Return
            </p>
            <p
              className={`text-2xl font-bold ${
                BRIEFING.dailyReturnPositive ? "text-green-400" : "text-red-400"
              }`}
            >
              {BRIEFING.dailyReturn}
            </p>
          </div>
        </div>

        {/* What's Happening Now */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-7 space-y-4">
          <h2 className="text-xl font-bold">What&apos;s Happening Now</h2>
          <p className="text-gray-300 leading-relaxed">
            Traditional oil markets close at 5pm today. If the Middle East war
            escalates this weekend, Hyperliquid is the only real market open —
            no brokers, no synthetic contracts, real buyers and sellers setting
            the price 24/7. Last weekend Bloomberg had to cite Hyperliquid&apos;s oil
            prices because the CME was closed. The platform did $11.5 billion in
            two days while Wall Street slept.
          </p>
          <div className="border-l-4 border-green-500 pl-4 bg-green-950/30 rounded-r-lg py-3 pr-3">
            <p className="text-green-300 font-semibold">You&apos;re the Green Line</p>
            <p className="text-gray-300 text-sm mt-1">
              You&apos;re up 109% vs 73% for collectors on the same investment. Every
              dividend is buying more shares at half-off prices. Smart move.
            </p>
          </div>
        </section>

        {/* Why Adding Capital Now */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-7 space-y-5">
          <h2 className="text-xl font-bold">Why Adding Capital Now Could Be a Big Move</h2>
          <p className="text-gray-300 leading-relaxed">
            Hyperliquid is the #1 revenue-generating protocol in all of crypto —
            generating 6.6x more daily revenue than the next four competitors
            combined. If a wealth advisor pitched you &ldquo;the world&apos;s fastest-growing
            exchange platform&rdquo; as a private company, you&apos;d expect a 25x P/E.
            Instead, because it lives in crypto, it trades at 8x. That mispricing
            is the entire opportunity.
          </p>
          <p className="text-gray-300 leading-relaxed">
            And shares are still near the bottom of a 5-month drawdown — up 24%
            from the lows but still roughly half off the highs. The recovery is
            underway.
          </p>

          {/* Stat grid */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="bg-gray-950 border border-gray-700 rounded-xl p-4 text-center">
              <p className="text-2xl font-black text-white">8x</p>
              <p className="text-gray-500 text-xs mt-1">HYPE P/E</p>
              <p className="text-gray-600 text-xs">Nvidia: 35x</p>
            </div>
            <div className="bg-gray-950 border border-gray-700 rounded-xl p-4 text-center">
              <p className="text-2xl font-black text-green-400">$955M</p>
              <p className="text-gray-500 text-xs mt-1">Revenue</p>
              <p className="text-gray-600 text-xs">11 employees</p>
            </div>
            <div className="bg-gray-950 border border-gray-700 rounded-xl p-4 text-center">
              <p className="text-2xl font-black text-amber-400">$150</p>
              <p className="text-gray-500 text-xs mt-1">12-Mo Target</p>
              <p className="text-gray-600 text-xs">Currently ~$32</p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed text-sm">
            97% of HYPE&apos;s revenue goes directly into buying back and burning its
            own token — like a company doing a massive stock buyback every single
            day. Capital added at these prices combined with your compounding
            dividends is a powerful combination.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href="/forward"
              className="flex-1 bg-red-600 hover:bg-red-700 text-white text-center font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              See the Full Case for HYPE →
            </Link>
            <a
              href="mailto:jason@rebeldividends.com"
              className="flex-1 bg-gray-800 hover:bg-gray-700 text-white text-center font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Talk to Jason
            </a>
          </div>
          <p className="text-gray-500 text-sm text-center">
            Interested in adding capital? Reply to this email or call Dean at{" "}
            <a href="tel:5053227515" className="text-gray-400 hover:text-white">
              505-322-7515
            </a>
          </p>
        </section>

        {/* Next webinar */}
        <section className="bg-blue-950/40 border border-blue-800/50 rounded-2xl p-7 space-y-3">
          <div className="flex items-center gap-2 text-blue-300 text-sm font-semibold uppercase tracking-wider">
            🎙 Next Week&apos;s Webinar
          </div>
          <h2 className="text-xl font-bold">{BRIEFING.webinarTitle}</h2>
          <p className="text-gray-300">{BRIEFING.webinarBlurb}</p>
          <p className="text-blue-300 font-medium">{BRIEFING.webinarDate}</p>
          <Link
            href="/webinar-replay"
            className="inline-block mt-2 bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg transition-colors text-sm"
          >
            Watch Previous Replay →
          </Link>
        </section>

        {/* Disclaimer */}
        <section className="border-t border-gray-800 pt-8 space-y-3 text-xs text-gray-600 leading-relaxed">
          <p>
            <strong className="text-gray-500">Important Disclaimer:</strong> Past
            performance does not guarantee future results. Cryptocurrency markets
            are highly volatile with substantial risk of partial or total loss.
            This is not financial advice. Consult qualified advisors before making
            investment decisions. The fund experienced significant losses during
            its prior leveraged ETH strategy period (2022–2024). All performance
            data shown reflects results only since the April 2024 pivot to an
            unleveraged, spot HYPE strategy.
          </p>
          <p>
            <strong className="text-gray-500">Fee Structure:</strong> Rebel
            Dividends Corporation charges a 20% management fee on all dividends
            distributed to shareholders.
          </p>
          <div className="flex gap-4 pt-2">
            <Link href="/disclaimer" className="hover:text-gray-400">
              Disclaimer
            </Link>
            <Link href="/privacy" className="hover:text-gray-400">
              Privacy
            </Link>
            <Link href="/risk-disclosure" className="hover:text-gray-400">
              Risk Disclosure
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
