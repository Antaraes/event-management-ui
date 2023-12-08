import React from "react";
import Input from "./Input";
import Spinner from "../common/Spinner";
import Select from "./Select";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserActive } from "../../redux/global/globalSlice";

const Form = ({ onSubmit, onChange, config, isLoading, btnText }) => {
  const dispatch = useDispatch();

  return (
    <form className="space-y-6 text-black w-full" action="#" method="POST" onSubmit={onSubmit}>
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
      <div className="flex items-center justify-center ">
        <button
          type="submit"
          className="flex px-5 py-2 justify-center bg-blue-600 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 rounded-2xl tracking-wider"
        >
          {isLoading ? <Spinner sm /> : btnText}
        </button>
      </div>
    </form>
  );
};

export default Form;
