// src/components/ui/input.js
import React from 'react';

export default function Input({ label, ...props }) {
  return (
    <div className="mb-4">
      {label && <label className="block mb-1 font-medium">{label}</label>}
      <input
        className="border border-gray-300 rounded p-2 w-full"
        {...props}
      />
    </div>
  );
}
