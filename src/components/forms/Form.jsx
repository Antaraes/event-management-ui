import React from "react";
import Input from "./Input";
import Spinner from "../common/Spinner";
import Select from "./Select";
const Form = ({ onSubmit, onChange, config, isLoading, btnText }) => {
  return (
    <form className="space-y-6 text-black" action="#" method="POST" onSubmit={onSubmit}>
      {config.map((item, index) => {
        if (item.tag === "select") {
          return (
            <Select
              key={index}
              labelId={item.labelId}
              labelText={item.labelText}
              onChange={item.onChange} // Pass the onChange prop here
              value={item.value}
              required={item.required}
              options={item.options}
            />
          );
        } else {
          return (
            <Input
              key={index}
              labelId={item.labelId}
              type={item.type}
              onChange={item.onChange} // Pass the onChange prop here
              value={item.value}
              required={item.required}
            >
              {item.labelText}
            </Input>
          );
        }
      })}
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {isLoading ? <Spinner sm /> : btnText}
        </button>
      </div>
    </form>
  );
};

export default Form;
