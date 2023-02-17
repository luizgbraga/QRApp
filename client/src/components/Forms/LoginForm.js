import React from "react";

import styles from "../../assets/styles/Forms/LoginFormStyles";

import LoginTextInput from "./LoginTextInputs";
import ButtonLogin from "../Buttons/ButtonLogin";
import LineOr from "../LineOr";
import ContinueWithGoogle from "../Buttons/ContinueWithGoogle";

import { useNavigate } from "react-router-dom";

function LoginForm({ setEmail, setPassword, onClick }) {

    let navigate = useNavigate(); 

    return(
        <div style={styles.loginFormContainerStyles}>
            <p style={styles.titleStyles}>Bem-vindo de volta</p>
            <p style={styles.subtitleStyles}>Ainda não tem uma conta? <span style={styles.signinStyles} onClick={() => navigate('/signin')}>Inscreva-se aqui</span></p>
            <div style={styles.inputsStyles}>
                <LoginTextInput label='Endereço de email' placeholder='seuemail@exemplo.com' setValue={setEmail} />
                <LoginTextInput label='Senha' placeholder='Insira 8 caracteres ou mais' additional='Esqueci minha senha' setValue={setPassword} />
            </div>
            <ButtonLogin onClick={onClick} label='Entrar' />
            <LineOr />
            <ContinueWithGoogle />
        </div>
    )
}

export default LoginForm;