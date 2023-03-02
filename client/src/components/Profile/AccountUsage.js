import React from "react";

import styles from "../../assets/styles/ProfileStyles";

function AccountUsage({ qrCodes, maxLinks }) {
    return(
        <div style={styles.accountUsageContainer}>
            <div style={styles.info}>
                <p style={styles.label}>Número de QR Codes</p>
                <p style={styles.value}>{qrCodes}</p>
            </div>
            <div style={styles.info}>
                <p style={styles.label}>Número máximo de links</p>
                <p style={styles.value}>{maxLinks}</p>
            </div>
        </div>
    )
}

export default AccountUsage