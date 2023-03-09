import React from "react";
import Select from 'react-select';

import selectInputStyles from "../../assets/styles/Inputs/SelectInputStyles";

import questionMark from '../../assets/icons/info.png';

import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function SelectInput({ label, options, setValue, w, border, isMulti, warningMessage, placeholder, info, infoTitle, infoDescription, infoW }) {
    const opt = options.map((el) => ({ value: el.toLowerCase(), label: el}));
    let style = selectInputStyles.defaultSelectInput;
    if(border == 'left') { style = selectInputStyles.leftSelectInput } else
    if(border == 'right') { style = selectInputStyles.rightSelectInput } else
    if(border == 'none') { style = selectInputStyles.noBorderSelectInput }

    const popover = (
        <Popover style={infoW ? { ...selectInputStyles.popover, width: infoW }: selectInputStyles.popover}>
          <Popover.Header style={selectInputStyles.popoverHeader}>{infoTitle}</Popover.Header>
          <Popover.Body style={selectInputStyles.popoverBody}>
            {infoDescription}
          </Popover.Body>
          <div style={selectInputStyles.point} />
        </Popover>
      );

    return(
        <div>
            <div style={ w ? { ...selectInputStyles.defaultLabelContainer, width: w } : { ...selectInputStyles.defaultLabelContainer } }>
                <p style={selectInputStyles.defaultLabel}>{label}</p>
            </div>
            {
                info ?
                <div style={{ position: 'relative' }}>
                    <Select options={opt} isMulti={isMulti} placeholder={placeholder}
                    styles={{ control: (baseStyles, state) => ({ ...baseStyles, ...style, width: w }) }}
                    onChange={(e) => isMulti ? setValue(e.map(el => el.label)) : setValue(e.label)}
                    />
                    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                        <img src={questionMark} style={selectInputStyles.info} />
                    </OverlayTrigger>
                </div>
                :
                <Select options={opt} isMulti={isMulti} placeholder={placeholder}
                styles={{ control: (baseStyles, state) => ({ ...baseStyles, ...style, width: w }) }}
                onChange={(e) => isMulti ? setValue(e.map(el => el.label)) : setValue(e.label)}
                />
            }
            <div style={ w ? { ...selectInputStyles.warningMessageContainer, width: w } : { ...selectInputStyles.warningMessageContainer } }>
                <p style={selectInputStyles.warningMessage}>{warningMessage}</p>
            </div>
        </div>
    )
}

export default SelectInput;