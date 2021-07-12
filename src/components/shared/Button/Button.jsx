import React from 'react'
import styles from './Button.module.css'
const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick} className={styles.buttonPrimary}>
                <span>{props.title}</span>
                <img className={styles.arrow} src={`/images/${props.logo}.png`} alt="arrow" />
            </button>
        </div>
    )
}

export default Button
