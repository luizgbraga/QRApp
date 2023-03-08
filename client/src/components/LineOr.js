import React from "react";

import Line from "./Line";

function LineOr() {
    return(
        <div style={{ display: 'flex', alignItems: 'center', margin: '12px 0px 12px 0px' }}>
            <Line w='184px' />
            <p style={{ color: '#757575', fontSize: '20px', margin: '0px 12px 0px 12px' }}>ou</p>
            <Line w='184px' />
        </div>
    )
}

export default LineOr;