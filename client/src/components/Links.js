import React from "react";

import styles from '../assets/styles/LinkStyles';

import LinkBox from "./LinkBox";

import add from '../assets/icons/add.png'

function Links({ links, defaultLink, setOverlay }) {

    return(
        <div style={styles.linksContainer}>
            <div style={styles.header}>
                <p style={styles.title}>Links cadastrados</p>
                <img src={add} style={styles.addLinkIcon} onClick={() => setOverlay(true)} />
            </div>
            <div style={styles.links}>
                { /*
                <p style={styles.linkDescription}>Principal</p>
                    <LinkBox linkName='Link Principal' url={defaultLink} main />
                <p style={styles.linkDescription}>Outros</p>
                    {
                        links.map(el => (
                            <LinkBox linkName={el.linkName} url={el.link} key={el._id} />      
                        ))
                        
                    }
                */ }
            </div>
        </div>
    )
}

export default Links;