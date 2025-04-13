// src/components/DataAnalysisDashboard.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
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
      <h1>Interactive Data Analysis Dashboard</h1>
      <Card className="p-3 mb-3">
        <Bar data={data} options={options} />
      </Card>
      <p>
        Explore sales trends and product performance with interactive charts.
      </p>
    </div>
  );
}

export default DataAnalysisDashboard;
