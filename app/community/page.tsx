'use client';

import Link from 'next/link';
import { Button } from '../../components/ui/button';

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-green-50 p-10 text-green-900 font-serif">
      <Link href="/" className="mb-6 inline-block">
        <Button>&larr; Home</Button>
      </Link>

      <h1 className="text-4xl font-bold mb-6 text-center">
        Local Community Involvement
      </h1>

      {/* 特色图片 */}
      <section className="max-w-5xl mx-auto mb-10">
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <img
            src="/local_volunteers.jpg"
            alt="Volunteers planting reeds along a restored wetland shoreline"
            className="w-full h-72 object-cover"
          />
          <div className="p-6">
            <p>
              Grass-roots action often accelerates ecological recovery more
              effectively than top-down mandates alone.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-8 max-w-4xl mx-auto">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2">Citizen Science</h2>
          <p>
            Programs like eBird or water-quality sampling invite residents to
            collect data that inform management decisions.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2">School Partnerships</h2>
          <p>
            Field trips and student restoration projects foster stewardship
            ethics in the next generation.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2">Cultural Heritage</h2>
          <p>
            Indigenous communities often safeguard traditional ecological
            knowledge that guides sustainable wetland use.
          </p>
        </div>
      </section>
    </main>
  );
}
