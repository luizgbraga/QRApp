import React from 'react';

import logo from '../assets/images/logo+name.png';
import styles from '../assets/styles/Layout/LoggedNavBarStyles';

import ButtonNavBar from '../components/Buttons/ButtonNavBar';

import { useNavigate } from "react-router-dom";

function LoggedNavBar() {

    let navigate = useNavigate(); 

    return(
        <div style={styles.navContainerStyles}>
            <div style={styles.linksContainerStyles}>
                <img src={logo} style={styles.logoStyles} onClick={() => navigate('/home')}></img>
                <p style={styles.navLinkStyles} onClick={() => navigate('/aboutus')}>Sobre nós</p>
                <p style={styles.navLinkStyles} onClick={() => navigate('/plans')}>Planos</p>
                <p style={styles.navLinkStyles} onClick={() => navigate('/support')}>Suporte</p>
            </div>
            <div style={styles.buttonsContainerStyles}>
                <ButtonNavBar label='Novo QR' onClick={() => navigate('/new')} />
                <ButtonNavBar label='Meus QRs' onClick={() => navigate('/home')} />
                <ButtonNavBar label='Perfil' onClick={() => navigate('/profile')} />
            </div>
        </div>
    )
}

export default LoggedNavBar;