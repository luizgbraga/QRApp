import React from "react";

import styles from "../assets/styles/SelectorStyles";

function Selector({ selected, options, setSelector }) {
    return(
        <div style={styles.container}>
            {
                options.map((el, idx) => (
                    <div style={idx == selected ? styles.selected : styles.notSelected} onClick={() => setSelector(idx)} key={idx}>
                        <p style={styles.text}>{el}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Selector;