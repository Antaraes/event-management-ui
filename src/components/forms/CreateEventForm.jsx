import React from "react";
import Input from "./Input";
import useEventRegister from "../../hooks/useEventRegister";

const CreateEventForm = () => {
  const { name,
    eventStartDate,
    eventEndDate,
    ticketOpenDate,
    ticketCloseDate,
    contact,
    location,
    thumbnail,
    description, onChange, onSubmit } = useEventRegister();
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
      labelText: "Event Start Date",
      labelId: "eventStartDate",
      type: "date",
      onChange: (event) => onChange("eventStartDate", event),
      value: eventStartDate,
      required: true,
    },
    {
      labelText: "Event End Date",
      labelId: "eventEndDate",
      type: "date",
      onChange: (event) => onChange("eventEndDate", event),
      value: eventEndDate,
      required: true,
    },
    {
      labelText: "Ticket Open Date",
      labelId: "ticketOpenDate",
      type: "date",
      onChange: (event) => onChange("ticketOpenDate", event),
      value: ticketOpenDate,
      required: true,
    },
    {
      labelText: "Ticket Close Date",
      labelId: "ticketCloseDate",
      type: "date",
      onChange: (event) => onChange("ticketCloseDate", event),
      value: ticketCloseDate,
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
      image:"image/*"
    }
  ]
  return (
    <div className="mx-24 mt-8">
      <form action="">
        <div className="grid grid-cols-2 gap-4">
          { 
            config.map((item,index)=>(
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
            ))
          }
          </div>
          { fileItem.map((item,index)=>(
            <Input
              key={index}
              labelId={item.labelId}
              type={item.type}
              onChange={item.onChange} // Pass the onChange prop here
              value={item.value}
              required={item.required}
              accept={item.image}
            >
              {item.labelText}
            </Input>
          ))
        }
      </form>
    </div>
  );
};

export default CreateEventForm;
