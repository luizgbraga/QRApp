import React, { useState, useEffect } from "react";
import axios from 'axios';

import decideLink from "../decideLink";

function useRedirectUser(qrId, osName, scanLocation) {
    const updateScans = () => {
        axios.put(`http://localhost:3001/api/qr/updateScans?qrId=${qrId}`, {
            params: {
              osName, scanLocation
            }
          })
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/api/qr/showQR?qrId=${qrId}`)
        .then((response) => {
            updateScans();
            const qr = response.data[0];
            const url = decideLink(qr.links, qr.defaultLink);
            window.location.href = url;
        });
      }, []);
}

export default useRedirectUser;