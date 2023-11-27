import React, { useReducer, useState } from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import OtpComponent from "./common/OtpComponent";
import CreateEventForm from "./forms/Event/CreateEventForm";
import CreatePaymentForm from "./forms/Event/CreatePaymentForm";
import CreateTicketsForm from "./forms/Event/CreateTicketsForm";
import AlertModal from "./common/AlertModal";
import { AnimatePresence } from "framer-motion";

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
  const [eventDataFromChildren, setEventDataFromChildren] = useState(null);
  const initialState = {
    activeStep: 0,
    isLastStep: false,
    isFirstStep: true,
  };

  const [state, dispatch] = useReducer(stepperReducer, initialState);

  const handleNext = () => {
    if (state.activeStep < 2) {
      dispatch({ type: NEXT_STEP });
    } else {
      setIsModal(true);
    }
  };

  const handlePrev = () => {
    if (state.activeStep > 0) {
      dispatch({ type: PREV_STEP });
    }
  };

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
        {state.activeStep === 0 && <CreateEventForm />}
        {state.activeStep === 1 && <CreateTicketsForm />}
        {state.activeStep === 2 && <CreatePaymentForm />}
      </div>

      <p>event:data{eventDataFromChildren}</p>

      <div className="mt-16 flex justify-between">
        <Button onClick={handlePrev} disabled={state.isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={state.isLastStep}>
          {state.activeStep === 2 ? "Submit" : "Next"}
        </Button>
      </div>
      <AnimatePresence>
        {isModal && <AlertModal isModal={setIsModal} children={<OtpComponent />} />}
      </AnimatePresence>
    </div>
  );
}
