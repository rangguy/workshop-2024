import { ErrorDiv } from "./Error";
import { Input } from "./Input";
import { Label } from "./Label";

export function InputGroup({
  id,
  className = "form-control",
  type = "text",
  label = "",
  required,
  placeholder = `Enter your ${label.toLowerCase()}`,
  value,
  onChange,
  errorDiv = "d-none",
  errorMessage = "",
}) {
  return (
    <div className={className}>
      <Label name={id} label={label} required={required} />
      <Input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} />
      <ErrorDiv className={errorDiv} message={errorMessage} />
    </div>
  );
}
