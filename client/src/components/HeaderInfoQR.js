import React from "react";

import QRCode from "react-qr-code";

import styles from "../assets/styles/HeaderInfoQRStyles";
import InfoHeader from "./InfoHeader";

import Line from "./Line";

import edit from '../assets/icons/edit.png';
import trash from '../assets/icons/trash.png';

import deleteQR from "../hooks/deleteQR";
import { useNavigate } from "react-router-dom";

function HeaderInfoQR({ qrName, url, scans, links, defaultLink, success, setOverlay }) {

    const token = localStorage.getItem('token');
    const selectedQR = localStorage.getItem('selectedQR');
    let navigate = useNavigate(); 

    return(
        <div>
            <div style={styles.headerInfoContainerStyles}>
                <div style={styles.qrContainerStyles}>
                    <QRCode value={url} size={180} />
                </div>
                <div style={styles.infoContainerStyles}>
                    <div style={styles.headerTitle}>
                        <p style={styles.titleStyles}>{qrName}</p>
                        <div style={styles.iconsContainer}>
                            <img src={edit} style={styles.icon} onClick={() => setOverlay(true)} />
                            <img src={trash} style={styles.icon} onClick={() => {
                                deleteQR(token, selectedQR);
                                localStorage.setItem('selectedQR', '');
                                navigate('/home');
                            }} />
                        </div>
                    </div>
                    <Line mt='16px' mb='16px' />
                    <p style={{ fontSize: '20px' }}>{url}</p>
                    <div style={styles.dataContainerStyles}>
                        <InfoHeader name='Scans' value={scans} />
                        <InfoHeader name='Links' value={links} />
                        <InfoHeader name='Sucesso' value={success} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeaderInfoQR;