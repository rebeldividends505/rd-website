import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const revalidate = 300; // refresh every 5 min

export const metadata: Metadata = {
  title: "Daily Update — Rebel Dividends",
  description:
    "Daily market commentary, HYPE price action, and dividend income updates from Rebel Dividends. Published Mon–Fri by Jason Cox.",
};

interface HypePriceData {
  price: number | null;
  change24h: number | null;
  marketCap: number | null;
  volume24h: number | null;
  high24h: number | null;
  low24h: number | null;
  fetchedAt: string;
  error?: string;
}

async function fetchHypeData(): Promise<HypePriceData> {
  const fetchedAt = new Date().toISOString();
  try {
    // CoinGecko free API (no key required)
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/hyperliquid?localization=false&tickers=false&community_data=false&developer_data=false",
      { next: { revalidate: 300 } }
    );
    if (!res.ok) throw new Error(`CoinGecko ${res.status}`);
    const data = await res.json();
    const md = data.market_data;
    return {
      price: md?.current_price?.usd ?? null,
      change24h: md?.price_change_percentage_24h ?? null,
      marketCap: md?.market_cap?.usd ?? null,
      volume24h: md?.total_volume?.usd ?? null,
      high24h: md?.high_24h?.usd ?? null,
      low24h: md?.low_24h?.usd ?? null,
      fetchedAt,
    };
  } catch {
    // Fallback: Hyperliquid's own public API
    try {
      const res = await fetch("https://api.hyperliquid.xyz/info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "spotMetaAndAssetCtxs" }),
        next: { revalidate: 300 },
      });
      if (!res.ok) throw new Error(`HL ${res.status}`);
      const data = await res.json();
      // HYPE is typically token index 150 (HYPE/USDC spot pair)
      const tokens = data?.[0]?.tokens ?? [];
      const hypeToken = tokens.find((t: { name: string }) => t.name === "HYPE");
      const ctxs = data?.[1] ?? [];
      const hypeIdx = hypeToken ? tokens.indexOf(hypeToken) : -1;
      const hypeCtx = hypeIdx >= 0 ? ctxs[hypeIdx] : null;
      const price = hypeCtx?.markPx ? parseFloat(hypeCtx.markPx) : null;
      return { price, change24h: null, marketCap: null, volume24h: null, high24h: null, low24h: null, fetchedAt };
    } catch (e2) {
      return { price: null, change24h: null, marketCap: null, volume24h: null, high24h: null, low24h: null, fetchedAt, error: String(e2) };
    }
  }
}

function formatPrice(n: number | null): string {
  if (n === null) return "—";
  return `$${n.toFixed(2)}`;
}

