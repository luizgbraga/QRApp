import React from 'react';

import QRCode from "react-qr-code";

function CardQR({ qrName, onClick, url }) {
    const cardStyle = {
        display: 'flex',
        flexDirection: 'row',
        width: '1000px',
        height: '120px',
        borderRadius: '4px',
        marginBottom: '34px',
        cursor: 'pointer',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
        marginLeft: '100px'
    }

    const leftStyle = {
        width: '60%',
        height: '120px',
        padding: '20px'
    }

    const rightStyle = {
        display: 'flex',
        alignItems: 'center',
        width: '40%',
        height: '120px',
    }

    const textStyle = {
        fontSize: '24px'
    }

    return(
        <div style={cardStyle} onClick={onClick}>
            <div style={leftStyle}>
                <p style={textStyle}>{qrName}</p>
            </div>
            <div style={rightStyle}>
                <QRCode value={url} size={90} />
            </div>
        </div>
    )
}

export default CardQR;