import React, { useState } from "react";

import styles from "../../assets/styles/Forms/SelectInputStyles";

function TimeRestriction({ setValue }) {

    const [month, setMonth] = useState('Todos');
    const [weekDay, setWeekDay] = useState('Todos');
    const [from, setFrom] = useState('00h');
    const [to, setTo] = useState('00h');

    const months = ['Todos', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const weekDays = ['Todos', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];
    const hours = ['00h', '01h', '02h', '03h', '04h', '05h', '06h', '07h', '08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h', '23h'];
    return(
        <div style={styles.containerStyles}>
            <div style={styles.labelContainer}>
                <p style={styles.labelStyles}>Restrição de Tempo</p>
            </div>
            <div style={styles.selectsContainerStyles}>
                <select style={styles.selectMonthStyles} onChange={(e) => {
                    setMonth(e.target.value);
                    setValue(`${month}, ${weekDay}, ${from} - ${to}`);
                }}>
                {
                    months.map((el) => {
                        return(<option>{el}</option>)   
                    })
                }
                </select>
                <select style={styles.selectWeekDayStyles} onChange={(e) => {
                    setWeekDay(e.target.value);
                    setValue(`${month}, ${weekDay}, ${from} - ${to}`);
                }}>
                {
                    weekDays.map((el) => {
                        return(<option>{el}</option>)   
                    })
                }
                </select>
                <select style={styles.selectFromHourStyles} onChange={(e) => {
                    setFrom(e.target.value);
                    setValue(`${month}, ${weekDay}, ${from} - ${to}`);
                }}>
                {
                    hours.map((el) => {
                        return(<option>De {el}</option>)   
                    })
                }
                </select>
                <select style={styles.selectToHourStyles} onChange={(e) => {
                    setTo(e.target.value);
                    setValue(`${month}, ${weekDay}, ${from} - ${to}`);
                }}>
                {
                    hours.map((el) => {
                        return(<option>Até {el}</option>)   
                    })
                }
                </select>
            </div>
        </div>
    )
}

export default TimeRestriction;