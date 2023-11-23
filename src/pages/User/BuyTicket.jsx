import React from "react";
import { useState } from "react";
import { TicketTypeCard } from "../../components/Ticket/TicketTypeCard";
import useCreateTicket from "../../hooks/useCreateTicket";
import Input from "../../components/forms/Input";
import Select from "../../components/forms/Select";
import { Button } from "@material-tailwind/react";
import AlertModal from "../../components/common/AlertModal";
import { AnimatePresence } from "framer-motion";
import OtpComponent from "../../components/common/OtpComponent";
const BuyTicket = () => {
  const { name, email, payment, onChange } = useCreateTicket();
  const [isModal, setIsModal] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsModal(true);
  };
  const event = {
    thumbnail:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <>
      <section>
        <div className=" ">
          <img
            src={event.thumbnail}
            alt=""
            className=" w-screen h-[40vh] object-cover rounded-md grayscale-0 items-center"
          />
        </div>
        <div className="flex my-5 ">
          <div className="w-[55%]">
            <TicketTypeCard
              image={
                "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D"
              }
              price={8000}
              type={"Normal"}
            />
            <TicketTypeCard
              image={
                "https://plus.unsplash.com/premium_photo-1682855222843-0cd0827ed6e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D"
              }
              price={8000}
              type={"VIP"}
            />
            <TicketTypeCard
              image={
                "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D"
              }
              price={8000}
              type={"VVIP"}
            />
          </div>
          <div className="w-[35%] p-4 border border-gray-300">
            <h1 className="text-center">Purchase</h1>
            <form action="" method="POST" className="my-5 ">
              <div className="px-5 py-10 grid grid-cols-2 gap-10">
                <Input
                  key={"email"}
                  labelId={"email"}
                  type={"email"}
                  onChange={(event) => onChange("email", event)} // Pass the onChange prop here
                  value={email}
                  required
                >
                  {"Your Email"}
                </Input>
                <Input
                  key={"name"}
                  labelId={"name"}
                  type={"name"}
                  onChange={(event) => onChange("name", event)} // Pass the onChange prop here
                  value={name}
                  required
                >
                  {"Your Name"}
                </Input>
                <Select
                  key={"payment"}
                  labelId={"payment"}
                  labelText={"Payment"}
                  onChange={(event) => onChange("payment", event)} // Pass the onChange prop here
                  value={payment}
                  required
                  options={[
                    {
                      value: 0,
                      label: "Kpay",
                    },
                    {
                      value: 1,
                      label: "Wave Money",
                    },
                    {
                      value: 2,
                      label: "PayPal",
                    },
                  ]}
                />
              </div>
              <hr />
              <div className="flex justify-between mt-2">
                <div className="flex gap-2">
                  <p>Total Ticket:</p>
                  <p>2x</p>
                </div>
                <div className="flex gap-2">
                  <p>Total Price:</p>
                  <p>100</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div></div>
                <button className="mt-10 " onClick={(e) => onSubmit(e)}>
                  Purchase
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <AnimatePresence>
        {isModal && <AlertModal isModal={setIsModal} children={<OtpComponent />} />}
      </AnimatePresence>
    </>
  );
};

export default BuyTicket;
