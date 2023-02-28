import React from "react";

import styles from "../assets/styles/LinkBoxStyles";

import star from '../assets/icons/star.png'

function LinkBox({ linkName, main, osName, timeRestriction, locRestriction, url, accesses }) {
    return(
        <div style={styles.box}>
            <div style={styles.starContainer}>
                {
                    main ?  <img src={star} style={styles.star} /> : false
                }
            </div>
            <div style={styles.infoContainer}>
                <p style={styles.title}>{linkName}</p>
                <p style={styles.url}>{url}</p>
            </div>
            <div style={styles.redirectsContainer}>
                <p style={styles.redirects}>{accesses}</p>
                <p style={styles.redirectsText}>acessos</p>
            </div>
        </div>
    )
}

export default LinkBox;