import React, { useState } from 'react';

import styles from '../../assets/styles/Forms/CreateNewFormStyles';
import ButtonLogin from '../Buttons/DefaultButton';

import useFetchUser from '../../hooks/useFetchUser';
import createNewQR from "../../hooks/createNewQR";
import createNewLink from '../../hooks/createNewLink';

import TextInput from '../Inputs/TextInput';

import close from '../../assets/icons/close.png';

import { useNavigate } from "react-router-dom";

function CreateNewForm({ overlay, setOverlay }) {

    const [qrName, setQRName] = useState('');
    const [defaultLink, setDefaultLink] = useState('');

    const token = localStorage.getItem('token');
    let navigate = useNavigate(); 
    if(!token) navigate('/login');
    const user = useFetchUser(token);

    const createQR = () => {
        const qr = {
            qrName, defaultLink,
            userId: user._id
        }
        createNewQR(token, qr);
        setOverlay(false);
    }

    let visible = overlay ? {} : { display: 'none' };
    return(
        <div style={{ ...styles.background, ...visible }}>
            <div style={styles.containerStyles}>
                <img src={close} style={styles.close} onClick={() => setOverlay(false)} />
                <p style={styles.titleStyles}>Criar novo QR Code</p>
                <div style={styles.inputsStyles}>
                    <TextInput label='Nome do seu QR' placeholder='Baixe o aplicativo' setValue={setQRName} />
                    <TextInput label='Link' placeholder='https://app.com' setValue={setDefaultLink} />
                </div>
                <ButtonLogin label='Criar QR Code' onClick={createQR} /> 
            </div>
        </div>
    )
}

export default CreateNewForm;