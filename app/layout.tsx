import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

async function getHypePrice(): Promise<{ price: number; change: number } | null> {
  try {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=hyperliquid&vs_currencies=usd&include_24hr_change=true',
      { next: { revalidate: 120 } }
    )
    if (!res.ok) throw new Error('fetch failed')
    const data = await res.json()
    return { price: data.hyperliquid?.usd ?? 0, change: data.hyperliquid?.usd_24h_change ?? 0 }
  } catch {
    return null
  }
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rebel Dividends — Income Investing for the Modern Era",
    template: "%s — Rebel Dividends",
  },
  description: "Weekly dividends, DeFi yield, and passive income strategies built for serious investors. Powered by Hyperliquid protocol fees.",
  metadataBase: new URL("https://rebeldividends.com"),
  openGraph: {
    type: "website",
    siteName: "Rebel Dividends",
    title: "Rebel Dividends — Income Investing for the Modern Era",
    description: "Weekly dividends, DeFi yield, and passive income strategies built for serious investors.",
    url: "https://rebeldividends.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rebel Dividends — Income Investing for the Modern Era",
    description: "Weekly dividends, DeFi yield, and passive income strategies built for serious investors.",
  },
  keywords: ["dividend investing", "DeFi yield", "Hyperliquid", "HYPE", "passive income", "crypto dividends", "506b"],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    types: {
      'application/rss+xml': [
        { url: '/updates/feed.xml', title: 'Rebel Dividends — Investor Updates' },
      ],
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hype = await getHypePrice()

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-white`}>
        {/* HYPE price ticker bar */}
        {hype && (
          <div className="bg-blue-950/60 border-b border-blue-900/50 py-1 text-center text-xs">
            <span className="text-gray-400">HYPE </span>
            <span className="text-white font-mono font-semibold">${hype.price.toFixed(2)}</span>
            <span className={`ml-2 font-mono ${hype.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {hype.change >= 0 ? '▲' : '▼'} {Math.abs(hype.change).toFixed(1)}%
            </span>
            <span className="text-gray-600 ml-3">· 24h change · powered by Hyperliquid</span>
          </div>
        )}
        {/* Nav */}
        <nav className="border-b border-gray-800 bg-gray-950/90 backdrop-blur sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
            <Link href="/" className="font-bold text-xl text-white hover:text-blue-400 transition">
              Rebel Dividends
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/macro" className="text-gray-400 hover:text-white text-sm transition">Macro</Link>
              <Link href="/forward" className="text-gray-400 hover:text-white text-sm transition">Forward</Link>
              <Link href="/updates" className="text-gray-400 hover:text-white text-sm transition">Updates</Link>
              <Link href="/calculator" className="text-gray-400 hover:text-white text-sm transition">Calculator</Link>
              <Link href="/results" className="text-gray-400 hover:text-white text-sm transition">Results</Link>
              <Link href="/daily" className="text-gray-400 hover:text-white text-sm transition">Daily</Link>
              <Link href="/faq" className="text-gray-400 hover:text-white text-sm transition">FAQ</Link>
              <Link href="/apply" className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
                Apply
              </Link>
            </div>
          </div>
        </nav>

        {/* Page content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-800 mt-20 py-10 text-center text-gray-500 text-sm">
          <div className="flex items-center justify-center gap-6 mb-4">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/macro" className="hover:text-gray-300">Macro</Link>
            <Link href="/forward" className="hover:text-gray-300">Forward</Link>
            <Link href="/updates" className="hover:text-gray-300">Updates</Link>
            <Link href="/daily" className="hover:text-gray-300">Daily</Link>
            <Link href="/apply" className="hover:text-gray-300">Apply</Link>
            <Link href="/webinar-replay" className="hover:text-gray-300">Webinar</Link>
            <Link href="/legal" className="hover:text-gray-300">Legal</Link>
            <Link href="/disclaimer" className="hover:text-gray-300">Disclaimer</Link>
            <Link href="/privacy" className="hover:text-gray-300">Privacy</Link>
            <Link href="/risk-disclosure" className="hover:text-gray-300">Risk Disclosure</Link>
          </div>
          <p>© {new Date().getFullYear()} Rebel Dividends. All rights reserved.</p>
          <p className="mt-2 text-xs max-w-xl mx-auto">
            This is not investment advice. Past performance does not guarantee future results.
            All investments carry risk. Securities offered pursuant to Rule 506(b) of Regulation D.
            No general solicitation. Accredited and sophisticated investors only.
          </p>
        </footer>
      </body>
    </html>
  );
}
