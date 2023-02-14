import React, { useState } from "react";
import axios from 'axios';

import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";

import TextInput from "../components/TextInput";
import Button from "../components/Button";

import styles from "../assets/styles/LoginStyles";

function Login() {

    let navigate = useNavigate(); 
    const routeChange = (path) => navigate(path);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logUser = () => {
        axios.post(`http://localhost:3001/api/login/logUser`, { 
          email, password
        })
            .then((response) => {
                localStorage.setItem('token', response.data);
                setPassword('');
                setEmail('');
                routeChange('/profile');
            });
    }

    return(
        <div style={styles.loginStyles}>
            <TextInput 
                w='300px' 
                h='30px' 
                labelText='Email' 
                value={email} 
                setValue={setEmail} />
            <TextInput 
                w='300px' 
                h='30px' 
                labelText='Senha' 
                value={password} 
                setValue={setPassword} />
            <Button 
                w='120px' 
                h='40px' 
                color='#90EE90'
                buttonText='Entrar'
                onClick={logUser} />
        </div>
    )
}

export default connect(state => ({ token: state.login.token }))(Login);