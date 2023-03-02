import React, { useState } from "react";
import styles from "../../assets/styles/ProfileStyles";

import TextInput from "../Inputs/TextInput";
import DefaultButton from "../Buttons/DefaultButton";

function PersonalInfo({ userName, userEmail, userPassoword, setUserName, setUserEmail }) {

    const [editable, setEditable] = useState(false);

    if(editable) {
        return(
            <div style={styles.personalInfoContainer}>
                <TextInput label='Nome do usuário' defaultValue={userName} setValue={setUserName} />
                <TextInput label='E-mail cadastrado' defaultValue={userEmail} setValue={setUserEmail} />
                <TextInput label='Senha do usuário' defaultValue='********' />
                <div style={styles.allButons}>
                    <DefaultButton label='Cancelar' terciary w='100px' onClick={() => setEditable(false)} />
                    <div style={styles.actionButtons}>
                        <DefaultButton label='Editar' secundary w='120px' onClick={() => setEditable(true)} />
                        <DefaultButton label='Salvar' w='120px' />
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div style={styles.personalInfoContainer}>
                <TextInput label='Nome do usuário' defaultValue={userName} disabled />
                <TextInput label='E-mail cadastrado' defaultValue={userEmail} disabled />
                <TextInput label='Senha do usuário' defaultValue='********' disabled />
                <div style={styles.allButons}>
                    <DefaultButton label='' terciary w='0px' />
                    <div style={styles.actionButtons}>
                        <DefaultButton label='Editar' secundary w='120px' onClick={() => setEditable(true)} />
                        <DefaultButton label='Salvar' disabled w='120px' />
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonalInfo;