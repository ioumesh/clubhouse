import React,{useState} from 'react'
import Card from '../../components/shared/Card/Card'
import styles from './Register.module.css'
import StepAvatar from '../Steps/StepAvatar/StepAvatar'
import StepName from '../Steps/StepName/StepName'
import StepOtp from '../Steps/StepOtp/StepOtp'
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail'
import StepUserName from '../Steps/StepUserName/StepUserName'
const Register = () => {

    const steps = {
        1: StepPhoneEmail,
        2: StepOtp,
        3: StepName,
        4: StepAvatar,
        5: StepUserName
    }
    const [step, setStep] = useState(1);
    const StepData = steps[step];
    const handleSteps=()=>{
        setStep(step+1)
    }
    return (
        <div>
            <StepData  onNext={handleSteps}/>
        </div>
    )
}

export default Register
