import React from "react";

const Select = ({ labelText, labelId, onChange, value, options, required = false }) => {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <label htmlFor={labelId} className="block text-gray-400 text-xs tracking-wider">
        {labelText}
      </label>
      <div className="mt-2">
        <select
          id={labelId}
          name={labelId}
          onChange={onChange}
          value={value}
          required={required}
          className="block py-2.5 px-0 w-full text-xs text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
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
