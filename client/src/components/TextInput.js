import React from "react";

function TextInput({ w, h, labelText, value, setValue }) {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '20px'
    }

    const labelStyle = {
        fontFamily: 'Verdana',
        fontSize: '24px',
        marginBottom: '10px'
    }

    const textInputStyle = {
        borderRadius: '10px',
        width: w,
        height: h,
        backgroundColor: '#D3D3D3',
        padding: '10px 10px 10px 16px',
        fontSize: '20px',
        fontFamily: 'Verdana'
    }

    return(
        <div style={containerStyle}>
            <label style={labelStyle}>{labelText}</label>
            <input 
                style={textInputStyle}
                onChange={(e) => setValue(e.target.value)}
                type='text' 
            />
        </div>
    )
}

export default TextInput;