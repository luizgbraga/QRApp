import React from "react";

function Line({ w, mt, mb }) {
    return(
        <div style={{ 
            width: w, 
            height: '0.5px', 
            backgroundColor: '#757575',
            marginTop: mt,
            marginBottom: mb
        }} />
    )
}

export default Line;