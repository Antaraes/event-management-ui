import React from "react";

const Input = ({ children, lableId, type, onChange, value, required = false, accept }) => {
  return (
    <div>
      <label
        htmlFor={lableId}
        className="block text-white font-semibold text-[14px] tracking-wider"
      >
        {children}
      </label>
      <div className="mt-2">
        <input
          id={lableId}
          name={lableId}
          type={type}
          autoComplete="text"
          onChange={onChange}
          value={value}
          required={required}
          className="block w-full p-2 bg-gray-900 text-white border-b border-white focus:outline-none focus:bg-gray-800 tracking-wider"
          accept={accept}
        />
      </div>
      
    </div>
  );
};

export default Input;
