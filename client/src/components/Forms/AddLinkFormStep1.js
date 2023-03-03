import React from "react";

import styles from "../../assets/styles/Forms/AddLinkFormStyles";

import DefaultButton from '../Buttons/DefaultButton';
import TextInput from "../Inputs/TextInput";

function AddLinkFormStep1({ setLinkName, setLink, nextNode, setOverlay, userPlan, createLink }) {

    return(
        <div style={styles.headerFormStyles}>
            <p style={styles.titleStyles}>Adicionar novo link</p>
            <div style={styles.inputsContainer}>
                <TextInput label='Nome do link' placeholder='Android e IOs domingo em SP' setValue={setLinkName} info infoTitle='Nome do seu link' infoDescription='Este nome será usado apenas para você identificar facilmente seu link'/>
                <TextInput label='URL' placeholder='https://menu/domingo/happy-hour' setValue={setLink} />
            </div>
                {
                    userPlan === "Gratuito" 
                    ?
                    <div style={styles.buttonsContainer}>
                        <DefaultButton w='192px' label='Cancelar' secundary onClick={setOverlay}/>
                        <DefaultButton w='160px' label='Criar link' onClick={createLink} />
                    </div>
                    :
                    <div style={styles.buttonsContainer}>
                        <DefaultButton w='192px' label='Cancelar' secundary onClick={setOverlay}/>
                        <DefaultButton w='192px' label='Próximo' onClick={nextNode} />
                    </div>
                }
        </div>
    )
}

export default AddLinkFormStep1;