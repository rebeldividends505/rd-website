import Link from "next/link";
import type { Metadata } from "next";
import { rebelDefiPages } from "@/lib/rebel-defi";

export const metadata: Metadata = {
  title: "Rebel DeFi — Weekly Dividends from DeFi on Bitcoin",
  description:
    "Rebel DeFi pioneers decentralized finance on Bitcoin — delivering consistent dividends to qualified investors through disciplined crypto investment.",
};

export default function RebelDefiIndex() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-orange-950 border border-orange-800 rounded-full px-4 py-1.5 text-orange-300 text-sm font-medium mb-6">
          Rebel DeFi
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-white">
          Grow Wealth.
          <br />
          <span className="text-orange-400">Earn Weekly Dividends.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Rebel DeFi, Inc. pioneers decentralized finance on Bitcoin — delivering
          consistent dividends to qualified investors through 40+ years of combined
          investing experience.
        </p>
        <div className="mt-8">
          <Link
            href="/apply"
            className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-3 rounded-xl text-sm transition inline-block"
          >
            See If You Qualify →
          </Link>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {rebelDefiPages.map((page) => (
          <Link
            key={page.slug}
            href={`/rebel-defi/${page.slug}`}
            className="block bg-gray-900 border border-gray-800 hover:border-orange-700 rounded-xl p-6 transition group"
          >
            <h2 className="text-white font-bold text-lg group-hover:text-orange-400 transition mb-2">
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
