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
    const [password, setPassword] = useState('');

    const logUser = () => {
        axios.post(`http://${config.host}:3001/api/login/logUser`, { 
          email, password
        })
            .then((response) => {
                localStorage.setItem('token', response.data);
                setPassword('');
                setEmail('');
                routeChange('/home');
            });
    }

    return(
        <div style={globalStyles.columnCentered}>
            <NavBar />
            <LoginForm setEmail={setEmail} setPassword={setPassword} onClick={logUser} />
        </div>
    )
}

export default Login;