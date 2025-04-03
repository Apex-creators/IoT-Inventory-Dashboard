import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 mb-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">IoT Inventory</h1>
      <nav className="space-x-4">
        <Link href="/"><a className="text-gray-600 hover:text-blue-600">Home</a></Link>
        <Link href="/dashboard"><a className="text-gray-600 hover:text-blue-600">Dashboard</a></Link>
      </nav>
    </header>
  );
}
