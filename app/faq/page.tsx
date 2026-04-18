import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — Rebel Dividends",
  description:
    "Common questions about Rebel Dividends — weekly dividends, HYPE token, accredited investor requirements, minimum investment, and how the fund works.",
};

const faqs = [
  {
    category: "Getting Started",
    items: [
      {
        q: "What is Rebel Dividends?",
        a: "Rebel Dividends is a private investment fund that generates weekly dividend income from Hyperliquid (HYPE) token staking and DeFi yield strategies. Investors receive weekly cash dividends proportional to their share count, paid directly to their preferred wallet or account.",
      },
      {
        q: "Who can invest?",
        a: "Rebel Dividends is a Regulation D 506(b) offering. Most investors must be accredited — meaning you have a net worth over $1M (excluding primary residence) or annual income over $200K ($300K joint). We can also accept up to 35 \"sophisticated\" non-accredited investors at our discretion. If you're unsure whether you qualify, apply and we'll guide you through it.",
      },
      {
        q: "What is the minimum investment?",
        a: "The minimum investment is $25,000. Most investors come in between $50,000 and $250,000. There is no formal maximum, though larger positions ($500K+) are reviewed individually.",
      },
      {
        q: "How do I apply?",
        a: "Submit the investor application at rebeldividends.com/apply. Jason reviews all applications personally and responds within 48 hours. If approved, you'll receive onboarding documents and portal access.",
      },
    ],
  },
  {
    category: "Dividends & Returns",
    items: [
      {
        q: "How often are dividends paid?",
        a: "Dividends are paid every Friday. As long as you're an active investor with shares, you receive a weekly payment. There is no waiting period after your initial investment clears.",
      },
      {
        q: "What is the current yield?",
        a: "Current annualized yield is approximately 35–45% depending on HYPE price. Because dividends are calculated from HYPE staking rewards, yield fluctuates with HYPE price and network participation. The calculator at rebeldividends.com/calculator shows real-time estimates based on live fund data.",
      },
      {
        q: "How is my dividend amount calculated?",
        a: "Each investor holds a proportional share of the fund. Your weekly dividend = (your shares / total fund shares) × weekly HYPE staking rewards. As HYPE price increases, the dollar value of each weekly payment increases — even if your share count stays the same.",
      },
      {
        q: "Can I reinvest my dividends instead of taking cash?",
        a: "Yes. You can reinvest dividends to purchase additional RD shares, compounding your position over time. The reinvestment option is set during onboarding and can be changed at any time through your investor portal.",
      },
      {
        q: "What happens to my returns if HYPE hits $150?",
        a: "At $150 HYPE (our public target), a $100,000 investment at current share pricing would generate roughly $1,200–$2,000/week in dividends depending on fund size. Use the calculator at rebeldividends.com/calculator for a personalized projection.",
      },
    ],
  },
  {
    category: "HYPE Token",
    items: [
      {
        q: "What is HYPE?",
        a: "HYPE is the native token of Hyperliquid — a high-performance decentralized exchange (DEX) that processes over 100,000 transactions per second with sub-second finality. Hyperliquid is one of the fastest-growing DeFi protocols, and HYPE is staked to secure the network and earn yield.",
      },
      {
        q: "Why is your $150 target realistic?",
        a: "Hyperliquid's revenue, TVL, and user growth rival top-tier DeFi protocols. At current revenue run rates, fundamental analysis supports a $150+ token price on a 12-month horizon. Our weekly investor updates at rebeldividends.com/updates track price, thesis developments, and key milestones.",
      },
      {
        q: "What are the risks?",
        a: "HYPE is a volatile digital asset. Staking rewards fluctuate. Token price can drop as well as rise. Investing in Rebel Dividends involves significant risk of capital loss — this is not a guaranteed return product. You should only invest capital you can afford to have at risk. Read the full risk disclosures in the subscription agreement before investing.",
      },
      {
        q: "Is my principal safe?",
        a: "Your principal is invested in HYPE tokens held in the fund. If HYPE price declines significantly, the portfolio value declines proportionally. Weekly dividends provide ongoing income but do not protect against principal loss. This is an equity-like exposure to HYPE, not a fixed-income product.",
      },
    ],
  },
  {
    category: "Operations & Legal",
    items: [
      {
        q: "Is Rebel Dividends SEC-registered?",
        a: "Rebel Dividends operates under a Regulation D 506(b) exemption, which allows private fund offerings to accredited investors without full SEC registration. All investor agreements are legally executed subscription documents. We are not a registered investment advisor or broker-dealer.",
      },
      {
        q: "How do I receive my payments?",
        a: "Dividend payments are distributed weekly by wire transfer or crypto transfer depending on investor preference. Payment instructions are captured during onboarding. Most investors receive payment every Friday by end of business.",
      },
      {
        q: "Do I get a tax document?",
        a: "Yes. All investors receive year-end documentation for tax purposes. Detailed dividend history is available in your investor portal at any time, downloadable as CSV. Consult your tax advisor regarding treatment of cryptocurrency-sourced income.",
      },
      {
        q: "Can I withdraw my investment?",
        a: "This is a private fund with a defined lock-up structure outlined in your subscription agreement. Redemption requests are reviewed on a case-by-case basis. Rebel Dividends is designed as a long-term income position, not a liquid trading account.",
      },
      {
        q: "Who runs Rebel Dividends?",
        a: "Jason Cox is the fund manager and primary decision-maker at Rebel Dividends. Jason has been a full-time DeFi and crypto investor since 2021, with a track record publicly documented in weekly investor updates going back to November 2025.",
      },
    ],
  },
  {
    category: "Investor Portal",
    items: [
      {
        q: "What can I do in the investor portal?",
        a: "The portal (portal.rebeldividends.com) gives you real-time access to: your portfolio value, weekly dividend history, HYPE price tracking, investment timeline, milestone badges, downloadable statements, and a direct message channel to the admin team.",
      },
      {
        q: "How do I get portal access?",
        a: "After your application is approved and subscription documents are signed, you'll receive a magic-link email to activate your portal account. Login is passwordless — just enter your email and click the link we send.",
      },
      {
        q: "Can I add more to my investment?",
        a: "Yes. Active investors can submit a \"top-up\" request through the portal under Invest → Add Investment. Ryan processes these on a rolling basis. Additional investments are subject to the same accreditation requirements.",
      },
    ],
  },
];

