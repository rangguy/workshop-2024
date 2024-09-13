import React, { forwardRef } from "react";

export const InputGroup = forwardRef(
  ({ id, label, type, className, ...rest }, ref) => {
    return (
      <div className={className}>
        <label htmlFor={id} className="label">
          {label}
        </label>
        <input
          id={id}
          type={type}
          className="input input-bordered"
          ref={ref} 
          {...rest} 
        />
    
      </div>
    );
  }
);
