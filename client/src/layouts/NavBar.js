import React from 'react';

import logo from '../assets/images/logo+name.png';

import ButtonNavBar from '../components/Buttons/ButtonNavBar';

import styles from '../assets/styles/Layout/NavBarStyles';

import { useNavigate } from "react-router-dom";

function NavBar() {

    let navigate = useNavigate(); 

    return(
        <div style={styles.navContainerStyles}>
            <div style={styles.linksContainerStyles}>
                <img src={logo} style={styles.logoStyles} onClick={() => navigate('/')}></img>
                <p style={styles.navLinkStyles} onClick={() => navigate('/aboutus')}>Sobre nós</p>
                <p style={styles.navLinkStyles} onClick={() => navigate('/plans')}>Planos</p>
                <p style={styles.navLinkStyles} onClick={() => navigate('/support')}>Suporte</p>
            </div>
            <div style={styles.buttonsContainerStyles}>
                <ButtonNavBar label='Entrar' onClick={() => navigate('/login')} />
                <ButtonNavBar label='Criar conta' onClick={() => navigate('/signin')} />
            </div>
        </div>
    )
}

export default NavBar;