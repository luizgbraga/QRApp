import React, { useState } from "react";

import styles from "../../assets/styles/Forms/AddLinkFormStyles";

import DefaultButton from '../Buttons/DefaultButton';
import SelectInput from "../Inputs/SelectInput";

function AddLinkFormStep3({ months, setMonths, monthsWarning, setMonthsWarning, timeRestriction, weekDays, setWeekDays, weekDaysWarning, setWeekDaysWarning, setTimeRestriction, timeRestrictionWarning, handleTimeMonths, handleTimeWeekDays, setTimeRestrictionWarning, nextNode, previousNode }) {

    const next = () => {
        if(!months.length) {
            setMonthsWarning("Selecione os meses, ou pule");
        } else {
            setMonthsWarning('');
        }
        if(!weekDays.length) {
            setWeekDaysWarning("Selecione os dias da semana, ou pule");
        } else {
            setWeekDaysWarning('');
        }

        if(months.length && weekDays.length) {
            nextNode();
            setMonthsWarning('');
            setWeekDaysWarning('');
            setTimeRestrictionWarning('');
        }
    }

    const skip = () => {
        setMonths([]);
        setWeekDays([]);
        setTimeRestriction('');
        setMonthsWarning('');
        setWeekDaysWarning('');
        setTimeRestrictionWarning('');
        nextNode();
    }

    return(
        <div style={styles.headerFormStyles}>
            <p style={styles.titleStyles}>Restrição de Tempo</p>
            <div style={styles.inputsContainer}>
                <SelectInput label='Meses' options={['Todos', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']} setValue={handleTimeMonths} value={months.map((el) => ({ value: el.toLowerCase(), label: el}))} warningMessage={monthsWarning} isMulti placeholder='Selecione os meses' info infoTitle="Restrição de Meses" infoDescription='Apenas durante os meses selecionados o usuário será direcionado para esse link' infoW='320px' />
                <SelectInput label='Dias da semana' options={['Todos', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo']} setValue={handleTimeWeekDays} warningMessage={weekDaysWarning} value={weekDays.map((el) => ({ value: el.toLowerCase(), label: el}))} isMulti placeholder='Selecione os dias da semana' info infoTitle="Restrição de Dias da Semana" infoDescription='Apenas durante os dias da semana selecionados o usuário será direcionado para esse link' infoW='380px' />
            </div>
            <div style={styles.buttonsContainer}>
                <DefaultButton w='80px' label='Anterior' terciary onClick={previousNode} />
                <div style={styles.rightButtonsContainer}>
                    <DefaultButton w='124px' label='Pular' onClick={skip} secundary />
                    <DefaultButton w='124px' label='Próximo' onClick={next} />
                </div>
            </div>
        </div>
    )
}

export default AddLinkFormStep3;