import React from "react";
import colors from "../assets/styles/Global/colors";

function Line({ w, mt, mb, ml }) {
    return(
        <div style={{ 
            width: w, 
            height: '0.5px', 
            backgroundColor: colors.grey,
            marginTop: mt,
            marginBottom: mb,
            marginLeft: ml
        }} />
    )
}

export default Line;