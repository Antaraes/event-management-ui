import React from "react";

const Select = ({ labelText, labelId, onChange, value, options, required = false }) => {
  return (
    <div>
      <label
        htmlFor={labelId}
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
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
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
