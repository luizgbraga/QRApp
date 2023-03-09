import React, { useState } from "react";

import SideBar from "../layouts/SideBar";
import TopBar from "../layouts/TopBar";
import BillingInformation from "../components/Forms/BillingInformation";
import AddressInformation from "../components/Forms/AddressForm";
import ProgressBar from "../components/Forms/ProgressBar";
import Line from "../components/Line";
import CartReview from "../components/CartReview";

import useFetchUserQR from "../hooks/useFetchUserQRs";

import styles from "../assets/styles/CheckoutStyles";

function Checkout() {

    const token = localStorage.getItem('token');
    const qrList = useFetchUserQR(token);

    const selectedPlan = localStorage.getItem('selectedPlan');
    const [step, setStep] = useState(0);

    const [cardNumber, setCardNumber] = useState('');
    const [cardExpiration, setCardExpiration] = useState('');
    const [cardCVV, setCardCVV] = useState('');
    const [cardName, setCardName] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');

    const plans = {
        'Plano Básico': 20,
        'Plano Empresa': 50,
        'Plano Premium': 90
    }
    
    return(
        <div style={{ display: 'flex' }}>
            <SideBar qrList={qrList} />
            <div>
                <TopBar goBack backPage='/plans' />
                <div style={styles.container}>
                    <p style={styles.title}>Checkout: <span style={{ fontWeight: '400' }}>{selectedPlan}</span></p>
                    <Line w='calc(100vw - 480px)' />
                    <div style={styles.bodyContainer}>
                        {
                            step == 0 ?
                            <BillingInformation setCardNumber={setCardNumber} setCardCVV={setCardCVV} setCardExpiration={setCardExpiration} setCardName={setCardName} onClick={() => setStep(1)} />
                            :
                            <AddressInformation />
                        }
                        <CartReview planName={selectedPlan} planPrice={plans[selectedPlan]} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;