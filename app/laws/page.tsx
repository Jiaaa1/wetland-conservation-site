'use client';

import Link from 'next/link';
import { Button } from '../../components/ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function LawsPage() {
  return (
    <main className="min-h-screen bg-green-50 p-10 text-green-900 font-serif">
      {/* 返回首页 */}
      <Link href="/" className="mb-6 inline-block">
        <Button>&larr; Home</Button>
      </Link>

      {/* 标题区：用 motion.div 包裹普通 h1 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Global Conservation Laws
        </h1>
      </motion.div>

      {/* 特色图片 */}
      <motion.div
        className="mb-8 rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Image
          src="/policy_globe.jpg"  {/* ← 换成你的地图文件名 */}
          alt="World map highlighting countries with established wetland-protection legislation"
          width={1600}
          height={900}
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* 正文 */}
      <article className="space-y-8 leading-[1.75] max-w-3xl mx-auto text-[18px]">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Why Legislation Matters</h2>
          <p>
            Wetland protection often begins with robust national legislation.
            Strong laws define wetland boundaries, limit destructive land use,
            and provide clear enforcement mechanisms. Yet approaches vary
            widely—from the United States’ Clean Water Act, to the European
            Union’s <em>Natura 2000</em> directive, to China’s newly enacted
            <em> Wetland Protection Law</em>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">China’s Wetland Protection Law (2023)</h2>
          <p>
            Deng &amp; Jiang (2023) trace China’s shift from fragmented local
            rules toward a unified nationwide framework. The law clarifies
            jurisdiction, integrates Ramsar commitments, and introduces
            ecological compensation for restoration costs—addressing enforcement
            gaps that hindered earlier regulations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">United States: Clean Water Act §404</h2>
          <p>
            The Clean Water Act regulates dredge-and-fill permits in “waters of
            the United States.” Whether <em>isolated</em> wetlands qualify
            remains contested. Leibowitz &amp; Nadeau (2003) show these marshes
            still influence downstream hydrology and biodiversity—evidence used
            to argue for broader protection.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">European Union: Natura 2000</h2>
          <p>
            EU Member States designate Special Areas of Conservation that
            include many wetlands; development projects must pass strict
            habitat-impact screenings. Cross-border rivers like the Danube
            benefit from coordinated basin plans anchored in these directives.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Climate-Change Perspective</h2>
          <p>
            Salimi et al. (2021) warn that drying trends and salinity shifts can
            outpace static legal boundaries. Modern statutes therefore embed
            “dynamic conservation” clauses—triggering boundary review and carbon
           -offset funding for adaptation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-1">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Clear definitions</strong> reduce litigation.</li>
            <li><strong>Adaptive clauses</strong> build climate resilience.</li>
            <li><strong>Local incentives</strong> improve compliance (see Community page).</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
