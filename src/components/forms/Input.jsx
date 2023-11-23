import React from "react";

const Input = ({ children, lableId, type, onChange, value, required = false }) => {
  return (
    <div className="">
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
          className="block w-full p-2 bg-slate-900 text-white border-b border-white focus:outline-none focus:bg-black tracking-wider"
        />
      </div>
    </div>
  );
};

export default Input;
