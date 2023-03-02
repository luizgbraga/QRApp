import React from "react";

import styles from '../../assets/styles/Buttons/DefaultButtonStyles';

function DefaultButton({ onClick, label, w, secundary, disabled, terciary, warning }) {
    let style;
    if(secundary) {
        style = w ? { ...styles.secundaryButtonStyle, width: w } : { ...styles.secundaryButtonStyle };
    } else if(disabled) {
        style = w ? { ...styles.disabledButtonStyle, width: w } : { ...styles.disabledButtonStyle }; 
    } else if(terciary) {
        style = w ? { ...styles.terciaryButtonStyle, width: w } : { ...styles.terciaryButtonStyle };      
    } else if(warning) {
        style = w ? { ...styles.warningButtonStyles, width: w } : { ...styles.warningButtonStyles };
    } else {
        style = w ? { ...styles.buttonStyle, width: w } : { ...styles.buttonStyle };
    }
    return(
        <div onClick={onClick} style={style}>
            <p style={styles.labelStyle}>{label}</p>
        </div>
    )
}

export default DefaultButton;