import { updates } from "@/lib/updates";

const SITE_URL = "https://rebeldividends.com";
const FEED_TITLE = "Rebel Dividends — Investor Updates";
const FEED_DESCRIPTION =
  "Weekly performance updates from Jason Cox. Track record, dividends, and market commentary from Rebel Dividends.";
const AUTHOR_EMAIL = "jason@rebeldividends.com (Jason Cox)";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET(): Promise<Response> {
  const items = updates
    .slice(0, 50) // cap at 50 most-recent
    .map((u) => {
      const link = `${SITE_URL}/updates/${u.slug}`;
      const title = escapeXml(u.title);
      const description = [
        u.subtitle ? escapeXml(u.subtitle) : "",
        u.summary ? escapeXml(u.summary) : "",
        u.weeklyReturn ? `Weekly return: ${escapeXml(u.weeklyReturn)}` : "",
        u.dividend ? `Dividend: ${escapeXml(u.dividend)} per share` : "",
        u.sharePrice ? `Share price: ${escapeXml(u.sharePrice)}` : "",
      ]
        .filter(Boolean)
        .join(" | ");

      // Build pubDate from isoDate (ISO → RFC-822)
      const pubDate = u.isoDate
        ? new Date(u.isoDate + "T12:00:00Z").toUTCString()
        : new Date().toUTCString();

      return `
    <item>
      <title>${title}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${description}</description>
      <pubDate>${pubDate}</pubDate>
      <author>${AUTHOR_EMAIL}</author>
    </item>`.trim();
    })
    .join("\n    ");

  const lastBuild =
    updates.length > 0
      ? new Date(updates[0].isoDate + "T12:00:00Z").toUTCString()
      : new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${SITE_URL}/updates</link>
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>en-us</language>
    <managingEditor>${AUTHOR_EMAIL}</managingEditor>
    <webMaster>${AUTHOR_EMAIL}</webMaster>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${SITE_URL}/updates/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${SITE_URL}/favicon.ico</url>
      <title>${escapeXml(FEED_TITLE)}</title>
      <link>${SITE_URL}/updates</link>
    </image>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
