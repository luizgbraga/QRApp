import axios from 'axios';
import config from "../config/host";

function deleteLink(token, linkId) {
  axios
    .delete(`http://${config.host}:3001/api/link/deleteLink`, { 
      headers: { authorization: token },
      params: { linkId }
  })
    .then((response) => {
      console.log(response);
  });
}

export default deleteLink;
