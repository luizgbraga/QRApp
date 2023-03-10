import React from "react";

import styles from "../../assets/styles/Forms/AddLinkFormStyles";

import DefaultButton from '../Buttons/DefaultButton';
import SelectInput from "../Inputs/SelectInput";

function AddLinkFormStep2({ setOsName, osName, osNameWarning, setOsNameWarning, nextNode, previousNode, userPlan, createLink }) {
    console.log(osName)
    const next = () => {
        if(!osNameWarning && osName.length) {
            nextNode();
            setOsNameWarning('');
        } else {
            setOsNameWarning('Insira ao menos 1 SO, ou pule');
        }
    }

    const skip = () => {
        setOsName([]);
        setOsNameWarning('');
        nextNode();
    }

    return(
        <div style={styles.headerFormStyles}>
            <p style={styles.titleStyles}>Restrição de SO</p>
            <div style={styles.inputsContainer}>
                <SelectInput label='Sistema operacional' options={['iOS', 'Android']} setValue={setOsName} value={osName.map((el) => ({ value: el.toLowerCase(), label: el}))} warningMessage={osNameWarning} isMulti placeholder='Selecione os SOs' info infoTitle='Restringir o Sistema Operacional' infoDescription='Apenas os SOs selecionados serão direcionados para esse link'/>
            </div>
            <div style={styles.buttonsContainer}>
                <DefaultButton w='80px' label='Anterior' terciary onClick={previousNode} />
                {
                    userPlan === "Plano Básico" 
                    ?
                    <div style={styles.rightButtonsContainer}>
                        <DefaultButton w='0px' />
                        <DefaultButton w='160px' label='Criar link' onClick={createLink} />
                    </div>
                    :
                    <div style={styles.rightButtonsContainer}>
                        <DefaultButton w='124px' label='Pular' onClick={skip} secundary />
                        <DefaultButton w='124px' label='Próximo' onClick={next} />
                    </div>
                }
            </div>
        </div>
    )
}

export default AddLinkFormStep2;