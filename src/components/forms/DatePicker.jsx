import React, { useState } from "react";
import Datepicker from "tailwind-datepicker-react";

const DatePicker = ({ lableId, labelText, onChange, value }) => {
  const options = {
    title: labelText,
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    clearBtnText: "Clear",
    maxDate: new Date("2030-01-01"),
    minDate: new Date(),
    theme: {
      background: "bg-white ",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "bg-yellow-800",
      input: "",
      inputIcon: "",
      selected: "",
    },
    icons: {
      // () => ReactElement | JSX.Element
      prev: () => <span>Previous</span>,
      next: () => <span>Next</span>,
    },
    datepickerClassNames: "top-12",
    defaultDate: new Date(),
    language: "en",
    disabledDates: [],
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "Select Date",
    inputDateFormatProp: {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  };
  const [show, setShow] = useState(false);
  const handleChange = (selectedDate) => {
    console.log(selectedDate);
  };
  const handleClose = (state) => {
    setShow(state);
  };

  const [selectedDate, setSelectedDate] = useState(value || new Date());

  const handlerChange = (date) => {
    setSelectedDate(date);
    onChange(date, lableId);
  };

  return (
    <div className="relative  w-full my-5 group">
      <label
        htmlFor={lableId}
        className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-0  origin-[0]  rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {labelText}
      </label>
      <Datepicker options={options} onChange={handlerChange} show={show} setShow={handleClose} value={selectedDate} />
      {/* <Datepicker options={options} onChange={handlerChange} show={show} setShow={handleClose} /> */}
    </div>
  );
};
export default DatePicker;
