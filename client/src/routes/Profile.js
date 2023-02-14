import React, { useState, useEffect } from "react";

import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";

import useFetchUser from "../hooks/getUser";

import styles from "../assets/styles/ProfileStyles";

import Button from "../components/Button";

function Profile() {
  
    let navigate = useNavigate(); 
    const routeChange = (path) => navigate(path);

    const token = localStorage.getItem('token');
    const user = useFetchUser(token);

    const logOut = () => {
      localStorage.removeItem('token');
      routeChange('/login');
    }

    return(
        <div style={styles.profileStyles}>
            <p style={styles.userName}>Nome do usuário: {user.userName}</p>
            <Button 
                w='160px' 
                h='40px' 
                color='#A4DBE8'
                buttonText='Home'
                onClick={() => routeChange('/home')} />
            <Button 
                w='160px' 
                h='40px' 
                color='#A4DBE8'
                buttonText='Novo QR'
                onClick={() => routeChange('/new')} />
            <Button 
                w='100px' 
                h='40px' 
                color='#FF8080'
                buttonText='Sair'
                onClick={logOut} />
        </div>
    )
}

export default connect(state => ({ token: state.login.token }))(Profile);