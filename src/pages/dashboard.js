// src/pages/dashboard.js
import { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';

const randomValue = (base, variation = 5) =>
  +(base + (Math.random() * variation - variation / 2)).toFixed(1);

export default function Dashboard() {
  const [inventoryAccuracy, setInventoryAccuracy] = useState(92.4);
  const [fulfillmentTime, setFulfillmentTime] = useState(3.2);
  const [alertsCount, setAlertsCount] = useState(7);
  const [temperature, setTemperature] = useState(70.6);
  const [humidity, setHumidity] = useState(59);
  const [chartData, setChartData] = useState([]);
  const [recentAlerts, setRecentAlerts] = useState([
    { id: 1, type: 'Critical', message: 'RFID Mismatch', detail: 'SKU X105 in Bin A3' },
    { id: 2, type: 'Warning', message: 'Low Stock Alert', detail: 'Item C. 05D' },
    { id: 3, type: 'Info', message: 'Temp Spike Detected', detail: 'Zone 2' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setInventoryAccuracy(randomValue(92));
      setFulfillmentTime(randomValue(3));
      setAlertsCount(Math.floor(Math.random() * 10));
      setTemperature(randomValue(70));
      setHumidity(randomValue(58));
      setChartData((prev) => [...prev.slice(1), {
        time: `T${prev.length + 1}`,
        accuracy: randomValue(91, 2),
        warning: randomValue(55, 4),
      }]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const base = Array.from({ length: 8 }, (_, i) => ({
      time: `T${i + 1}`,
      accuracy: randomValue(91, 2),
      warning: randomValue(55, 4),
    }));
    setChartData(base);
  }, []);

  return (
    <div className="bg-[#0f172a] text-white min-h-screen p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6">Shopifier Operations Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card title="Inventory Accuracy" value={`${inventoryAccuracy}%`} icon="✅" />
        <Card title="Avg. Fulfilment Time" value={`${fulfillmentTime} hrs`} icon="⏱️" />
        <Card title="Alerts Triggered" value={alertsCount} icon="⚠️" />
        <Card title="Temperature" value={`${temperature}°F`} icon="🌡️" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-slate-800 p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Reorder Point Forecast</h2>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={chartData}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="accuracy" stroke="#38bdf8" />
              <Line type="monotone" dataKey="warning" stroke="#facc15" />
            </LineChart>
          </ResponsiveContainer>
          <p className="mt-2 text-sm text-gray-400">Updates every 5 seconds</p>
        </div>

        <div className="bg-slate-800 p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Recent Alerts</h2>
          <ul className="space-y-3 text-sm">
            {recentAlerts.map(alert => (
              <li key={alert.id} className={`p-3 rounded-md ${
                alert.type === 'Critical' ? 'bg-red-600' :
                alert.type === 'Warning' ? 'bg-yellow-500' :
                'bg-blue-600'
              }`}>
                <strong>{alert.message}</strong> — {alert.detail} ({alert.type})
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-xs text-gray-400 text-center mt-6">
        Last updated: {new Date().toLocaleTimeString()} | Live Data Simulation | 
        <strong> Jerin Thomas · Apex Consultancy</strong>
      </p>
    </div>
  );
}

function Card({ title, value, icon }) {
  return (
    <div className="bg-slate-800 p-4 rounded-xl text-center">
      <div className="text-2xl mb-2">{icon}</div>
      <h3 className="text-sm text-gray-400">{title}</h3>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}
