import React from "react";

const Select = ({ labelText, labelId, onChange, value, options, required = false }) => {
  return (
    <div>
      <label
        htmlFor={labelId}
        className="block text-white font-semibold text-[14px] tracking-wider"
      >
        {labelText}
      </label>
      <div className="mt-2">
        <select
          id={labelId}
          name={labelId}
          onChange={onChange}
          value={value}
          required={required}
          className="block bg-slate-900 text-white focus:outline-none px-5 py-2 border-b tracking-wider"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
