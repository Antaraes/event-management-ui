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
  getEventByIdForBuyTicket,
} from "../../api/index";
import toast from "react-hot-toast";
import { useEffect } from "react";
const BuyTicket = () => {
  const { name, email, onChange } = useCreateTicket();
  const [isModal, setIsModal] = useState(false);
  const [totalSelectedTicketCount, setTotalSelectedTicketCount] = useState(0);
  const [totalSelectedTicketPrice, setTotalSelectedTicketPrice] = useState(0);
  const [boughtTicket, setBoughtTicket] = useState([]);
  const [customerData, setCustomerData] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);

  //For ticketvoucher
  const [ticketVoucher, setTicketVoucher] = useState({
    ticketTypes: [],
    event: null,
    totalPrice: 0,
  });
  //For ticketvoucher

  const { eventId } = useParams();
  const navigate = useNavigate();

  const {
    data: ticketData,
    isLoading: isTicketDataLoading,
    isError: isTicketDataError,
  } = useFetchData(["available-tickets", eventId], () =>
    getAllAvailableTicketsByEvent(eventId),
  );

  const { data: eventData } = useFetchData(["event", eventId], () =>
    getEventByIdForBuyTicket(eventId),
  );
  useEffect(() => {
    if (eventData) {
      setTicketVoucher((prevTicketVoucher) => ({
        ...prevTicketVoucher,
        event: eventData,
      }));
    }
  }, [eventData]);

  const handleSelectTicket = (
    isIncrease,
    ticketPrice,
    paymentInfoId,
    ticketType,
  ) => {
    setTotalSelectedTicketPrice(
      isIncrease
        ? totalSelectedTicketPrice + ticketPrice
        : totalSelectedTicketPrice - ticketPrice,
    );
    setTotalSelectedTicketCount(
      isIncrease ? totalSelectedTicketCount + 1 : totalSelectedTicketCount - 1,
    );

    if (isIncrease) {
      setBoughtTicket((prevBoughtTickets) => [
        ...prevBoughtTickets,
        {
          event: eventId,
          ticketInfo: paymentInfoId,
        },
      ]);
      setTicketVoucher((prevTicketVoucher) => ({
        ...prevTicketVoucher,
        ticketTypes: [...prevTicketVoucher.ticketTypes, ticketType],
      }));

      return;
    }

    setBoughtTicket((prevBoughtTickets) => {
      const newBoughtTickets = [...prevBoughtTickets];
      newBoughtTickets.pop();
      return newBoughtTickets;
    });

    setTicketVoucher((prevTicketVoucher) => {
      const newTicketTypes = [...prevTicketVoucher.ticketTypes];
      newTicketTypes.pop();

      return {
        ...prevTicketVoucher,
        ticketTypes: newTicketTypes,
      };
    });
  };

  const OTPSuccessFunc = async () => {
    const requestData = {
      customer: customerData,
      tickets: boughtTicket,
    };

    try {
      const responseData = await addCustomer(requestData);
      const dataObject = { key: "value" };
      navigate("/ticket-success", { state: ticketVoucher });
      toast.success("Successfully Bought Tickets :3", { state: dataObject });
    } catch (error) {
      toast.error("Something went Wrong");
    }
  };

  const OTPFailFunc = () => {
    toast.error("Wrong OTP, Try Again");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() == "" || name.trim() == "" || !selectedPayment) {
      toast.error("Field Cannot be Blank!");
      return;
    }

    if (totalSelectedTicketCount == 0) {
      toast.error("You need to buy atleast 1 ticket");
      return;
    }
    const newBoughtTickets = boughtTicket.map((ticket) => ({
      ...ticket,
      payment: selectedPayment,
    }));
    setTicketVoucher((prevTicketVoucher) => ({
      ...prevTicketVoucher,
      totalPrice: totalSelectedTicketPrice,
    }));

    setBoughtTicket(newBoughtTickets);
    getOTPCode({ email: email });
    setCustomerData({ email, name });
    setIsModal(true);
  };

  const event = {
    thumbnail:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  //ticket voucher
  console.log(ticketVoucher);

  //ticket voucher

  return (
    <>
      <section className="inline-block min-w-full max-w-fit">
        <div className="min-w-full">
          <img
            src={event.thumbnail}
            alt=""
            className="h-[40vh] w-full rounded-md object-cover grayscale-0"
          />
        </div>
        <div className="my-5 flex w-full flex-col lg:flex-row lg:justify-around lg:gap-8">
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
              <span className="mt-20 inline-block h-full w-full text-center text-4xl">
                Loading...
              </span>
            )}

            {isTicketDataError && (
              <span className="mt-20 inline-block h-full w-full text-center text-4xl">
                Something went wrong TwT
              </span>
            )}
          </div>

          <div className="mx-auto mt-4 w-[92%] rounded-lg border border-gray-300 p-4 lg:mt-0 lg:w-[35%]">
            <h1 className="text-center text-2xl">Purchase</h1>
            <form action="" method="POST" className="my-5 ">
              <div className="grid grid-cols-1 gap-10 px-5 py-10 md:grid-cols-2">
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
                <select
                  onChange={(e) => setSelectedPayment(e.target.value)}
                  className="rounded-xl p-3 text-black focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Select payment
                  </option>
                  {eventData &&
                    eventData.payments.map((payment) => (
                      <option key={payment._id} value={payment._id}>
                        {payment.name} - {payment.phone}
                      </option>
                    ))}
                </select>
              </div>
              <div className="mt-2 flex flex-col justify-between md:flex-row">
                <p>Total Ticket : {totalSelectedTicketCount} x</p>

                <p>Total Price : {totalSelectedTicketPrice} MMK</p>
              </div>
              <div className="mt-10 flex  h-full  justify-center">
                <button
                  className="w-[80%] cursor-pointer rounded-full bg-secondary bg-opacity-70 p-2 text-center transition-all duration-200 hover:-translate-y-1 hover:opacity-100 "
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
