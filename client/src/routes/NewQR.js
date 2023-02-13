import React, { useState, useEffect } from "react";
import axios from 'axios';

function NewQR() {

    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/api/login/getUser`, {
          headers: {
            authorization: localStorage.getItem('token')
          }
        }).then((response) => {
          setUser(response.data);
        });
      }, []);

    const [qrName, setQRName] = useState('');

    const createQR = () => {
        axios.post(`http://localhost:3001/api/qr/createQR`, { 
          "qrName": qrName,
          "belongsTo": user._id
        }, { headers: {
              authorization: localStorage.getItem('token')
                }
            });
        setQRName('');
    }

    return(
        <div>
            <label>qrName</label>
            <input id='qrName' name='qrName' onChange={(e) => setQRName(e.target.value)} />
            <button onClick={createQR}>Create QR</button>
        </div>
    )
}

export default NewQR;