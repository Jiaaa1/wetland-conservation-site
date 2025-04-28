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

      {/* 项目介绍 */}
      <section className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">About This Project</h1>

        <p>
          This website began as a small personal initiative to make wetland
          science approachable. Each page combines academic research with field
          observations, hoping to inspire students, policy-makers and everyday
          visitors to protect these fragile ecosystems.
        </p>

        {/* 团队照片 */}
        <img
          src="/about_team.jpg"
          alt="Panoramic view of Luyang Lake Wetland Park shot on 6 September 2024 by Jiayi Liu"
          className="rounded-xl w-full object-cover"
        />

        <p>
          Taken on <strong>6 September 2024</strong> at <em>Luyang Lake Wetland
          Park</em>, this photo reminds us why the project matters: real places,
          real biodiversity, and real communities who depend on healthy
          wetlands.
        </p>
      </section>
    </main>
  );
}
