import React from "react";

import styles from '../../assets/styles/Forms/NodeStyle';

function Node({ starting, ending, colored, idx, n }) {
    const w = `${(220 - 18 * n)/(n - 1)}px`;
    return(
        <div style={styles.container}>
            { !starting ? <div style={colored ? { ...styles.coloredLine, width: w } : { ...styles.line, width: w }} /> : false }
            <div style={colored ? styles.coloredBall : styles.ball}>
                <p style={styles.idx}>{idx}</p>
            </div>
            { !ending ? <div style={colored ? { ...styles.coloredLine, width: w } : { ...styles.line, width: w }} /> : false }
        </div>
    )
}

export default Node;