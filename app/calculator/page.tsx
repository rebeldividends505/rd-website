import type { Metadata } from "next";
import Link from "next/link";
import { CalculatorClient } from "./CalculatorClient";

export const metadata: Metadata = {
  title: "Dividend Income Calculator — Rebel Dividends",
  description:
    "Calculate your projected weekly dividends from Rebel Dividends. See exactly how much passive income your investment could generate — live yield rates, HYPE price scenarios, and compounding projections.",
  openGraph: {
    title: "How Much Could You Earn? — Rebel Dividends Calculator",
    description:
      "Plug in your investment amount. See live-calculated weekly dividends, annual yield, and what happens at $150 HYPE.",
  },
};

// ── Server-side data ───────────────────────────────────────────────────────

interface Stats {
  weeklyYieldRate: number;
  hypePrice: number;
  rdSharePrice: number;
}

async function getStats(): Promise<Stats> {
  const SUPABASE_URL =
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    "https://thqimnjwbmupxyfjreta.supabase.co";
  const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

  try {
    const [invRes, cgRes] = await Promise.allSettled([
      SERVICE_KEY
        ? fetch(
            `${SUPABASE_URL}/rest/v1/investors?select=cost_basis,weekly_dividend,is_active&is_active=eq.true`,
            {
              headers: {
                apikey: SERVICE_KEY,
                Authorization: `Bearer ${SERVICE_KEY}`,
              },
              next: { revalidate: 300 },
            }
          )
        : Promise.reject("no key"),
      fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=hyperliquid&vs_currencies=usd&include_24hr_change=true",
        { next: { revalidate: 120 } }
      ),
    ]);

    let hypePrice = 0;
    if (cgRes.status === "fulfilled" && cgRes.value.ok) {
      const cg = await cgRes.value.json();
      hypePrice = cg.hyperliquid?.usd ?? 0;
    }

    let weeklyYieldRate = 0;
    let rdSharePrice = 0;
    if (invRes.status === "fulfilled" && (invRes.value as Response).ok) {
      const investors: Array<{
        cost_basis: number;
        weekly_dividend: number;
      }> = await (invRes.value as Response).json();

      const totalAUM = investors.reduce((s, i) => s + (i.cost_basis ?? 0), 0);
      const totalWeekly = investors.reduce(
        (s, i) => s + (i.weekly_dividend ?? 0),
        0
      );

      if (totalAUM > 0) {
        weeklyYieldRate = totalWeekly / totalAUM;
      }

      // Approximate RD share price from HYPE price (fund is essentially HYPE)
      rdSharePrice = hypePrice;
    }

    return { weeklyYieldRate, hypePrice, rdSharePrice };
  } catch {
    return { weeklyYieldRate: 0.0028, hypePrice: 0, rdSharePrice: 0 };
  }
}

export const revalidate = 300;

// ── Page ──────────────────────────────────────────────────────────────────

export default async function CalculatorPage() {
  const stats = await getStats();

  const annualPct =
    stats.weeklyYieldRate > 0
      ? (stats.weeklyYieldRate * 52 * 100).toFixed(1)
      : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-green-950 border border-green-800 rounded-full px-4 py-1.5 text-green-300 text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Live yield data
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
          Dividend Income
          <br />
          <span className="text-green-400">Calculator</span>
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto">
          See exactly how much passive income your investment could generate.
          {annualPct && stats.weeklyYieldRate > 0 && (
            <span>
              {" "}
              Based on our current live yield of{" "}
              <span className="text-green-400 font-semibold">
                ~{annualPct}% annually
              </span>
              .
            </span>
          )}
        </p>
      </div>

      {/* Disclaimer banner */}
      <div className="bg-amber-950/30 border border-amber-800/40 rounded-xl px-4 py-3 mb-8 text-amber-300/80 text-xs">
        ⚠️ Projections are illustrative only. Yield rates vary week to week
        based on fund performance. Crypto investments carry risk of loss. This
        is not financial advice. Past performance does not guarantee future
        results. For accredited investors only per Reg D Rule 506(b).
      </div>

      <CalculatorClient
        weeklyYieldRate={stats.weeklyYieldRate}
        hypePrice={stats.hypePrice}
        rdSharePrice={stats.rdSharePrice}
      />

      {/* Footer nav */}
      <div className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap gap-4 justify-center text-sm text-gray-500">
        <Link href="/" className="hover:text-white transition">
          ← Home
        </Link>
        <Link href="/forward" className="hover:text-white transition">
          The $150 Thesis
        </Link>
        <Link href="/macro" className="hover:text-white transition">
          Macro Themes
        </Link>
        <Link href="/apply" className="text-blue-400 hover:text-blue-300 transition">
          Apply for Access →
        </Link>
      </div>
    </div>
  );
}
