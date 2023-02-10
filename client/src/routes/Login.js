import React, { useState } from "react";
import axios from 'axios';

import { connect } from 'react-redux';
import * as login_actions from '../store/actions/setToken';

function Login({ dispatch, token }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logUser = () => {
        axios.post(`http://192.168.68.123:3001/api/login/logUser`, { 
          email, password
        })
            .then((response) => {
                console.log(response.data);
                dispatch(login_actions.set_token(response.data));
            });
        setPassword('');
        setEmail('');
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