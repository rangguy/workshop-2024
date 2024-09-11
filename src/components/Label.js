export function Label({ label, name, className = "label", required = false }) {
  return (
    <label htmlFor={name} className={className}>
      <span className="label-text">{label}</span>
      {required && <b className="text-red-500">*</b>}
    </label>
  );
}
