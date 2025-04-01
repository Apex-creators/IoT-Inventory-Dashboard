
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";

const initialData = [
  { name: "Week 1", inventory: 1400, predicted: 1300 },
  { name: "Week 2", inventory: 1250, predicted: 1200 },
  { name: "Week 3", inventory: 1100, predicted: 1150 },
  { name: "Week 4", inventory: 950, predicted: 1000 },
];

export default function Dashboard() {
  const [filter, setFilter] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [data, setData] = useState(initialData);

  const alerts = [
    { id: 1, message: "Warehouse A - Product X: Low Stock" },
    { id: 2, message: "Warehouse B - Product Y: Delayed Order" },
    { id: 3, message: "Warehouse A - Product Z: Low Stock" },
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="col-span-2">
        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-4">IoT Inventory Dashboard</h2>
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
            <Input
              placeholder="Search by product name..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full md:w-1/2"
            />
            <Select onValueChange={setWarehouse}>
              <SelectTrigger className="w-full md:w-1/2">{warehouse || "Select Warehouse"}</SelectTrigger>
              <SelectContent>
                <SelectItem value="Warehouse A">Warehouse A</SelectItem>
                <SelectItem value="Warehouse B">Warehouse B</SelectItem>
              </SelectContent>
            </Select>
            <Button>Apply Filter</Button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="inventory"
                stroke="#8884d8"
                name="Live Inventory"
              />
              <Line
                type="monotone"
                dataKey="predicted"
                stroke="#82ca9d"
                name="Predicted Demand"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2">Current KPIs</h3>
          <ul className="space-y-2">
            <li>Inventory Accuracy: <strong>99.5%</strong></li>
            <li>Order Processing Time: <strong>-50%</strong></li>
            <li>Cost Reduction: <strong>30%</strong></li>
            <li>Active Alerts: <strong>{alerts.length}</strong></li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2">Inventory Alerts</h3>
          <ul className="space-y-1 text-sm">
            {alerts.map((alert) => (
              <li key={alert.id} className="hover:underline cursor-pointer">
                {alert.message}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="col-span-2 text-center text-xs text-gray-500 mt-4">
        © 2025 IoT Inventory Dashboard | Created by Jerry (Owner)
      </div>
    </div>
  );
}
