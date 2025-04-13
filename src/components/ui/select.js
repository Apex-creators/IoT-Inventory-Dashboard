// src/components/ui/select.js
import React from 'react';

export default function Select({ label, options = [], ...props }) {
  return (
    <div className="mb-4">
      {label && <label className="block mb-1 font-medium">{label}</label>}
      <select className="border border-gray-300 rounded p-2 w-full" {...props}>
        {options.map((opt) => (
          <option key={opt.value ?? opt} value={opt.value ?? opt}>
            {opt.label ?? opt}
          </option>
        ))}
      </select>
    </div>
  );
}
