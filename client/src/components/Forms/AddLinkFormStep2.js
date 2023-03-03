import React from "react";

import styles from "../../assets/styles/Forms/AddLinkFormStyles";

import DefaultButton from '../Buttons/DefaultButton';
import SelectInput from "../Inputs/SelectInput";

function AddLinkFormStep2({ setOsName, nextNode, previousNode, userPlan, createLink }) {

    return(
        <div style={styles.headerFormStyles}>
            <p style={styles.titleStyles}>Restrição de SO</p>
            <div style={styles.inputsContainer}>
                <SelectInput label='Sistema operacional' options={['Todos', 'iOS', 'Android']} setValue={setOsName} isMulti placeholder='Selecione os SOs' info infoTitle='Restringir o Sistema Operacional' infoDescription='Apenas os SOs selecionados serão direcionados para esse link'/>
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
                        <DefaultButton w='124px' label='Pular' onClick={() => {
                            nextNode();
                            setOsName('');
                        }} secundary />
                        <DefaultButton w='124px' label='Próximo' onClick={nextNode} />
                    </div>
                }
            </div>
        </div>
    )
}

export default AddLinkFormStep2;