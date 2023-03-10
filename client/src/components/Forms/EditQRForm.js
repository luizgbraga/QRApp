import React, { useState } from 'react';

import styles from '../../assets/styles/Forms/EditQRFormStyles';
import ButtonLogin from '../Buttons/DefaultButton';

import useFetchUser from '../../hooks/useFetchUser';
import createNewQR from "../../hooks/createNewQR";

import TextInput from '../Inputs/TextInput';

import close from '../../assets/icons/close.png';

import { useNavigate } from "react-router-dom";

function EditQRForm({ overlay, setOverlay, qr }) {

    const [qrName, setQRName] = useState(qr.qrName);
    const [defaultLink, setDefaultLink] = useState(qr.defaultLink);
    const [url, setUrl] = useState(qr.short);

    const token = localStorage.getItem('token');
    let navigate = useNavigate(); 
    if(!token) navigate('/login');
    const user = useFetchUser(token);

    const updateQR = () => {
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
                <p style={styles.titleStyles}>Editar QR Code</p>
                <div style={styles.inputsStyles}>
                    <TextInput label='Nome do QR' placeholder='Baixe o aplicativo' setValue={setQRName} value={qrName} />
                    <TextInput label='Link' placeholder='https://app.com' setValue={setDefaultLink} value={defaultLink} />
                    <TextInput label='URL do QR' placeholder='https://app.com' setValue={setUrl} value={url}/>
                </div>
                <ButtonLogin label='Atualizar QR Code' onClick={updateQR} /> 
            </div>
        </div>
    )
}

export default EditQRForm;