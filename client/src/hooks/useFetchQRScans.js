import { useState, useEffect } from "react";
import axios from 'axios';
import config from "../config/host";

function useFetchQRScans(token, selectedQR) {
  
    const [scans, setScans] = useState([]);

    useEffect(() => {
      axios
        .get(`http://${config.host}:3001/api/scan/showQRScans`, {
          headers: { authorization: token },
          params: { qrId: selectedQR }
      })
        .then((response) => {
          setScans(response.data);
      });
    }, []);
    
    return scans;
}

export default useFetchQRScans;