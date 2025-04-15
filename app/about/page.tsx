// app/about/page.tsx
'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-green-50 text-green-900 font-serif p-8">
      <h1 className="text-3xl font-bold mb-4">About This Project</h1>
      <p className="mb-2 max-w-2xl">
        This website is a personal initiative to raise awareness about wetland protection.
        It was created as part of a research project by Jiayi Liu, focusing on the ecology,
        policy, and community engagement around wetlands...
      </p>
      <p className="max-w-2xl mb-4">
        By sharing knowledge, interactive surveys, and real-world conservation stories,
        we hope more people can join in protecting these vital ecosystems.
      </p>
      <p className="text-sm text-green-700 italic">
        Version 1.0 – Last updated: 2025
      </p>
    </div>
  )
}
