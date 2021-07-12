import React from 'react'
import styles from './StepAvatar.module.css'
const StepAvatar = (props) => {
    return (
        <>
        <h1>Avatar</h1>
        <button onClick={props.onNext}>Next</button>
        </>
    )
}

export default StepAvatar
