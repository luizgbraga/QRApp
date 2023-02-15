import React, { useState, useEffect } from "react";
import axios from 'axios';

import decideLink from '../decideLink';

function useRedirectUser(qrId, osName) {
  useEffect(() => {
      axios.get("https://ipapi.co/json/")
          .then((resLocation) => {
          axios.get(`http://192.168.68.123:3001/api/qr/showQR?qrId=${qrId}`)
            .then((response) => {
              const location = `${resLocation.data.country_name}, ${resLocation.data.region}, ${resLocation.data.city}`;
              updateScans(location);
              const qr = response.data[0];
              const url = decideLink(qr.links, qr.defaultLink);
              window.location.href = url;
          })
      })
      .catch((error) => {
          console.log(error);
      });
  }, []);

  const updateScans = (scanLocation) => {
    console.log(scanLocation)
    axios.put(`http://192.168.68.123:3001/api/qr/updateScans?qrId=${qrId}`, {
        params: {
              osName, scanLocation
        }
      })
    }
}

export default useRedirectUser;