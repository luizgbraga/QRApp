import React, { useState } from "react";
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div>
            <label>Email</label>
            <input id='email' name='email' onChange={(e) => setEmail(e.target.value)} />
            <br />
            <label>Password</label>
            <input id='password' name='password' onChange={(e) => setPassword(e.target.value)} />
            <button>Login</button>
        </div>
    )
}

export default Login;