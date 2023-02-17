import React, { useState, useEffect } from "react";
import axios from 'axios';

function useFetchUserQR(token) {
    const [qrList, setQRList] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/api/qr/showUserQR`, {
          headers: {
            authorization: token
          }
        }).then((response) => {
          setQRList(response.data);
        });
      }, []);

      return qrList;
}

export default useFetchUserQR;