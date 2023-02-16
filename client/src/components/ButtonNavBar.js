import React from 'react';

import styles from '../assets/styles/ButtonNavBarStyles';

function ButtonNavBar({ label, onClick }) {

    return(
        <div
            style={styles.buttonStyle}
            onClick={onClick}>
            <p style={styles.labelStyle}>{label}</p>
        </div>
    )
    
}

export default ButtonNavBar;