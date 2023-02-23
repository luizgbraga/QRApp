import React from "react";

import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";

import useFetchUser from "../hooks/useFetchUser";

import styles from "../assets/styles/ProfileStyles";

import LoggedNavBar from "../layouts/LoggedNavBar";


function Profile() {
  
    let navigate = useNavigate(); 
    const routeChange = (path) => navigate(path);

    const token = localStorage.getItem('token');
    if(!token) routeChange('/login');
    const user = useFetchUser(token);

    const logOut = () => {
      localStorage.removeItem('token');
      routeChange('/login');
    }

    return(
        <div style={styles.profileStyles}>
            <LoggedNavBar />
            <p style={styles.userName}>Nome do usuário: {user.userName}</p>
            <p onClick={logOut}>Sair</p>
        </div>
    )
}

export default connect(state => ({ token: state.login.token }))(Profile);