import React from "react";

function Button({ w, h, color, buttonText, onClick }) {
    const buttonStyle = {
        width: w,
        height: h,
        fontSize: '20px',
        fontFamily: 'Verdana',
        borderRadius: '10px',
        backgroundColor: color,
        cursor: 'pointer',
        marginBottom: '16px'
    }
    return(
        <div>
            <button 
                style={buttonStyle}
                onClick={onClick}>{buttonText}</button>
        </div>
    )
}

export default Button;