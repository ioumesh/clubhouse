import React from 'react'
import styles from './StepOtp.module.css'
const StepOtp = (props) => {
    return (
        <>
        <h1>otp</h1>
        <button onClick={props.onNext}>Next</button>
        </>
    )
}

export default StepOtp
