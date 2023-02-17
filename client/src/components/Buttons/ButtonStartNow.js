import React from 'react';

import styles from '../../assets/styles/Buttons/ButtonStartNowStyles';

function ButtonStartNow({ label, onClick }) {

    return(
        <div
            style={styles.buttonStyle}
            onClick={onClick}>
            <p style={styles.labelStyle}>{label}</p>
        </div>
    )
    
}

export default ButtonStartNow;