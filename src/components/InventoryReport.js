// src/components/InventoryReport.js
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Card, Form, Row, Col } from 'react-bootstrap';
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
  // Initial dummy data for the chart
  const initialData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Inventory Levels',
        data: [120, 200, 150, 80, 70, 110, 130],
        fill: false,
        borderColor: 'rgb(75,192,192)',
        tension: 0.1,
      },
    ],
  };

  const [chartData, setChartData] = useState(initialData);
  const [filterText, setFilterText] = useState('');

  // Simulate real-time updates every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prevData => {
        const newData = prevData.datasets[0].data.map(val =>
          Math.max(0, val + (Math.random() * 20 - 10))
        );
        return { ...prevData, datasets: [{ ...prevData.datasets[0], data: newData }] };
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // If a filter is applied, only show matching months
  const filteredChartData = filterText.length > 0
    ? {
        labels: chartData.labels.filter(label =>
          label.toLowerCase().includes(filterText.toLowerCase())
        ),
        datasets: chartData.datasets.map(dataset => ({
          ...dataset,
          data: chartData.labels
            .map((label, idx) => ({ label, value: dataset.data[idx] }))
            .filter(item => item.label.toLowerCase().includes(filterText.toLowerCase()))
            .map(item => item.value),
        })),
      }
    : chartData;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: filterText
          ? `Inventory Levels (${chartData.labels.filter(label =>
              label.toLowerCase().includes(filterText.toLowerCase())
            ).join(', ')})`
          : 'Real-Time Inventory Levels',
      },
    },
  };

  return (
    <div>
      <h1>Interactive Inventory Report</h1>
      <Card className="p-3">
        <Form>
          <Form.Group as={Row} controlId="filter">
            <Form.Label column sm="2">Filter by Month:</Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="e.g., Jan or Feb"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
              />
            </Col>
          </Form.Group>
        </Form>
        <div className="mt-4">
          <Line data={filteredChartData} options={options} />
        </div>
      </Card>
      <p className="mt-3">
        This chart updates every 10 seconds to simulate real-time data changes. Use the filter to view data for specific months.
      </p>
    </div>
  );
}

export default InventoryReport;
