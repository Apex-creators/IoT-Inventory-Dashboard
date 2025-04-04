import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    const users = JSON.parse(localStorage.getItem('shopifier_users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      return setError('Invalid credentials.');
    }

    localStorage.setItem('shopifier_loggedin', JSON.stringify(user));
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Login to Shopifier</h2>
        <input type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full mb-3 p-2 border rounded"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="text-red-600 mb-2 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Log In
        </button>
      </form>
    </div>
  );
}
