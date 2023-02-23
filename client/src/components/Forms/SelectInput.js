import React from "react";
import Select from 'react-select';

import styles from "../../assets/styles/Forms/SelectInputStyles";

function SelectInput({ label, options, setValue, bigger }) {
    const op = options.map((el) => ({ value: el, label: el}))
    return(
        <div style={styles.containerStyles}>
            <div style={styles.labelContainer}>
                <p style={styles.labelStyles}>{label}</p>
            </div>
            <select style={bigger ? { ...styles.inputSyles, width: '400px' } : styles.inputSyles} onChange={(e) => setValue(e.target.value)}>
                {
                    options.map((el) => {
                        return(<option key={el}>{el}</option>)   
                    })
                }
            </select>
            <Select options={op} isMulti />
        </div>
    )
}

export default SelectInput;