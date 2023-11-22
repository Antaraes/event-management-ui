import React from "react";

const Input = ({ children, lableId, type, onChange, value, required = false }) => {
  return (
    <div className="">
      <label
        htmlFor={lableId}
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
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
          className="block w-full rounded-md border-0 py-1.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default Input;
