import React, { useState } from "react";
import axios from 'axios';

import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";

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
        <div>
            <label>Email</label>
            <input id='email' name='email' onChange={(e) => setEmail(e.target.value)} />
            <br />
            <label>Password</label>
            <input id='password' name='password' onChange={(e) => setPassword(e.target.value)} />
            <button onClick={logUser}>Login</button>
        </div>
    )
}

export default connect(state => ({ token: state.login.token }))(Login);