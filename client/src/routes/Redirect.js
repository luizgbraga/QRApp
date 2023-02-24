import React from 'react';
import { useSearchParams } from "react-router-dom";

import getOperatingSystem from '../logic/decideOs';

import globalStyles from '../assets/styles/Global/globalStyles';

import useRedirectUser from '../hooks/useRedirectUser';

function Redirect() {

    const [searchParams] = useSearchParams();
    const qrId = searchParams.get('qrId');

    const osName = getOperatingSystem();
    useRedirectUser(qrId, osName);
    
    return(
        <div style={globalStyles.center}>
            <p>Fui escaneado</p>
        </div>
    )
}

export default Redirect;