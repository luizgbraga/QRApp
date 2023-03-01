import { useEffect } from "react";
import axios from 'axios';
import config from "../config/host";

import getOperatingSystem from "../logic/decideOs";
import decideLink from '../logic/decideLink';

function useRedirectUser(qrId) {

  const osName = getOperatingSystem();

  useEffect(() => {

      axios
        .get("https://ipapi.co/json/")
        .then((resLocation) => {
          axios
            .get(`http://${config.host}:3001/api/qr/showQR?qrId=${qrId}`)
            .then((response) => {
              const location = `${resLocation.data.country_name},${resLocation.data.region},${resLocation.data.city}`;
              const url = decideLink(response.data[0].links, response.data[0].defaultLink, osName, location);
              updateScans(location);
              window.location.href = url;
          })
      })
      .catch((error) => {
          console.log(error);
      });

  }, []);

  const updateScans = (scanLocation) => { 
    axios
      .put(`http://${config.host}:3001/api/qr/updateScans?qrId=${qrId}`, {
        params: { osName, scanLocation }
      });
    }

}

export default useRedirectUser;