import React, { useState } from "react";

import Input from "../Input";
import { Checkbox } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { setEventData, setTicketData } from "../../../redux/global/globalSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const CreateTicketsForm = () => {
  const [formData, setFormData] = useState({
    form: {
      ticketType: {
        value: "",
        type: "text",
        required: true,
        placeholder: "Ticket Type",
      },
      quantity: {
        value: "",
        type: "number",
        required: true,
        placeholder: "Quantity",
      },
      ticketPerPrice: {
        value: "",
        type: "number",
        required: true,
        placeholder: "Ticket Per Price",
      },
    },
  });

  const [tableData, setTableData] = useState([]);
  const [disabledRows, setDisabledRows] = useState([]);
  const [allowEdit, setAllowEdit] = useState(false);
  const dispatchRedux = useDispatch();
  const event = useSelector((state) => state.global.eventData);

  const formElementArray = [];
  for (let key in formData.form) {
    formElementArray.push({
      id: key,
      config: formData.form[key],
    });
  }

  const handleAddTicketType = () => {
    const isEmpty = formElementArray.some(
      (element) => element.config.value === ""
    );

    if (!isEmpty) {
      const newFormElementArray = formElementArray.map((element) => ({
        id: element.id,
        config: { ...element.config },
      }));
      setTableData([...tableData, newFormElementArray]);
      const newFormData = { ...formData.form };
      for (let key in newFormData) {
        newFormData[key].value = "";
      }
      setFormData({
        form: newFormData,
      });
      setDisabledRows([...disabledRows, false]);
    } else {
      alert("Please fill in all the textboxes before adding a new row.");
    }
  };

  const handleDeleteRow = (index) => {
    const updatedTableData = [...tableData];
    updatedTableData.splice(index, 1);
    setTableData(updatedTableData);
  };

  const handleCheckboxChange = (e, index) => {
    const updatedDisabledRows = [...disabledRows];
    updatedDisabledRows[index] = !updatedDisabledRows[index];
    setDisabledRows(updatedDisabledRows);
  };

  const handleAllCheckboxChange = (e) => {
    setAllowEdit(!allowEdit);
  };

  const handleShow = (e) => {
    e.preventDefault();
    const insert = [...tableData];
    const formattedData = [];
    for (let key in tableData) {
      console.log(tableData[key], key);
      formattedData.push({
        ticketType: tableData[key][0].config.value,
        quantity: tableData[key][1].config.value,
        ticketPerPrice: tableData[key][2].config.value,
      });
    }
    dispatchRedux(setTicketData(formattedData));
  };

  const formattedData = () => {
    const formattedData = [];
    for (let key in tableData) {
      formattedData.push({
        type: tableData[key][0].config.value,
        quantity: tableData[key][1].config.value,
        price: tableData[key][2].config.value,
      });
    }
    return formattedData;
  };

  useEffect(() => {
    const data = formattedData();
    dispatchRedux(setTicketData(data));
  }, [formattedData()])

  return (
    <div className="mt-[20px] flex flex-col rounded-lg bg-white/10">
      <div className="h-[100px] w-[1000px] my-[20px] mr-[20px] flex flex-row p-[30px] px-[100px]">
        {formElementArray.map((formElement) => {
          return (
            <Input
              key={formElement.id}
              id={formElement.id}
              type={formElement.config.type}
              value={formElement.config.value}
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
              style="w-[200px] bg-white/10 border rounded-[20px] p-[10px] px-[20px] text-white focus:bg-blue-gray-700"
            />
          );
        })}
        <div>
          <button
            onClick={handleAddTicketType}
            className="w-[50px] bg-green-300 p-[10px] border rounded-full text-white hover:text-black hover:bg-blue-gray-"
          >
            +
          </button>
        </div>
      </div>
      {tableData.length > 0 ? (
        <div className="flex flex-row items-center justify-end mx-[50px] px-[50px] mt-[-50px] ">
          <div>
            <button onClick={handleShow} className="p-[10px] border rounded-md">
              Show
            </button>
          </div>
          <div className="flex flex-col ml-[20px] px-[50px] py-[10px] border">
            <label>Edit All</label>
            <Checkbox onChange={handleAllCheckboxChange} />
          </div>
        </div>
      ) : null}
      <div className="my-[20px] h-[300px] w-[1300px] mx-[10px]">
        <table className="table-fixed w-full">
          {tableData.length > 0 ? (
            <thead>
              <tr>
                <th className="border px-4 py-2">Ticket Type</th>
                <th className="border px-4 py-2">Quantity</th>
                <th className="border px-4 py-2">Ticket Per Price</th>
                <th className="border px-4 py-2 w-[100px]">Edit</th>
                <th className="border px-4 py-2 w-[100px]">Delete</th>
              </tr>
            </thead>
          ) : null}
          <tbody>
            {tableData.map((form, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">
                  <Input
                    key={form[0].key}
                    id={form[0].key}
                    type={form[0].config.type}
                    value={form[0].config.value}
                    placeholder={form[0].config.placeholder}
                    required={form[0].config.required}
                    style="w-full bg-primary/5 text-white z-50"
                    disabled={!allowEdit && !disabledRows[index]}
                    onChange={(e) => {
                      const updatedTableData = [...tableData];
                      updatedTableData[index][0].config.value = e.target.value;
                      setTableData(updatedTableData);
                    }}
                  />
                </td>
                <td className="border px-4 py-2">
                  <Input
                    key={form[1].id}
                    id={form[1].id}
                    type={form[1].config.type}
                    value={form[1].config.value}
                    placeholder={form[1].config.placeholder}
                    required={form[1].config.required}
                    style="w-full bg-primary/5 text-white z-50"
                    disabled={!allowEdit && !disabledRows[index]}
                    onChange={(e) => {
                      const updatedTableData = [...tableData];
                      updatedTableData[index][1].config.value = e.target.value;
                      setTableData(updatedTableData);
                    }}
                  />
                </td>
                <td className="border px-4 py-2">
                  <Input
                    key={form[2].id}
                    id={form[2].id}
                    type={form[2].config.type}
                    value={form[2].config.value}
                    placeholder={form[2].config.placeholder}
                    required={form[2].config.required}
                    style="w-full bg-primary/5 text-white z-50"
                    disabled={!allowEdit && !disabledRows[index]}
                    onChange={(e) => {
                      const updatedTableData = [...tableData];
                      updatedTableData[index][2].config.value = e.target.value;
                      setTableData(updatedTableData);
                    }}
                  />
                </td>
                <td className="border px-4 py-2 flex items-center justify-center">
                  <Checkbox
                    checked={disabledRows[index]}
                    onChange={(e) => handleCheckboxChange(e, index)}
                  />
                </td>
                <td class="border px-4 py-2 text-white text-center">
                  <button
                    onClick={() => {
                      handleDeleteRow(index);
                    }}
                    class="bg-transparent text-red-400 px-3 py-1 rounded hover:bg-red-500 hover:text-white focus:outline-none"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(CreateTicketsForm);
