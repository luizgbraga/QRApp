import React from "react";

import styles from '../../assets/styles/Forms/NodeStyle';
import lock from '../../assets/icons/lock.png';

function Node({ starting, ending, colored, idx, n, locked }) {
    const w = `${(220 - 18 * n)/(n - 1)}px`;
    const names = ['Link', 'SO', 'Tempo', 'Horário', 'Local'];
    return(
        <div>
            {
                colored ?
                <div style={starting ? styles.nodeTitleStartingColored : ending ? styles.nodeTitleEndingColored : styles.nodeTitleColored}>
                    <p>{names[idx - 1]}</p>
                </div>
            :
            <div style={starting ? styles.nodeTitleStarting : ending ? styles.nodeTitleEnding : styles.nodeTitle}>
                <p style={locked ? styles.unabled : {}}>{names[idx - 1]}</p>
            </div>
            }
            <div style={styles.container}>
                { !starting ? <div style={colored ? { ...styles.coloredLine, width: w } : { ...styles.line, width: w }} /> : false }
                <div style={colored ? styles.coloredBall : styles.ball}>
                    {
                        locked ?
                        <img src={lock} style={styles.lock} />
                        :
                        <p style={styles.idx}>{idx}</p>
                    }
                </div>
                { !ending ? <div style={colored ? { ...styles.coloredLine, width: w } : { ...styles.line, width: w }} /> : false }
            </div>
        </div>
    )
}

export default Node;