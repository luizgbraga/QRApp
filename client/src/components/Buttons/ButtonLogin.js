import React from "react";

import styles from '../../assets/styles/Buttons/ButtonLoginStyles';

function ButtonLogin({ onClick, label, space }) {
    return(
        <div>
            {
                space ? <div style={{ height: '8px' }}/> : false
            }
            <div onClick={onClick} style={styles.buttonStyle}>
                <p style={styles.labelStyle}>{label}</p>
            </div>
        </div>
    )
}

export default ButtonLogin;