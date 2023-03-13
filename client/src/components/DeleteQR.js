import React, { useState } from 'react';

// Styles
import styles from '../assets/styles/DeleteStyles';

// General components
import DefaultButton from './Buttons/DefaultButton';

// Hooks
import deleteQR from '../hooks/deleteQR';

import { useNavigate } from "react-router-dom";

function DeleteQR({ overlay, setOverlay }) {

    let visible = overlay ? {} : { display: 'none' };

    const token = localStorage.getItem('token');
    const selectedQR = localStorage.getItem('selectedQR');
    let navigate = useNavigate(); 

    const deleteQRCode = () => {
        localStorage.setItem('selectedQR', '');
        setOverlay(false);
        navigate('/home');
        deleteQR(token, selectedQR);
    }

    return(
        <div style={{ ...styles.background, ...visible }}>
                <div style={styles.containerStyles}>
                    <div style={styles.titleContainer}>
                        <p style={styles.titleStyles}>Deletar QR Code?</p>
                    </div>
                    <div style={styles.body}>
                        <p style={styles.bodyText}>Essa ação deletará seu QR Code e <span style={{fontWeight: 500}}>todos os links</span> vinculados permanentemente, e portanto não poderá ser desfeita.</p>
                    </div>
                    <div style={styles.buttonsContainer}>
                        <DefaultButton label='Cancelar' w='180px' secundary onClick={() => setOverlay(false)} /> 
                        <DefaultButton label='Sim, deletar' w='180px' onClick={deleteQRCode} /> 
                    </div>
                </div>
        </div>
    )
}

export default DeleteQR;