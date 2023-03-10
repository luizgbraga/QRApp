import axios from 'axios';
import config from "../config/host";

function deleteQR(token, qrId) {
  axios
    .delete(`http://${config.host}:3001/api/qr/deleteQR`, { 
      headers: { authorization: token },
      params: { qrId }
  })
    .then((response) => {
      console.log(response);
  });
}

export default deleteQR;
