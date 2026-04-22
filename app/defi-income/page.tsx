import Link from "next/link";
import type { Metadata } from "next";
import { defiIncomePages } from "@/lib/defi-income";

export const metadata: Metadata = {
  title: "DeFi Income — High-Yield, Low-Volatility DeFi Lending",
  description:
    "DeFi Income builds a private equity solution designed to replace outdated savings accounts and bonds with stable, inflation-beating DeFi yield.",
};

export default function DefiIncomeIndex() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-green-950 border border-green-800 rounded-full px-4 py-1.5 text-green-300 text-sm font-medium mb-6">
          DeFi Income
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-white">
          Secure Weekly Dividends
          <br />
          <span className="text-green-400">Through DeFi Lending.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Safely grow your money in crypto markets with a downside hedge —
          high-yield, low-volatility DeFi lending engineered for wealth preservation.
        </p>
        <div className="mt-8">
          <Link
            href="/apply"
            className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-xl text-sm transition inline-block"
          >
            Apply for Investor Access →
          </Link>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {defiIncomePages.map((page) => (
          <Link
            key={page.slug}
            href={`/defi-income/${page.slug}`}
            className="block bg-gray-900 border border-gray-800 hover:border-green-700 rounded-xl p-6 transition group"
          >
            <h2 className="text-white font-bold text-lg group-hover:text-green-400 transition mb-2">
              {page.title}
            </h2>
            {page.subtitle && (
              <p className="text-gray-400 text-sm">{page.subtitle}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
