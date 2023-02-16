import React from 'react';
import { useSearchParams } from "react-router-dom";

import getOperatingSystem from '../decideOs';

import useRedirectUser from '../hooks/useRedirectUser';

function Redirect() {

    const [searchParams] = useSearchParams();
    const qrId = searchParams.get('qrId');

    const osName = getOperatingSystem();
    useRedirectUser(qrId, osName);
    
    return(
        <div>
            <p>Fui escaneado</p>
        </div>
    )
}

export default Redirect;