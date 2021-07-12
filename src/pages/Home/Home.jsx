import React from 'react'
import styles from './Home.module.css'
import Card from '../../components/shared/Card/Card'
import Button from '../../components/shared/Button/Button'
import { Link, useHistory } from 'react-router-dom'
const Home = () => {
    const signinLink = {
        color: '#014a9c',
        fontWeight: 'bold',
        textDecoration: 'none',
        marginLeft: '10px'
    }
    const history = useHistory();
    const handleRegister = () => {
        history.push('/register')
    }
    return (
        <div className={styles.containerCard}>
            <Card
                heading={'welcome to yourhouse!'}
                icon={'logo'}
            >

                <p className={styles.text}>We're working hard to get Yourhouse ready for everyone !
                    While we wrap up the finishing touches , we're adding people gradually to make sure nothing breaks</p>
                <div>
                    <Button
                        title={'Get your username'}
                        logo={'arrow-forward'}
                        onClick={handleRegister}
                    >
                    </Button>
                </div>
                <div className={styles.signText}>
                    <span className={styles.invite}>Have an invite text?</span>
                    <Link style={signinLink} to="/login">sign in </Link>
                </div>
            </Card>



        </div>

    )
}

export default Home
