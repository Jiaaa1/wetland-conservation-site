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

      {/* 特色图片 */}
      <div className="mb-8">
        <img
          src="/about_team.jpg"
          alt=""This photo taken at Luyang Lake Wetland Park on 6 September 2024""
          className="rounded-2xl w-full object-cover shadow-sm"
        />
      </div>

      {/* 正文 */}
      <h1 className="text-4xl font-bold mb-4">About This Project</h1>

      <p className="mb-4">
        The <strong>Wetland Conservation Project</strong> began as a collaborative
        effort among environmental science students who share a passion for
        preserving vital wetland ecosystems. Our goal is to create an engaging,
        data-driven platform that connects policy, science and community action.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Who We Are</h2>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Jiayi Liu</strong> – Project lead, policy analysis</li>
        <li><strong>Ana Santos</strong> – Field survey coordinator</li>
        <li><strong>Marco Nguyen</strong> – GIS &amp; data visualization</li>
        <li><strong>Sara Ibanez</strong> – Community outreach</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Project Objectives</h2>
      <ol className="list-decimal list-inside space-y-1">
        <li>Compare global wetland protection laws.</li>
        <li>Document local community involvement successes.</li>
        <li>Gather public feedback through interactive surveys.</li>
        <li>Share best-practice resources for educators and NGOs.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Get Involved</h2>
      <p>
        We welcome collaboration! If you’d like to contribute data, share a
        story, or translate resources, please reach out via the contact form on
        our survey page, or open an issue on our&nbsp;
        <a
          href="https://github.com/your-org/wetland-conservation-site"
          className="text-wetland-blue underline"
          target="_blank"
        >
          GitHub repo
        </a>
        .
      </p>
    </main>
  );
}
