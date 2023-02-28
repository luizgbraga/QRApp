import React from "react";

import styles from "../../assets/styles/Forms/AddLinkFormStyles";

import ButtonLogin from '../Buttons/DefaultButton';
import TextInput from "../Inputs/TextInput";
import SelectInput from "../Inputs/SelectInput";

import close from '../../assets/icons/close.png';

function AddLinkForm({ setLinkName, setOsName, setLink, setLocRestriction, setTimeRestriction, createLink, overlay, setOverlay }) {

    let visible = overlay ? {} : { display: 'none' };
    
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
        <div style={{ ...styles.background, ...visible }}>
            <div style={styles.formContainer}>
                <img src={close} style={styles.close} onClick={() => setOverlay(false)} />
                <p style={styles.titleStyles}>Adicionar novo link</p>
                <div style={styles.headerFormStyles}>
                    <TextInput label='Nome do link' placeholder='Android e IOs domingo em SP' setValue={setLinkName} w='calc(100vw - 1090px)' />
                    <TextInput label='URL' placeholder='https://menu/domingo/happy-hour' setValue={setLink} w='calc(100vw - 1090px)' />
                </div>
                <div style={styles.headerFormStyles}>
                    <SelectInput label='Sistema operacional' options={['Todos', 'iOS', 'Android', 'Windows Phone']} setValue={setOsName} w='calc(100vw - 1400px)' isMulti/>
                    <SelectInput label='Meses' options={['Todos', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']} setValue={setOsName} w='calc(100vw - 1380px)' isMulti />
                    <SelectInput label='Dias da semana' options={['Todos', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo']} setValue={setOsName} w='calc(100vw - 1380px)' isMulti/>
                </div>
                <div style={styles.headerFormStyles}>
                    <SelectInput label='Hora inicial' options={['00h', '01h', '02h', '03h', '04h', '05h', '06h', '07h', '08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h', '23h']} setValue={setOsName} w='calc(100vw - 1650px)' />
                    <SelectInput label='Hora final' options={['00h', '01h', '02h', '03h', '04h', '05h', '06h', '07h', '08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h', '23h']} setValue={setOsName} w='calc(100vw - 1650px)' />
                    <SelectInput label='Restrição de localização' options={brazilStates} setValue={setLocRestriction} w='calc(100vw - 1340px)' isMulti />
                    <ButtonLogin label='Adicionar link' space={true} onClick={createLink} />
                </div>
            </div>
        </div>
    )
}

export default AddLinkForm;