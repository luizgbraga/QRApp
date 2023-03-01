import React from "react";

import styles from "../../assets/styles/Forms/AddLinkFormStyles";

import DefaultButton from '../Buttons/DefaultButton';
import TextInput from "../Inputs/TextInput";

function AddLinkFormStep1({ setLinkName, setLink, nextNode, setOverlay }) {

    return(
        <div style={styles.headerFormStyles}>
            <p style={styles.titleStyles}>Adicionar novo link</p>
            <div style={styles.inputsContainer}>
                <TextInput label='Nome do link' placeholder='Android e IOs domingo em SP' setValue={setLinkName} />
                <TextInput label='URL' placeholder='https://menu/domingo/happy-hour' setValue={setLink} />
            </div>
            <div style={styles.buttonsContainer}>
                <DefaultButton w='192px' label='Cancelar' secundary onClick={setOverlay}/>
                <DefaultButton w='192px' label='Próximo' onClick={nextNode} />
            </div>
        </div>
    )
}

export default AddLinkFormStep1;