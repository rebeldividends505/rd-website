import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { defiIncomePages, getDefiIncomePage } from "@/lib/defi-income";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return defiIncomePages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getDefiIncomePage(slug);
  if (!page) return { title: "Not Found — DeFi Income" };
  return {
    title: `${page.title} — DeFi Income`,
    description: page.subtitle || page.intro?.slice(0, 155),
  };
}

export default async function DefiIncomePage({ params }: Props) {
  const { slug } = await params;
  const page = getDefiIncomePage(slug);
  if (!page) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link
        href="/defi-income"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm transition mb-8"
      >
        ← Back to DeFi Income
      </Link>

      <div className="mb-10">
        <div className="text-green-400 text-sm font-medium mb-2">DeFi Income</div>
        <h1 className="text-3xl md:text-5xl font-black text-white mb-4">{page.title}</h1>
        {page.subtitle && <p className="text-gray-400 text-lg">{page.subtitle}</p>}
      </div>

      {page.intro && (
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-6">
          <p className="text-gray-200 leading-relaxed">{page.intro}</p>
        </div>
      )}

      <div className="space-y-6">
        {page.sections.map((section, i) => (
          <section
            key={i}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8"
          >
            {section.heading && (
              <h2 className="text-xl font-bold text-white mb-4">{section.heading}</h2>
            )}
            <div className="space-y-3">
              {section.body.map((p, j) => (
                <p key={j} className="text-gray-300 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {page.cta && (
        <div className="mt-12 text-center bg-gray-900 border border-gray-700 rounded-2xl p-8">
          <Link
            href={page.cta.href}
            className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-xl text-sm transition inline-block"
          >
            {page.cta.label} →
          </Link>
        </div>
      )}
    </div>
  );
}
