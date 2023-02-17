import React from 'react';

import logo from '../assets/images/logo+name.png';

import ButtonNavBar from '../components/ButtonNavBar';

import styles from '../assets/styles/NavBarStyles';

import { useNavigate } from "react-router-dom";

function NavBar() {

    let navigate = useNavigate(); 

    return(
        <div style={styles.navContainerStyles}>
            <div style={styles.linksContainerStyles}>
                <img src={logo} style={styles.logoStyles} onClick={() => navigate('/')}></img>
                <p style={styles.navLinkStyles}>Sobre nós</p>
                <p style={styles.navLinkStyles}>Planos</p>
                <p style={styles.navLinkStyles}>Suporte</p>
            </div>
            <div style={styles.enterContainerStyles}>
                <ButtonNavBar label='Entrar' onClick={() => navigate('/login')} />
                <ButtonNavBar label='Criar conta' onClick={() => navigate('/signin')} />
            </div>
        </div>
    )
}

export default NavBar;