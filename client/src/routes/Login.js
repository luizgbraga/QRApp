import React, { useState } from "react";
import axios from 'axios';

import config from "../config/host";

import globalStyles from "../assets/styles/Global/globalStyles";

import { useNavigate } from "react-router-dom";

import NavBar from "../layouts/NavBar";
import LoginForm from "../components/Forms/LoginForm";

function Login() {

    let navigate = useNavigate(); 
    const routeChange = (path) => navigate(path);

    const [email, setEmail] = useState('');
    const [emailWarning, setEmailWarning] = useState('');
    const [password, setPassword] = useState('');
    const [passwordWarning, setPasswordWarning] = useState('');

    const logUser = () => {
        axios.post(`http://${config.host}:3001/api/login/logUser`, { 
          email, password
        })
            .then((response) => {
                if(response.data == 'não existe!') {
                    setPasswordWarning('');
                    setEmailWarning('Esse email não está cadastrado');
                } else if(response.data == 'credenciais inválidas!') {
                    setEmailWarning('');
                    setPasswordWarning('Senha incorreta');
                } else {
                    localStorage.setItem('token', response.data);
                    setPassword('');
                    setEmail('');
                    setEmailWarning('');
                    setPasswordWarning('');
                    routeChange('/home');
                }
            });
    }

    return(
        <div style={globalStyles.columnCentered}>
            <NavBar />
            <LoginForm setEmail={setEmail} emailWarning={emailWarning} setPassword={setPassword} passwordWarning={passwordWarning} onClick={logUser} />
        </div>
    )
}

export default Login;