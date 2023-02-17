import React, { useState } from "react";
import axios from 'axios';

import TextInput from "../components/TextInput";
import Button from "../components/Button";

import { useNavigate } from "react-router-dom";

import NavBar from "../layouts/NavBar";

import styles from "../assets/styles/SigninStyles";

function Signin() {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate(); 
    const routeChange = (path) => navigate(path);

    const createUser = () => {
        axios.post(`http://localhost:3001/api/login/createUser`, { 
          userName, password, email
        });
        setUserName('');
        setPassword('');
        setEmail('');
        routeChange('/login');
    }

    return(
        <div>
            <NavBar />
            <div style={styles.signinStyles}>
                <TextInput 
                    w='300px' 
                    h='30px' 
                    labelText='Username' 
                    value={userName} 
                    setValue={setUserName} />
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
                    w='200px' 
                    h='40px' 
                    color='#90EE90'
                    buttonText='Criar conta'
                    onClick={createUser} />
            </div>
        </div>
    )
}

export default Signin;