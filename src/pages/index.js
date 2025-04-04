
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gradient-to-b from-white to-blue-50">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
          Welcome to <span className="text-gray-800">Shopifier</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Smart Inventory Intelligence – Real-time insights, predictive analytics, and
          intelligent inventory management tailored for growing e-commerce businesses.
        </p>
        <Link href="/dashboard">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition">
            Explore Dashboard
          </button>
        </Link>
      </div>
      <footer className="mt-16 text-xs text-gray-500 text-center">
        <p>Apex Consultancy, Cambridge, Ontario N1R 7Y6</p>
        <p>📞 +1 437 878 4466 | ✉️ mail@apexconsult.com</p>
        <p>🔗 apexconsult.linkedin.com</p>
        <p className="mt-2">© 2025 Shopifier | Crafted with insight by <strong>Jerin Thomas · Apex Consultancy</strong></p>
      </footer>
    </div>
  );
}
