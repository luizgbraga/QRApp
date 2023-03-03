import React from "react";

function URL({ linkName, osName, timeRestriction, locRestriction, url }) {
    const cardStyle = {
        width: '1000px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
        borderRadius: '5px',
        marginLeft: '20px',
        padding: '10px',
        marginBottom: '20px'
    }

    const nameStyle = {
        fontFamily: 'Verdana',
        fontSize: '18px'
    }
    
    const textStyle = {
        fontFamily: 'Verdana',
        fontSize: '14px'
    }

    const row = {
        display: 'flex',
        flexDirection: 'row'
    }

    return(
        <div style={cardStyle}>
            <p style={nameStyle}>{linkName} - {url}</p>
            <div style={row}>
                <p style={textStyle}>OS: {osName}, Restrição de tempo: {timeRestriction}, Localização: {locRestriction}</p>
            </div>
        </div>
    )
}

export default URL;