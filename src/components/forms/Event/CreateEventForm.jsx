import React from "react";
import Input from "../Input";
import useEventRegister from "../../../hooks/useEventRegister";
import DatePicker from "../DatePicker";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setEventData } from "../../../redux/global/globalSlice";
import { useParams } from "react-router-dom";

const CreateEventForm = () => {
  const {
    name,
    contact,
    location,
    thumbnail,
    description,
    onChange,
  } = useEventRegister();

  const config = [
    {
      labelText: "Name",
      labelId: "name",
      type: "text",
      onChange: (event) => onChange("name", event),
      value: name,
      required: true,
    },
    {
      labelText: "Contact",
      labelId: "contact",
      type: "text",
      onChange: (event) => onChange("contact", event),
      value: contact,
      required: true,
    },
    {
      labelText: "Location",
      labelId: "location",
      type: "text",
      onChange: (event) => onChange("location", event),
      value: location,
      required: true,
    },
    {
      labelText: "Description",
      labelId: "description",
      type: "text",
      onChange: (event) => onChange("description", event),
      value: description,
      required: true,
    },
  ];

  const fileItem = [
    {
      labelText: "Thumbnail",
      labelId: "thumbnail",
      type: "file",
      onChange: (event) => onChange("thumbnail", event),
      value: thumbnail,
      required: true,
      image: "image/*",
    },
  ];

  const datePicker = [
    {
      labelText: "Event Start Date",
      labelId: "eventStartDate",
    },
    {
      labelText: "Event End Date",
      labelId: "eventEndDate",
    },
    {
      labelText: "Ticket Start Date",
      labelId: "ticketStartDate",
    },
    {
      labelText: "Ticket End Date",
      labelId: "ticketEndDate",
    },
  ];

  const [date, setDate] = useState([
    {
      labelText: "Event Start Date",
      labelId: "eventStartDate",
      value: new Date(),
    },
    {
      labelText: "Event End Date",
      labelId: "eventEndDate",
      value: new Date(),
    },
    {
      labelId: "ticketStartDate",
      labelText: "Ticket Start Date",
      value: new Date(),
    },
    {
      labelId: "ticketEndDate",
      labelText: "Ticket End Date",
      value: new Date(),
    },
  ]);
  const dispatchRedux = useDispatch();

  const handleDatePickerChange = (selectedDate, labelId) => {
    const labelIdExists = date.some((item) => item.labelId === labelId);

    if (labelIdExists) {
      const updatedDate = date.map((item) =>
        item.labelId === labelId ? { ...item, value: selectedDate } : item
      );
      setDate(updatedDate);
    } else {
      setDate([...date, { labelId, value: selectedDate }]);
    }
  };

  const formattedData = () => {
    const formattedInput = config.reduce((acc, item) => {
      acc[item.labelId] = item.value;
      return acc;
    }, {});

    const formattedFile = fileItem.map((item) => {
      return {
        [item.labelId]: item.value,
      };
    });

    const formattedDate = date.reduce((acc, item) => {
      acc[item.labelId] = item.value;
      return acc;
    }, {});

    const eventData = {
      ...formattedInput,
      ...formattedFile,
      ...formattedDate,
    };
    return { event : eventData };
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = formattedData();
    dispatchRedux(setEventData(data));
  };

  return (
    <div className="mx-24 mt-8 p-10 border-2">
      <form action="">
        <div className="grid grid-cols-2 gap-4">
          {config.map((item, index) => (
            <Input
              key={index}
              labelId={item.labelId}
              type={item.type}
              onChange={item.onChange}
              value={item.value}
              required={item.required}
            >
              {item.labelText}
            </Input>
          ))}
          {date.map((item, index) => (
            <DatePicker
              key={index}
              labelText={item.labelText}
              lableId={item.labelId}
              onChange={(selectedDate) =>
                handleDatePickerChange(selectedDate, item.labelId)
              }
            />
          ))}
        </div>

        {fileItem.map((item, index) => (
          <Input
            key={index}
            labelId={item.labelId}
            type={item.type}
            onChange={item.onChange}
            value={item.value}
            required={item.required}
            accept={item.image}
          >
            {item.labelText}
          </Input>
        ))}
        <button onClick={(e) =>handleFormSubmit(e)}>Submit</button>
      </form>
    </div>
  );
};

export default React.memo(CreateEventForm);
