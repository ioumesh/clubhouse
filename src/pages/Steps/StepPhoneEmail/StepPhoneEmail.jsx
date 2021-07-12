import React from 'react'
import styles from './StepPhoneEmail.module.css'
import Card from '../../../components/shared/Card/Card'
const StepPhoneEmail = (props) => {
    return (
        <>
        <h1>phone and emaild</h1>
        <button onClick={props.onNext}>Next</button>
        </>
    )
}

export default StepPhoneEmail
