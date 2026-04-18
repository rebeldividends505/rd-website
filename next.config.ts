import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ── WordPress URL compatibility ───────────────────────────────────────
      // These are legacy WP slugs that need to 301 → new Next.js routes so
      // bookmarks, Google index, and email links keep working after DNS switch.

      // Privacy / Terms
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      // Thank-you page
      {
        source: "/thanks-for-signing-up",
        destination: "/thank-you",
        permanent: true,
      },
      // November 18 2025 update (WP slug used full title, Next.js uses short slug)
      {
        source: "/rebel-dividends-update-november-18-2025",
        destination: "/updates/november-18-2025",
        permanent: true,
      },
      // Webinar waiting-room pages → replay
      {
        source: "/webi-prez",
        destination: "/webinar-replay",
        permanent: true,
      },
      {
        source: "/webinar-presentation",
        destination: "/webinar-replay",
        permanent: true,
      },
      // Generic /update → updates index
      {
        source: "/update",
        destination: "/updates",
        permanent: true,
      },
      // WordPress /home slug → homepage
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      // WordPress /updates slug → /updates (same destination, different WP base)
      {
        source: "/updates/:slug*",
        destination: "/updates/:slug*",
        permanent: false, // pass-through; Next.js dynamic route handles it
      },

      // ── Weekly update pages — WP published at /{date-slug}, Next.js lives at /updates/{date-slug} ──
      // These 301s preserve SEO and bookmarks after DNS switch.
      ...[
        "april-14-2026",
        "april-07-2026",
        "march-31-2026",
        "march-24-2026",
        "march-17-2026",
        "march-10-2026",
        "march-03-2026",
        "february-17-2026",
        "february-10-2026",
        "february-03-2026",
        "january-27-2026",
        "january-20-2026",
        "january-13-2026",
        "january-06-2026",
        "december-16-2025",
        "december-09-2025",
        "december-02-2025",
        "november-25-2025",
      ].map((slug) => ({
        source: `/${slug}`,
        destination: `/updates/${slug}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
