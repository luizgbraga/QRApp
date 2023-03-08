import React, { useState } from 'react';
import axios from 'axios';

import styles from '../../assets/styles/Forms/EditLinkFormStyles';
import DefaultButton from '../Buttons/DefaultButton';

import TextInput from '../Inputs/TextInput';
import SelectInput from '../Inputs/SelectInput';

import close from '../../assets/icons/close.png';

import Line from '../Line';

import { useNavigate } from "react-router-dom";

function EditLinkForm({ overlay, setOverlay }) {

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

    const [selected, setSelected] = useState(0);

    let navigate = useNavigate(); 

    let visible = overlay ? {} : { display: 'none' };
    return(
        <div style={{ ...styles.background, ...visible }}>
            <div style={styles.containerStyles}>
                <img src={close} style={styles.close} onClick={() => setOverlay(false)} />
                <p style={styles.titleStyles}>Editar Link</p>
                <div style={styles.mainInfo}>
                    <TextInput label='Nome do seu QR' placeholder='Baixe o aplicativo' />
                    <TextInput label='Link' placeholder='https://app.com' />
                </div>
                <div style={styles.header}>
                    <p style={selected == 0 ? styles.subtitleSelected : styles.subtitle} onClick={() => setSelected(0)}>Sistema operacional</p>
                    <p style={selected == 1 ? styles.subtitleSelected : styles.subtitle} onClick={() => setSelected(1)}>Tempo</p>
                    <p style={selected == 2 ? styles.subtitleSelected : styles.subtitle} onClick={() => setSelected(2)}>Horário</p>
                    <p style={selected == 3 ? styles.subtitleSelected : styles.subtitle} onClick={() => setSelected(3)}>Localidade</p>
                </div>
                <Line w='100%' mt='10px' mb='8px' />
                <div style={styles.form}>
                    {
                        selected == 0 ?
                        <SelectInput label='Sistema operacional' options={['Todos', 'iOS', 'Android']} isMulti placeholder='Selecione os SOs' />
                        : 
                        selected == 1 ?
                        <div>
                            <SelectInput label='Meses' options={['Todos', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']} isMulti placeholder='Selecione os meses' />
                            <SelectInput label='Dias da semana' options={['Todos', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo']} isMulti placeholder='Selecione os dias da semana' />
                        </div>
                        : 
                        selected == 2 ?
                        <div>
                            <SelectInput label='Hora inicial' options={['00h', '01h', '02h', '03h', '04h', '05h', '06h', '07h', '08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h', '23h']} placeholder='Selecione a hora inicial' />
                            <SelectInput label='Hora final' options={['00h', '01h', '02h', '03h', '04h', '05h', '06h', '07h', '08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h', '23h']} placeholder='Selecione a hora final' />
                        </div>
                        :
                        selected == 3 ?
                        <SelectInput label='Restrição de localidade' options={brazilStates} isMulti placeholder='Selecione as localidades' />
                        : false
                    }
                </div>
                <div style={styles.button}>
                    <DefaultButton label='Atualizar' w='240px' /> 
                </div>
            </div>
        </div>
    )
}

export default EditLinkForm;