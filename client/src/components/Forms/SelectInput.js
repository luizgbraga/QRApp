import React from "react";

import styles from "../../assets/styles/Forms/SelectInputStyles";

function SelectInput({ label, options, setValue }) {
    return(
        <div style={styles.containerStyles}>
            <div style={styles.labelContainer}>
                <p style={styles.labelStyles}>{label}</p>
            </div>
            <select style={styles.inputSyles} onChange={(e) => setValue(e.target.value)}>
                {
                    options.map((el) => {
                        return(<option>{el}</option>)   
                    })
                }
            </select>
        </div>
    )
}

export default SelectInput;