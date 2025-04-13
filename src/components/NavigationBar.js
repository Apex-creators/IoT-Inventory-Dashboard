// src/components/ui/NavigationBar.js
import React from 'react';
import Link from 'next/link';

export default function NavigationBar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex items-center justify-between">
      <div className="text-xl font-semibold">
        <Link href="/" legacyBehavior>
          <a>IoT Inventory Dashboard</a>
        </Link>
      </div>
      <div className="space-x-4">
        <Link href="/" legacyBehavior>
          <a className="hover:text-blue-200">Home</a>
        </Link>
        <Link href="/dashboard" legacyBehavior>
          <a className="hover:text-blue-200">Dashboard</a>
        </Link>
        <Link href="/learn" legacyBehavior>
          <a className="hover:text-blue-200">Learn</a>
        </Link>
        <Link href="/login" legacyBehavior>
          <a className="hover:text-blue-200">Login</a>
        </Link>
      </div>
    </nav>
  );
}
