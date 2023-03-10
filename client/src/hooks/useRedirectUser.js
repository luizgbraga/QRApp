import { useEffect } from "react";
import axios from 'axios';
import config from "../config/host";

import getOperatingSystem from "../logic/decideOs";
import decideLink from '../logic/decideLink';

function useRedirectUser(short) {

  const osName = getOperatingSystem();

  useEffect(() => {

      axios
        .get("https://ipapi.co/json/")
        .then((resLocation) => {
          axios
            .get(`http://${config.host}:3001/api/qr/getQRByShort`, {
              params: { short }
            })
            .then((resQR) => {
              axios
                .get(`http://${config.host}:3001/api/link/showQRLinks`, {
                params: { qrId: resQR.data[0]._id }
            })
            .then((response) => {
              console.log(response.data);
              const scanLocation = `${resLocation.data.country_name},${resLocation.data.region},${resLocation.data.city}`;
              const [url, success] = decideLink(response.data, osName, scanLocation);
              updateScans(scanLocation, resQR.data[0]._id, url, success);
              console.log(url)
              window.location.replace(url);
          });
      })
      .catch((error) => {
          console.log(error);
      });
    });
  }, []);

  const updateScans = (scanLocation, qrId, url, success) => { 
    axios
      .post(`http://${config.host}:3001/api/scan/createScan`, {
        params: { osName, scanLocation, qrId, redirectedTo: url, success }
      });
    }

}

export default useRedirectUser;