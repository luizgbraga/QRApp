import React, { useState, useEffect } from "react";
import axios from 'axios';

import { useNavigate } from "react-router-dom";

import TextInput from "../components/TextInput";
import Button from "../components/Button";

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
            <TextInput 
                w='300px' 
                h='30px' 
                labelText='Nome do QR' 
                value={qrName} 
                setValue={setQRName} />
            <TextInput 
                w='300px' 
                h='30px' 
                labelText='Link padrão' 
                value={defaultLink} 
                setValue={setDefaultLink} />
            <Button 
                w='120px' 
                h='40px' 
                color='#90EE90'
                buttonText='Criar'
                onClick={createQR} />
            <Button 
                w='160px' 
                h='40px' 
                color='#A4DBE8'
                buttonText='Profile'
                onClick={() => routeChange('/profile')} />
        </div>
    )
}

export default NewQR;