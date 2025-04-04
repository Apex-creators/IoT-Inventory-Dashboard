
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password || !confirm) {
      return setError('All fields are required.');
    }
    if (password !== confirm) {
      return setError('Passwords do not match.');
    }

    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      alert('Signup successful! Please login.');
      router.push('/login');
    } else {
      setError(data.message || 'Signup failed.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <form onSubmit={handleSignup} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Create an Account</h2>
        <input type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full mb-3 p-2 border rounded"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password" className="w-full mb-3 p-2 border rounded"
          value={confirm} onChange={(e) => setConfirm(e.target.value)} />
        {error && <p className="text-red-600 mb-2 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Sign Up
        </button>
      </form>
    </div>
  );
}
