import React from 'react';

import QRCode from "react-qr-code";

function CardQR({ qrName, onClick, url, scans, links }) {
    const cardStyle = {
        display: 'flex',
        flexDirection: 'row',
        width: '600px',
        height: '120px',
        borderRadius: '4px',
        marginBottom: '34px',
        cursor: 'pointer',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
        marginLeft: '100px'
    }

    const leftStyle = {
        width: '80%',
        height: '120px',
        padding: '16px'
    }

    const rightStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
        height: '120px',
    }

    const textStyle = {
        fontSize: '24px'
    }

    const qrInfoStyle = {
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'column'
    }

    return(
        <div style={cardStyle} onClick={onClick}>
            <div style={leftStyle}>
                <p style={textStyle}>{qrName}</p>
                <div style={qrInfoStyle}>
                    <p>Scans: {scans}</p>
                    <p>Links: {links}</p>
                </div>
            </div>
            <div style={rightStyle}>
                <QRCode value={url} size={90} />
            </div>
        </div>
    )
}

export default CardQR;