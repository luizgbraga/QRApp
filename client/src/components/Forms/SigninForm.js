import React from "react";

import styles from "../../assets/styles/Forms/SigninFormStyles";

import TextInput from "../Inputs/TextInput";
import ButtonLogin from "../Buttons/DefaultButton";
import LineOr from "../LineOr";
import ContinueWithGoogle from "../Buttons/ContinueWithGoogle";

import { useNavigate } from "react-router-dom";

function LoginForm({ setUserName, setEmail, setPassword, onClick }) {

    let navigate = useNavigate(); 

    return(
        <div style={styles.signInFormContainerStyles}>
            <p style={styles.titleStyles}>Crie sua conta</p>
            <p style={styles.subtitleStyles}>Já tem uma conta? <span style={styles.loginStyles} onClick={() => navigate('/login')}>Entre aqui</span></p>
            <div style={styles.inputsStyles}>
                <TextInput label='Nome do usuário' placeholder='Seu nome' setValue={setEmail} />
                <TextInput label='Endereço de email' placeholder='seuemail@exemplo.com' setValue={setEmail} />
                <TextInput label='Senha' placeholder='Insira 8 caracteres ou mais' setValue={setPassword} />
            </div>
            <ButtonLogin onClick={onClick} label='Criar conta' />
            <LineOr />
            <ContinueWithGoogle />
        </div>
    )
}

export default LoginForm;