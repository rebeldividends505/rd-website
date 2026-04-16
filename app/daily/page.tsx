import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily Update — Rebel Dividends",
  description: "Daily market commentary, HYPE price action, and dividend income updates from Rebel Dividends.",
};

export default function DailyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-green-950 border border-green-800 rounded-full px-4 py-1.5 text-green-300 text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Daily Updates
        </div>
        <h1 className="text-4xl font-black text-white mb-4">Daily Market Update</h1>
        <p className="text-gray-400">
          HYPE price action, protocol metrics, and dividend income commentary.
          Published by Jason Cox, Mon–Fri.
        </p>
      </div>

      {/* Placeholder content */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">📰</div>
        <h2 className="text-xl font-bold text-white mb-3">Coming Soon</h2>
        <p className="text-gray-400 text-sm">
          Daily market commentary and HYPE updates will be published here.
          Check back soon or apply for investor access to receive updates directly.
        </p>
        <a
          href="/apply"
          className="inline-block mt-6 bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-lg transition text-sm"
        >
          Get Updates in Your Inbox
        </a>
      </div>
    </div>
  );
}
