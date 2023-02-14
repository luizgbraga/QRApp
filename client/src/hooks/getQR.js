import React, { useState, useEffect } from "react";
import axios from 'axios';

function useFetchQR(token, selectedQR) {
    const [qr, setQR] = useState({});
    const [links, setLinks] = useState([]);
    const [scans, setScans] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/api/qr/showQR`, {
          headers: {
            authorization: token
          },
          params: {
            qrId: selectedQR
          }
        }).then((response) => {
          setQR(response.data[0]);
          setLinks(response.data[0].links);
          setScans(response.data[0].scans);
        });
      }, []);

      return {
        qr, links, scans
      }
}

export default useFetchQR;