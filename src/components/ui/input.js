export function Input({ value, onChange, placeholder, className = '' }) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border border-gray-300 rounded-lg px-3 py-2 w-full ${className}`}
    />
  );
}
