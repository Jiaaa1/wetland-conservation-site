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

      {/* 标题区 */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Global Conservation Laws
      </motion.h1>

      {/* 插图 */}
      <motion.div
        className="mb-8 rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {/* 示例世界地图，请将 /images/world_wetland_laws.png 换成你的实际文件 */}
        <Image
          src="/policy_globe.jpg"
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
            <em>Wetland Protection Law</em>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">China’s New Wetland Protection Law (2023)</h2>
          <p>
            Deng & Jiang (2023) trace China’s shift from fragmented local rules
            toward a unified nationwide framework. The law clarifies
            jurisdiction, integrates Ramsar commitments, and introduces
            ecological compensation for restoration costs. It addresses a key
            issue raised in earlier decades: lax enforcement at provincial
            level. Deng & Jiang argue this is China’s first legal tool that
            matches its international climate and biodiversity pledges.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">The U.S. Clean Water Act (CWA)</h2>
          <p>
            In the United States, wetland regulation sits under Section 404 of
            the CWA. A running debate concerns the definition of “waters of the
            United States” and whether isolated wetlands qualify. Leibowitz &
            Nadeau (2003) demonstrate the hydrological and ecological
            connectivity of seemingly isolated marshes—an argument later used in
            Supreme Court cases to expand protection.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">EU Directive &amp; Trans-boundary Sites</h2>
          <p>
            The EU’s <em>Natura 2000</em> network designates more than
            27,000 sites for habitats and species, many of which are wetlands.
            Member states must integrate conservation objectives into spatial
            planning. Similar trans-boundary coordination appears in the
            <em>Danube River Basin Plan</em>, offering a governance model for
            rivers that cross multiple jurisdictions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Climate-Change Perspective</h2>
          <p>
            Salimi et al. (2021) highlight that climate-induced drying and
            salinity shifts can outpace legal protections if laws lack adaptive
            triggers. Forward-looking statutes now embed “dynamic
            conservation”—periodic boundary review and carbon-offset markets to
            fund wetland adaptation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-1">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Clear Definitions =</strong> better enforcement and
              reduced litigation.
            </li>
            <li>
              <strong>Adaptive Clauses =</strong> resilience to climate-driven
              hydrology change.
            </li>
            <li>
              <strong>Community Incentives =</strong> higher compliance and
              stewardship (see Community page).
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
