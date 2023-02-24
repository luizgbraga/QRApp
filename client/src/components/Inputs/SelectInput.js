import React from "react";
import Select from 'react-select';

import selectInputStyles from "../../assets/styles/Inputs/SelectInputStyles";

function SelectInput({ label, options, setValue, w, border, isMulti, warningMessage }) {
    const opt = options.map((el) => ({ value: el.toLowerCase(), label: el}));
    let style = selectInputStyles.defaultSelectInput;
    if(border == 'left') { style = selectInputStyles.leftSelectInput } else
    if(border == 'right') { style = selectInputStyles.rightSelectInput } else
    if(border == 'none') { style = selectInputStyles.noBorderSelectInput }
    return(
        <div>
            <div style={ w ? { ...selectInputStyles.defaultLabelContainer, width: w } : { ...selectInputStyles.defaultLabelContainer } }>
                <p style={selectInputStyles.defaultLabel}>{label}</p>
            </div>
            <Select options={opt} isMulti={isMulti}
                styles={{ control: (baseStyles, state) => ({ ...baseStyles, ...style, width: w }) }}
                onChange={(e) => setValue(e.map(el => el.label))}
            />
            <div style={ w ? { ...selectInputStyles.warningMessageContainer, width: w } : { ...selectInputStyles.warningMessageContainer } }>
                <p style={selectInputStyles.warningMessage}>{warningMessage}</p>
            </div>
        </div>
    )
}

export default SelectInput;