import React, { useState } from 'react';

// Styles
import styles from '../assets/styles/Forms/CreateNewFormStyles';

// General components
import DefaultButton from './Buttons/DefaultButton';

function Delete({ overlay, setOverlay }) {

    let visible = overlay ? {} : { display: 'none' };

    return(
        <div style={{ ...styles.background, ...visible }}>
                <div style={styles.containerStyles}>
                    <p style={styles.titleStyles}>Deseja mesmo deletar</p>
                    <div>
                        <DefaultButton label='Cancelar' onClick={() => setOverlay(false)} /> 
                        <DefaultButton label='Deletar' secundary /> 
                    </div>
                </div>
        </div>
    )
}

export default Delete;