import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your 2026 Distributions Are Tax-Free — Rebel Dividends",
  description:
    "Rebel Dividends uses Return of Capital — the same wealth-preservation strategy employed by ultra-high-net-worth families. Your 2026 weekly distributions owe $0 in federal income tax.",
};

export default function TaxFreePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-10">
        <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">
          Rebel Dividends · Shareholder Update
        </div>
        <div className="text-gray-500 text-sm mb-3">2026 Tax Update</div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
          Your Weekly Distributions Are Tax-Free
        </h1>
        <p className="text-xl text-gray-400">
          Rebel Dividends uses the same wealth-preservation strategy employed by ultra-high-net-worth
          families. Here&apos;s what it means for your income.
        </p>
      </div>

      <div className="space-y-10">
        {/* Hero */}
        <div className="bg-green-950 border border-green-800 rounded-2xl p-10 text-center">
          <div className="text-7xl font-black text-green-400 mb-3">$0</div>
          <div className="text-xl text-gray-300">
            Federal income tax on your 2026 Rebel Dividends distributions
          </div>
        </div>

        {/* The Strategy */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">The Strategy</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The wealthiest families in America don&apos;t sell their assets. They hold appreciating
            positions, borrow against them at low interest rates, and live on the proceeds. No sale
            means no realized gain. No realized gain means no tax.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Rebel Dividends operates the same way. Our portfolio continues to appreciate. Rather
            than selling assets to fund your weekly distributions, we use low-cost debt. The result:
            the company has no realized gains, no Earnings &amp; Profits, and your distributions are
            classified as Return of Capital under IRC Section 301(c)(2).
          </p>
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-5">
            <p className="text-gray-200 leading-relaxed text-sm italic">
              Return of Capital is not a loophole. It is the legally defined tax treatment for
              distributions from a corporation with no Earnings &amp; Profits. It is the same
              classification used by some of the largest companies in America — including major
              REITs, MLPs, and holding companies — to deliver tax-free income to their shareholders.
            </p>
          </div>
          <p className="text-gray-300 leading-relaxed mt-4">
            Your distributions reduce your cost basis in RD shares rather than being added to your
            taxable income. You owe nothing to the IRS until you sell your shares — and even then,
            the gain is taxed at the lower capital gains rate, not ordinary income rates.
          </p>
        </section>

        {/* Note on 2025 */}
        <div className="bg-yellow-950 border border-yellow-800 rounded-xl p-5">
          <h3 className="text-lg font-bold text-yellow-400 mb-2">Note on 2025</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            This classification did not apply to 2025 distributions. The Hyperliquid airdrop we
            received in late 2024 created Earnings &amp; Profits for the 2025 tax year, which meant
            those distributions were taxed as ordinary dividends. That event is behind us. With no
            further asset sales or airdrops, the company has zero E&amp;P going forward — and your
            2026 distributions (and beyond) are classified as Return of Capital.
          </p>
        </div>

        {/* 1099 Table */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">What Changes On Your 1099</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-800 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              <div className="p-4"></div>
              <div className="p-4 border-l border-gray-700">Ordinary Dividend</div>
              <div className="p-4 border-l border-gray-700 text-green-400">Return of Capital</div>
            </div>
            {[
              ["1099-DIV Box", "Box 1a", "Box 3"],
              ["Federal Tax Rate", "Up to 37%", "0%"],
              ["Net Investment Income Tax", "3.8%", "0%"],
              ["Added to Your AGI", "Yes", "No"],
              ["Reported as Taxable Income", "Yes", "No"],
            ].map(([label, bad, good]) => (
              <div key={label} className="grid grid-cols-3 border-t border-gray-800 text-sm">
                <div className="p-4 text-gray-400">{label}</div>
                <div className="p-4 border-l border-gray-800 text-red-400">{bad}</div>
                <div className="p-4 border-l border-gray-800 text-green-400 font-medium">{good}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Looking Ahead */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Looking Ahead — No Reason to Sell Early
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Our portfolio continues to grow, and our strategy is unchanged: hold, borrow, and
            compound. As long as the company does not realize gains, your distributions remain
            tax-free. If and when we take a strategic profit, we intend to pair it with an
            extra-large distribution to shareholders.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-gray-500 text-xs uppercase tracking-wider mb-2">12-Month Target</div>
              <div className="text-4xl font-black text-white">$150</div>
              <div className="text-gray-500 text-sm">per share</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-gray-500 text-xs uppercase tracking-wider mb-2">24-Month Target</div>
              <div className="text-4xl font-black text-white">$300</div>
              <div className="text-gray-500 text-sm">per share</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-4 leading-relaxed">
            There is no rush. The longer we hold, the more the portfolio appreciates, the more we
            can borrow, and the more tax-free income we can distribute. This is how wealth compounds.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
          <p className="text-white font-bold text-lg mb-1">Questions?</p>
          <p className="text-gray-400 mb-2">
            Contact Dean Gallagher at dean@rebeldividends.com or (505) 322-7515.
          </p>
          <p className="text-gray-500 text-sm mb-6">
            Forward this page to your CPA — they&apos;ll understand exactly what Return of Capital
            means for your return.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-[#0a7c42] text-white font-bold py-3 px-8 rounded-xl text-lg hover:bg-[#0a6a38] transition-colors"
          >
            Start Earning Tax-Free Weekly Income
          </Link>
        </div>

        <p className="text-xs text-gray-600 leading-relaxed">
          This page is for informational purposes only and does not constitute tax, legal, or
          investment advice. Individual tax outcomes depend on your specific basis, state of
          residence, filing status, and overall tax situation. Return of Capital distributions
          reduce your cost basis in RD shares; distributions in excess of basis are subject to
          capital gains tax. State tax treatment varies. The tax-free classification of
          distributions depends on the company not realizing gains in a given tax year; this status
          may change. Consult your personal tax advisor. Rebel Dividends Corporation charges a 20%
          management fee on all dividends distributed to shareholders.
        </p>
      </div>
    </div>
  );
}
