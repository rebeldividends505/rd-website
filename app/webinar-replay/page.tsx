import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webinar Replay — Rebel Dividends",
  description: "Watch the Rebel Dividends webinar replay. Learn how Hyperliquid protocol fees generate weekly dividends for investors.",
  robots: { index: true, follow: true },
};

export default function WebinarReplayPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="py-20 px-4 text-center border-b border-gray-800">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-800/50 rounded-full px-4 py-1.5 text-blue-300 text-sm font-medium mb-6">
            🎬 Full Webinar Replay — Watch Now
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            How We Generate Weekly Dividends<br />
            <span className="text-blue-400">From Hyperliquid Protocol Fees</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            In this exclusive presentation, Jason Cox walks through the Rebel Dividends strategy —
            how protocol fee capture on Hyperliquid generates real, weekly cash income for investors.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-400">
            <span className="flex items-center gap-1.5">⏱ ~45 minutes</span>
            <span className="flex items-center gap-1.5">📊 Live data walkthrough</span>
            <span className="flex items-center gap-1.5">💬 Q&amp;A included</span>
          </div>
        </div>
      </section>

      {/* Video embed section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Video placeholder — replace src with actual embed URL */}
          <div className="relative w-full bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden"
               style={{ paddingTop: "56.25%" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
              <div className="text-6xl mb-4">▶</div>
              <p className="text-lg font-medium text-gray-400">Webinar Replay</p>
              <p className="text-sm mt-2">Loading player...</p>
              {/* Uncomment and replace with actual embed:
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              */}
            </div>
          </div>

          {/* Chapter markers */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { time: "0:00", title: "Introduction & Rebel Dividends Overview" },
              { time: "6:30", title: "How Hyperliquid Protocol Fees Work" },
              { time: "14:00", title: "Real Dividend Payment History" },
              { time: "22:00", title: "Portfolio Construction & Share Structure" },
              { time: "30:00", title: "506(b) Offering & Investor Requirements" },
              { time: "38:00", title: "Q&A — Live Investor Questions" },
            ].map((ch) => (
              <div key={ch.time} className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                <span className="text-blue-400 font-mono text-sm font-bold mt-0.5 shrink-0">{ch.time}</span>
                <span className="text-gray-300 text-sm">{ch.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key takeaways */}
      <section className="py-16 px-4 bg-gray-900/30 border-y border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">What You&apos;ll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "The Income Engine",
                desc: "How Hyperliquid generates billions in protocol fees and how Rebel Dividends captures a portion as weekly dividends.",
              },
              {
                icon: "📈",
                title: "Real Performance Data",
                desc: "Actual dividend history, payment amounts, and portfolio growth numbers — no projections, real results.",
              },
              {
                icon: "🔐",
                title: "The Compliance Structure",
                desc: "How the Reg D 506(b) offering is structured, who qualifies, and how capital is protected.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Apply?</h2>
          <p className="text-gray-400 mb-8">
            If you watched the full presentation and you&apos;re interested in becoming an investor,
            submit your application. Accredited and sophisticated investors only.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl text-lg transition"
          >
            Submit Your Application →
          </Link>
          <p className="text-gray-600 text-xs mt-4">
            No commitment required. We&apos;ll review your application and follow up within 24 hours.
          </p>
        </div>
      </section>

      {/* Legal disclaimer */}
      <section className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center text-gray-600 text-xs">
          <p>
            This webinar is for informational purposes only and does not constitute an offer to sell or a solicitation
            of an offer to buy any securities. Securities are offered only to qualified investors pursuant to Rule 506(b)
            of Regulation D under the Securities Act of 1933. Past performance does not guarantee future results.
            All investments carry substantial risk, including loss of principal.{" "}
            <Link href="/legal" className="hover:text-gray-400 underline">View full legal disclosures</Link> ·{" "}
            <Link href="/risk-disclosure" className="hover:text-gray-400 underline">Risk disclosure</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
