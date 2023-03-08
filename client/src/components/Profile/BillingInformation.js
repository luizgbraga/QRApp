import React, { useState } from "react";
import styles from "../../assets/styles/ProfileStyles";

import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';

import TextInput from "../Inputs/TextInput";
import DefaultButton from "../Buttons/DefaultButton";

function BillingInformation({ cardName, cardNumber, cardExpiration, cardCVV, setCardName, setCardNumber, setCardExpiration, setCardCVV }) {

    const [editable, setEditable] = useState(false);

    if(editable) {
        return(
            <div style={styles.cardProfileContainer}>
                <p style={styles.subsubtitle}>Informações do cartão</p>
                    <div style={styles.editableCardContainer}>
                        <div style={styles.cardContainer}>
                            <Cards 
                                number={cardNumber}
                                expiry={cardExpiration}
                                cvc={cardCVV}
                                name={cardName}
                                focused={true}
                            />
                        </div>
                        <div style={styles.billingInfoContainer}>
                        <div style={styles.cardInfo}>
                            <TextInput label='Número do cartão' placeholder='0000 0000 0000 0000' setValue={setCardNumber} w='calc(8 *(100vw - 1000px)/12 - 24px)' />
                            <TextInput label='Data de expiração' placeholder='DD / MM' setValue={setCardExpiration} w='calc(4 * (100vw - 1000px)/12)' />
                        </div>
                        <div style={styles.cardInfo}>
                            <TextInput label='Nome como no cartão' placeholder='João Guilherme Silva' setValue={setCardName} w='calc(9 *(100vw - 1000px)/12 - 24px)' />
                            <TextInput label='CVV' placeholder='123' setValue={setCardCVV} w='calc(3 *(100vw - 1000px)/12)' />
                        </div>
                        </div>
                    </div>
                    <div style={styles.allButonsCardEditable}>
                        <DefaultButton label='Cancelar' terciary w='120px' onClick={() => setEditable(false)} />
                        <div style={styles.buttonsCardEditable}>
                            <DefaultButton label='Editar' secundary disabled w='120px' />
                            <DefaultButton label='Salvar' w='120px' />
                        </div>
                    </div>
            </div>
        )
    } else {
        return(
            <div style={styles.cardProfileContainer}>
                    <p style={styles.subsubtitle}>Informações do cartão</p>
                    <div style={styles.cardContainer}>
                        <Cards 
                                number={cardNumber}
                                expiry={cardExpiration}
                                cvc={cardCVV}
                                name={cardName}
                                focused={false}
                            />
                    </div>
                    <div style={styles.allButonsCard}>
                        <div style={styles.buttonsCard}>
                            <DefaultButton label='Editar' secundary w='120px' onClick={() => setEditable(true)} />
                            <DefaultButton label='Salvar' disabled w='120px' />
                        </div>
                    </div>
            </div>
        )
    }
}

export default BillingInformation;