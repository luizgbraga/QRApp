import React from "react";

import styles from "../../assets/styles/Forms/AddLinkFormStyles";
import LoginTextInput from './LoginTextInputs';
import SelectInput from "./SelectInput";
import TimeRestriction from "./TimeRestriction";
import ButtonLogin from '../Buttons/ButtonLogin';

function AddLinkForm({ setLinkName, setOsName, setLink, setLocRestriction, setTimeRestriction, createLink }) {
    return(
        <div style={styles.formContainer}>
            <p style={styles.titleStyles}>Adicionar novo link</p>
            <div style={styles.headerFormStyles}>
                <LoginTextInput label='Nome do link' placeholder='Android e IOs domingo em SP' setValue={setLinkName} />
                <LoginTextInput label='URL' placeholder='https://menu/domingo/happy-hour' setValue={setLink} />
            </div>
            <div style={styles.restrictionFormStyles}>
                <SelectInput label='Sistema operacional' options={['Todos', 'iOS', 'Android', 'Windows Phone']} setValue={setOsName} />
                <TimeRestriction setValue={setTimeRestriction} />
            </div>
            <div style={styles.restrictionFormStyles}>
                <LoginTextInput label='Restrição de localização' placeholder='Estado de São Paulo' setValue={setLocRestriction} />
                <ButtonLogin label='Adicionar link' space={true} onClick={createLink} />
            </div>
        </div>
    )
}

export default AddLinkForm;