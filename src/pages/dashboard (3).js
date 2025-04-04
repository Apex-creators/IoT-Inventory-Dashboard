
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [product, setProduct] = useState("Product A");
  const [warehouse, setWarehouse] = useState("Warehouse A");

  const dataSets = {
    "Product A": [
      { name: "Week 1", inventory: 480, predicted: 470 },
      { name: "Week 2", inventory: 460, predicted: 455 },
      { name: "Week 3", inventory: 440, predicted: 445 },
      { name: "Week 4", inventory: 420, predicted: 430 },
    ],
    "Product B": [
      { name: "Week 1", inventory: 400, predicted: 410 },
      { name: "Week 2", inventory: 385, predicted: 390 },
      { name: "Week 3", inventory: 370, predicted: 365 },
      { name: "Week 4", inventory: 360, predicted: 350 },
    ],
    "Product C": [
      { name: "Week 1", inventory: 300, predicted: 290 },
      { name: "Week 2", inventory: 280, predicted: 275 },
      { name: "Week 3", inventory: 260, predicted: 255 },
      { name: "Week 4", inventory: 240, predicted: 235 },
    ],
  };

  const kpis = [
    { label: "Inventory Accuracy", value: "99.5%" },
    { label: "Order Processing Time", value: "-50%" },
    { label: "Cost Reduction", value: "30%" },
    { label: "Customer Satisfaction", value: "92%" },
    { label: "AI Adoption Rate", value: "85%" },
  ];

  const alerts = [
    { level: "Critical", message: "Warehouse A - Product C: Critical Shortage" },
    { level: "Warning", message: "Warehouse B - Product A: Delayed Restock" },
    { level: "Normal", message: "Warehouse A - Product B: Reorder Initiated" },
  ];

  useEffect(() => {
    const userData = localStorage.getItem("shopifier_loggedin");
    if (!userData) {
      router.push("/login");
    } else {
      setUser(JSON.parse(userData));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("shopifier_loggedin");
    router.push("/login");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">Dashboard</h1>
        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Logout
        </button>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md mb-8">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">Inventory Trends (Last 4 Weeks)</h2>
        <div className="flex flex-wrap gap-4 mb-4">
          <select
            value={warehouse}
            onChange={(e) => setWarehouse(e.target.value)}
            className="p-2 border rounded w-48"
          >
            <option>Warehouse A</option>
            <option>Warehouse B</option>
          </select>
          <select
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="p-2 border rounded w-48"
          >
            {Object.keys(dataSets).map((prod) => (
              <option key={prod}>{prod}</option>
            ))}
          </select>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dataSets[product]}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="inventory" stroke="#2563eb" name="Live Inventory" />
            <Line type="monotone" dataKey="predicted" stroke="#10b981" name="Predicted Demand" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="bg-white p-4 rounded-lg shadow text-center">
            <h3 className="text-sm text-gray-500">{kpi.label}</h3>
            <p className="text-2xl font-bold text-blue-600">{kpi.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">Live Alerts</h2>
        <ul className="space-y-2 text-sm">
          {alerts.map((alert, index) => (
            <li key={index} className={`p-2 rounded ${alert.level === "Critical"
              ? "bg-red-100 text-red-800"
              : alert.level === "Warning"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-green-100 text-green-800"
              }`}>
              <strong>{alert.level}:</strong> {alert.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
