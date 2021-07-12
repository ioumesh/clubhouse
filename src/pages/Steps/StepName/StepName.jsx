import React from 'react'
import styles from './StepName.module.css'
const StepName = (props) => {
    return (
        <>
        <h1>name</h1>
        <button onClick={props.onNext}>Next</button>
        </>
    )
}

export default StepName
