import React, { useState, useEffect } from "react";
import axios from 'axios';

import { useNavigate } from "react-router-dom";

import useFetchUser from "../hooks/getUser";

function NewQR() {

    let navigate = useNavigate(); 
    const routeChange = (path) => navigate(path);

    const token = localStorage.getItem('token');
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

    return(
        <div>
            <label>qrName</label>
            <input id='qrName' name='qrName' onChange={(e) => setQRName(e.target.value)} /><br></br>
            <label>Default Link</label>
            <input id='defaultLink' name='defaultLink' onChange={(e) => setDefaultLink(e.target.value)} />
            <button onClick={createQR}>Create QR</button>
        </div>
    )
}

export default NewQR;