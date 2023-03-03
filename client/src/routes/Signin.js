import React, { useState } from "react";
import axios from 'axios';

import config from "../config/host";

import { useNavigate } from "react-router-dom";

import globalStyles from "../assets/styles/Global/globalStyles";

import NavBar from "../layouts/NavBar";
import SigninForm from '../components/Forms/SigninForm';

function Signin() {

    const [email, setEmail] = useState('');
    const [emailWarning, setEmailWarning] = useState('');
    const [password, setPassword] = useState('');
    const [passwordWarning, setPasswordWarning] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordWarning, setConfirmPasswordWarning] = useState('');

    const handleEmail = (emailInputed) => {
        setEmail(emailInputed);
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInputed)) {
            setEmailWarning('Email inválido')
        } else {
            setEmailWarning('');
        }
    }

    const handlePassword = (passwordInputed) => {
        setPassword(passwordInputed);
        if(passwordInputed.length < 8) {
            setPasswordWarning('Sua senha deve conter no mínimo 8 caracteres');
        } else {
            setPasswordWarning('');
        }   
    }
    
    const handleConfirmPassword = (confirmPasswordInputed) => {
        setConfirmPassword(confirmPasswordInputed);
        if(password !== confirmPasswordInputed) {
            setConfirmPasswordWarning('As senhas são diferentes');
        } else {
            setConfirmPasswordWarning('');
        }
    }

    let navigate = useNavigate(); 
    const routeChange = (path) => navigate(path);

    const createUser = () => {
        if(!emailWarning && !passwordWarning && !confirmPasswordWarning && email && password) {
            axios.post(`http://${config.host}:3001/api/login/createUser`, { 
                password, email
              });
              setPassword('');
              setConfirmPassword('');
              setEmail('');
              routeChange('/login');
        }
    }

    return(
        <div style={globalStyles.columnCentered}>
            <NavBar />
            <SigninForm 
                setEmail={handleEmail}
                emailWarning={emailWarning} 
                setPassword={handlePassword} 
                passwordWarning={passwordWarning}
                setConfirmPassword={handleConfirmPassword}
                confirmPasswordWarning={confirmPasswordWarning} 
                onClick={createUser} />
        </div>
    )
}

export default Signin;