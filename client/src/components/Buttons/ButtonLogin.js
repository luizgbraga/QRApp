import React from "react";

import styles from '../../assets/styles/Buttons/ButtonLoginStyles';

function ButtonLogin({ onClick, label }) {
    return(
        <div onClick={onClick} style={styles.buttonStyle}>
            <p style={styles.labelStyle}>{label}</p>
        </div>
    )
}

export default ButtonLogin;