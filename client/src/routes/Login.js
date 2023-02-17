import React, { useState } from "react";
import axios from 'axios';

import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";

import NavBar from "../layouts/NavBar";
import LoginForm from "../components/Forms/LoginForm";

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
                routeChange('/home');
            });
    }

    const center = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }

    return(
        <div style={center}>
            <NavBar />
            <LoginForm setEmail={setEmail} setPassword={setPassword} onClick={logUser} />
        </div>
    )
}

export default connect(state => ({ token: state.login.token }))(Login);