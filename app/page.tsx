'use client';

import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

export default function WetlandConservation() {
  return (
    <div className="min-h-screen bg-green-50 text-green-900 font-serif p-6">
      <header className="text-center py-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl font-bold mb-3 tracking-tight">Wetland Conservation Project</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Exploring community engagement and international policies for sustainable wetland management.<br />
            <span className="text-sm text-green-700 italic">Created by Jiayi Liu</span>
          </p>
        </motion.div>
      </header>

      <main className="grid gap-6 max-w-5xl mx-auto">
        {/* Section 1: Wetland Importance */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <img src="/wetland.jpg" alt="Wetland Landscape" className="rounded-xl mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Why Wetlands Matter</h2>
              <p>
                Wetlands are vital ecosystems that support biodiversity, improve water quality, mitigate floods, and store carbon. Protecting them is crucial for both people and the planet.
              </p>
              <p className="mt-2">
                According to Leibowitz and Nadeau (2003), isolated wetlands play a critical role in biodiversity, water purification, and maintaining hydrologic balance. Salimi et al. (2021) further emphasize their contribution to climate regulation through carbon storage.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Section 2: Global Laws */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
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

        {/* Section 3: Community Involvement */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} viewport={{ once: true }}>
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
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.3 }} viewport={{ once: true }}>
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

        {/* Survey Plan */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Planned Survey & Next Steps</h2>
              <p className="mb-2">
                I plan to create a public awareness survey using Google Forms, targeting students and young people. The survey will collect data about their knowledge of wetlands, attitudes toward environmental issues, and willingness to participate in conservation efforts.
              </p>
              <p className="mb-2">
                The data will help me design interactive elements and draw insights in the final version of this project. While the form is not yet active, I have included this section to reflect my research direction and future components.
              </p>
              <p className="text-green-700 italic">
                (Survey link and response analysis will be added later.)
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      <footer className="text-center mt-12 text-sm text-green-700">
        © 2025 Wetland Conservation Project by Jiayi Liu. All rights reserved.
      </footer>
    </div>
  );
}