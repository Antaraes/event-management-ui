import React, { useReducer, useState } from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import OtpComponent from "./common/OtpComponent";
import CreateEventForm from "./forms/Event/CreateEventForm";
import CreatePaymentForm from "./forms/Event/CreatePaymentForm";
import CreateTicketsForm from "./forms/Event/CreateTicketsForm";
import AlertModal from "./common/AlertModal";
import { AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { createEvent, getOTPCode } from "../api/index";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function FormStepper() {
  const organizer = useSelector((state) => state.auth.user);

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState({
    activeStep: 0,
    isLastStep: false,
    isFirstStep: true,
  });

  const [organizerPaymentIds, setOrganizerPaymentIds] = useState([]);
  const [eventFormData, setEventFormData] = useState({
    name: "",
    contact: "",
    location: "",
    description: "",
    eventStartDate: "",
    eventEndDate: "",
    ticketOpenDate: "",
    ticketCloseDate: "",
    thumbnail: [],
  });
  const [ticketTypesData, setTicketTypesData] = useState([]);

  const OTPSuccessFunc = async () => {
    const eventData = {
      ...eventFormData,
      payments: organizerPaymentIds,
    };
    const requestData = {
      event: eventData,
      ticketInfos: ticketTypesData,
    };

    try {
      const responseData = await createEvent(requestData);
      setIsModalOpen(false);
      toast.success("Added Event Successfully :3");
      navigate(`/organizer/eventList/`);
    } catch (error) {
      toast.error("Something went Wrong");
    }
  };

  const handleStepClick = (direction) => {
    const isAnyFieldEmpty = Object.values(eventFormData).some(
      (value) => value === "" || (Array.isArray(value) && value.length === 0)
    );

    if (isAnyFieldEmpty) {
      toast.error("Event Data Cannot be Black !!");
      return;
    }

    if (
      direction === "next" &&
      ticketTypesData.length === 0 &&
      currentStep.activeStep === 1
    ) {
      toast.error("Put a minimum of 1 ticket type!");
      return;
    }

    if (
      direction === "next" &&
      organizerPaymentIds.length === 0 &&
      currentStep.activeStep === 2
    ) {
      toast.error("Choose 1 payment minimum");
      return;
    }

    if (direction === "next" && currentStep.activeStep === 2) {
      getOTPCode();
      setIsModalOpen(true);
      reutrn;
    }
    setCurrentStep((prevStep) => {
      const newStep = { ...prevStep };

      newStep.activeStep =
        direction === "next" ? newStep.activeStep + 1 : newStep.activeStep - 1;
      newStep.isLastStep = newStep.activeStep === 3;
      newStep.isFirstStep = newStep.activeStep === 0;

      return newStep;
    });
  };

  return (
    <div className="w-full py-[80px] px-8">
      <Stepper
        lineClassName="bg-black/50"
        activeStep={currentStep.activeStep}
        isLastStep={currentStep.isLastStep}
        isFirstStep={currentStep.isFirstStep}
      >
        <Step>1</Step>
        <Step>2</Step>
        <Step>3</Step>
      </Stepper>

      <div className="h-auto ">
        {currentStep.activeStep === 0 && (
          <CreateEventForm
            eventFormData={eventFormData}
            setEventFormData={setEventFormData}
          />
        )}
        {currentStep.activeStep === 1 && (
          <CreateTicketsForm
            ticketTypesData={ticketTypesData}
            setTicketTypesData={setTicketTypesData}
          />
        )}
        {currentStep.activeStep === 2 && (
          <CreatePaymentForm
            organizerPaymentIds={organizerPaymentIds}
            setOrganizerPaymentIds={setOrganizerPaymentIds}
          />
        )}
      </div>

      <div className="mt-16 flex justify-between">
        <Button
          onClick={() => handleStepClick("prev")}
          disabled={currentStep.isFirstStep}
        >
          Prev
        </Button>
        <Button
          onClick={() => handleStepClick("next")}
          disabled={currentStep.isLastStep}
        >
          {currentStep.activeStep == 2 ? "Add Event" : "Next"}
        </Button>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <AlertModal
            isModal={setIsModalOpen}
            children={
              <OtpComponent
                successFunc={OTPSuccessFunc}
                failFunc={() => toast.error("Wrong Pin ,Try Again • ᴖ • ")}
              />
            }
          />
        )}
      </AnimatePresence>
    </div>
  );
}