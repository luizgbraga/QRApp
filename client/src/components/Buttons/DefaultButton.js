import React from "react";

import styles from '../../assets/styles/Buttons/DefaultButtonStyles';

function DefaultButton({ onClick, label, w }) {
    const style = w ? { ...styles.buttonStyle, width: w } : { ...styles.buttonStyle }
    return(
        <div onClick={onClick} style={style}>
            <p style={styles.labelStyle}>{label}</p>
        </div>
    )
}

export default DefaultButton;