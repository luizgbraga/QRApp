import React from 'react';
import { useParams } from "react-router-dom";

import getOperatingSystem from '../logic/decideOs';

import globalStyles from '../assets/styles/Global/globalStyles';

import useRedirectUser from '../hooks/useRedirectUser';

function Redirect() {

    const { id } = useParams();
    const osName = getOperatingSystem();
    useRedirectUser(id, osName);
    
    return(
        <div style={globalStyles.center}>
            <p>Fui escaneado</p>
        </div>
    )
}

export default Redirect;