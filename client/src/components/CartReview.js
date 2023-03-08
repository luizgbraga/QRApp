import React from "react";

import styles from "../assets/styles/CartReviewStyles";

import Line from "./Line";

import check from '../assets/icons/check.png';

function CartReview({ planName, planPrice }) {
    return(
        <div style={styles.cartContainer}>
            <p style={styles.title}>Resumo da compra</p>
            <div style={styles.planContainer}>
                <p style={{ ...styles.plan, fontWeight: '500' }}>{planName}</p>
                <p style={styles.plan}>Mensal</p>
            </div>
            <Line w='100%' />
            <div style={{ ...styles.planContainer, margin: '12px 0px 0px 0px' }}>
                <p style={{ ...styles.plan, fontWeight: '500' }}>TOTAL</p>
                <p style={styles.plan}>R$ {planPrice},00</p>
            </div>
            <div style={styles.benefits}>
                <div style={styles.benefitContainer}>
                    <img src={check} style={styles.check} />
                    <p>Após a compra, o plano estará pronto para o uso</p>
                </div>
                <div style={styles.benefitContainer}>
                    <img src={check} style={styles.check} />
                    <p>Você receberá um email com os detalhes da compra</p>
                </div>
                <div style={styles.benefitContainer}>
                    <img src={check} style={styles.check} />
                    <p>Você poderá mudar seu plano a qualquer momento</p>
                </div>
            </div>
        </div>
    )
}

export default CartReview;