import React, { useState } from "react";

import styles from '../assets/styles/LinkStyles';
import DefaultButton from "./Buttons/DefaultButton";

import LinkBox from "./LinkBox";

function Links({ links, defaultLink, setOverlay, setEditOverlay }) {

    return(
        <div style={styles.container}>
            <div style={styles.linksContainer}>
                <div style={styles.links}>
                    <p style={styles.linkDescription}>Principal</p>
                        <LinkBox linkName='Link Principal' url={defaultLink} main setEditOverlay={setEditOverlay} />
                        <p style={styles.linkDescription}>Outros</p>
                        {
                            links.filter(el => !el.default).map(el => (
                                <LinkBox linkName={el.linkName} url={el.url} key={el._id} linkId={el._id} setEditOverlay={setEditOverlay} />      
                            ))
                            
                        }
                </div>
            </div>
            <div style={styles.button}>
                <DefaultButton label='Adicionar novo link' w='24%' secundary onClick={() => setOverlay(true)} />
            </div>
        </div>
    )
}

export default Links;