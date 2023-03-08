import React, { useState } from "react";
import styles from "../../assets/styles/ProfileStyles";

import TextInput from "../Inputs/TextInput";
import DefaultButton from "../Buttons/DefaultButton";

function AddressInformation({ }) {
        return(
            <div style={styles.billingInfoContainer}>
                <div>
                    <p style={styles.subsubtitle}>Endereço de cobrança</p>
                    <div style={styles.row}>
                        <TextInput label='Rua' w='calc(9 *(100vw - 1000px)/12 - 24px)' />
                        <TextInput label='Número' w='calc(3 *(100vw - 1000px)/12)' />
                    </div>
                    <div style={styles.row}>
                        <TextInput label='Complemento' w='calc(5 *(100vw - 1000px)/12 - 24px)' />
                        <TextInput label='Bairro' w='calc(7 *(100vw - 1000px)/12)' />
                    </div>
                    <div style={styles.row}>
                        <TextInput label='CEP' w='calc(5 *(100vw - 1000px)/12 - 24px)' />
                        <TextInput label='UF' w='calc(3 *(100vw - 1000px)/12 - 24px)' />
                        <TextInput label='Cidade' w='calc(4 *(100vw - 1000px)/12)' />
                    </div>
                    <DefaultButton label='Concluir compra' w='calc(100vw - 1000px)' /> 
                </div>
            </div>
        )
}

export default AddressInformation;