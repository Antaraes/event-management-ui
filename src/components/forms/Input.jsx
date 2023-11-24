import React from "react";

const Input = ({ children, style, disabled, lableId, type, placeholder, onChange, value, required = false }) => {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <input
        id={lableId}
        name={lableId}
        type={type}
        autoComplete="text"
        onChange={onChange}
        value={value}
        required={required}
        placeholder={placeholder}
        disabled={disabled}
        className={ style ? style : ` block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer`} 
      />
      <label
        htmlFor={lableId}
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {children}
      </label>
    </div>
  );
};

export default Input;
