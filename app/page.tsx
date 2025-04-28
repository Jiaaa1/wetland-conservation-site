'use client';

import React, { useState } from 'react';
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import Link from 'next/link';

export default function HomePage() {
  const [formData, setFormData] = useState({
    socialIdentity: '',
    awareness: 'low',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! We have recorded your feedback. Your identity: ${formData.socialIdentity}`);
    console.log(formData);
    setFormData({ socialIdentity: '', awareness: 'low', message: '' });
  };

  return (
    <div className="min-h-screen bg-green-50 text-green-900 font-serif p-6">
      <header className="text-center py-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-3 tracking-tight">
            Wetland Conservation Project
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Exploring community engagement and international policies for sustainable wetland management.
            <br />
            <span className="text-sm text-green-700 italic">
              Created by Jiayi Liu
            </span>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-base max-w-2xl mx-auto text-green-800 mt-6 leading-relaxed"
        >
          <p><strong>Research Question:</strong> How can international legal frameworks and community engagement strategies work together to enhance wetland conservation outcomes?</p>
          <p className="mt-3"><strong>Target Audience:</strong> Students, educators, and environmentally conscious citizens interested in practical and policy-driven solutions for wetland protection.</p>
          <p className="mt-3"><strong>Importance:</strong> Wetlands are critical for biodiversity and climate regulation but are rapidly degrading. Integrating top-down legal measures with grassroots efforts is urgent for their sustainable future.</p>
        </motion.div>
      </header>

      <main className="grid gap-6 max-w-5xl mx-auto">
        {/* Why Wetlands Matter */}
        {/* ... (rest of your original home page content unchanged) */}
        {/* Survey Form with gentle prompt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
          viewport={{ once: true }}
        >
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Public Survey & Feedback</h2>
              <p className="mb-2 text-green-700 italic">
                We appreciate your input! Your feedback helps improve this project.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-4 rounded-md shadow-inner">
                {/* form fields unchanged */}
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      <section className="mt-16">
        <h2 className="text-xl font-semibold mb-4 text-center">References</h2>
        <ul className="text-sm text-green-800 list-disc list-inside space-y-2">
          <li><strong>Leibowitz, S. G., & Nadeau, T. L. (2003).</strong> Isolated wetlands... <a href="https://doi.org/10.1672/0277-5212(2003)023[0663:IWSAFD]2.0.CO;2" className="underline text-blue-600">doi.org/...</a></li>
          {/* ... other references with <strong> and <a className="underline text-blue-600"> */}
        </ul>
      </section>

      <footer className="text-center mt-12 text-sm text-green-700">
        © {new Date().getFullYear()} Wetland Conservation Project by Jiayi Liu. All rights reserved.
      </footer>
    </div>
  );
}
