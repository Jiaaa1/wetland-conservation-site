/* app/services/page.tsx */
'use client';

import Link from 'next/link';
import { Button } from '../../components/ui/button';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-green-50 p-10 text-green-900 font-serif">

      {/* 返回首页按钮 */}
      <Link href="/" className="mb-6 inline-block">
        <Button>&larr; Home</Button>
      </Link>

      {/* 页面标题 */}
      <h1 className="text-4xl font-bold mb-6 text-center">
        Environmental Services Provided by Wetlands
      </h1>

      {/* 特色图片卡片 */}
      <section className="max-w-5xl mx-auto mb-10">
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <img
            src="ecosystem_services.jpg"
            alt="Infographic illustrating carbon storage, flood control and biodiversity benefits of wetlands"
            className="w-full h-72 object-cover"
          />
          <div className="p-6">
            <p className="text-green-800 leading-relaxed">
              Wetlands quietly perform some of the most critical ecological
              services on our planet—often without us noticing. Below are three
              key contributions that make wetland conservation a global
              priority.
            </p>
          </div>
        </div>
      </section>

      {/* 三大生态服务 */}
      <section className="grid gap-8 max-w-4xl mx-auto">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2 text-wetland-blue">
            1. Carbon Storage
          </h2>
          <p>
            Peatlands and mangroves lock away vast amounts of carbon in water-
            saturated soils, slowing the pace of climate change more effectively
            than many terrestrial forests.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2 text-wetland-blue">
            2. Natural Flood Control
          </h2>
          <p>
            Acting like giant sponges, wetlands absorb and gradually release
            stormwater, reducing flood peaks and protecting downstream
            communities.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2 text-wetland-blue">
            3. Biodiversity Hotspots
          </h2>
          <p>
            From amphibians to migratory birds, wetlands provide critical
            breeding grounds and stopover sites, sustaining a web of life that
            would otherwise vanish.
          </p>
        </div>
      </section>
    </main>
  );
}
