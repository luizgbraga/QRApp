import { useState, useEffect } from "react";
import axios from 'axios';
import config from "../config/host";

function useFetchQR(token, selectedQR) {
  
    const [qr, setQR] = useState({});

    useEffect(() => {
      axios
        .get(`http://${config.host}:3001/api/qr/showQR`, {
          headers: { authorization: token },
          params: { qrId: selectedQR }
      })
        .then((response) => {
          setQR(response.data[0]);
      });
    }, []);
    
    return qr;
}

export default useFetchQR;