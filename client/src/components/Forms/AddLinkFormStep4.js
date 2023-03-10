import React, { useState } from "react";

import styles from "../../assets/styles/Forms/AddLinkFormStyles";

import DefaultButton from '../Buttons/DefaultButton';
import SelectInput from "../Inputs/SelectInput";

function AddLinkFormStep4({ from, setFrom, to, setTo, fromWarning, setFromWarning, toWarning, setToWarning, handleHourFrom, handleHourTo, setHourRestriction, nextNode, previousNode, createLink, userPlan }) {
    const next = () => {
        if(!from.length) {
            setFromWarning("Selecione a hora de início, ou pule");
        } else {
            setFromWarning('');
        }
        if(!to.length) {
            setToWarning("Selecione a hora de término, ou pule");
        } else {
            setToWarning('');
        }

        if(from.length && to.length) {
            if(Number(from.substr(0, 2) < Number(to.substr(0, 2)))) {
                nextNode();
            } else {
                setToWarning("A hora de término deve ser maior que a de início");
            }
            nextNode();
        }
    }

    const skip = () => {
        setFrom('');
        setTo('');
        setHourRestriction('');
        setFromWarning('');
        setToWarning('');
        nextNode();
    }

    const create = () => {
        if(!from.length) {
            setFromWarning("Selecione a hora de início, ou pule");
        } else {
            setFromWarning('');
        }
        if(!to.length) {
            setToWarning("Selecione a hora de término, ou pule");
        } else {
            setToWarning('');
        }

        if(from.length && to.length) {
            if(Number(from.substr(0, 2) < Number(to.substr(0, 2)))) {
                createLink();
            } else {
                setToWarning("A hora de término deve ser maior que a de início");
            }
        }
    }

    return(
        <div style={styles.headerFormStyles}>
            <p style={styles.titleStyles}>Restrição de Horário</p>
            <div style={styles.inputsContainer}>
                <SelectInput label='Hora inicial' options={['00h', '01h', '02h', '03h', '04h', '05h', '06h', '07h', '08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h', '23h']} setValue={handleHourFrom} warningMessage={fromWarning} placeholder='Selecione a hora inicial' />
                <SelectInput label='Hora final' options={['00h', '01h', '02h', '03h', '04h', '05h', '06h', '07h', '08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h', '23h']} setValue={handleHourTo} warningMessage={toWarning} placeholder='Selecione a hora final' />
            </div>
            <div style={styles.buttonsContainer}>
                <DefaultButton w='80px' label='Anterior' terciary onClick={previousNode} />

                {
                    userPlan === "Plano Empresa" 
                    ?
                    <div style={styles.rightButtonsContainer}>
                        <DefaultButton w='0px' />
                        <DefaultButton w='160px' label='Criar link' onClick={create} />
                    </div>
                    :
                    <div style={styles.rightButtonsContainer}>
                        <DefaultButton w='124px' label='Pular' onClick={() => {
                            nextNode();
                        }} secundary />
                        <DefaultButton w='124px' label='Próximo' onClick={next} />
                    </div>
                }
            </div>
        </div>
    )
}

export default AddLinkFormStep4;