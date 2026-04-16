# rd-website

Rebel Dividends public website — Next.js 15 + TypeScript + Tailwind.

## Deploy

Vercel project: `next.rebeldividends.com`
DNS (Ryan adds): CNAME `next` → `cname.vercel-dns.com`

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, features, CTA |
| `/forward` | "How Hyperliquid Hits $150" thesis page |
| `/macro` | 4 macro themes (Gold→BTC, M2/Debt, AI Agents, Tech Revolution) |
| `/apply` | Investor intake form → saves to Supabase `leads` table |
| `/daily` | Daily updates (placeholder — content TBD) |

## Apply Form → Supabase

The `/apply` page saves leads to the `leads` table in Supabase.
Run migration `003_leads_table.sql` in Supabase Dashboard before going live.

## Dev

```bash
npm install
npm run dev
```

## Deploy to Vercel

```bash
npx vercel --prod
```

Or push to GitHub → Vercel auto-deploys on push to `main`.

## Environment Variables (Vercel)

Set these in Vercel dashboard for the project:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_APP_URL`
