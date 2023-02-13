import React, { useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';

import decideLink from '../decideLink';
import getOperatingSystem from '../decideOs';

function Redirect() {

    const [searchParams] = useSearchParams();
    const qrId = searchParams.get('qrId');
    const os = getOperatingSystem();

    const updateScans = () => {
        axios.put(`http://localhost:3001/api/qr/showQR?qrId=${qrId}`, {
            params: {
              os: os,
              scanDate: Date.now()
            }
          })
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/api/qr/showQR?qrId=${qrId}`)
        .then((response) => {
            updateScans();
            const url = decideLink(response.data[0].links);
            console.log(url)
            window.location.href = url;
        });
      }, []);

    return(
        <div>
            <p>oi</p>
        </div>
    )
}

export default Redirect;