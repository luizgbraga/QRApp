import axios from 'axios';
import config from "../config/host";

function updateLink(token, newLink) {
  axios
    .put(`http://${config.host}:3001/api/link/updateLink`, { 
      headers: { authorization: token },
      params: { newLink }
  })
    .then((response) => {
      console.log(response);
  });
}

export default updateLink;
