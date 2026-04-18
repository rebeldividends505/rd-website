import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investor Briefing — March 24, 2026 | Rebel Dividends",
  description: "Archived Rebel Dividends investor briefing for the week of March 24, 2026.",
  robots: { index: false, follow: false },
};

export default function BriefingArchivePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="border-b border-gray-800 bg-gray-900/60 backdrop-blur">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg tracking-tight">
            <span className="text-white">Rebel</span>
            <span className="text-red-400">Dividends</span>
          </Link>
          <span className="text-gray-500 text-sm">March 24, 2026</span>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-700 rounded-full px-4 py-1.5 text-gray-400 text-sm">
          📁 Archived Briefing
        </div>
        <h1 className="text-3xl font-black text-white">
          Investor Briefing
        </h1>
        <p className="text-gray-400 text-lg">March 24, 2026</p>
        <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
          This briefing was sent to Rebel Dividends investors on March 24, 2026.
          Archived briefings are available to active investors through the investor portal.
        </p>
        <div className="pt-4 flex flex-wrap gap-3 justify-center">
          <Link
            href="/login"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg text-sm transition-colors"
          >
            Investor Login →
          </Link>
          <Link
            href="/briefing"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-300 font-semibold rounded-lg text-sm transition-colors"
          >
            Current Briefing
          </Link>
        </div>
      </main>
    </div>
  );
}
