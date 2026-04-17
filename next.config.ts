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
      // WordPress /updates slug → /updates (same destination, different WP base)
      {
        source: "/updates/:slug*",
        destination: "/updates/:slug*",
        permanent: false, // pass-through; Next.js dynamic route handles it
      },
    ];
  },
};

export default nextConfig;