function formatLargeNum(n: number | null): string {
  if (n === null) return "—";
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`;
  return `$${n.toLocaleString()}`;
}

function formatChange(n: number | null): { text: string; isPositive: boolean } {
  if (n === null) return { text: "—", isPositive: true };
  const sign = n >= 0 ? "+" : "";
  return { text: `${sign}${n.toFixed(2)}%`, isPositive: n >= 0 };
}

// Today's date formatted
function getTodayStr(): string {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Denver",
  });
}

function isWeekend(): boolean {
  const day = new Date().toLocaleDateString("en-US", { weekday: "long", timeZone: "America/Denver" });
  return day === "Saturday" || day === "Sunday";
}

export default async function DailyPage() {
  const hype = await fetchHypeData();
  const { text: changeText, isPositive } = formatChange(hype.change24h);
  const today = getTodayStr();
  const weekend = isWeekend();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-green-950 border border-green-800 rounded-full px-4 py-1.5 text-green-300 text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Daily Market Update
        </div>
        <h1 className="text-4xl font-black text-white mb-3">Rebel Dividends Daily</h1>
        <p className="text-gray-400 text-sm">{today}</p>
        <p className="text-gray-500 text-xs mt-1">By Jason Cox — Published Mon–Fri</p>
      </div>

      {/* HYPE Live Price Card */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-white">HYPE / USD</h2>
            <p className="text-gray-500 text-xs">Hyperliquid Protocol Token</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-black text-white">{formatPrice(hype.price)}</div>
            {hype.change24h !== null && (
              <div className={`text-sm font-semibold mt-1 ${isPositive ? "text-green-400" : "text-red-400"}`}>
                {changeText} (24h)
              </div>
            )}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Market Cap", value: formatLargeNum(hype.marketCap) },
            { label: "24h Volume", value: formatLargeNum(hype.volume24h) },
            { label: "24h High", value: formatPrice(hype.high24h) },
            { label: "24h Low", value: formatPrice(hype.low24h) },
          ].map((s) => (
            <div key={s.label} className="bg-gray-800 rounded-xl p-3 text-center">
              <div className="text-white font-semibold text-sm">{s.value}</div>
              <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-3 text-right text-gray-600 text-xs">
          Updated: {new Date(hype.fetchedAt).toLocaleTimeString("en-US", { timeZone: "America/Denver" })} MT
          {hype.error && <span className="text-yellow-600 ml-2">(fallback data)</span>}
        </div>
      </div>

      {/* Today's Commentary */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">📝</span>
          <h2 className="text-lg font-bold text-white">
            {weekend ? "Weekend Wrap" : "Today's Commentary"}
          </h2>
        </div>

        {weekend ? (
          <div className="text-gray-400 space-y-3 text-sm leading-relaxed">
            <p>
              Markets rest, but yield doesn't stop. Rebel Dividends runs 24/7 — your HYPE position generates fee revenue around the clock, regardless of what day it is.
            </p>
            <p>
              Use the weekend to review your position, check the investor portal, or share the strategy with someone who should be getting paid weekly like you are.
            </p>
            <p className="text-gray-500 text-xs">
              Full daily commentary resumes Monday. Check back then.
            </p>
          </div>
        ) : (
          <div className="text-gray-400 space-y-3 text-sm leading-relaxed">
            <p>
              HYPE continues to represent one of the most productive yield-generating assets in crypto.
              Hyperliquid&apos;s perpetual DEX consistently ranks among the highest-volume decentralized exchanges globally,
              and that volume translates directly to fee revenue — revenue that flows to RD investors as weekly dividends.
            </p>
            <p>
              {hype.price !== null && hype.change24h !== null ? (
                <>
                  At <strong className="text-white">{formatPrice(hype.price)}</strong>, HYPE is trading{" "}
                  <span className={isPositive ? "text-green-400 font-medium" : "text-red-400 font-medium"}>
                    {changeText}
                  </span>{" "}
                  over the last 24 hours. {isPositive
                    ? "Positive price action amplifies total return for investors who hold — your income plus appreciation is compounding."
                    : "Price consolidation periods are normal in high-growth protocols. The yield engine keeps running regardless of short-term price moves."
                  }
                </>
              ) : (
                "Market data is updating. Check the live price above for current levels."
              )}
            </p>
            <p>
              If you&apos;re already invested: your Friday dividend is processing. If you&apos;re not yet in the fund —
              this is what you&apos;re missing every week.
            </p>
          </div>
        )}
      </div>

      {/* Why This Matters section */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-6">
        <h2 className="text-lg font-bold text-white mb-4">📊 The Dividend Math</h2>
        <div className="grid grid-cols-3 gap-4 text-center mb-4">
          {[
            { label: "Min Investment", value: "$10,000" },
            { label: "Offering Type", value: "506(b)" },
            { label: "Payment Cycle", value: "Weekly" },
          ].map((item) => (
            <div key={item.label} className="bg-gray-800 rounded-xl p-3">
              <div className="text-white font-bold">{item.value}</div>
              <div className="text-gray-500 text-xs mt-0.5">{item.label}</div>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm">
          Weekly dividends are paid every Friday. Amounts vary based on Hyperliquid protocol fee revenue,
          HYPE price at distribution, and your share count. Investors receive real-time tracking in their{" "}
          <strong className="text-white">investor portal</strong>.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-blue-950 to-gray-900 border border-blue-800 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">Get Paid Every Friday</h2>
        <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">
          Apply for accredited investor access. Minimum $10K. Dividend income starts the week your position opens.
        </p>
        <Link
          href="/apply"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition"
        >
          Apply for Access →
        </Link>
        <p className="text-gray-600 text-xs mt-4">
          Regulation D Rule 506(b) · Accredited & sophisticated investors · No public solicitation
        </p>
      </div>

      {/* Footer nav */}
      <div className="mt-8 flex justify-center gap-6 text-gray-600 text-sm">
        <Link href="/" className="hover:text-gray-300 transition">Home</Link>
        <Link href="/forward" className="hover:text-gray-300 transition">How It Works</Link>
        <Link href="/macro" className="hover:text-gray-300 transition">Macro Thesis</Link>
        <Link href="/apply" className="hover:text-gray-300 transition">Apply</Link>
      </div>
    </div>
  );
}
