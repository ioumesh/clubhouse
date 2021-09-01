import React, { useState } from "react";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import StepOtp from "../Steps/StepOtp/StepOtp";
const Authenticate = () => {
  const steps = {
    1: StepPhoneEmail,
    2: StepOtp,
  };
  const [step, setStep] = useState(1);

  const StepData = steps[step];
  const onNext = () => {
    setStep(step + 1);
  };

  return (
    <div>
      <StepData onNext={onNext} />
    </div>
  );
};

export default Authenticate;
