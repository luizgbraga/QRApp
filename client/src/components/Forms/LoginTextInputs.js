import React from "react";

import styles from '../../assets/styles/Forms/LoginTextInputStyle';

function LoginTextInput({ label, placeholder, additional, setValue }) {
    return(
        <div style={styles.containerStyles}>
            <div style={styles.labelContainer}>
                <p style={styles.labelStyles}>{label}</p>
                <p style={styles.additionalStyles}>{additional}</p>
            </div>
            <input style={styles.inputSyles}
                placeholder={placeholder} 
                onChange={(e) => setValue(e.target.value)}/>
        </div>
    )
}

export default LoginTextInput;