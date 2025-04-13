// src/components/ui/DataAnalysisDashboard.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function DataAnalysisDashboard() {
  const data = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      {
        label: 'Sales Data',
        data: [65, 59, 80, 81],
        backgroundColor: 'rgba(153,102,255,0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      title: { display: true, text: 'Sales Analysis by Product' },
    },
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Interactive Data Analysis Dashboard</h1>
      <div className="bg-white shadow p-4 rounded mb-4">
        <Bar data={data} options={options} />
      </div>
      <p className="text-gray-700">
        Explore sales trends and product performance with interactive charts.
      </p>
    </div>
  );
}

export default DataAnalysisDashboard;
