import React, { useState } from "react";
import styles from "../../assets/styles/ProfileStyles";

import TextInput from "../Inputs/TextInput";
import DefaultButton from "../Buttons/DefaultButton";

function BillingInformation({ }) {

    const [editable, setEditable] = useState(false);

    if(editable) {
        return(
            <div style={styles.billingInfoContainer}>
                <div style={styles.cardInfoContainer}>
                    <p style={styles.subsubtitle}>Informações do cartão</p>
                    <TextInput label='Número do cartão' />
                    <TextInput label='Data de expiração' />
                    <TextInput label='CVV'  />
                    <div style={styles.allButons}>
                        <DefaultButton label='Cancelar' terciary w='100px' onClick={() => setEditable(false)} />
                        <div style={styles.actionButtons}>
                            <DefaultButton label='Editar' secundary w='120px' onClick={() => setEditable(true)} />
                            <DefaultButton label='Salvar' w='120px' />
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div style={styles.billingInfoContainer}>
                <div style={styles.cardInfoContainer}>
                    <p style={styles.subsubtitle}>Informações do cartão</p>
                    <TextInput label='Número do cartão' disabled />
                    <TextInput label='Data de expiração' disabled />
                    <TextInput label='CVV' disabled />
                    <div style={styles.allButons}>
                        <DefaultButton label='' terciary w='0px' />
                        <div style={styles.actionButtons}>
                            <DefaultButton label='Editar' secundary w='120px' onClick={() => setEditable(true)} />
                            <DefaultButton label='Salvar' disabled w='120px' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BillingInformation;