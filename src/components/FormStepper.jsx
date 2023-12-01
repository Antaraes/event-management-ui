import React, { useReducer, useState } from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import OtpComponent from "./common/OtpComponent";
import CreateEventForm from "./forms/Event/CreateEventForm";
import CreatePaymentForm from "./forms/Event/CreatePaymentForm";
import CreateTicketsForm from "./forms/Event/CreateTicketsForm";
import AlertModal from "./common/AlertModal";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import axios from "../api/axios";
import { useParams } from "react-router-dom";
import useEventRegister from "../hooks/useEventRegister";
import { setEventData } from "../redux/global/globalSlice";
import { createEvent } from "../api";
import toast from 'react-hot-toast'
import CreateEventForm_Fix from "./forms/Event/CreateEventForm_Fix";

const NEXT_STEP = "NEXT_STEP";
const PREV_STEP = "PREV_STEP";
const stepperReducer = (state, action) => {
  switch (action.type) {
    case NEXT_STEP:
      return { ...state, activeStep: state.activeStep + 1, isFirstStep: false };
    case PREV_STEP:
      return { ...state, activeStep: state.activeStep - 1, isLastStep: false };
    default:
      return state;
  }
};

export function FormStepper() {
  const [isModal, setIsModal] = useState(false);
  const initialState = {
    activeStep: 0,
    isLastStep: false,
    isFirstStep: true,
  };
  const { name, onSubmit } = useEventRegister();
  const [state, dispatch] = useReducer(stepperReducer, initialState);
  const { organizerId } = useParams();
  const [form, setForm] = useState({});
  // const [memoTickets, setMemoTickets] = useState([]);
  const [selectedPayments, setSelectedPayments] = useState([]);
  const eventData = useSelector((state) => state.global.eventData);
  const ticketData = useSelector((state) => state.global.ticketData);
  const paymentData = useSelector((state) => state.global.paymentType);
  const ticketDataRaw = useSelector((state) => state.global.ticketTypeRaw);
 // console.log("🚀 ~ file: FormStepper.jsx:44 ~ FormStepper ~ ticketDataRaw:", ticketDataRaw)
  // console.log(
  //   "🚀 ~ file: FormStepper.jsx:38 ~ FormStepper ~ paymentData:",
  //   paymentData
  // );
  // console.log("🚀 ~ file: FormStepper.jsx:36 ~ FormStepper ~ event:", event);
  // console.log(
  //   "🚀 ~ file: FormStepper.jsx:38 ~ FormStepper ~ ticketData:",
  //   ticketData
  // );
  // console.log("id", organizerId);

  const localEventDataString = localStorage.getItem("eventData");
  const localEventData = JSON.parse(localEventDataString);
  const localTicketTypeString = localStorage.getItem("ticketType");
  const localTicketType = JSON.parse(localTicketTypeString);

  const handleNext = async () => {
    if (state.activeStep === 0) {
      //localStorage.setItem("eventData", JSON.stringify(eventData));
      dispatch({ type: NEXT_STEP });
      console.log("success");
    } else if (state.activeStep === 1) {
      // localStorage.setItem("ticketType", JSON.stringify(ticketDataRaw));
      dispatch({ type: NEXT_STEP });
      console.log("success");
    }
    // else {

    //   const formData = { ...eventData, tickets: [...ticketDataRaw], payments: [...paymentData] }
    //   console.log("Form Data", formData);

    //   createEvent(organizerId, formData)
    //     .then(() => {
    //       setIsConfirmModalOpen(false);
    //       setIsEditing(false);
    //       setIsOTPOpen(false);
    //       refetchOrganizerPayment();
    //       toast.success("Updated Successfully");
    //     })
    //     .catch((error) => {
    //       toast.error(`Something went Wrong`);
    //     });
    // }
    // else if (state.activeStep < 2) {
    //   // dispatch(setEventData(name))
    //   dispatch({ type: NEXT_STEP });
    // }
    else {
      const apiEndpoint = "/event/create";
      const payload = {
        event: {
          ...eventData.event,
          organizer: organizerId,
          trendingLevel: 0,
          payments: Object.keys(paymentData),
          tickets: ticketData,
        },
      };

      try {
        const response = await axios.post(apiEndpoint, payload);
        console.log("Axios Response:", response.data);
        //setIsModal(true);
      } catch (error) {
        console.error("Axios Error:", error);
      }
    }
  };

  const handlePrev = () => {
    if(localEventData !== undefined) {
      //setForm(localEventData);
    }
    if(localTicketType !== undefined) {
      // setMemoTickets(localTicketType);
    }
    if (state.activeStep > 0) {
      dispatch({ type: PREV_STEP });
    }
  };


  const saveFormData = (formData) => {
    log("FORM Data", formData);
  };

  const handleGetEvent = () => {
    
  }

  return (
    <div className="w-full py-[80px] px-8">
      <Stepper
        lineClassName="bg-black/50"
        activeStep={state.activeStep}
        isLastStep={(value) => dispatch({ type: "SET_LAST_STEP", value })}
        isFirstStep={(value) => dispatch({ type: "SET_FIRST_STEP", value })}
      >
        <Step onClick={() => dispatch({ type: NEXT_STEP, value: 0 })}>1</Step>
        <Step onClick={() => dispatch({ type: NEXT_STEP, value: 1 })}>2</Step>
        <Step onClick={() => dispatch({ type: NEXT_STEP, value: 2 })}>3</Step>
      </Stepper>

      <div className="h-auto ">
        {state.activeStep === 0 && <CreateEventForm_Fix />}
        {state.activeStep === 1 && <CreateTicketsForm/>}
        {state.activeStep === 2 && <CreatePaymentForm />}
      </div>

      <div className="mt-16 flex justify-between">
        <Button onClick={handlePrev} disabled={state.isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={state.isLastStep}>
          {state.activeStep === 2 ? "Submit" : "Next"}
        </Button>
      </div>
      <AnimatePresence>
        {isModal && (
          <AlertModal isModal={setIsModal} children={<OtpComponent />} />
        )}
      </AnimatePresence>
    </div>
  );
}
