import React from "react";

export function Button({ label, type = "button" }) {
  return (
    <button
      className="btn btn-primary"
      type={type}
    >
      {label}
    </button>
  );
}
