import React from "react";

import styles from "../../assets/styles/Forms/AddLinkFormStyles";

import DefaultButton from '../Buttons/DefaultButton';
import SelectInput from "../Inputs/SelectInput";

function AddLinkFormStep5({ setLocRestriction, createLink, previousNode }) {

    
    const brazilStates = [
        "Todos",
        "Acre",
        "Alagoas",
        "Amapá",
        "Amazonas",
        "Bahia",
        "Ceará",
        "Distrito Federal",
        "Espirito Santo",
        "Goiás",
        "Maranhão",
        "Mato Grosso do Sul",
        "Mato Grosso",
        "Minas Gerais",
        "Pará",
        "Paraíba",
        "Paraná",
        "Pernambuco",
        "Piauí",
        "Rio de Janeiro",
        "Rio Grande do Norte",
        "Rio Grande do Sul",
        "Rondônia",
        "Roraima",
        "Santa Catarina",
        "São Paulo",
        "Sergipe",
        "Tocantins",
    ];

    return(
        <div style={styles.headerFormStyles}>
            <p style={styles.titleStyles}>Restrição de Localidade</p>
            <div style={styles.inputsContainer}>
                <SelectInput label='Restrição de localidade' options={brazilStates} setValue={setLocRestriction} isMulti placeholder='Selecione as localidades' />
            </div>
            <div style={styles.buttonsContainer}>
                <DefaultButton w='80px' label='Anterior' terciary onClick={previousNode} />
                <DefaultButton w='160px' label='Criar link' onClick={createLink} />
            </div>
        </div>
    )
}

export default AddLinkFormStep5;