export function Select({ onValueChange, children }) {
  return <select onChange={(e) => onValueChange(e.target.value)}>{children}</select>;
}

export function SelectTrigger({ children, className }) {
  return <option disabled className={className}>{children}</option>;
}

export function SelectContent({ children }) {
  return <>{children}</>;
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}
