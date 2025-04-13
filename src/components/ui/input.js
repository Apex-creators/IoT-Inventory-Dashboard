// src/components/ui/input.js
import React from 'react';

export function Input({ value, onChange, placeholder, className = "", ...props }) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border border-gray-300 rounded p-2 w-full ${className}`}
      {...props}
    />
  );
}
