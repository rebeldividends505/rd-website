import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { updates, getUpdate } from "@/lib/updates";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return updates.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const update = getUpdate(slug);
  if (!update) return { title: "Update Not Found — Rebel Dividends" };

  const description = update.subtitle
    ? `${update.subtitle} — ${update.summary.slice(0, 120)}...`
    : update.summary.slice(0, 155) + "...";

  return {
    title: `${update.title} — Rebel Dividends`,
    description,
    openGraph: {
      title: update.title,
      description,
      url: `https://rebeldividends.com/updates/${slug}`,
    },
  };
}

function StatBox({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: "green" | "red" | "neutral";
}) {
  const valueClass =
    accent === "green"
      ? "text-green-400"
      : accent === "red"
      ? "text-red-400"
      : "text-white";

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{label}</div>
      <div className={`font-mono font-bold text-lg ${valueClass}`}>{value}</div>
    </div>
  );
}

function returnAccent(ret?: string): "green" | "red" | "neutral" {
  if (!ret) return "neutral";
  if (ret.startsWith("+")) return "green";
  if (ret.startsWith("-")) return "red";
  return "neutral";
}

export default async function UpdatePage({ params }: Props) {
  const { slug } = await params;
  const update = getUpdate(slug);
  if (!update) notFound();

  const currentIndex = updates.findIndex((u) => u.slug === slug);
  const prevUpdate = currentIndex < updates.length - 1 ? updates[currentIndex + 1] : null;
  const nextUpdate = currentIndex > 0 ? updates[currentIndex - 1] : null;

  const hasWebinar =
    update.subtitle?.toLowerCase().includes("replay") ||
    update.subtitle?.toLowerCase().includes("webinar");

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Back link */}
      <Link
        href="/updates"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm transition mb-8"
      >
        ← Back to all updates
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="text-blue-400 text-sm font-medium mb-2">{update.date}</div>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">{update.title}</h1>
        {update.subtitle && (
          <p className="text-gray-400 text-lg">{update.subtitle}</p>
        )}
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {update.weeklyReturn && (
          <StatBox
            label="Weekly Return"
            value={update.weeklyReturn}
            accent={returnAccent(update.weeklyReturn)}
          />
        )}
        {update.dividend && (
          <StatBox
            label="Dividend"
            value={update.dividend}
            accent={
              update.dividend === "$0.00000" ? "neutral" : "green"
            }
          />
        )}
        {update.sharePrice && (
          <StatBox label="Share Price" value={update.sharePrice} />
        )}
        {update.portfolioValue && (
          <StatBox label="Portfolio Value" value={update.portfolioValue} />
        )}
      </div>

      {/* Summary */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-8">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
          Summary
        </h2>
        <p className="text-gray-200 leading-relaxed text-base">{update.summary}</p>
      </div>

      {/* Webinar replay link */}
      {hasWebinar && (
        <div className="bg-blue-950/40 border border-blue-800/50 rounded-xl p-5 mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="text-blue-300 font-semibold text-sm mb-1">🎥 Webinar Replay</div>
            <p className="text-gray-400 text-sm">
              The weekly investor webinar replay for this update is available.
            </p>
          </div>
          <Link
            href="/webinar-replay"
            className="bg-blue-700 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition shrink-0"
          >
            Watch Replay →
          </Link>
        </div>
      )}

      {/* Author */}
      <div className="border-t border-gray-800 pt-6 mb-10">
        <p className="text-gray-500 text-sm">
          Written by{" "}
          <span className="text-gray-300 font-medium">Jason Cox</span>
          {" · "}CEO &amp; Founder, Rebel Dividends Corporation
        </p>
      </div>

      {/* Prev / Next navigation */}
      <div className="grid grid-cols-2 gap-4 mb-12">
        {prevUpdate ? (
          <Link
            href={`/updates/${prevUpdate.slug}`}
            className="bg-gray-900 border border-gray-800 hover:border-gray-600 rounded-xl p-4 transition group"
          >
            <div className="text-gray-600 text-xs mb-1">← Previous</div>
            <div className="text-white text-sm font-medium group-hover:text-blue-400 transition">
              {prevUpdate.date}
            </div>
            {prevUpdate.weeklyReturn && (
              <div
                className={`font-mono text-xs mt-0.5 ${
                  prevUpdate.weeklyReturn.startsWith("+")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {prevUpdate.weeklyReturn}
              </div>
            )}
          </Link>
        ) : (
          <div />
        )}
        {nextUpdate ? (
          <Link
            href={`/updates/${nextUpdate.slug}`}
            className="bg-gray-900 border border-gray-800 hover:border-gray-600 rounded-xl p-4 transition group text-right"
          >
            <div className="text-gray-600 text-xs mb-1">Next →</div>
            <div className="text-white text-sm font-medium group-hover:text-blue-400 transition">
              {nextUpdate.date}
            </div>
            {nextUpdate.weeklyReturn && (
              <div
                className={`font-mono text-xs mt-0.5 ${
                  nextUpdate.weeklyReturn.startsWith("+")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {nextUpdate.weeklyReturn}
              </div>
            )}
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* CTA */}
      <div className="text-center bg-gray-900 border border-gray-700 rounded-2xl p-8">
        <p className="text-gray-400 text-sm mb-4">
          Over 100 consecutive weeks of dividends. Not a promise — a proven track record.
        </p>
        <Link
          href="/apply"
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3 rounded-xl text-sm transition inline-block"
        >
          Apply for Investor Access →
        </Link>
      </div>
    </div>
  );
}
