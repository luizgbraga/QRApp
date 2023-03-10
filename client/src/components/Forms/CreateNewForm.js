import React, { useState } from 'react';

// Styles
import styles from '../../assets/styles/Forms/CreateNewFormStyles';

// Database communication
import useFetchUser from '../../hooks/useFetchUser';
import createNewQR from "../../hooks/createNewQR";

// General components
import TextInput from '../Inputs/TextInput';
import DefaultButton from '../Buttons/DefaultButton';

// Icons and images
import close from '../../assets/icons/close.png';

// Navigation
import { useNavigate } from "react-router-dom";

// Shake it
import { Shake, ShakeHorizontal } from 'reshake';

function CreateNewForm({ overlay, setOverlay }) {

    let navigate = useNavigate(); 

    const token = localStorage.getItem('token');
    if(!token) navigate('/login');

    let visible = overlay ? {} : { display: 'none' };

    const [qrName, setQRName] = useState('');
    const [qrNameWarning, setQRNameWarning] = useState('');

    const [defaultLink, setDefaultLink] = useState('');
    const [defaultLinkWarning, setDefaultLinkWarning] = useState('');

    const [wrong, setWrong] = useState(false);

    const user = useFetchUser(token);

    const createQR = () => {
        if(!qrNameWarning && !defaultLinkWarning && qrName && defaultLink) {
            const qr = {
                qrName, defaultLink,
                userId: user._id
            }
            createNewQR(token, qr);
            setOverlay(false);
        } else {
            setWrong(true);
            setTimeout(function() {
                setWrong(false);
              }, 320);
        }
    }

    const handleQRName = (qrNameInputed) => {
        setQRName(qrNameInputed);
        if(!qrNameInputed) {
            setQRNameWarning('Insira um nome para o seu QR Code');
        } else {
            setQRNameWarning('');
        }
    }

    const handleDefaultLink = (defaultLinkInputed) => {
        setDefaultLink(defaultLinkInputed);
        if(!/^((?:https?:\/\/)?[^./]+(?:\.[^./]+)+(?:\/.*)?)$/.test(defaultLinkInputed)) {
            setDefaultLinkWarning('Link inválido');
        } else {
            setDefaultLinkWarning('');
        }
    }

    const closeOverlay = () => {
        setQRName('');
        setDefaultLink('');
        setQRNameWarning('');
        setDefaultLinkWarning('');
        setOverlay(false);
    }

    return(
        <div style={{ ...styles.background, ...visible }}>
            <ShakeHorizontal active={wrong}>
                <div style={styles.containerStyles}>
                    <img src={close} style={styles.close} onClick={closeOverlay} />
                    <p style={styles.titleStyles}>Criar novo QR Code</p>
                    <div style={styles.inputsStyles}>
                        <TextInput label='Nome do seu QR' placeholder='Baixe o aplicativo' setValue={handleQRName} warningMessage={qrNameWarning} value={qrName} />
                        <TextInput label='Link' placeholder='https://app.com' setValue={handleDefaultLink} warningMessage={defaultLinkWarning} value={defaultLink} />
                    </div>
                    <DefaultButton label='Criar QR Code' onClick={createQR} /> 
                </div>
            </ShakeHorizontal>
        </div>
    )
}

export default CreateNewForm;