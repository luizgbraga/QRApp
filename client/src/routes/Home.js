import React, { useState, useEffect } from "react";
import axios from 'axios';

import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";

import useFetchUserQR from "../hooks/getUserQR";

import CardQR from "../components/CardQR";
import Button from "../components/Button";

import styles from "../assets/styles/HomeStyles";

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
          <p style={styles.title}>Seus QRs</p>
            {
              qrList.map(el => (
                <CardQR 
                  key={el.id}
                  qrName={el.qrName} 
                  onClick={() => selectQR(el._id)} />
              ))
            }
            <Button 
                w='160px' 
                h='40px' 
                color='#A4DBE8'
                buttonText='Profile'
                onClick={() => routeChange('/profile')} />
        </div>
    )
}

export default connect(state => ({ token: state.login.token }))(Home);