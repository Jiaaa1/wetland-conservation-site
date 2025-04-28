// @ts-nocheck
'use client';

import Link from 'next/link';

export default function LawsPage() {
  return (
    <main className="min-h-screen bg-green-50 text-green-900 p-8 space-y-8">
      <Link href="/" className="text-blue-600 underline">
        ← Back Home
      </Link>

      <h1 className="text-3xl font-bold">Global Conservation Laws</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">International</h2>
        <p>
          <strong>Ramsar Convention (1971)</strong> – intergovernmental treaty
          providing framework for national action and international cooperation
          for the conservation of wetlands and their resources.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Regional Examples</h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>
            <strong>China</strong> – Wetland Protection Law (2023) introduces
            unified classification, redlines and ecological compensation.
          </li>
          <li>
            <strong>United States</strong> – Clean Water Act (1972) Section 404
            regulates discharge into “waters of the U.S.” including some
            wetlands.
          </li>
          <li>
            <strong>European Union</strong> – Habitats Directive &amp; Natura 2000
            network protect wetland habitats and species.
          </li>
        </ul>
      </section>
    </main>
  );
}
