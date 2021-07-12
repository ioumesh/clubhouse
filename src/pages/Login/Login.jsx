import React, { useState } from 'react'
import StepOtp from '../Steps/StepOtp/StepOtp'
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail'


const Login = () => {
    const steps = {
        1: StepPhoneEmail,
        2: StepOtp
    }
    const [step, setStep] = useState(1);
    const StepData = steps[step];
    const handleSteps = () => {
        setStep(step + 1)
    }

    return (
        <div>
            <StepData onNext={handleSteps} />
        </div>
    )
}

export default Login
