import React from "react";
import colors from "../assets/styles/Global/colors";

function Line({ w, mt, mb }) {
    return(
        <div style={{ 
            width: w, 
            height: '0.5px', 
            backgroundColor: colors.grey,
            marginTop: mt,
            marginBottom: mb
        }} />
    )
}

export default Line;