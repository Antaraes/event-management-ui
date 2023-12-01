import React from "react";
import { useState } from "react";
import Input from "../Input";
import { useEffect } from "react";

const CreateEventForm_Fix = () => {
    const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    form: {
      name: {
        value: '',
        required: true,
        type: "text",
        labelText: "Name",
        labelId: "name",
        placeholder: "Event Name",
        onChange: (e) =>
          setFormData({
            ...formData,
            form: {
              ...formData.form,
              name: {
                ...formData.form.name,
                value: e.target.value,
              },
            },
          }),
      },
      contact: {
        value: "",
        required: true,
        type: "text",
        labelText: "Contact",
        labelId: "contact",
        placeholder: "Contact",
        onChange: (e) =>
          setFormData({
            ...formData,
            form: {
              ...formData.form,
              contact: {
                ...formData.form.contact,
                value: e.target.value,
              },
            },
          }),
      },
      location: {
        value: "",
        required: true,
        type: "text",
        labelText: "Location",
        labelId: "location",
        placeholder: "Location",
        onChange: (e) =>
          setFormData({
            ...formData,
            form: {
              ...formData.form,
              location: {
                ...formData.form.location,
                value: e.target.value,
              },
            },
          }),
      },
      desription: {
        value: "",
        required: true,
        type: "text",
        labelText: "Description",
        labelId: "desription",
        placeholder: "Description",
        onChange: (e) =>
          setFormData({
            ...formData,
            form: {
              ...formData.form,
              desription: {
                ...formData.form.desription,
                value: e.target.value,
              },
            },
          }),
      },
      imageUrl: {
        value: "",
        required: true,
        type: "text",
        labelText: "Image Url",
        labelId: "imageUrl",
        placeholder: "Image Url",
        onChange: (e) =>
          setFormData({
            ...formData,
            form: {
              ...formData.form,
              imageUrl: {
                ...formData.form.imageUrl,
                value: e.target.value,
              },
            },
          }),
      },
      eventStartDate: {
        value: "",
        required: true,
        type: "date",
        labelText: "Event Start Date",
        labelId: "eventStartDate",
        placeholder: "Event Start Date",
        onChange: (e) =>
          setFormData({
            ...formData,
            form: {
              ...formData.form,
              eventStartDate: {
                ...formData.form.eventStartDate,
                value: e.target.value,
              },
            },
          }),
      },
      eventEndDate: {
        value: "",
        required: true,
        type: "date",
        labelText: "Event End Date",
        labelId: "eventEndDate",
        placeholder: "Event End Date",
        onChange: (e) =>
          setFormData({
            ...formData,
            form: {
              ...formData.form,
              eventEndDate: {
                ...formData.form.eventEndDate,
                value: e.target.value,
              },
            },
          }),
      },
      ticketStartDate: {
        value: "",
        required: true,
        type: "date",
        labelText: "Ticket Start Date",
        labelId: "ticketStartDate",
        placeholder: "Ticket Start Date",
        onChange: (e) =>
          setFormData({
            ...formData,
            form: {
              ...formData.form,
              ticketStartDate: {
                ...formData.form.ticketStartDate,
                value: e.target.value,
              },
            },
          }),
      },
      ticketEndDate: {
        value: "",
        required: true,
        type: "date",
        labelText: "Ticket End Date",
        labelId: "ticketEndDate",
        placeholder: "Ticket End Date",
        onChange: (e) =>
          setFormData({
            ...formData,
            form: {
              ...formData.form,
              ticketEndDate: {
                ...formData.form.ticketEndDate,
                value: e.target.value,
              },
            },
          }),
      },
    },
  });

  const formElementArray = [];
   for (let key in formData.form) {
    formElementArray.push({
      id: key,
      config: formData.form[key],
    });
  }

  console.log(formData.form);

  useEffect(() => {
    if(data.length !== 0){
        localStorage.setItem("eventData", JSON.stringify(formData));
        setData(formElementArray);
    }
  }, [formData]);

  useEffect(() => {
    if (localStorage.getItem("eventData")) {
      const memoEve = JSON.parse(localStorage.getItem("eventData"));
      console.log("🚀 ~ file: CreateEventForm_Fix.jsx:205 ~ useEffect ~ memoEve:", memoEve)
      const array = [];
      for (let key in memoEve.form) {
        array.push({
          [key] : memoEve.form[key].value,
        });
      }
      console.log("🚀 ~ file: CreateEventForm_Fix.jsx:205 ~ useEffect ~ arr:", array)
     setData([...array, ...data]);
    }
  }, []);

  // console.log('inState',data, data.map(item => item));

  let valueArr = [];

  valueArr = data;
  //data.map(item => valueArr.push(Object.values(item)));

  console.log('arr', valueArr)

  


//   if(data.length > 0){
//     console.log('data', data.map((item) => item.config.value))
//   }
//   console.log(localStorage.getItem('eventData'));
  

//   const name = JSON.parse(localStorage.getItem("eventData")).form.name;

//   const array = [];

//   console.log("apple", name.value);

//   const storedEventData = JSON.parse(localStorage.getItem("eventData"));

//   const displayValues = Object.entries(storedEventData.form).map(
//     ([key, value]) => (
//       <span key={key}>
//         {value.value}
//         <br />
//       </span>
//     )
//   );

  return (
    <div>
      {formElementArray.map((formElement, index) => {
        return (
          <>
            <Input
              key={formElement.id}
              id={formElement.id}
              type={formElement.config.type}
              value={
               data.length > 0 ? data.value : ''
              }
              placeholder={formElement.config.placeholder}
              required={formElement.config.required}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  form: {
                    ...formData.form,
                    [formElement.id]: {
                      ...formElement.config,
                      value: e.target.value,
                    },
                  },
                })
              }
              // style="w-full bg-white/10 border rounded-[20px] p-[10px] px-[20px] text-white focus:bg-blue-gray-700"
            >
              {formElement.labelText}
            </Input>
          </>
        );
      })}
    </div>
  );
};

export default CreateEventForm_Fix;
