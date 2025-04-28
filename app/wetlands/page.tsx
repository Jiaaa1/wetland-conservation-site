'use client';

import Link from 'next/link';
import { Button } from '../../components/ui/button';

export default function WetlandsPage() {
  return (
    <main className="min-h-screen bg-green-50 p-10 text-green-900 font-serif">
      <Link href="/" className="mb-6 inline-block">
        <Button>&larr; Home</Button>
      </Link>

      <h1 className="text-4xl font-bold mb-6 text-center">General Wetlands</h1>

      {/* 特色图片 */}
      <section className="max-w-5xl mx-auto mb-10">
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <img
            src="/wetlands_types.jpg"
            alt="Collage showing marshes, swamps and mangroves side by side"
            className="w-full h-72 object-cover"
          />
          <div className="p-6">
            <p>
              Wetlands appear in many forms—marshes, peat bogs, river
              floodplains and tidal mangroves—each offering unique habitat
              conditions.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-8 max-w-4xl mx-auto">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2">Freshwater Marsh</h2>
          <p>
            Dominated by herbaceous plants and seasonal floods, marshes filter
            nutrients and host migratory birds.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2">Peat Bogs</h2>
          <p>
            Accumulated mosses lock in enormous carbon stores, making bogs a key
            climate regulator.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2">Mangrove Forests</h2>
          <p>
            Salt-tolerant trees protect coastlines from erosion and provide
            nurseries for marine life.
          </p>
        </div>
      </section>
    </main>
  );
}
