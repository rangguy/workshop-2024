import React from "react";

export function Button({ label, type = "button", onClick, disabled = false }) {
  return (
    <button
      className="btn btn-primary"
      type={type}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      {label}
    </button>
  );
}
