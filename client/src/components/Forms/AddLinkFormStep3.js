import React, { useState } from "react";

import styles from "../../assets/styles/Forms/AddLinkFormStyles";

import DefaultButton from '../Buttons/DefaultButton';
import SelectInput from "../Inputs/SelectInput";

function AddLinkFormStep3({ setTimeRestriction, nextNode, previousNode }) {

    const [months, setMonths] = useState('');
    const [weekDays, setWeekDays] = useState('');

    const setTimeMonths = (monthsInputed) => {
        setMonths(monthsInputed.toString());
        setTimeRestriction(`${months}-${weekDays}`);
    }

    const setTimeWeekDays = (weekDaysInputed) => {
        setWeekDays(weekDaysInputed.toString());
        setTimeRestriction(`${months}-${weekDays}`);
    }

    return(
        <div style={styles.headerFormStyles}>
            <p style={styles.titleStyles}>Restrição de Tempo</p>
            <div style={styles.inputsContainer}>
                <SelectInput label='Meses' options={['Todos', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']} setValue={setTimeMonths} isMulti placeholder='Selecione os meses' info infoTitle="Restrição de Meses" infoDescription='Apenas durante os meses selecionados o usuário será direcionado para esse link' infoW='320px' />
                <SelectInput label='Dias da semana' options={['Todos', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo']} setValue={setTimeWeekDays} isMulti placeholder='Selecione os dias da semana' info infoTitle="Restrição de Dias da Semana" infoDescription='Apenas durante os dias da semana selecionados o usuário será direcionado para esse link' infoW='380px' />
            </div>
            <div style={styles.buttonsContainer}>
                <DefaultButton w='80px' label='Anterior' terciary onClick={previousNode} />
                <div style={styles.rightButtonsContainer}>
                    <DefaultButton w='124px' label='Pular' onClick={() => {
                        nextNode();
                        setTimeRestriction('');
                    }} secundary />
                    <DefaultButton w='124px' label='Próximo' onClick={nextNode} />
                </div>
            </div>
        </div>
    )
}

export default AddLinkFormStep3;