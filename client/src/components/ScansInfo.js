import React, { useState } from "react";
import ApexDateChart from "./Charts/DateChart";
import ApexPieChart from "./Charts/PieChart";

function ScansInfo({ scans }) {
    const data = scans.map((atual, index) => {
        let date = new Date(atual.scanDate);
        return [date.getTime(), index + 1];
    }, []);
    const scanByOS = scans.reduce((acumulador, atual) => {
        if(atual.osName == 'Android') { acumulador[0]++ }
        else if(atual.osName == 'iOS') { acumulador[1]++ }
        else { acumulador[2]++ }
        return acumulador;
    }, [0, 0, 0]);

    if(data) {
        return(
            <div style={{ display: 'flex', width: '1000px' }}>
                <ApexDateChart data={data} />
                <ApexPieChart data={scanByOS} />
            </div>  
        )
    } else {
        return(
            <div>

            </div>
        )
    }

}

export default ScansInfo;