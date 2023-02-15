import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";

import getOperatingSystem from '../decideOs';

import useFetchLocation from '../hooks/getLocation';
import useRedirectUser from '../hooks/redirectUser';

function Redirect() {

    const [searchParams] = useSearchParams();
    const qrId = searchParams.get('qrId');

    const scanLocation = useFetchLocation();
    const osName = getOperatingSystem();
    useRedirectUser(qrId, osName, scanLocation);
    
    return(
        <div>
            <p>{scanLocation}</p>
            <p>{osName}</p>
        </div>
    )
}

export default Redirect;