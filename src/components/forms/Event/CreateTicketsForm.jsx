import React, { useState } from "react";

import Input from "../Input";
import { Checkbox } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import {
  setTicketData,
  setTicketTypeRaw,
} from "../../../redux/global/globalSlice";
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

  const formElementArray = [];
  for (let key in formData.form) {
    formElementArray.push({
      id: key,
      config: formData.form[key],
    });
  }

  const handleAddTicketType = (e) => {
    e.preventDefault();
    const isEmpty = formElementArray.some(
      (element) => element.config.value === ""
    );

    if (!isEmpty) {
      const newFormElementArray = formElementArray.map((element) => ({
        id: element.id,
        config: { ...element.config },
      }));
      console.log("new Form", newFormElementArray);
      setTableData([...tableData, newFormElementArray]);
      console.log("cheee", tableData);
      // Reset FormData back to empty
      const newFormData = { ...formData.form };
      console.log("New formData", newFormData);
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

  const formattedData = () => {
    const formattedData = [];
    console.log("table:", tableData);
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
    console.log("Problem", data);
    if (data.length > 0) {
      console.log("Reset data!!!!");
      localStorage.setItem("ticketType", JSON.stringify(tableData));
    }
    console.log("savedTickets", localStorage.getItem("ticketType"));
    dispatchRedux(setTicketTypeRaw(data));
    dispatchRedux(setTicketData(data));
  }, [tableData]);

  // memoTickets && setTableData(memoTickets);
  useEffect(() => {
    // console.log(memoTickets)
    if (localStorage.getItem("ticketType")) {
      // console.log("Memo tk:",JSON.parse(localStorage.getItem("ticketType")));
      const memoTk = JSON.parse(localStorage.getItem("ticketType"));
      setTableData([...memoTk, ...tableData]);
      // console.log(tableData);
    }
  }, []);

  return (
    <div className="mt-[20px] flex flex-col rounded-lg bg-white/10">
      <div className="h-[100px] w-[80%] mx-auto flex gap-x-2 sm:gap-x-5 flex-row py-8 px-2">
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
              style="w-full bg-white/10 border rounded-[20px] p-[10px] px-[20px] text-white focus:bg-blue-gray-700"
            />
          );
        })}
        <div>
          <button
            onClick={(e) => handleAddTicketType(e)}
            className="w-[50px] bg-green-300 p-[10px] border rounded-full text-white hover:text-black hover:bg-blue-gray-"
          >
            +
          </button>
        </div>
      </div>
      <div className="w-[80%] mx-auto flex flex-row items-center justify-end">
        <button
          className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md"
          onClick={handleAllCheckboxChange}
        >
          {allowEdit ? "Done" : "Edit All"}
        </button>
      </div>
      <div className="my-[20px] h-[300px] w-[80%] mx-auto relative">
        <table className="table-fixed w-full">
          {tableData.length > 0 ? (
            <thead>
              <tr className="bg-secondary text-gray-300">
                <th className="border w-[100px]"></th>
                <th className="border px-4 py-2">Ticket Type</th>
                <th className="border px-4 py-2">Quantity</th>
                <th className="border px-4 py-2">Ticket Per Price</th>
                <th className="border px-4 py-2 w-[100px]"></th>
              </tr>
            </thead>
          ) : null}
          <tbody>
            {tableData.length > 0
              ? tableData.map((form, index) => {
                  console.log("from in FormData", formData.form);
                  return (
                    <tr key={index}>
                      <td className="border px-4 py-2 flex items-center justify-center">
                        <Checkbox
                          checked={disabledRows[index]}
                          onChange={(e) => handleCheckboxChange(e, index)}
                        />
                      </td>
                      {Object.keys(formData.form).map((key, formIndex) => {
                        // console.log("kye",key);
                        return (
                          <td className="border px-4 h-full" key={formIndex}>
                            <Input
                              key={form[formIndex].value}
                              id={form[formIndex].value}
                              type={form[formIndex].config.type}
                              value={form[formIndex].config.value}
                              placeholder={form[formIndex].config.placeholder}
                              required={form[formIndex].config.required}
                              style="inline-block w-full h-[20px] bg-primary/5 text-white z-50"
                              disabled={!allowEdit && !disabledRows[index]}
                              onChange={(e) => {
                                const updatedTableData = [...tableData];
                                updatedTableData[index][
                                  formIndex
                                ].config.value = e.target.value;
                                setTableData(updatedTableData);
                              }}
                            />
                          </td>
                        );
                      })}
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
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(CreateTicketsForm);
