'use client';

import Link from 'next/link';
import { Button } from '../../components/ui/button';

export default function LawsPage() {
  return (
    <main className="min-h-screen bg-green-50 p-10 text-green-900 font-serif">
      <Link href="/" className="mb-6 inline-block">
        <Button>&larr; Home</Button>
      </Link>

      <h1 className="text-4xl font-bold mb-6 text-center">
        Global Conservation Laws
      </h1>

      {/* 特色图片 */}
      <section className="max-w-5xl mx-auto mb-10">
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <img
            src="policy_globe.jpg"
            alt="World map highlighting countries with wetland protection laws"
            className="w-full h-72 object-cover"
          />
          <div className="p-6">
            <p>
              From the Ramsar Convention to national statutes, legislation
              underpins wetland protection efforts worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-8 max-w-4xl mx-auto">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2">Ramsar Convention</h2>
          <p>
            An intergovernmental treaty (1971) that provides the framework for
            national action and international cooperation on wetlands.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2">United States</h2>
          <p>
            The Clean Water Act regulates pollutant discharges and defines
            jurisdictional wetlands under federal oversight.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2">China</h2>
          <p>
            The 2023 Wetland Protection Law establishes legal status for
            wetlands and introduces zoning &amp; restoration mandates.
          </p>
        </div>
      </section>
    </main>
  );
}
