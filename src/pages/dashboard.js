// src/pages/Dashboard.js (or wherever this page is located)
import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "../components/ui/select";

const productData = {
  "Product A": [
    { name: "Week 1", inventory: 500, predicted: 480 },
    { name: "Week 2", inventory: 470, predicted: 460 },
    { name: "Week 3", inventory: 440, predicted: 450 },
    { name: "Week 4", inventory: 410, predicted: 430 },
  ],
  "Product B": [
    { name: "Week 1", inventory: 300, predicted: 280 },
    { name: "Week 2", inventory: 290, predicted: 270 },
    { name: "Week 3", inventory: 270, predicted: 260 },
    { name: "Week 4", inventory: 250, predicted: 240 },
  ],
  "Product C": [
    { name: "Week 1", inventory: 700, predicted: 680 },
    { name: "Week 2", inventory: 690, predicted: 670 },
    { name: "Week 3", inventory: 670, predicted: 660 },
    { name: "Week 4", inventory: 650, predicted: 640 },
  ],
  "Product D": [
    { name: "Week 1", inventory: 400, predicted: 390 },
    { name: "Week 2", inventory: 390, predicted: 380 },
    { name: "Week 3", inventory: 370, predicted: 360 },
    { name: "Week 4", inventory: 350, predicted: 340 },
  ],
  "Product E": [
    { name: "Week 1", inventory: 600, predicted: 580 },
    { name: "Week 2", inventory: 580, predicted: 570 },
    { name: "Week 3", inventory: 560, predicted: 550 },
    { name: "Week 4", inventory: 540, predicted: 530 },
  ],
};

export default function Dashboard() {
  const [selectedProduct, setSelectedProduct] = useState("Product A");
  const [filter, setFilter] = useState("");
  const [warehouse, setWarehouse] = useState("");

  const alerts = [
    { id: 1, message: "Product B - Warehouse A: Low Stock" },
    { id: 2, message: "Product D - Warehouse B: Delayed Shipment" },
    { id: 3, message: "Product E - Warehouse A: Overstocked" },
  ];

  const kpis = {
    "Product A": { accuracy: "98.5%", delay: "-20%", cost: "15%" },
    "Product B": { accuracy: "97.0%", delay: "-10%", cost: "12%" },
    "Product C": { accuracy: "99.2%", delay: "-25%", cost: "18%" },
    "Product D": { accuracy: "96.8%", delay: "-8%", cost: "10%" },
    "Product E": { accuracy: "98.9%", delay: "-22%", cost: "14%" },
  };

  const currentKPIs = kpis[selectedProduct];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Inventory Trends Card */}
      <Card className="col-span-2">
        <CardContent className="p-4">
          <h2 className="text-2xl font-bold mb-2">Inventory Trends (Last 4 Weeks)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mt-2">
            <Input
              placeholder="Search product..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full"
            />
            <Select onValueChange={setWarehouse}>
              <SelectTrigger className="w-full">
                {warehouse || "Select Warehouse"}
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Warehouse A">Warehouse A</SelectItem>
                <SelectItem value="Warehouse B">Warehouse B</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedProduct} onValueChange={setSelectedProduct}>
              <SelectTrigger className="w-full">
                {selectedProduct}
              </SelectTrigger>
              <SelectContent>
                {Object.keys(productData).map((prod) => (
                  <SelectItem key={prod} value={prod}>
                    {prod}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={productData[selectedProduct]}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="inventory"
                stroke="#8884d8"
                name="Inventory"
              />
              <Line
                type="monotone"
                dataKey="predicted"
                stroke="#82ca9d"
                name="Predicted"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* KPI Card */}
      <Card>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-2">Key Performance Indicators</h3>
          <ul className="space-y-2">
            <li>
              Accuracy: <strong>{currentKPIs.accuracy}</strong>
            </li>
            <li>
              Delay Reduction: <strong>{currentKPIs.delay}</strong>
            </li>
            <li>
              Cost Saving: <strong>{currentKPIs.cost}</strong>
            </li>
            <li>
              Active Alerts: <strong>{alerts.length}</strong>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Live Alerts Card */}
      <Card>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-2">Live Inventory Alerts</h3>
          <ul className="space-y-1 text-sm">
            {alerts.map((alert) => (
              <li key={alert.id} className="hover:underline cursor-pointer">
                {alert.message}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="col-span-2 text-center text-xs text-gray-500 mt-4">
        <p>
          Apex Consultancy, Cambridge, Ontario N1R 7Y6 · 📞 +1 437 878 4466 · ✉️
          mail@apexconsult.com
        </p>
        <p className="mt-1">
          © 2025 Shopifier | Crafted with insight by{" "}
          <strong>Jerin Thomas · Apex Consultancy</strong>
        </p>
      </div>
    </div>
  );
}
