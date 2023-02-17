import React from "react";

import google from '../../assets/images/google-logo.png';

import styles from "../../assets/styles/Buttons/ContinueWithGoogleStyles";

function ContinueWithGoogle() {
    return(
        <div style={styles.containerStyles}>
            <img src={google} style={styles.logoStyles} />
            <p style={styles.textStyles}>Continue com o Google</p>
        </div>
    )
}

export default ContinueWithGoogle;