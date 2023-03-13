import React, { useState } from 'react';

// Styles
import styles from '../assets/styles/DeleteStyles';

// General components
import DefaultButton from './Buttons/DefaultButton';

// Hooks
import deleteLink from '../hooks/deleteLink';

function DeleteLink({ overlay, setOverlay }) {

    let visible = overlay ? {} : { display: 'none' };

    const token = localStorage.getItem('token');
    const selectedLink = localStorage.getItem('selectedLink');

    const deleteThisLink = () => {
        localStorage.setItem('selectedLink', '');
        setOverlay(false);
        deleteLink(token, selectedLink);
    }

    return(
        <div style={{ ...styles.background, ...visible }}>
                <div style={styles.containerStyles}>
                    <div style={styles.titleContainer}>
                        <p style={styles.titleStyles}>Deletar Link?</p>
                    </div>
                    <div style={styles.body}>
                        <p style={styles.bodyText}>Essa ação deletará esse link <span style={{fontWeight: 500}}>permanentemente</span>. Não se preocupe, o QR Code será mantido com o restante dos links</p>
                    </div>
                    <div style={styles.buttonsContainer}>
                        <DefaultButton label='Cancelar' w='180px' secundary onClick={() => setOverlay(false)} /> 
                        <DefaultButton label='Sim, deletar' w='180px' onClick={deleteThisLink} /> 
                    </div>
                </div>
        </div>
    )
}

export default DeleteLink;