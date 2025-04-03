import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h2 className="text-4xl font-bold mb-4 text-blue-700">Welcome to the IoT Inventory Dashboard</h2>
      <p className="text-gray-600 text-lg mb-6">Monitor, predict, and optimize your warehouse inventory in real time.</p>
      <Link href="/dashboard">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">Go to Dashboard</button>
      </Link>
    </div>
  );
}
