import Link from "next/link";

// ── Server-side data fetching ──────────────────────────────────────────────

interface FundStats {
  activeInvestors: number
  totalAUM: number
  totalDividendsPaid: number
  weeklyDividendRate: number
  hypePrice: number
  hypePriceChange: number
  hypeMarketCap: number | null
}

async function getFundStats(): Promise<FundStats> {
  const SUPABASE_URL =
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    "https://thqimnjwbmupxyfjreta.supabase.co";
  const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

  const defaults: FundStats = {
    activeInvestors: 137,
    totalAUM: 19600000,
    totalDividendsPaid: 0,
    weeklyDividendRate: 0,
    hypePrice: 0,
    hypePriceChange: 0,
    hypeMarketCap: null,
  };

  if (!SERVICE_KEY) return defaults;

  try {
    // Fetch investor metrics + HYPE price in parallel
    const [invRes, cgRes] = await Promise.allSettled([
      fetch(
        `${SUPABASE_URL}/rest/v1/investors?select=cost_basis,weekly_dividend,total_cash_dividend,is_active&is_active=eq.true`,
        {
          headers: {
            apikey: SERVICE_KEY,
            Authorization: `Bearer ${SERVICE_KEY}`,
          },
          next: { revalidate: 300 }, // cache 5 min
        }
      ),
      fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=hyperliquid&vs_currencies=usd&include_24hr_change=true&include_market_cap=true",
        { next: { revalidate: 120 } }
      ),
    ]);

    let hypePrice = 0;
    let hypePriceChange = 0;
    let hypeMarketCap: number | null = null;

    if (cgRes.status === "fulfilled" && cgRes.value.ok) {
      const cg = await cgRes.value.json();
      hypePrice = cg.hyperliquid?.usd ?? 0;
      hypePriceChange = cg.hyperliquid?.usd_24h_change ?? 0;
      hypeMarketCap = cg.hyperliquid?.usd_market_cap ?? null;
    }

    if (invRes.status === "fulfilled" && invRes.value.ok) {
      const investors: Array<{
        cost_basis: number;
        weekly_dividend: number;
        total_cash_dividend: number;
        is_active: boolean;
      }> = await invRes.value.json();

      const totalAUM = investors.reduce((s, i) => s + (i.cost_basis ?? 0), 0);
      const weeklyDividendRate = investors.reduce(
        (s, i) => s + (i.weekly_dividend ?? 0),
        0
      );
      const totalDividendsPaid = investors.reduce(
        (s, i) => s + (i.total_cash_dividend ?? 0),
        0
      );

      return {
        activeInvestors: investors.length,
        totalAUM,
        totalDividendsPaid,
        weeklyDividendRate,
        hypePrice,
        hypePriceChange,
        hypeMarketCap,
      };
    }

    return { ...defaults, hypePrice, hypePriceChange, hypeMarketCap };
  } catch {
    return defaults;
  }
}

function fmtM(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n.toFixed(0)}`;
}

function fmtK(n: number): string {
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}K`;
  return `$${n.toFixed(0)}`;
}

// ── Page ──────────────────────────────────────────────────────────────────

export const revalidate = 300; // ISR: re-fetch every 5 min

