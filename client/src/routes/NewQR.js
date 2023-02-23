import React, { useState } from "react";
import axios from 'axios';

import { useNavigate } from "react-router-dom";

import useFetchUser from "../hooks/useFetchUser";
import LoggedNavBar from "../layouts/LoggedNavBar";

import CreateNewForm from "../components/Forms/CreateNewForm";

function NewQR() {

    let navigate = useNavigate(); 
    const routeChange = (path) => navigate(path);

    const token = localStorage.getItem('token');
    if(!token) routeChange('/login');
    const user = useFetchUser(token);

    const [qrName, setQRName] = useState('');
    const [defaultLink, setDefaultLink] = useState('');

    const createQR = () => {
        axios.post(`http://localhost:3001/api/qr/createQR`, { 
          "qrName": qrName,
          "belongsTo": user._id,
          "defaultLink": defaultLink
        }, { headers: {
              authorization: localStorage.getItem('token')
                }
            });
        setQRName('');
        routeChange('/home');
    }

    const center = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }

    return(
        <div style={center}>
            <LoggedNavBar />
            <div style={{ height: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center' }}>
                <CreateNewForm setName={setQRName} setDefaultLink={setDefaultLink} onClick={createQR} />
            </div>
        </div>
    )
}

export default NewQR;