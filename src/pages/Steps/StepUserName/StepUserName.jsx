import React from 'react'
import styles from './StepUserName.module.css'
const StepUserName = (props) => {
    return (
        <>
        <h1>username</h1>
        <button onClick={props.onNext}>Next</button>
        </>
    )
}

export default StepUserName
