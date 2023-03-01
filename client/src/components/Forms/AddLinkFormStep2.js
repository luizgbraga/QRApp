import React from "react";

import styles from "../../assets/styles/Forms/AddLinkFormStyles";

import DefaultButton from '../Buttons/DefaultButton';
import SelectInput from "../Inputs/SelectInput";

function AddLinkFormStep2({ setOsName, nextNode, previousNode }) {

    return(
        <div style={styles.headerFormStyles}>
            <p style={styles.titleStyles}>Restrição de SO</p>
            <div style={styles.inputsContainer}>
                <SelectInput label='Sistema operacional' options={['Todos', 'iOS', 'Android']} setValue={setOsName} isMulti placeholder='Selecione os SOs' />
            </div>
            <div style={styles.buttonsContainer}>
                <DefaultButton w='80px' label='Anterior' terciary onClick={previousNode} />
                <div style={styles.rightButtonsContainer}>
                    <DefaultButton w='124px' label='Pular' onClick={() => {
                        nextNode();
                        setOsName('');
                    }} secundary />
                    <DefaultButton w='124px' label='Próximo' onClick={nextNode} />
                </div>
            </div>
        </div>
    )
}

export default AddLinkFormStep2;