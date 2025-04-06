
import Link from 'next/link';

export default function Learn() {
  return (
    <div className="min-h-screen bg-blue-50 px-6 py-10 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">How Shopifier Uses RFID & IoT</h1>
      <p className="text-gray-700 max-w-2xl mb-8 text-lg">
        Watch this short video to understand how RFID tags, IoT sensors, and real-time dashboards
        empower Shopifier's smart warehouse automation.
      </p>
      
      <div className="w-full max-w-3xl mb-10">
        <video controls className="w-full rounded-xl shadow-lg border">
          <source src="/Shopifier_IoT_Explainer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="flex gap-6">
        <Link href="/">
          <button className="bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded text-sm">
            ← Back to Home
          </button>
        </Link>
        <Link href="/dashboard">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded text-sm">
            Explore Dashboard →
          </button>
        </Link>
      </div>

      <footer className="mt-12 text-xs text-gray-500 text-center">
        © 2025 Shopifier | Video Demo by <strong>Jerin Thomas · Apex Consultancy</strong>
      </footer>
    </div>
  );
}
