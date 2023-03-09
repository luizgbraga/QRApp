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
            .get(`http://${config.host}:3001/api/link/showQRLinks`, {
              params: { qrId: qrId }
          })
            .then((response) => {
              console.log(response.data);
              const scanLocation = `${resLocation.data.country_name},${resLocation.data.region},${resLocation.data.city}`;
              const [url, success] = decideLink(response.data[0].links, response.data[0].defaultLink, osName, scanLocation);
              updateScans(scanLocation, qrId, url, success);
              window.location.href = url;
          });
      })
      .catch((error) => {
          console.log(error);
      });

  }, []);

  const updateScans = (scanLocation, qrId, url, success) => { 
    axios
      .put(`http://${config.host}:3001/api/scan/createScan`, {
        params: { osName, scanLocation, qrId, redirectedTo: url, success }
      });
    }

}

export default useRedirectUser;