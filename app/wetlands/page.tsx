'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function WetlandsPage() {
  return (
    <div className="min-h-screen bg-green-50 text-green-900 font-serif p-6">
      <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
        <h1 className="text-4xl font-bold mb-4 text-center">General Wetlands</h1>
        <p className="max-w-3xl mx-auto mb-6">
          Introduction to wetland definitions and types...
        </p>
        <Link href="/"><button className="px-4 py-2 bg-wetland-blue text-white rounded">← Back to Home</button></Link>
      </motion.div>
    </div>
  );
}
