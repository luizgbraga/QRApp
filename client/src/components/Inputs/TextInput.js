import React, { useState } from "react";
import colors from "../../assets/styles/Global/colors";

import textInputStyles from "../../assets/styles/Inputs/TextInputStyles";

import closedEye from '../../assets/icons/hide.png';
import openedEye from '../../assets/icons/view.png';
import questionMark from '../../assets/icons/info.png';

import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function TextInput({ label, placeholder, additional, setValue, warningMessage, w, defaultValue, disabled, hide, info, infoTitle, infoDescription, infoW }) {

    const [hidden, setHidden] = useState(true);

    const popover = (
        <Popover style={infoW ? { ...textInputStyles.popover, width: infoW }: textInputStyles.popover}>
          <Popover.Header style={textInputStyles.popoverHeader}>{infoTitle}</Popover.Header>
          <Popover.Body style={textInputStyles.popoverBody}>
            {infoDescription}
          </Popover.Body>
          <div style={textInputStyles.point} />
        </Popover>
      );

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
                hide ?
                <div style={{ position: 'relative' }}>
                    <input style={ w ? { ...textInputStyles.defaultTextInput, width: w } :  { ...textInputStyles.defaultTextInput } }
                    type={hidden ? 'password' : 'text'}
                    value={defaultValue} 
                    placeholder={placeholder} 
                    onChange={(e) => setValue(e.target.value)} />
                    {
                        hidden ?
                        <img src={openedEye} style={textInputStyles.eye} onClick={() => setHidden(!hidden)} />
                        :
                        <img src={closedEye} style={textInputStyles.eye} onClick={() => setHidden(!hidden)} />
                    }
                </div>
                :
                info ?
                <div style={{ position: 'relative' }}>
                    <input style={ w ? { ...textInputStyles.defaultTextInput, width: w } :  { ...textInputStyles.defaultTextInput } }
                    type='text'
                    value={defaultValue} 
                    placeholder={placeholder} 
                    onChange={(e) => setValue(e.target.value)} />
                    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                        <img src={questionMark} style={textInputStyles.info} />
                    </OverlayTrigger>
                </div>

                :
                <input style={ w ? { ...textInputStyles.defaultTextInput, width: w, paddingRight: '24px' } :  { ...textInputStyles.defaultTextInput, paddingRight: '24px' } }
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