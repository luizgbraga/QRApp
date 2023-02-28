import React from "react";

import styles from "../../assets/styles/Forms/AddLinkFormStyles";

import DefaultButton from '../Buttons/DefaultButton';
import TextInput from "../Inputs/TextInput";

function AddLinkForm({ setLinkName, setOsName, setLink, setLocRestriction, setTimeRestriction, createLink }) {

    return(
        <div style={styles.formContainer}>
            <p style={styles.titleStyles}>Adicionar novo link</p>
            <div style={styles.headerFormStyles}>
                <TextInput label='Nome do link' placeholder='Android e IOs domingo em SP' setValue={setLinkName} w='calc(100vw - 1090px)' />
                <TextInput label='URL' placeholder='https://menu/domingo/happy-hour' setValue={setLink} w='calc(100vw - 1090px)' />
            </div>
        </div>
    )
}

export default AddLinkForm;