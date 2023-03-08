import React, { useState } from "react";
import styles from "../../assets/styles/ProfileStyles";

import TextInput from "../Inputs/TextInput";
import DefaultButton from "../Buttons/DefaultButton";
import CreditCard from "../CreditCard";

function BillingInformation({ setCardNumber, setCardExpiration, setCardCVV, setCardName, onClick }) {
        return(
            <div style={styles.billingInfoContainer}>
                    <p style={styles.subsubtitle}>Informações do cartão</p>
                    <CreditCard />
                    <div style={styles.cardInfo}>
                        <TextInput label='Número do cartão' placeholder='0000 0000 0000 0000' setValue={setCardNumber} w='calc(5 *(100vw - 1000px)/12 - 24px)' />
                        <TextInput label='Expiração' placeholder='DD / MM' setCardExpiration={setCardExpiration} w='calc(2.5 * (100vw - 1000px)/12)' />
                        <TextInput label='CPF' placeholder='111.222.333-44' w='calc(4.5 *(100vw - 1000px)/12 - 24px)' />
                    </div>
                    <div style={styles.cardInfo}>
                        <TextInput label='Nome como no cartão' placeholder='João Guilherme Silva' setCardName={setCardName} w='calc(9 *(100vw - 1000px)/12 - 24px)' />
                        <TextInput label='CVV' placeholder='123' w='calc(3 *(100vw - 1000px)/12)' setCardCVV={setCardCVV} info infoTitle='Código de segurança' infoDescription='É o código de três dígitos situado na parte de trás do cartão' />
                    </div>
                    <DefaultButton label='Próximo' w='100%' onClick={onClick} />
            </div>
        )
}

export default BillingInformation;