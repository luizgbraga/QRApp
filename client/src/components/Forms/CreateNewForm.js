import React from 'react';

import styles from '../../assets/styles/Forms/CreateNewFormStyles';
import ButtonLogin from '../Buttons/DefaultButton';

import TextInput from '../Inputs/TextInput';

function CreateNewForm({ setName, setDefaultLink, onClick }) {
    return(
        <div style={styles.containerStyles}>
            <p style={styles.titleStyles}>Criar novo QR Code</p>
            <div style={styles.inputsStyles}>
                <TextInput label='Nome do seu QR' placeholder='Baixe o aplicativo' setValue={setName} />
                <TextInput label='Link' placeholder='https://app.com' setValue={setDefaultLink} />
            </div>
            <ButtonLogin label='Criar QR Code' onClick={onClick} /> 
        </div>
    )
}

export default CreateNewForm;