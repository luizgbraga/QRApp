import React from "react";

import styles from "../assets/styles/StickerStyles";

import working from '../assets/images/working.png'

function Sticker() {
    return(
        <div style={styles.stickerContainer}>
            <img src={working} style={styles.sticker} />
        </div>
    )
}

export default Sticker;