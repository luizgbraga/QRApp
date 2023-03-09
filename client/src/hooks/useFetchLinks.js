import { useState, useEffect } from "react";
import axios from 'axios';
import config from "../config/host";

function useFetchLinks(selectedQR) {
  
    const [links, setLinks] = useState([]);

    useEffect(() => {
      axios
        .get(`http://${config.host}:3001/api/link/showQRLinks`, {
          params: { qrId: selectedQR }
      })
        .then((response) => {
          setLinks(response.data);
      });
    }, []);
    
    return links;
}

export default useFetchLinks;