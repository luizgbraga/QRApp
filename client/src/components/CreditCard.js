import React from "react";

import styles from "../assets/styles/CreditCardStyles";

import visa from '../assets/images/visa.png';
import mastercard from '../assets/images/mastercard.png';

function CreditCard() {
    return(
        <div>
            <p style={styles.label}>Método de pagamento</p>
            <div style={styles.container}>
                <div style={styles.creditCard}>
                    <input type='radio' style={styles.radio} checked></input>
                    <p style={styles.text}>Cartão de crédito</p>
                </div>
                <div style={styles.cardContainer}>
                    <img src={visa} style={styles.cardImage}></img>
                    <img src={mastercard} style={styles.cardImage}></img>
                </div>
            </div>
        </div>
    )
}

export default CreditCard;