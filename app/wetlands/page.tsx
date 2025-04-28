// @ts-nocheck
'use client';

import Link from 'next/link';

export default function WetlandsPage() {
  return (
    <main className="min-h-screen bg-green-50 text-green-900 p-8 space-y-8">
      {/* 顶部返回 */}
      <Link href="/" className="text-blue-600 underline">
        ← Back Home
      </Link>

      <h1 className="text-3xl font-bold">General Wetlands</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What are Wetlands?</h2>
        <p>
          Wetlands are transitional zones between terrestrial and aquatic
          ecosystems where the water table is usually at or near the surface, or
          the land is covered by shallow water. They include marshes, swamps,
          bogs, fens, mangroves and peatlands.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Major Types</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li><strong>Marshes</strong> – dominated by soft-stemmed plants.</li>
          <li><strong>Swamps</strong> – forested wetlands with woody plants.</li>
          <li><strong>Bogs &amp; Fens</strong> – peat-accumulating, often acidic.</li>
          <li><strong>Mangroves</strong> – coastal, salt-tolerant tree systems.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Global Distribution</h2>
        <p>
          Wetlands occur on every continent except Antarctica. The largest
          tropical wetland is the <em>Pantanal</em> in South America, while
          Canada and Russia hold vast boreal peatlands. Coastal mangroves line
          tropical and subtropical shorelines worldwide.
        </p>
      </section>
    </main>
  );
}
