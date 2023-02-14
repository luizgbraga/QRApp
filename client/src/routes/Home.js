import React, { useState, useEffect } from "react";
import axios from 'axios';

import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";

import useFetchUserQR from "../hooks/getUserQR";

function Home() {

    let navigate = useNavigate(); 
    const routeChange = (path) => navigate(path);

    const token = localStorage.getItem('token');
    const qrList = useFetchUserQR(token)

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