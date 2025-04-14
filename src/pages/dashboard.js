// src/pages/dashboard.js
import { useState, useEffect } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem } from "../components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const generateRandomData = () => {
  return ["Week 1", "Week 2", "Week 3", "Week 4"].map((week) => ({
    name: week,
    inventory: Math.floor(Math.random() * 500 + 100),
    predicted: Math.floor(Math.random() * 500 + 100),
  }));
};

export default function Dashboard() {
  const [selectedProduct, setSelectedProduct] = useState("Product A");
  const [warehouse, setWarehouse] = useState("");
  const [filter, setFilter] = useState("");
  const [productData, setProductData] = useState({
    "Product A": generateRandomData(),
    "Product B": generateRandomData(),
    "Product C": generateRandomData(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setProductData((prev) => {
        const updated = {};
        Object.keys(prev).forEach((key) => {
          updated[key] = generateRandomData();
        });
        return updated;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const alerts = [
    { id: 1, message: "Product B - Warehouse A: Low Stock" },
    { id: 2, message: "Product C - Warehouse B: Delayed Shipment" },
  ];

  const kpis = {
    "Product A": { accuracy: "98.5%", delay: "-20%", cost: "15%" },
    "Product B": { accuracy: "97.0%", delay: "-10%", cost: "12%" },
    "Product C": { accuracy: "99.2%", delay: "-25%", cost: "18%" },
  };

  const productList = [
    { name: "Product A", stock: 410, price: "$25.00", status: "Available" },
    { name: "Product B", stock: 250, price: "$19.99", status: "Low Stock" },
    { name: "Product C", stock: 650, price: "$30.50", status: "Available" },
  ];

  const currentKPIs = kpis[selectedProduct];
  const selectedProductDetails = productList.find(p => p.name === selectedProduct);

  return (
    <div className="p-6 min-h-screen bg-gray-100 w-full max-w-[1700px] mx-auto animate-fadeIn">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-800 tracking-tight">Shopifier Operations Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Input
          placeholder="Search product..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <Select onValueChange={setWarehouse}>
          <SelectTrigger>{warehouse || "Select Warehouse"}</SelectTrigger>
          <SelectContent>
            <SelectItem value="Warehouse A">Warehouse A</SelectItem>
            <SelectItem value="Warehouse B">Warehouse B</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedProduct} onValueChange={setSelectedProduct}>
          <SelectTrigger>{selectedProduct}</SelectTrigger>
          <SelectContent>
            {Object.keys(productData).map((prod) => (
              <SelectItem key={prod} value={prod}>{prod}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        <Card className="transition-all duration-500 hover:shadow-lg">
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">KPIs</h3>
            <ul className="space-y-1 text-sm">
              <li>Accuracy: <strong>{currentKPIs.accuracy}</strong></li>
              <li>Delay Reduction: <strong>{currentKPIs.delay}</strong></li>
              <li>Cost Saving: <strong>{currentKPIs.cost}</strong></li>
              <li>Active Alerts: <strong>{alerts.length}</strong></li>
            </ul>
          </CardContent>
        </Card>

        <Card className="col-span-2 transition-all duration-500 hover:shadow-lg">
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">Live Inventory Chart</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={productData[selectedProduct]}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="inventory"
                  stroke="#3b82f6"
                  isAnimationActive={true}
                  animationDuration={800}
                />
                <Line
                  type="monotone"
                  dataKey="predicted"
                  stroke="#10b981"
                  isAnimationActive={true}
                  animationDuration={800}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="transition-all duration-500 hover:shadow-lg">
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">Selected Product</h3>
            <p><strong>Stock:</strong> {selectedProductDetails.stock}</p>
            <p><strong>Price:</strong> {selectedProductDetails.price}</p>
            <p><strong>Status:</strong> {selectedProductDetails.status}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6 transition-all duration-500 hover:shadow-lg">
        <CardContent>
          <h3 className="text-lg font-semibold mb-4">Live Alerts</h3>
          <ul className="space-y-2 text-sm">
            {alerts.map((alert) => (
              <li key={alert.id} className="text-red-600 animate-pulse">{alert.message}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <footer className="text-center text-sm text-gray-500 mt-8">
        © 2025 Shopifier · Created by Jerin Thomas, Apex Consultancy
      </footer>
    </div>
  );
}
