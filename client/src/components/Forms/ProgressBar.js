import React, { useState } from "react";

import Node from "./Node";

function ProgressBar({ nodes }) {
    return(
        <div style={{ display: 'flex' }}>
            {
                nodes.map((el, idx) => {
                    let starting = idx == 0;
                    let ending = idx == nodes.length - 1;
                    return(
                        <Node starting={starting} ending={ending} colored={el} n={nodes.length} idx={idx + 1} key={idx} />
                    )
                })
            }
        </div>
    )
}

export default ProgressBar;

// https://apps.apple.com/br/app/instagram/id389801252