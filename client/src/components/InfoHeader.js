import React from "react";

function InfoHeader({ name, value }) {
    return(
        <div style={{ width: '100px' }}>
            <p style={{ fontSize: '22px', display: 'flex', marginBottom: '10px' }}>{name}</p>
            <p style={{ fontSize: '18px', display: 'flex' }}>{value}</p>
        </div>
    )
}

export default InfoHeader;