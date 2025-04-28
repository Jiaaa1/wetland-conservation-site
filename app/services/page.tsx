// @ts-nocheck
'use client';

import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-green-50 text-green-900 p-8 space-y-8">
      <Link href="/" className="text-blue-600 underline">
        ← Back Home
      </Link>

      <h1 className="text-3xl font-bold">Environmental Services</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Key Ecosystem Services</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li><strong>Carbon Sequestration</strong> – peatlands store ~30 % of global soil carbon.</li>
          <li><strong>Flood Control</strong> – wetlands act as natural sponges, slowing runoff.</li>
          <li><strong>Water Purification</strong> – plants and microbes filter nutrients &amp; pollutants.</li>
          <li><strong>Biodiversity Hotspots</strong> – habitat for 40 % of all species on Earth.</li>
          <li><strong>Livelihoods &amp; Recreation</strong> – fisheries, tourism, cultural value.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Economic Valuation</h2>
        <p>
          The global annual value of wetland ecosystem services is estimated to
          exceed <strong>USD 47 trillion</strong>, underscoring the financial
          importance of conservation.
        </p>
      </section>
    </main>
  );
}
