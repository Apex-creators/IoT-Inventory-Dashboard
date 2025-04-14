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
    <div className="bg-[#0f172a] text-white min-h-screen w-full px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <h1 className="text-4xl font-bold mb-8 text-center text-fuchsia-300">Shopifier Operations Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <Card title="Inventory Accuracy" value={`${inventoryAccuracy}%`} icon="📦" />
        <Card title="Avg. Fulfilment Time" value={`${fulfillmentTime} hrs`} icon="⏱️" />
        <Card title="Alerts Triggered" value={alertsCount} icon="🚨" />
        <Card title="Temperature" value={`${temperature}°F`} icon="🌡️" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-800 p-6 rounded-2xl shadow-md hover:shadow-fuchsia-400 transition-shadow">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Reorder Point Forecast</h2>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={chartData}>
              <XAxis dataKey="time" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Line type="monotone" dataKey="accuracy" stroke="#38bdf8" strokeWidth={2} dot={false} isAnimationActive />
              <Line type="monotone" dataKey="warning" stroke="#facc15" strokeWidth={2} dot={false} isAnimationActive />
            </LineChart>
          </ResponsiveContainer>
          <p className="mt-2 text-sm text-gray-400 text-right italic">Updated every 5 seconds</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-pink-300">Recent Alerts</h2>
          <ul className="space-y-3 text-sm">
            {recentAlerts.map(alert => (
              <li
                key={alert.id}
                className={`p-3 rounded-lg font-medium animate-pulse transition-all duration-300 ease-in-out shadow-inner shadow-black/20 hover:scale-105 ${
                  alert.type === 'Critical' ? 'bg-red-600 text-white' :
                  alert.type === 'Warning' ? 'bg-yellow-500 text-black' :
                  'bg-blue-500 text-white'
                }`}
              >
                🔔 <strong>{alert.message}</strong> — {alert.detail} ({alert.type})
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="text-xs text-gray-500 text-center mt-10">
        Live Data Simulation | Updated at {new Date().toLocaleTimeString()} <br />
        © 2025 <strong className="text-fuchsia-300">Jerin Thomas · Apex Consultancy</strong>
      </footer>
    </div>
  );
}

function Card({ title, value, icon }) {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-md text-center hover:shadow-lg hover:shadow-cyan-300 transition-shadow">
      <div className="text-4xl mb-2 animate-pulse">{icon}</div>
      <h3 className="text-md text-gray-400 mb-1 uppercase tracking-wide">{title}</h3>
      <p className="text-2xl font-extrabold text-white tracking-widest">{value}</p>
    </div>
  );
}
