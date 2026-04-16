import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-white`}>
        {/* Nav */}
        <nav className="border-b border-gray-800 bg-gray-950/90 backdrop-blur sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
            <Link href="/" className="font-bold text-xl text-white hover:text-blue-400 transition">
              Rebel Dividends
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/macro" className="text-gray-400 hover:text-white text-sm transition">Macro</Link>
              <Link href="/forward" className="text-gray-400 hover:text-white text-sm transition">Forward</Link>
              <Link href="/daily" className="text-gray-400 hover:text-white text-sm transition">Daily</Link>
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
          <p>© {new Date().getFullYear()} Rebel Dividends. All rights reserved.</p>
          <p className="mt-2 text-xs max-w-xl mx-auto">
            This is not investment advice. Past performance does not guarantee future results.
            All investments carry risk. Securities offered under Regulation D Rule 506(b).
          </p>
        </footer>
      </body>
    </html>
  );
}
