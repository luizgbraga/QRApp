import React from "react";

import styles from "../assets/styles/LinkBoxStyles";

import star from '../assets/icons/star.png'
import edit from '../assets/icons/edit.png';
import trash from '../assets/icons/trash.png';

function LinkBox({ linkName, setEditOverlay, main, url, accesses }) {
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
                <p style={styles.redirects}>24</p>
                <p style={styles.redirectsText}>acessos</p>
            </div>
            <div style={styles.actions}>
                <div style={{ width: '14px' }}></div>
                <img src={edit} style={styles.icons} onClick={() => setEditOverlay(true)} />
                <img src={trash} style={styles.icons} />
            </div>
        </div>
    )
}

export default LinkBox;