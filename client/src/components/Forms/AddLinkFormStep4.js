import React, { useState } from "react";

import styles from "../../assets/styles/Forms/AddLinkFormStyles";

import DefaultButton from '../Buttons/DefaultButton';
import SelectInput from "../Inputs/SelectInput";

function AddLinkFormStep4({ setHourRestriction, nextNode, previousNode }) {

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const setHourFrom = (fromInputed) => {
        setFrom(fromInputed);
        setHourRestriction(`${from}-${to}`);
    }

    const setHourTo = (toInputed) => {
        setTo(toInputed);
        setHourRestriction(`${from}-${to}`);
    }

    return(
        <div style={styles.headerFormStyles}>
            <p style={styles.titleStyles}>Restrição de Horário</p>
            <div style={styles.inputsContainer}>
                <SelectInput label='Hora inicial' options={['00h', '01h', '02h', '03h', '04h', '05h', '06h', '07h', '08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h', '23h']} setValue={setHourFrom} placeholder='Selecione a hora inicial' />
                <SelectInput label='Hora final' options={['00h', '01h', '02h', '03h', '04h', '05h', '06h', '07h', '08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h', '23h']} setValue={setHourTo} placeholder='Selecione a hora final' />
            </div>
            <div style={styles.buttonsContainer}>
                <DefaultButton w='80px' label='Anterior' terciary onClick={previousNode} />
                <div style={styles.rightButtonsContainer}>
                    <DefaultButton w='124px' label='Pular' onClick={() => {
                        nextNode();
                        setHourRestriction('');
                    }} secundary />
                    <DefaultButton w='124px' label='Próximo' onClick={nextNode} />
                </div>
            </div>
        </div>
    )
}

export default AddLinkFormStep4;