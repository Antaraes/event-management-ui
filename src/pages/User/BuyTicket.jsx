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
import useFetchData from "../../hooks/useFetchData";
import { useParams, useNavigate } from "react-router-dom";
import {
  addCustomer,
  getAllAvailableTicketsByEvent,
  getOTPCode,
  verifyOTPcode,
} from "../../api/index";
import toast from "react-hot-toast";
const BuyTicket = () => {
  const { name, email, payment, onChange } = useCreateTicket();
  const [isModal, setIsModal] = useState(false);
  const [totalSelectedTicketCount, setTotalSelectedTicketCount] = useState(0);
  const [totalSelectedTicketPrice, setTotalSelectedTicketPrice] = useState(0);
  const [boughtTicket, setBoughtTicket] = useState([]);
  const [customerData, setCustomerData] = useState(null);
  const { eventId } = useParams();
  const navigate = useNavigate();

  const {
    data: ticketData,
    isLoading: isTicketDataLoading,
    isError: isTicketDataError,
  } = useFetchData(["available-tickets", eventId], () =>
    getAllAvailableTicketsByEvent(eventId)
  );

  // const {data:paymentData} = useFetchData(['payment',eventId],()=>)

  const handleSelectTicket = (isIncrease, ticketPrice, paymentInfoId) => {
    setTotalSelectedTicketPrice(
      isIncrease
        ? totalSelectedTicketPrice + ticketPrice
        : totalSelectedTicketPrice - ticketPrice
    );
    setTotalSelectedTicketCount(
      isIncrease ? totalSelectedTicketCount + 1 : totalSelectedTicketCount - 1
    );

    if (isIncrease) {
      setBoughtTicket((prevBoughtTickets) => [
        ...prevBoughtTickets,
        {
          event: eventId,
          ticketInfo: paymentInfoId,
          payment: "655ebd59f6e19936a4353dc1",
        },
      ]);
    } else {
      setBoughtTicket((prevBoughtTickets) => {
        const newBoughtTickets = [...prevBoughtTickets];
        newBoughtTickets.pop();
        return newBoughtTickets;
      });
    }
  };

  const OTPSuccessFunc = async () => {
    const requestData = {
      customer: customerData,
      tickets: boughtTicket,
    };

    try {
      const responseData = await addCustomer(requestData);
      navigate("/");
      toast.success("Successfully Bought Tickets :3");
    } catch (error) {
      toast.error("Something went Wrong");
    }
  };

  const OTPFailFunc = () => {
    alert("failed");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() == "" || name.trim() == "") {
      toast.error("Field Cannot be Blank!");
      return;
    }

    if (totalSelectedTicketCount == 0) {
      toast.error("You need to buy atleast 1 ticket");
      return;
    }
    getOTPCode({ email: email });
    setCustomerData({ email, name });
    setIsModal(true);

    //const isVerified = await verifyOTPcode();
  };

  const event = {
    thumbnail:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <>
      <section className="min-w-full max-w-fit inline-block">
        <div className="min-w-full">
          <img
            src={event.thumbnail}
            alt=""
            className="w-full h-[40vh] object-cover rounded-md grayscale-0"
          />
        </div>
        <div className="flex w-full flex-col lg:flex-row lg:gap-8 my-5 lg:justify-around">
          <div className="w-full lg:w-[55%]">
            {ticketData &&
              ticketData.map((availableTicket) => (
                <TicketTypeCard
                  key={availableTicket.type}
                  image={
                    "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D"
                  }
                  availableTicket={availableTicket}
                  handleSelectTicket={handleSelectTicket}
                  totalSelectedTicketCount={totalSelectedTicketCount}
                />
              ))}
            {isTicketDataLoading && (
              <span className="text-4xl w-full h-full text-center mt-20 inline-block">
                Loading...
              </span>
            )}

            {isTicketDataError && (
              <span className="text-4xl w-full h-full text-center mt-20 inline-block">
                Something went wrong TwT
              </span>
            )}
          </div>

          <div className="w-[92%] mx-auto lg:w-[35%] p-4 border border-gray-300 rounded-lg mt-4 lg:mt-0">
            <h1 className="text-center text-2xl">Purchase</h1>
            <form action="" method="POST" className="my-5 ">
              <div className="px-5 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                <Input
                  key={"name"}
                  labelId={"name"}
                  type={"name"}
                  onChange={(event) => onChange("name", event)}
                  value={name}
                  required
                >
                  {"Your Name"}
                </Input>
                <Input
                  key={"email"}
                  labelId={"email"}
                  type={"email"}
                  onChange={(event) => onChange("email", event)}
                  value={email}
                  required
                >
                  {"Your Email"}
                </Input>

                <Select
                  key={"payment"}
                  labelId={"payment"}
                  labelText={"Payment"}
                  onChange={(event) => onChange("payment", event)}
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
              <div className="flex flex-col md:flex-row justify-between mt-2">
                <p>Total Ticket : {totalSelectedTicketCount} x</p>

                <p>Total Price : {totalSelectedTicketPrice} MMK</p>
              </div>
              <div className="flex h-full  justify-center  mt-10">
                <button
                  className="rounded-full bg-secondary p-2 text-center w-[80%] bg-opacity-70 hover:opacity-100 transition-all duration-200 hover:-translate-y-1 cursor-pointer "
                  onClick={(e) => onSubmit(e)}
                >
                  Purchase
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <AnimatePresence>
        {isModal && (
          <AlertModal
            isModal={setIsModal}
            children={
              <OtpComponent
                email={email}
                successFunc={OTPSuccessFunc}
                failFunc={OTPFailFunc}
              />
            }
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default BuyTicket;
