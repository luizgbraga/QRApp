import React from 'react';

function CardQR({ qrName, onClick }) {
    const cardStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '200px',
        height: '80px',
        backgroundColor: '#FF5733',
        borderRadius: '5px',
        marginBottom: '20px',
        cursor: 'pointer'
    }

    const textStyle = {
        fontFamily: 'Verdana',
        fontSize: '20px'
    }

    return(
        <div style={cardStyle} onClick={onClick}>
            <p style={textStyle}>{qrName}</p>
            <p style={textStyle}>{'>>'}</p>
        </div>
    )
}

export default CardQR;