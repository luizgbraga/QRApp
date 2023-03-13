import { useState, useEffect } from "react";
import axios from 'axios';
import config from "../config/host";

function useFetchQRByShort(short) {
  
    const [qr, setQR] = useState({});

    useEffect(() => {
      axios
        .get(`http://${config.host}:3001/api/qr/getQRByShort`, {
          params: { short }
      })
        .then((response) => {
          setQR(response.data[0]);
      });
    }, []);
    
    return qr;
}

export default useFetchQRByShort;