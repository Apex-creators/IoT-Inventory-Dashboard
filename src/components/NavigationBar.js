import React from 'react';
import Link from 'next/link';

export default function NavigationBar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex items-center justify-between">
      <div className="text-xl font-semibold">
        <Link href="/" className="hover:text-blue-200">
          IoT Inventory Dashboard
        </Link>
      </div>
      <div className="space-x-4">
        <Link href="/" className="hover:text-blue-200">
          Home
        </Link>
        <Link href="/dashboard" className="hover:text-blue-200">
          Dashboard
        </Link>
        <Link href="/learn" className="hover:text-blue-200">
          Learn
        </Link>
        <Link href="/login" className="hover:text-blue-200">
          Login
        </Link>
      </div>
    </nav>
  );
}
