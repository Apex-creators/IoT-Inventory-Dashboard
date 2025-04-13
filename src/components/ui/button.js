// src/components/ui/button.js
import React from 'react';

export default function Button({ children, onClick }) {
  return (
    <button
      className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
