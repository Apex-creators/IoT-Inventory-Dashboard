// src/components/ui/InventoryReport.js
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function InventoryReport() {
  const initialData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Inventory Levels',
        data: [120, 200, 150, 80, 70, 110, 130],
        borderColor: 'rgb(75,192,192)',
        tension: 0.1,
      },
    ],
  };

  const [chartData, setChartData] = useState(initialData);
  const [filterText, setFilterText] = useState('');

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => {
        const newData = prev.datasets[0].data.map(val =>
          Math.max(0, val + (Math.random() * 20 - 10))
        );
        return {
          ...prev,
          datasets: [{ ...prev.datasets[0], data: newData }],
        };
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const filteredLabels = chartData.labels.filter(label =>
    label.toLowerCase().includes(filterText.toLowerCase())
  );

  const filteredChartData = filterText
    ? {
        labels: filteredLabels,
        datasets: chartData.datasets.map(ds => ({
          ...ds,
          data: ds.data.filter((_, idx) =>
            chartData.labels[idx].toLowerCase().includes(filterText.toLowerCase())
          ),
        })),
      }
    : chartData;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Interactive Inventory Report</h1>
      <div className="mb-4">
        <label htmlFor="filter" className="block mb-1 font-medium">
          Filter by Month:
        </label>
        <input
          id="filter"
          className="border border-gray-300 rounded p-2 w-full md:w-1/2"
          type="text"
          placeholder="e.g., Jan or Feb"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
      <div className="bg-white shadow p-4 rounded mb-4">
        <Line data={filteredChartData} />
      </div>
      <p className="text-gray-700">
        This chart updates every 10 seconds to simulate real-time data changes. Use the filter to view data for specific months.
      </p>
    </div>
  );
}

export default InventoryReport;
