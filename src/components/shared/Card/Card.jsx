import React from 'react'
import styles from './Card.module.css'
const Card = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.headingWrapper}>
                <img src={`/images/${props.icon}.png`} alt="logo" />
                <h1 className={styles.heading}>{props.heading}</h1>
            </div>
            {props.children}
        </div>
    )
}

export default Card
