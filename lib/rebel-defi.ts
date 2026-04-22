import type { SitePage } from "./defi-income";

export const rebelDefiPages: SitePage[] = [
  {
    slug: "about",
    title: "About Rebel DeFi",
    subtitle: "Pioneering decentralized finance on Bitcoin.",
    intro:
      "Rebel DeFi, Inc. specializes in cryptocurrency investments, pioneering the field of decentralized finance (DeFi) on Bitcoin. With a team boasting over 40 years of combined experience in traditional investing and cryptocurrencies, we're committed to maximizing gains and delivering consistent dividends to our shareholder base.",
    sections: [
      {
        heading: "Our Strategy",
        body: [
          "Our approach to putting capital to work in DeFi on Bitcoin is both strategic and forward-thinking. We leverage deep market understanding to identify high-potential projects and protocols within the Bitcoin DeFi space.",
        ],
      },
      {
        heading: "Our Mission",
        body: [
          "Our tailored asset transfer solutions ensure that your investments seamlessly transition to your beneficiaries, providing peace of mind and continuity for your wealth management strategy.",
        ],
      },
      {
        heading: "Our Process",
        body: [
          "Through meticulous research and analysis, we select investments that align with our rigorous criteria for risk management and profitability — ensuring every dollar entrusted to us is deployed effectively and efficiently.",
        ],
      },
    ],
    cta: { label: "Apply for Investor Access", href: "/apply" },
  },
  {
    slug: "welcome",
    title: "Welcome to Rebel DeFi",
    subtitle: "Empowering your crypto investments on Bitcoin.",
    intro:
      "At Rebel DeFi, Inc., we're not just another cryptocurrency investment firm — we're pioneers in the dynamic world of decentralized finance (DeFi) on Bitcoin. With over 40 years of combined experience in both traditional investing and cutting-edge cryptocurrencies, we leverage our expertise to maximize gains and deliver consistent dividends to our valued shareholders.",
    sections: [
      {
        heading: "Why DeFi on Bitcoin",
        body: [
          "Decentralized finance on Bitcoin has emerged as a groundbreaking trend, offering unparalleled opportunities for growth and innovation. At Rebel DeFi, we recognize the immense potential of this burgeoning ecosystem and are dedicated to harnessing its power to generate substantial returns for our investors.",
        ],
      },
      {
        heading: "Ahead of the Curve",
        body: [
          "With a relentless focus on driving value and staying ahead of market trends, Rebel DeFi is at the forefront of the DeFi revolution on Bitcoin. Join us and capitalize on the explosive growth potential of decentralized finance.",
        ],
      },
    ],
    cta: { label: "Learn More", href: "/apply" },
  },
  {
    slug: "learn-more",
    title: "Learn More — Sign Up Now",
    subtitle: "Grow wealth and earn weekly dividends.",
    intro: "See if you qualify now.",
    sections: [
      {
        body: [
          "Rebel DeFi pays weekly dividends to qualified investors through our Bitcoin DeFi strategies. Apply online — our team reviews applications within 48 hours and will contact you to discuss qualification and next steps.",
        ],
      },
    ],
    cta: { label: "Apply for Investor Access", href: "/apply" },
  },
  {
    slug: "disclaimer",
    title: "Disclaimer",
    subtitle: "Important information about investing with Rebel DeFi.",
    sections: [
      {
        body: [
          "Rebel DeFi, Inc. is a private investment firm. Content on this site is for informational purposes only and does not constitute an offer to sell or solicitation of an offer to buy securities. Investments involve risk, including potential loss of principal. Past performance is not indicative of future results.",
          "All securities offerings are made only to qualified investors pursuant to applicable exemptions under U.S. federal and state securities laws. Please consult your own legal, tax, and financial advisors before making any investment decision.",
        ],
      },
    ],
  },
  {
    slug: "contact",
    title: "Contact Us",
    subtitle: "Questions? We're here to help.",
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

export function getRebelDefiPage(slug: string): SitePage | undefined {
  return rebelDefiPages.find((p) => p.slug === slug);
}
