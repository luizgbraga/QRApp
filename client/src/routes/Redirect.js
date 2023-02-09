import React, { useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';

import getOperatingSystem from '../detectOs';

function Redirect() {

    const os = getOperatingSystem();
    const [searchParams] = useSearchParams();
    const qrId = searchParams.get('qrId');

    const updateReview = (qrId, os) => {
        axios.put(`http://192.168.68.123:3001/api/qr/updateScans?qrId=${qrId}`, {
            qrId, os
        });
    }

    useEffect(() => {
        axios.get(`http://192.168.68.123:3001/api/qr/showQR?qrId=${qrId}`)
        .then((response) => {
            console.log(response.data[0].links);
        });
      }, []);

    return(
        <div>
            <p>{os}</p>
        </div>
    )
}

export default Redirect;