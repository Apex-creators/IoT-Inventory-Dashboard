// src/components/ui/CompanyDashboard.js
import React from 'react';

function CompanyDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Interactive Company Dashboard</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white shadow rounded p-4 text-center">
          <h2 className="text-lg font-semibold mb-2">Order Processing Speed</h2>
          <p>Average: 1.5 hours</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white shadow rounded p-4 text-center">
          <h2 className="text-lg font-semibold mb-2">Inventory Accuracy</h2>
          <p>99.5%</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white shadow rounded p-4 text-center">
          <h2 className="text-lg font-semibold mb-2">Cost Reduction</h2>
          <p>30% lower operational costs</p>
        </div>
      </div>
    </div>
  );
}

export default CompanyDashboard;
