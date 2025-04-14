// src/pages/index.js
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white min-h-screen w-screen overflow-hidden font-sans">
      {/* Background Video Layer */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 px-4 md:px-16 lg:px-24 py-10 min-h-screen flex flex-col justify-between">
        <header className="flex justify-between items-center w-full">
          <div className="flex items-center space-x-3">
            <Image src="/logo.svg" alt="Apex Logo" width={60} height={60} />
            <h1 className="text-3xl font-bold">
              <span className="text-green-400">Apex</span> Consultancy
            </h1>
          </div>
          <nav className="space-x-6 text-lg">
            <Link href="/dashboard" className="hover:text-green-300">Dashboard</Link>
            <Link href="/learn" className="hover:text-green-300">Learn</Link>
            <Link href="/login" className="hover:text-green-300">Login</Link>
          </nav>
        </header>

        <main className="text-center mt-20 flex-1 flex flex-col items-center justify-center px-4">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 max-w-4xl">
            The one platform powering your warehouse insights.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl">
            Manage inventory. Optimize fulfillment. Monitor operations.<br />
            Built with AI, RFID, and IoT intelligence — from Apex Consultancy.
          </p>
          <Link href="/dashboard" className="inline-block bg-green-500 px-10 py-4 rounded-full text-black font-semibold hover:bg-green-400 text-lg shadow-md">
            Launch Dashboard
          </Link>
        </main>

        <section className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center w-full">
          <Feature icon="📦" title="Real-Time Inventory" description="Stay on top of stock levels with automatic updates and alerts." />
          <Feature icon="⚙️" title="AI Forecasting" description="Predict demand and prevent stockouts using smart analytics." />
          <Feature icon="📊" title="Insightful Reporting" description="Get detailed metrics on cost, trends, and order fulfillment." />
        </section>

        <footer className="mt-24 text-sm text-gray-400 text-center w-full">
          © 2025 Apex Consultancy — Crafted with care by Jerin Thomas
        </footer>
      </div>
    </div>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="bg-slate-800 bg-opacity-80 p-8 rounded-xl min-h-[200px]">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-base">{description}</p>
    </div>
  );
}
