// app/wetlands/page.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function WetlandsPage() {
  return (
    <div className="min-h-screen bg-green-50 text-green-900 font-serif p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-center">
          General Wetlands
        </h1>
        <p className="max-w-3xl mx-auto mb-6">
          Wetlands include a variety of habitats such as marshes, swamps, bogs, 
          and fens. These ecosystems help purify water, control flooding, 
          and sustain countless species, from aquatic insects to large 
          mammals and migratory birds.
        </p>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <div className="p-4 bg-white rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">Marshes</h2>
            <p className="text-sm">
              Marshes are wetlands dominated by herbaceous plants rather than 
              woody vegetation. They often occur along rivers or coasts, 
              providing critical habitat for waterfowl and fish nurseries.
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">Swamps</h2>
            <p className="text-sm">
              Swamps are characterized by the presence of woody plants like 
              trees and shrubs. Slow-moving water and abundant nutrients 
              support lush vegetation and unique wildlife adapted to 
              these conditions.
            </p>
          </div>
          {/* 可以继续添加其他湿地类型，如 bogs, fens, mangroves... */}
        </div>

        <div className="mt-6 text-center">
          <Link href="/">
            <button className="px-4 py-2 bg-wetland-blue text-white rounded shadow">
              ← Back to Home
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
