'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Account from "./account";
import Personal from "./personal";
import Payment from "./payment";
import Finish from "./finish";
import { useState } from "react";

export default function SignForm() {

  const [currentStep, setCurrentStep] = useState(1)

  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };


  const bodyColor = {
    background: "linear-gradient(135deg, #FFF5C3 0%, #9452A5 100%)",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  return (
    <>
      <div className='' style={bodyColor}>

        {currentStep === 1 && <Account onNextStep={goToNextStep} />}
        {currentStep === 2 && <Personal onNextStep={goToNextStep} onPreviousStep={goToPreviousStep} />}
        {currentStep === 3 && <Payment onNextStep={goToNextStep} onPreviousStep={goToPreviousStep} />}
        {currentStep === 4 && <Finish onNextStep={goToNextStep} />}
        

      </div>
    </>
  );
}
