import { useState, useEffect } from "react";
import axios from 'axios';
import config from "../config/host";

function useFetchUserQRs(token) {

    const [qrList, setQRList] = useState([]);

    useEffect(() => {
      axios
        .get(`http://${config.host}:3001/api/qr/showUserQRs`, {
          headers: { authorization: token }
      })
        .then((response) => {
          setQRList(response.data);
      });
    }, []);

    return qrList;
}

export default useFetchUserQRs;