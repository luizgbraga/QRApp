import React from "react";

import styles from '../assets/styles/Layout/TopBarStyles';

import help from '../assets/icons/help.png';
import add from '../assets/icons/add.png';
import wallet from '../assets/icons/wallet.png';
import profile from '../assets/icons/profile.png';

import { useNavigate } from "react-router-dom";

function TopBar({ setOverlay }) {

    let navigate = useNavigate(); 

    return(
        <div style={styles.topBarContainer}>
            <div />
            <div style={styles.shortCutIconsContainer}>
                <img src={help} style={styles.shortCutIcons} onClick={() => navigate('/aboutus')} />
                <img src={wallet} style={styles.shortCutIcons} onClick={() => navigate('/plans')} />
                <img src={add} style={styles.shortCutIcons} onClick={() => setOverlay(true)} />
            </div>
            <div style={styles.profileContainer} onClick={() => navigate('/profile')}>
                <p style={styles.profileTitle}>Perfil</p>
                <img src={profile} style={styles.shortCutIcons} />
            </div>
        </div>
    )
}

export default TopBar;