// src/components/ui/select.js
import React, { useState } from 'react';

export function Select({ value, onValueChange, children, className = "" }) {
  // A basic toggle to show/hide options; for real usage, you might add more functionality.
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative inline-block w-full ${className}`}>
      <SelectTrigger
        onClick={() => setOpen(prev => !prev)}
      >
        {value ? value : "Select an option"}
      </SelectTrigger>
      {open && (
        <SelectContent>
          {React.Children.map(children, child =>
            React.cloneElement(child, {
              onClick: (val) => {
                onValueChange(val);
                setOpen(false);
              }
            })
          )}
        </SelectContent>
      )}
    </div>
  );
}

export function SelectTrigger({ children, className = "", onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full border border-gray-300 rounded p-2 text-left ${className}`}
    >
      {children}
    </button>
  );
}

export function SelectContent({ children, className = "" }) {
  return (
    <div className={`absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow ${className}`}>
      {children}
    </div>
  );
}

export function SelectItem({ value, children, onClick, className = "" }) {
  return (
    <div
      onClick={() => onClick(value)}
      className={`p-2 hover:bg-gray-200 cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
}
