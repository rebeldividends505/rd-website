export interface SitePageSection {
  heading?: string;
  body: string[];
}

export interface SitePage {
  slug: string;
  title: string;
  subtitle?: string;
  intro?: string;
  sections: SitePageSection[];
  cta?: { label: string; href: string };
}

export const defiIncomePages: SitePage[] = [
  {
    slug: "about",
    title: "About DeFi Income",
    subtitle: "High-yield, low-volatility DeFi lending — built for wealth preservation.",
    intro:
      "With 40+ years of combined experience in investing and crypto, we offer a forward-thinking, low-risk path to long-term capital growth. Our team applies institutional-grade diligence, leveraging blockchain transparency and diversified lending portfolios to deliver consistent, inflation-resistant returns — without compromising capital security.",
    sections: [
      {
        heading: "Our Strategy",
        body: [
          "DeFi Income combines strategic lending with deep protocol research and risk modeling. We target high-yield, low-volatility DeFi opportunities, using cutting-edge technology and robust liquidity partners to ensure performance and protection.",
        ],
      },
      {
        heading: "Our Mission",
        body: [
          "We help investors escape the erosion of inflation by offering a transparent, stable DeFi alternative that compounds capital reliably. Our mission is to create a secure, scalable income stream that outpaces outdated traditional finance.",
        ],
      },
      {
        heading: "Our Process",
        body: [
          "We perform rigorous due diligence on every lending protocol, monitor on-chain metrics, and continuously adapt to changing market conditions. Our goal: preserve principal, deliver alpha, and make your capital work harder — without the volatility.",
        ],
      },
      {
        heading: "Our Approach to Market Making",
        body: [
          "DeFi Income Corp adopts a data-driven and algorithmic approach to market making, combining deep liquidity pools with advanced trading strategies to maximize trading opportunities and minimize market impact.",
          "We strategically deploy concentrated liquidity around key price levels, execute algorithmic trades with precision, and continuously adapt to changing market conditions — on Ethereum, Arbitrum, Base, and other EVM-compatible chains.",
        ],
      },
    ],
    cta: { label: "Apply for Investor Access", href: "/apply" },
  },
  {
    slug: "welcome",
    title: "Welcome to DeFi Income",
    subtitle: "A smarter, high-yield alternative to traditional income vehicles.",
    intro:
      "At DeFi Income, we've built a private equity solution designed to replace outdated savings accounts, money markets, bonds, CDs, and annuities. When inflation has averaged over 18% since 2020, traditional \"safe\" investments offering sub-12% returns just don't cut it.",
    sections: [
      {
        heading: "The Picks and Shovels Approach to Crypto Exposure",
        body: [
          "Rather than speculating on tokens, we provide essential infrastructure to the DeFi ecosystem — generating consistent returns by powering decentralized markets. It's the smart, behind-the-scenes way to earn from crypto.",
        ],
      },
      {
        heading: "Delivering Liquidity Where It's Needed Most",
        body: [
          "DeFi Income Corp specializes in concentrated liquidity market making across leading decentralized exchanges (DEXs) on Ethereum, Arbitrum, Base, and more. We enhance capital efficiency, reduce slippage, and stabilize pricing — supporting seamless trading and robust growth for DEX communities.",
          "By pairing our market making expertise with our DeFi lending platform, we create a unique hybrid model that rewards our investors while advancing the DeFi ecosystem.",
        ],
      },
    ],
    cta: { label: "Learn More", href: "/apply" },
  },
  {
    slug: "strategy",
    title: "Our Strategy",
    subtitle: "Stable, inflation-beating yield through disciplined DeFi lending.",
    sections: [
      {
        heading: "Concentrated Liquidity Provision",
        body: [
          "We strategically deploy liquidity to specific trading pairs, concentrating it around key price levels to facilitate efficient trading and minimize price slippage.",
        ],
      },
      {
        heading: "Algorithmic Trading",
        body: [
          "Our advanced trading algorithms analyze market data and execute trades with precision and speed, optimizing liquidity provision and market impact.",
        ],
      },
      {
        heading: "Risk Management",
        body: [
          "We employ robust risk management protocols to mitigate exposure to market fluctuations and ensure the safety of our capital while maximizing returns.",
        ],
      },
      {
        heading: "Continuous Optimization",
        body: [
          "We continuously monitor market dynamics, adjust our liquidity provision strategies, and refine our algorithms to adapt to evolving market conditions and maximize performance.",
        ],
      },
    ],
    cta: { label: "Apply for Investor Access", href: "/apply" },
  },
  {
    slug: "disclaimer",
    title: "Disclaimer",
    subtitle: "Important information about investing with DeFi Income.",
    sections: [
      {
        body: [
          "DeFi Income, Inc. is a private investment firm. Content on this site is for informational purposes only and does not constitute an offer to sell or solicitation of an offer to buy securities. Investments involve risk, including potential loss of principal. Past performance is not indicative of future results.",
          "All securities offerings are made only to qualified investors pursuant to applicable exemptions under U.S. federal and state securities laws. Please consult your own legal, tax, and financial advisors before making any investment decision.",
        ],
      },
    ],
  },
  {
    slug: "contact",
    title: "Contact Us",
    subtitle: "Ready to invest? Let's talk.",
    sections: [
      {
        body: [
          "Call Dean at 505-322-7515 — or apply online and our team will reach out within 48 hours.",
        ],
      },
    ],
    cta: { label: "Apply for Investor Access", href: "/apply" },
  },
];

export const defiIncomeIndex: SitePage[] = defiIncomePages;

export function getDefiIncomePage(slug: string): SitePage | undefined {
  return defiIncomePages.find((p) => p.slug === slug);
}
