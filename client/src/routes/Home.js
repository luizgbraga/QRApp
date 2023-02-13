import React, { useState, useEffect } from "react";
import axios from 'axios';

import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";

function Home() {

    let navigate = useNavigate(); 
    const routeChange = (path) => navigate(path);

    const [user, setUser] = useState({});
    const [qrList, setQRList] = useState([]);

    const token = localStorage.getItem('token');

    useEffect(() => {
        axios.get(`http://localhost:3001/api/login/getUser`, {
          headers: {
            authorization: token
          }
        }).then((response) => {
          setUser(response.data);
        });
      }, []);

    useEffect(() => {
        axios.get(`http://localhost:3001/api/qr/showUserQR`, {
          headers: {
            authorization: token
          }
        }).then((response) => {
          setQRList(response.data);
        });
      }, []);

    const selectQR = (qrId) => {
        localStorage.setItem('selectedQR', qrId);
        routeChange('/qr');
    }

    return(
        <div>
            {
              qrList.map(el => (
                <div key={el._id}>
                  <p>{el.qrName}</p>
                  <button onClick={() => selectQR(el._id)}>Go to QR</button>
                </div>
              ))
            }
        </div>
    )
}

export default connect(state => ({ token: state.login.token }))(Home);