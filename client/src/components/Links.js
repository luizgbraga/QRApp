import React from "react";

import styles from '../assets/styles/LinkStyles';

import LinkBox from "./LinkBox";

import add from '../assets/icons/add.png'

function Links({ links }) {
    let main = links[0] ? links[0] : {};

    return(
        <div style={styles.linksContainer}>
            <div style={styles.header}>
                <p style={styles.title}>Links cadastrados</p>
                <img src={add} style={styles.addLinkIcon} />
            </div>
            <div style={styles.links}>
                <p style={styles.linkDescription}>Principal</p>

                <p style={styles.linkDescription}>Outros</p>
            </div>
        </div>
    )
}

export default Links;