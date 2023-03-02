import React from "react";
import colors from "../../assets/styles/Global/colors";

import textInputStyles from "../../assets/styles/Inputs/TextInputStyles";

function TextInput({ label, placeholder, additional, setValue, warningMessage, w, defaultValue, disabled }) {
    return(
        <div>
            <div style={ w ? { ...textInputStyles.defaultLabelContainer, width: w } : { ...textInputStyles.defaultLabelContainer } }>
                <p style={textInputStyles.defaultLabel}>{label}</p>
                <p style={textInputStyles.moreInfoLabel}>{additional}</p>
            </div>
            {
                disabled ?
                <div style={ w ? { ...textInputStyles.defaultTextInput, width: w } :  { ...textInputStyles.defaultTextInput } }>
                    <p style={{ fontSize: '20px', color: colors.darkgrey }}>{defaultValue}</p>
                </div>
                :
                <input style={ w ? { ...textInputStyles.defaultTextInput, width: w } :  { ...textInputStyles.defaultTextInput } }
                value={defaultValue}
                placeholder={placeholder} 
                onChange={(e) => setValue(e.target.value)} />
            }
            <div style={ w ? { ...textInputStyles.warningMessageContainer, width: w} : { ...textInputStyles.warningMessageContainer } }>
                <p style={textInputStyles.warningMessage}>{warningMessage}</p>
            </div>
        </div>
    )
}

export default TextInput;