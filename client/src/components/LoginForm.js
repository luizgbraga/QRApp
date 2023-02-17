import React from "react";

import styles from "../assets/styles/LoginFormStyles";

import { useNavigate } from "react-router-dom";

function LoginForm() {

    let navigate = useNavigate(); 

    return(
        <div style={styles.loginFormContainerStyles}>
            <p style={styles.titleStyles}>Bem-vindo de volta</p>
            <p style={styles.subtitleStyles}>Ainda não tem uma conta? <span style={styles.signinStyles} onClick={() => navigate('/signin')}>Inscreva-se aqui</span></p>
        </div>
    )
}

export default LoginForm;