export default async function Home() {
  const stats = await getFundStats();

  const weeklyYieldPct =
    stats.totalAUM > 0
      ? ((stats.weeklyDividendRate / stats.totalAUM) * 100).toFixed(2)
      : null;

  const annualYieldPct =
    stats.totalAUM > 0
      ? (((stats.weeklyDividendRate * 52) / stats.totalAUM) * 100).toFixed(1)
      : null;

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Hero */}
      <section className="py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-950 border border-blue-800 rounded-full px-4 py-1.5 text-blue-300 text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Weekly dividends — every Friday
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
          Income Investing
          <br />
          for the Modern Era
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Real weekly dividends powered by DeFi yield. No lock-ups. No waiting.
          Hyperliquid-backed income streams that compound while you sleep.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/apply"
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition"
          >
            Apply for Access →
          </Link>
          <Link
            href="/calculator"
            className="border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-medium px-8 py-4 rounded-xl text-lg transition"
          >
            Calculate My Dividends
          </Link>
        </div>
      </section>

      {/* Live Stats Bar */}
      <section className="mb-8">
        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl px-6 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-gray-500 text-xs uppercase tracking-wider font-medium">
                Live Fund Data
              </span>
            </div>
            <div className="flex flex-wrap gap-6">
              {stats.hypePrice > 0 && (
                <div className="text-center">
                  <div className="text-white font-bold text-sm">
                    ${stats.hypePrice.toFixed(2)}
                    <span
                      className={`ml-1 text-xs ${stats.hypePriceChange >= 0 ? "text-green-400" : "text-red-400"}`}
                    >
                      {stats.hypePriceChange >= 0 ? "▲" : "▼"}
                      {Math.abs(stats.hypePriceChange).toFixed(1)}%
                    </span>
                  </div>
                  <div className="text-gray-500 text-xs">HYPE Price</div>
                </div>
              )}
              {stats.totalAUM > 0 && (
                <div className="text-center">
                  <div className="text-white font-bold text-sm">
                    {fmtM(stats.totalAUM)}
                  </div>
                  <div className="text-gray-500 text-xs">Fund AUM</div>
                </div>
              )}
              {stats.activeInvestors > 0 && (
                <div className="text-center">
                  <div className="text-white font-bold text-sm">
                    {stats.activeInvestors}
                  </div>
                  <div className="text-gray-500 text-xs">Active Investors</div>
                </div>
              )}
              {stats.weeklyDividendRate > 0 && (
                <div className="text-center">
                  <div className="text-green-400 font-bold text-sm">
                    {fmtK(stats.weeklyDividendRate)}
                    {weeklyYieldPct && (
                      <span className="text-green-600 text-xs ml-1">
                        ({weeklyYieldPct}%)
                      </span>
                    )}
                  </div>
                  <div className="text-gray-500 text-xs">This Week&apos;s Payout</div>
                </div>
              )}
              {stats.totalDividendsPaid > 0 && (
                <div className="text-center">
                  <div className="text-white font-bold text-sm">
                    {fmtM(stats.totalDividendsPaid)}
                  </div>
                  <div className="text-gray-500 text-xs">Total Paid Out</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {[
          {
            label: "Annual Yield",
            value: annualYieldPct ? `~${annualYieldPct}%` : "Variable",
            sub: "on cost basis (live)",
          },
          {
            label: "Underlying Asset",
            value: "HYPE",
            sub: `$${stats.hypePrice > 0 ? stats.hypePrice.toFixed(2) : "—"} today`,
          },
          { label: "Regulation", value: "506(b)", sub: "SEC Reg D offering" },
          { label: "Minimum", value: "$10K", sub: "accredited investors" },
        ].map((m) => (
          <div
            key={m.label}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center"
          >
            <div className="text-2xl font-bold text-white mb-1">{m.value}</div>
            <div className="text-gray-400 text-sm font-medium">{m.label}</div>
            <div className="text-gray-600 text-xs mt-1">{m.sub}</div>
          </div>
        ))}
      </section>

      {/* Feature Grid */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Why Rebel Dividends?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "💵",
              title: "Weekly Cash Dividends",
              desc: "Receive actual cash distributions every Friday, not paper gains. Your portfolio works for you around the clock.",
            },
            {
              icon: "🔗",
              title: "DeFi-Native Yield",
              desc: "Powered by Hyperliquid's perpetual DEX fee revenue — one of the most productive on-chain protocols in the world.",
            },
            {
              icon: "📊",
              title: "Full Transparency",
              desc: "Live investor portal with real-time portfolio tracking, dividend history, and on-chain verifiable positions.",
            },
            {
              icon: "🛡️",
              title: "Regulated Offering",
              desc: "Offered under Regulation D Rule 506(b) with full legal compliance, proper investor qualification, and documentation.",
            },
            {
              icon: "📈",
              title: "HYPE Upside",
              desc: "Your principal is deployed into HYPE — giving you both income yield and exposure to one of crypto's fastest-growing protocols.",
            },
            {
              icon: "⚡",
              title: "Fast Execution",
              desc: "No quarterly windows. No waiting periods. Investments processed and portal access granted within 24-48 hours.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-white text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof / Trust Strip */}
      {stats.totalDividendsPaid > 0 && (
        <section className="mb-20">
          <div className="bg-gradient-to-r from-green-950/40 via-green-900/20 to-green-950/40 border border-green-900/40 rounded-2xl p-8 text-center">
            <p className="text-green-400 text-sm uppercase tracking-widest font-medium mb-3">
              Proven Track Record
            </p>
            <p className="text-white text-3xl font-black mb-2">
              {fmtM(stats.totalDividendsPaid)} paid to investors
            </p>
            <p className="text-gray-400 text-sm">
              {stats.activeInvestors} active investors •{" "}
              {fmtK(stats.weeklyDividendRate)} distributed last Friday •{" "}
              {annualYieldPct ? `~${annualYieldPct}% annual yield` : "weekly payouts"} on AUM
            </p>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="text-center py-16 bg-gradient-to-b from-blue-950/30 to-transparent rounded-2xl mb-10 border border-blue-900/30">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to earn weekly dividends?
        </h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Join accredited investors building passive income with Rebel Dividends.
          Spots are limited — apply today.
        </p>
        <Link
          href="/apply"
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-4 rounded-xl text-lg transition inline-block"
        >
          Apply for Investor Access →
        </Link>
        <p className="mt-4 text-sm text-gray-500">
          Have questions first?{" "}
          <Link href="/faq" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition">
            Read the FAQ
          </Link>
        </p>
      </section>
    </div>
  );
}
