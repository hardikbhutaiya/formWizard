'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Account from "./account";
import Personal from "./personal";
import Payment from "./payment";
import Finish from "./finish";
import { useState } from "react";
export default function SignForm() {

  // let [currentStep, setCurrentStep] = useState("account")
  // let [thisstep, setThisStep] = useState("personal")

  // let goToNextStep = () => {
  //   setCurrentStep("personal");
  // };

  // let clickNextStep = () => {
  //   setThisStep("payment")
  // }

  return (
    <>
    <Account />
    <Personal />
    <Payment />
    <Finish />
      {/* <div>  
        {currentStep === "account" && <Account onNextStep={goToNextStep} />}
        {currentStep === "personal" && <Personal onNextStep={goToNextStep} />}
        {thisstep === "payment" && <Payment NextStep={clickNextStep} />}
      </div> */}
    </>
  );
}
