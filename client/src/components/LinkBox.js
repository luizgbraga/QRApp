import React from "react";

import styles from "../assets/styles/LinkBoxStyles";

function LinkBox({ linkName, osName, timeRestriction, locRestriction, url }) {
    return(
        <div style={styles.box}>
            <p style={styles.title}>{linkName}</p>
            <p style={styles.url}>{url}</p>
        </div>
    )
}

export default LinkBox;