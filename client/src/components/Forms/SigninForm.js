import React from "react";

import styles from "../../assets/styles/Forms/SigninFormStyles";

import LoginTextInput from "./LoginTextInputs";
import ButtonLogin from "../Buttons/ButtonLogin";
import LineOr from "../LineOr";
import ContinueWithGoogle from "../Buttons/ContinueWithGoogle";

import { useNavigate } from "react-router-dom";

function LoginForm({ setUserName, setEmail, setPassword, onClick }) {

    let navigate = useNavigate(); 

    return(
        <div style={styles.signInFormContainerStyles}>
            <p style={styles.titleStyles}>Crie sua conta</p>
            <p style={styles.subtitleStyles}>Já tem uma conta? <span style={styles.signinStyles} onClick={() => navigate('/login')}>Entre aqui</span></p>
            <div style={styles.inputsStyles}>
                <LoginTextInput label='Nome do usuário' placeholder='Seu nome' setValue={setEmail} />
                <LoginTextInput label='Endereço de email' placeholder='seuemail@exemplo.com' setValue={setEmail} />
                <LoginTextInput label='Senha' placeholder='Insira 8 caracteres ou mais' setValue={setPassword} />
            </div>
            <ButtonLogin onClick={onClick} label='Criar conta' />
            <LineOr />
            <ContinueWithGoogle />
        </div>
    )
}

export default LoginForm;