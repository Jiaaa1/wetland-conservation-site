'use client';

import Link from 'next/link';
import { Button } from '../../components/ui/button';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-green-50 p-10 text-green-900 font-serif">
      {/* 返回首页 */}
      <Link href="/" className="mb-6 inline-block">
        <Button>&larr; Home</Button>
      </Link>

      {/* 页面标题 */}
      <h1 className="text-4xl font-bold mb-6 text-center">
        About This Project
      </h1>

      {/* 个人照片 */}
      <figure className="max-w-3xl mx-auto mb-8">
        <img
          src="/about_team.jpg"
          alt="Jiayi Liu standing beside the boardwalk in Luyang Lake Wetland Park, September 6 2024"
          className="rounded-xl w-full object-cover shadow-md"
        />
        <figcaption className="text-sm text-green-700 mt-2 text-center">
          Photo taken by the author at Luyang Lake Wetland Park (6 Sep 2024)
        </figcaption>
      </figure>

      {/* 叙述段落（加入人情味） */}
      <section className="prose prose-green max-w-3xl mx-auto leading-relaxed">
        <p>
          <strong>Wetlands are among the most ecologically valuable
          ecosystems on Earth, but they are also among the most vulnerable
          to threats.</strong> My research question stemmed from a biology-class
          discussion last year and the stark reality of dwindling wetlands
          worldwide. During a trip through China’s Greater Xing’an Mountains
          I visited <em>Eerguna National Wetland Park</em>—celebrated as the
          “First Wetland of Asia.” Walking the wooden walkway through birch
          forests and up to a hilltop platform, I watched the Genhe River
          snake across endless reeds and felt the wetland’s quiet power. Yet
          the same guide who introduced its beauty also pointed out the
          scars of over-grazing and mass tourism nibbling away at its
          edges.
        </p>

        <p>
          These memories, together with smaller encounters at local ponds
          and nature reserves, revealed that wetlands are more than scenic
          backdrops—they are living systems that filter water, blunt floods,
          store carbon and harbor a stunning array of life. Losing them
          accelerates biodiversity loss and leaves communities more
          vulnerable to climate extremes.
        </p>

        <p>
          That tension—between conversion pressures and conservation
          advocacy—shapes the focus of this website. How can we compare
          global legal frameworks, mobilise local communities and channel
          personal stories to safeguard wetlands before they slip away?
          You’ll find preliminary answers, background research and an
          invitation to contribute your own insights in the pages that
          follow.
        </p>
      </section>
    </main>
  );
}
