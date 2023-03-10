import React, { useState } from "react";

// Styles
import styles from "../../assets/styles/Forms/AddLinkFormStyles";

// General components
import DefaultButton from '../Buttons/DefaultButton';
import TextInput from "../Inputs/TextInput";

function AddLinkFormStep1({ setLinkName, setUrl, setLinkNameWarning, setUrlWarning, linkName, url, linkNameWarning, urlWarning, nextNode, setOverlay, userPlan, createLink }) {

    const next = () => {
        if(!linkNameWarning && !urlWarning && linkName && url) {
            nextNode();
            setLinkNameWarning('');
            setUrlWarning('');
        } else {
            if(!linkName) {
                setLinkNameWarning('Insira um nome para seu link');
            }
            if(!url) {
                setUrlWarning("Insira uma URL");
            }
        }
    }

    const handleLinkName = (linkNameInputed) => {
        setLinkName(linkNameInputed);
        if(!linkNameInputed) {
            setLinkNameWarning('Insira um nome para seu link');
        } else {
            setLinkNameWarning('');
        }
    }

    const handleUrl = (urlInputed) => {
        setUrl(urlInputed);
        if(!/^((?:https?:\/\/)?[^./]+(?:\.[^./]+)+(?:\/.*)?)$/.test(urlInputed)) {
            setUrlWarning('URL inválida');
        } else {
            setUrlWarning('');
        }
    }

    return(
        <div style={styles.headerFormStyles}>
            <p style={styles.titleStyles}>Adicionar novo link</p>
            <div style={styles.inputsContainer}>
                <TextInput label='Nome do link' placeholder='Android e IOs domingo em SP' setValue={handleLinkName} value={linkName} warningMessage={linkNameWarning} info infoTitle='Nome do seu link' infoDescription='Este nome será usado apenas para você identificar facilmente seu link'/>
                <TextInput label='URL' placeholder='https://menu/domingo/happy-hour' setValue={handleUrl} value={url} warningMessage={urlWarning} />
            </div>
                {
                    userPlan === "None" 
                    ?
                    <div style={styles.buttonsContainer}>
                        <DefaultButton w='192px' label='Cancelar' secundary onClick={setOverlay}/>
                        <DefaultButton w='160px' label='Criar link' onClick={createLink} />
                    </div>
                    :
                    <div style={styles.buttonsContainer}>
                        <DefaultButton w='192px' label='Cancelar' secundary onClick={setOverlay}/>
                        <DefaultButton w='192px' label='Próximo' onClick={next} />
                    </div>
                }
        </div>
    )
}

export default AddLinkFormStep1;