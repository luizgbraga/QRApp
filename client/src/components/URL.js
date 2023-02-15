import React from "react";

function URL({ linkName, osName, timeRestriction, url }) {
    const cardStyle = {
        width: '1000px',
        backgroundColor: '#FDFD96',
        borderRadius: '5px',
        marginLeft: '20px',
        padding: '10px',
        marginBottom: '20px'
    }

    const nameStyle = {
        fontFamily: 'Verdana',
        fontSize: '20px'
    }
    
    const textStyle = {
        fontFamily: 'Verdana',
        fontSize: '16px'
    }

    const row = {
        display: 'flex',
        flexDirection: 'row'
    }

    return(
        <div style={cardStyle}>
            <p style={nameStyle}>{linkName} - {url}</p>
            <div style={row}>
                <p style={textStyle}>OS: {osName}, Restrição de tempo: {timeRestriction}</p>
            </div>
        </div>
    )
}

export default URL;