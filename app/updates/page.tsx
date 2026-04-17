import Link from "next/link";
import type { Metadata } from "next";
import { updates } from "@/lib/updates";

export const metadata: Metadata = {
  title: "Investor Updates — Rebel Dividends",
  description:
    "Weekly performance updates from Jason Cox — every week since November 2025. Track record, dividends, and market commentary from Rebel Dividends.",
};

function returnColor(ret?: string): string {
  if (!ret) return "text-gray-500";
  if (ret.startsWith("+")) return "text-green-400";
  if (ret.startsWith("-")) return "text-red-400";
  return "text-gray-400";
}

export default function UpdatesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-blue-950 border border-blue-800 rounded-full px-4 py-1.5 text-blue-300 text-sm font-medium mb-6">
          📊 Track Record
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
          Investor Updates
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          Weekly performance updates from Jason Cox —{" "}
          <span className="text-white font-medium">every week since November 2025.</span>
        </p>
        <p className="text-sm text-gray-600 mt-3">
          {updates.length} updates · {updates[updates.length - 1].date} → {updates[0].date}
        </p>
      </div>

      {/* Update list */}
      <div className="space-y-3">
        {updates.map((update) => (
          <Link
            key={update.slug}
            href={`/updates/${update.slug}`}
            className="block bg-gray-900 border border-gray-800 hover:border-gray-600 rounded-xl p-5 transition group"
          >
            <div className="flex items-start justify-between gap-4 flex-wrap">
              {/* Left: date + summary */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <span className="text-white font-bold text-base">{update.date}</span>
                  {update.weeklyReturn && (
                    <span
                      className={`font-mono font-semibold text-sm ${returnColor(update.weeklyReturn)}`}
                    >
                      {update.weeklyReturn}
                    </span>
                  )}
                  {update.dividend && update.dividend !== "$0.00000" && (
                    <span className="text-gray-500 text-xs">
                      div: <span className="text-gray-300">{update.dividend}</span>
                    </span>
                  )}
                  {update.dividend === "$0.00000" && (
                    <span className="text-gray-600 text-xs">no div (prepaid)</span>
                  )}
                </div>
                {update.subtitle && (
                  <p className="text-blue-400 text-sm mb-1">{update.subtitle}</p>
                )}
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {update.summary}
                </p>
              </div>

              {/* Right: share price + arrow */}
              <div className="flex items-center gap-3 shrink-0">
                {update.sharePrice && (
                  <div className="text-right hidden sm:block">
                    <div className="text-xs text-gray-600">share price</div>
                    <div className="text-white font-mono text-sm">{update.sharePrice}</div>
                  </div>
                )}
                <span className="text-gray-600 group-hover:text-white transition text-lg">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-16 bg-gray-900 border border-gray-700 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-white mb-3">
          Want to be part of the next chapter?
        </h2>
        <p className="text-gray-400 mb-6 text-sm">
          Rebel Dividends pays weekly dividends powered by Hyperliquid protocol fees.
          Over 100 consecutive weeks — no exceptions.
        </p>
        <Link
          href="/apply"
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3 rounded-xl text-sm transition inline-block"
        >
          Apply for Investor Access →
        </Link>
      </div>
    </div>
  );
}
