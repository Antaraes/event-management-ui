import React, { useReducer } from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import OtpComponent from "./common/OtpComponent";
import CreateEventForm from "./forms/CreateEventForm";
import CreatePaymentForm from "./forms/CreatePaymentForm";

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
      console.log("submit");
    }
  };

  const handlePrev = () => {
    if (state.activeStep > 0) {
      dispatch({ type: PREV_STEP });
    }
  };

  return (
    <div className="w-full py-10 px-8">
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
        {state.activeStep === 1 && <CreatePaymentForm />}
        {state.activeStep === 2 && <OtpComponent />}
      </div>

      <div className="mt-16 flex justify-between">
        <Button onClick={handlePrev} disabled={state.isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={state.isLastStep}>
          {state.activeStep === 2 ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
}
