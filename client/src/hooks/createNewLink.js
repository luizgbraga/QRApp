import axios from 'axios';
import config from "../config/host";

function createNewLink(token, link) {
  axios
    .post(`http://${config.host}:3001/api/link/createLink`, link, { 
      headers: { authorization: token }
  })
    .then((response) => {
      console.log(response);
  });
}

export default createNewLink;
