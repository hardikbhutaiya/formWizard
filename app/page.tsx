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

  let bodyColor = {
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
        <Account />
        {/* <Personal />
        <Payment />
        <Finish /> */}
      </div>
      <div>  
        {/* {currentStep === "account" && <Account onNextStep={goToNextStep} />}
        {currentStep === "personal" && <Personal onNextStep={goToNextStep} />}
        {thisstep === "payment" && <Payment NextStep={clickNextStep} />} */}
      </div>
    </>
  );
}
