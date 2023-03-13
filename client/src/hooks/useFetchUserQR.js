import { useState, useEffect } from "react";
import axios from 'axios';
import config from "../config/host";

function useFetchUserQR(token) {

    const [qrList, setQRList] = useState([]);

    useEffect(() => {

        axios
          .get(`http://${config.host}:3001/api/qr/showUserQR`, {
            headers: { authorization: token }
        })
          .then((response) => {
            setQRList(response.data);
        });

      }, []);

      return qrList;

}

export default useFetchUserQR;