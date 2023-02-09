import React, { useState } from "react";
import axios from 'axios';

function Signin() {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createUser = () => {
        axios.post(`http://192.168.68.123:3001/api/login/createUser`, { 
          userName, password, email
        });
        setUserName('');
        setPassword('');
        setEmail('');
    }

    return(
        <div>
            <label>Username</label>
            <input id='userName' name='userName' onChange={(e) => setUserName(e.target.value)} />
            <br />
            <label>Email</label>
            <input id='email' name='email' onChange={(e) => setEmail(e.target.value)} />
            <br />
            <label>Password</label>
            <input id='password' name='password' onChange={(e) => setPassword(e.target.value)} />
            <button onClick={createUser}>Create user</button>
        </div>
    )
}

export default Signin;