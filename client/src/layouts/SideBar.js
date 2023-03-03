import React, { useState } from "react";

import styles from "../assets/styles/Layout/SideBarStyles";

import { useNavigate } from "react-router-dom";

import logo from '../assets/images/logo_color.png';
import add from '../assets/icons/add.png';
import list from '../assets/icons/list.png';
import wallet from '../assets/icons/wallet.png';
import support from '../assets/icons/support.png';
import settings from '../assets/icons/settings.png';
import plus from '../assets/icons/plus.png';
import minus from '../assets/icons/minus.png';
import logout from '../assets/icons/logout.png';

function SideBar({ qrList, setOverlay }) {

    const [showList, setShowList] = useState(true);
    let navigate = useNavigate(); 

    const selectQR = (qrId) => {
        localStorage.setItem('selectedQR', qrId);
        navigate('/qr');
        window.location.reload();
    }

    const logOut = () => {
        localStorage.removeItem('token');
        navigate('/login');
      }

    let qr = null;

    if(window.location.pathname == '/qr') {
        qr = localStorage.getItem('selectedQR');
    }

    return(
        <div style={styles.sideBarContainer}>
            <img src={logo} style={styles.logo} onClick={() => navigate('/home')} />
            <p style={styles.sessionTitle}>QR Codes</p>
            <div style={styles.itemContainer} onClick={() => setOverlay(true)}>
                <div style={styles.itemContent}>
                    <img src={add} style={styles.sideBarIcons} />
                    <p style={styles.itemTitle}>Novo QR</p>
                </div>
                <div></div>
            </div>
            <div style={styles.itemContainer} onClick={() => setShowList(!showList)}>
                <div style={styles.itemContent}>
                    <img src={list} style={styles.sideBarIcons} />
                    <p style={styles.itemTitle}>Meus QRs</p>
                </div>
                {
                    showList ?
                    <img src={minus} style={styles.sideBarIcons} onClick={() => setShowList(!showList)} />
                    :
                    <img src={plus} style={styles.sideBarIcons} onClick={() => setShowList(!showList)} />
                }
            </div>
            {
                showList ?
                qrList.map((el) => (
                    <div key={el._id} style={qr == el._id ? styles.qrContainerSelected : styles.qrContainer} onClick={() => selectQR(el._id)}>
                        <p style={styles.itemTitle}>{el.qrName}</p>
                    </div>
                ))
                : false
            }
            <p style={styles.sessionTitle}>Configurar</p>
            <div style={styles.sideBarEnding}>
                <div>
                    <div style={styles.itemContainer} onClick={() => navigate('/plans')}>
                        <div style={styles.itemContent}>
                            <img src={wallet} style={styles.sideBarIcons} />
                            <p style={styles.itemTitle}>Planos</p>
                        </div>
                        <div></div>
                    </div>
                    <div style={styles.itemContainer} onClick={() => navigate('/support')}>
                        <div style={styles.itemContent}>
                            <img src={support} style={styles.sideBarIcons} />
                            <p style={styles.itemTitle}>Suporte</p>
                        </div>
                        <div></div>
                    </div>
                    <div style={styles.itemContainer}>
                        <div style={styles.itemContent}>
                            <img src={settings} style={styles.sideBarIcons} />
                            <p style={styles.itemTitle}>Configurações</p>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div>
                    <div style={styles.itemContainer} onClick={logOut}>
                        <div style={styles.itemContent}>
                            <img src={logout} style={styles.sideBarIcons} />
                            <p style={styles.itemTitle}>Sair</p>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;