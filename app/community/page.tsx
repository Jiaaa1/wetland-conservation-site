// @ts-nocheck
'use client';

import Link from 'next/link';

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-green-50 text-green-900 p-8 space-y-8">
      <Link href="/" className="text-blue-600 underline">
        ← Back Home
      </Link>

      <h1 className="text-3xl font-bold">Local Community Involvement</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Why Community Matters</h2>
        <p>
          Grassroots stewardship builds long-term ownership, integrates local
          knowledge and reduces maintenance costs of restoration projects.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Successful Approaches</h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Citizen science bird-count programs.</li>
          <li>Community-led invasive-species removal.</li>
          <li>School wetland-garden curricula.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Get Involved</h2>
        <p>
          Volunteer at local NGOs, organise clean-ups, or start a campus wetland
          awareness club. Small actions collectively drive big change.
        </p>
      </section>
    </main>
  );
}