export default function FAQPage() {
  const totalQuestions = faqs.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-blue-950 border border-blue-800 rounded-full px-4 py-1.5 text-blue-300 text-sm font-medium mb-6">
          ❓ {totalQuestions} Questions Answered
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          Everything you need to know before applying to become a Rebel Dividends investor.
        </p>
        <p className="text-sm text-gray-600 mt-3">
          Can&apos;t find your answer?{" "}
          <Link href="/apply" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition">
            Apply and Jason will reach out directly.
          </Link>
        </p>
      </div>

      {/* Quick Jump */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {faqs.map((cat) => (
          <a
            key={cat.category}
            href={`#${cat.category.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
            className="px-3 py-1.5 bg-gray-900 border border-gray-700 hover:border-blue-600 text-gray-400 hover:text-white text-sm rounded-full transition"
          >
            {cat.category}
          </a>
        ))}
      </div>

      {/* FAQ Sections */}
      <div className="space-y-14">
        {faqs.map((section) => {
          const sectionId = section.category
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "");
          return (
            <section key={section.category} id={sectionId}>
              <h2 className="text-xl font-bold text-white mb-6 pb-3 border-b border-gray-800">
                {section.category}
              </h2>
              <div className="space-y-0 divide-y divide-gray-800 border border-gray-800 rounded-xl overflow-hidden">
                {section.items.map((item, idx) => (
                  <FAQItem key={idx} q={item.q} a={item.a} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-16 bg-gradient-to-br from-blue-950 to-gray-900 border border-blue-800 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-3">
          Ready to start earning weekly dividends?
        </h3>
        <p className="text-gray-400 mb-6 max-w-lg mx-auto">
          Submit your application today. Jason reviews all applications personally and responds within 48 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/apply"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-xl transition"
          >
            Apply for Investor Access →
          </Link>
          <Link
            href="/calculator"
            className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-medium px-8 py-3 rounded-xl transition border border-gray-700"
          >
            Calculate My Returns
          </Link>
        </div>
      </div>

      {/* Legal disclaimer */}
      <p className="mt-8 text-xs text-gray-600 text-center leading-relaxed">
        This FAQ is for informational purposes only and does not constitute investment advice. Investing in Rebel Dividends involves substantial risk of loss. Past performance is not indicative of future results. Only invest what you can afford to lose. Please consult a financial advisor before investing.
      </p>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group bg-gray-900 hover:bg-gray-900/80 transition-colors">
      <summary className="flex items-start justify-between gap-4 p-5 cursor-pointer list-none select-none">
        <span className="font-semibold text-white text-sm leading-relaxed pr-2">{q}</span>
        <span className="mt-0.5 flex-shrink-0 text-gray-500 group-open:rotate-180 transition-transform duration-200 text-base">
          ▼
        </span>
      </summary>
      <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed -mt-1">
        {a}
      </div>
    </details>
  );
}
