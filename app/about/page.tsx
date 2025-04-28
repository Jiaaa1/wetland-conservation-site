// @ts-nocheck
'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-green-50 text-green-900 p-8 space-y-8">
      <Link href="/" className="text-blue-600 underline">
        ← Back Home
      </Link>

      <h1 className="text-3xl font-bold">About This Project</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Purpose</h2>
        <p>
          This website was created as a multimodal communication project to
          raise awareness of wetland conservation, compare global legal
          frameworks and showcase community-driven solutions.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Methodology</h2>
        <p>
          Content is compiled through literature review, policy comparison and a
          public survey. The site is built with Next.js 13, Tailwind CSS and
          deployed on Vercel.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Future Work</h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Embed interactive data visualisations.</li>
          <li>Publish survey results dashboards.</li>
          <li>Add case-study map of successful restorations.</li>
        </ul>
      </section>
    </main>
  );
}
