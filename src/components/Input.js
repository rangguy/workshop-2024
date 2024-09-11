export function Input({ id, type = "text", placeholder, value, onChange }) {
  return (
    <input
      type={type}
      className="input input-bordered"
      id={id}
      name={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></input>
  );
}
