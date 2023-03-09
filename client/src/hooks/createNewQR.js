import axios from 'axios';
import config from "../config/host";

import createNewLink from './createNewLink';

function createQR(token, qr) {
  axios
    .post(`http://${config.host}:3001/api/qr/createQR`, qr, { 
      headers: { authorization: token }
  })
    .then((response) => {
      createNewLink(token, {
        qrId: response.data._id,
        linkName: 'Link Padrão',
        url: qr.defaultLink,
        default: true,
        short: 'test'
      });
  });
}

export default createQR;