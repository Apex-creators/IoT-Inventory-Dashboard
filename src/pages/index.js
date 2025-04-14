// src/pages/index.js
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen p-8 font-sans">
      <header className="flex justify-between items-center mb-12">
        <div className="flex items-center space-x-3">
          <Image src="/logo.svg" alt="Apex Logo" width={48} height={48} />
          <h1 className="text-2xl font-bold">
            <span className="text-green-400">Apex</span> Consultancy
          </h1>
        </div>
        <nav className="space-x-4">
          <Link href="/dashboard" className="hover:text-green-300">Dashboard</Link>
          <Link href="/learn" className="hover:text-green-300">Learn</Link>
          <Link href="/login" className="hover:text-green-300">Login</Link>
        </nav>
      </header>

      <main className="text-center w-full px-6 max-w-[1600px] mx-auto">
        <h2 className="text-5xl font-extrabold leading-tight mb-6">
          The one platform powering your warehouse insights.
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Manage inventory. Optimize fulfillment. Monitor operations. 
          Built with AI, RFID, and IoT intelligence — from Apex Consultancy.
        </p>
        <Link href="/dashboard" className="inline-block bg-green-500 px-6 py-3 rounded-full text-black font-semibold hover:bg-green-400">
          Launch Dashboard
        </Link>
      </main>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <Feature icon="📦" title="Real-Time Inventory" description="Stay on top of stock levels with automatic updates and alerts." />
        <Feature icon="⚙️" title="AI Forecasting" description="Predict demand and prevent stockouts using smart analytics." />
        <Feature icon="📊" title="Insightful Reporting" description="Get detailed metrics on cost, trends, and order fulfillment." />
      </section>

      <footer className="mt-20 text-sm text-gray-500 text-center">
        © 2025 Apex Consultancy — Crafted with care by Jerin Thomas
      </footer>
    </div>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="bg-slate-800 p-6 rounded-xl">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
