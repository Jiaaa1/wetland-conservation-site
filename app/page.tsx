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

      {/* 页面导航（Explore Pantanal 已移除） */}
      <nav className="mb-6 flex gap-4">
        <Link href="/wetlands">
          <Button>General Wetlands</Button>
        </Link>
        <Link href="/about">
          <Button>About This Project</Button>
        </Link>
      </nav>

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
      </header>

      <main className="grid gap-6 max-w-5xl mx-auto">
        {/* Why Wetlands Matter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <img
                src="/wetland.jpg"
                alt="Aerial wetland view"
                className="rounded-xl mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">
                Why Wetlands Matter
              </h2>
              <p>
                Wetlands are vital ecosystems that support biodiversity, improve water quality, mitigate floods, and store carbon. Protecting them is crucial for both people and the planet.
              </p>
              <p className="mt-2">
                According to Leibowitz and Nadeau (2003), isolated wetlands play a critical role in biodiversity, water purification, and maintaining hydrologic balance. Salimi et al. (2021) further emphasize their contribution to climate regulation through carbon storage.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Global Conservation Laws */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Global Conservation Laws</h2>
              <p>
                Countries like China, the U.S., and members of the EU have developed different legal approaches to wetland protection. While China's policy is centralized and state-led, the U.S. focuses on pollution control through acts like the Clean Water Act, and the EU emphasizes biodiversity with initiatives like Natura 2000.
              </p>
              <p className="mt-2">
                Deng and Jiang (2023) explain how China’s Wetland Protection Law marks a legal shift aligning national strategies with global goals. These international differences reflect each region’s environmental priorities.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Community Involvement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Local Community Involvement</h2>
              <p>
                Engaging local residents in conservation efforts leads to more sustainable and effective outcomes. Community education, participatory policy-making, and indigenous knowledge play a key role.
              </p>
              <p className="mt-2">
                O’Donnell and Galat (2008) emphasize the role of adaptive, community-led restoration for long-term success. Krasny and Tidball (2009) show that when people learn through shared action—like gardens or volunteering—they build deeper care for ecosystems.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Public Survey Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          viewport={{ once: true }}
        >
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Public Survey Video: Yellow River Basin</h2>
              <p className="mb-4">
                This video presents a public awareness survey about wetland protection in Qinghai and Shandong. It provides valuable grassroots perspectives, which are essential for understanding real-world conservation awareness.
              </p>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/Hvl-EUzgDHo"
                  title="Public Survey on Wetland Protection"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Survey Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Planned Survey & Next Steps</h2>
              <p className="mb-4">
                Please share with us your background and thoughts on wetland protection. Your feedback will help shape future improvements to this project and guide real-world conservation efforts.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-4 rounded-md shadow-inner">
                <div>
                  <label htmlFor="socialIdentity" className="block mb-2 font-medium text-green-900">
                    Your Role / Social Identity:
                  </label>
                  <input
                    id="socialIdentity"
                    name="socialIdentity"
                    type="text"
                    placeholder="e.g. Student, Researcher, Environmental Activist..."
                    className="w-full border border-green-300 rounded px-3 py-2 text-green-900 placeholder-green-400
                               focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    value={formData.socialIdentity}
                    onChange={handleChange}
                    required
                  />
                  <p className="text-xs text-green-700 mt-1">
                    Please briefly describe your role or occupation that might influence your perspective on wetland conservation.
                  </p>
                </div>

                <div>
                  <label htmlFor="awareness" className="block mb-2 font-medium text-green-900">
                    Your Awareness Level:
                  </label>
                  <select
                    id="awareness"
                    name="awareness"
                    value={formData.awareness}
                    onChange={handleChange}
                    className="w-full border border-green-300 rounded px-3 py-2 text-green-900
                               focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                  <p className="text-xs text-green-700 mt-1">
                    How familiar are you with wetland ecosystems and conservation practices?
                  </p>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-green-900">
                    Any Comments or Suggestions:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Share your concerns, ideas, or personal experiences..."
                    className="w-full border border-green-300 rounded px-3 py-2 text-green-900 placeholder-green-400
                               focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-wetland-blue hover:bg-wetland-dark text-white font-semibold px-4 py-2 rounded 
                             transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      
<section className="mt-16">
  <h2 className="text-xl font-semibold mb-4 text-center">References</h2>
  <ul className="text-sm text-green-800 list-disc list-inside space-y-2">
    <li>Leibowitz, S.G., & Nadeau, T.L. (2003). Isolated wetlands: State-of-the-science review. Wetlands, 23(3), 517-531.</li>
    <li>Salimi, S., Gascoigne, W., & Erwin, K.L. (2021). Carbon sequestration in wetlands: Implications for climate change mitigation. Journal of Environmental Management, 277.</li>
    <li>Deng, Y., & Jiang, M. (2023). Legislative reform for wetland protection in China: A case study. Environmental Policy and Law, 53(2).</li>
    <li>O'Donnell, T.K., & Galat, D.L. (2008). Evaluating success criteria and project monitoring in wetland restoration: A case study. Wetlands Ecology and Management, 16(5).</li>
    <li>Krasny, M.E., & Tidball, K.G. (2009). Applying civic ecology for community resilience. Journal of Environmental Education, 40(4).</li>
    <li>Yellow River Basin Public Awareness Survey. (2024). [Video]. YouTube. https://www.youtube.com/embed/Hvl-EUzgDHo</li>
  </ul>
</section>

      <footer className="text-center mt-12 text-sm text-green-700">
        © 2025 Wetland Conservation Project by Jiayi Liu. All rights reserved.
      </footer>
    </div>
  );
}
