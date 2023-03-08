import React from "react";

import QRCode from "react-qr-code";

import styles from "../assets/styles/HeaderInfoQRStyles";
import InfoHeader from "./InfoHeader";

import Line from "./Line";

function HeaderInfoQR({ qrName, url, scans, links, defaultLink, success }) {
    return(
        <div>
            <div style={styles.headerInfoContainerStyles}>
                <div style={styles.qrContainerStyles}>
                    <QRCode value={url} size={180} />
                </div>
                <div style={styles.infoContainerStyles}>
                    <p style={styles.titleStyles}>{qrName}</p>
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