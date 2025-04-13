// pages/index.js
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the IoT Inventory Dashboard</h1>
      <p>This is the home page of our digital transformation project.</p>
      <p>
        <Link href="/inventory-report" legacyBehavior>
          <a>Go to Inventory Report</a>
        </Link>
      </p>
    </div>
  );
}
