import React from "react";

import QRCode from "react-qr-code";

import styles from "../assets/styles/HeaderInfoQRStyles";
import InfoHeader from "./InfoHeader";

import Line from "./Line";

function HeaderInfoQR({ qrName, url, scans, links, defaultLink }) {
    return(
        <div style={styles.headerInfoContainerStyles}>
            <div style={styles.qrContainerStyles}>
                <QRCode value={url} size={160} />
            </div>
            <div style={styles.infoContainerStyles}>
                <p style={styles.titleStyles}>{qrName}</p>
                <Line />
                <p>{defaultLink}</p>
                <div style={styles.dataContainerStyles}>
                    <InfoHeader name='Scans' value={scans} />
                    <InfoHeader name='Links' value={links} />
                    <InfoHeader name='Sucesso' value='20%' />
                </div>
            </div>
        </div>
    )
}

export default HeaderInfoQR;