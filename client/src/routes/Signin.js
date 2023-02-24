import React, { useState } from "react";
import axios from 'axios';

import { useNavigate } from "react-router-dom";

import globalStyles from "../assets/styles/Global/globalStyles";

import NavBar from "../layouts/NavBar";
import SigninForm from '../components/Forms/SigninForm';

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
        <div style={globalStyles.columnCentered}>
            <NavBar />
            <SigninForm setUserName={setUserName} setEmail={setEmail} setPassword={setPassword} onClick={createUser} />
        </div>
    )
}

export default Signin;