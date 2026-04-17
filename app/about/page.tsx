import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Rebel Dividends",
  description: "Rebel Dividends specializes in cryptocurrency income investing. We provide weekly dividends through DeFi yield strategies, powered by the Hyperliquid protocol.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-blue-950 border border-blue-800 rounded-full px-4 py-1.5 text-blue-300 text-sm font-medium mb-6">
          About Us
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-white">
          Built for Income.
          <br />
          <span className="text-green-400">Not Speculation.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Rebel Dividends Inc specializes in cryptocurrency investments — with a focus
          on generating real, recurring income for our investors.
        </p>
      </div>

      {/* Company story */}
      <div className="space-y-12">
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Who We Are</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Rebel Dividends is not just an investor — we are a contributor to the evolution of Web3.
            We occasionally provide seed-round funding to protocol development teams tackling challenges
            that we, as expert-level participants in Web3, encounter firsthand.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Our approach is methodical and income-first. While the rest of crypto chases moonshots,
            we focus on protocols generating real revenue — and we pass that revenue directly to
            our investors every Friday.
          </p>
        </section>

        {/* Two column: strategy + mission */}
        <div className="grid md:grid-cols-2 gap-6">
          <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <div className="text-3xl mb-4">⚡</div>
            <h2 className="text-xl font-bold text-white mb-3">Our Strategy</h2>
            <p className="text-gray-300 leading-relaxed">
              Our advanced strategies involve seizing opportunities early in emerging narratives —
              whether through investments in groundbreaking technologies, utility tokens, or
              governance tokens. By staying ahead of the curve, we position ourselves to capitalize
              on explosive growth potential while simultaneously generating yield for investors.
            </p>
          </section>

          <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <div className="text-3xl mb-4">🎯</div>
            <h2 className="text-xl font-bold text-white mb-3">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              We aim to enrich the experience of retirement by providing a safe and steady income
              via dividends — income that is much more lucrative than traditional financial products.
              Weekly dividends, not quarterly. Real yield, not promises.
            </p>
          </section>
        </div>

        {/* Why HYPE */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Why Hyperliquid?</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Hyperliquid is the foundation of our current fund. It is not a speculative bet — it is
            the single highest-revenue-generating protocol in all of cryptocurrency, producing more
            fee revenue than Ethereum, Solana, and most centralized exchanges combined.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Annual Revenue", value: "$955M+", sub: "and accelerating" },
              { label: "Revenue Burned", value: "97%", sub: "buyback & burn" },
              { label: "Employees", value: "11", sub: "no VC, bootstrapped" },
              { label: "Our Investors", value: "Weekly", sub: "dividends every Friday" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-800 rounded-xl p-4 text-center">
                <div className="text-xl font-bold text-green-400">{s.value}</div>
                <div className="text-gray-300 text-sm font-medium mt-1">{s.label}</div>
                <div className="text-gray-600 text-xs mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Leadership</h2>
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-2xl font-bold text-white flex-shrink-0">
              JC
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Jason Cox</h3>
              <p className="text-blue-400 text-sm font-medium mb-2">Founder & CEO</p>
              <p className="text-gray-300 leading-relaxed text-sm">
                Jason Cox founded Rebel Dividends with one thesis: that the best income investments
                of the next decade will come from decentralized finance, not Wall Street.
                With deep expertise in DeFi protocol mechanics, on-chain analytics, and portfolio
                construction, Jason manages fund strategy and investor relations for Rebel Dividends.
              </p>
            </div>
          </div>
        </section>

        {/* Regulatory */}
        <section className="bg-blue-950/40 border border-blue-800/30 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <span className="text-3xl">🛡️</span>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Regulation D Offering</h2>
              <p className="text-gray-300 leading-relaxed text-sm">
                Rebel Dividends operates under Regulation D Rule 506(b) of the Securities Act of 1933.
                Participation is available to accredited investors and a limited number of sophisticated
                investors. All participants complete a qualification process prior to investment.
                This is not a public offering.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Invest?</h2>
          <p className="text-gray-400 mb-8">
            Minimum investment $10,000. Accredited investors only (with limited sophisticated investor slots).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition"
            >
              Apply for Access →
            </Link>
            <Link
              href="/forward"
              className="border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-medium px-8 py-4 rounded-xl text-lg transition"
            >
              Read the Investment Thesis
            </Link>
          </div>
        </div>
      </div>

      {/* Legal footer note */}
      <div className="mt-16 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-600 text-xs leading-relaxed max-w-2xl mx-auto">
          Rebel Dividends Inc. · 11112 Sidney Ave NE, Albuquerque, New Mexico 87111 ·
          Securities offered under Regulation D Rule 506(b).
          This is not investment advice. Past performance does not guarantee future results.
          Investing involves risk, including loss of principal.{" "}
          <Link href="/disclaimer" className="text-gray-500 hover:text-gray-300 underline">
            Full Disclaimer
          </Link>
        </p>
      </div>
    </div>
  );
}
