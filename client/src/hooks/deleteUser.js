import axios from 'axios';
import config from "../config/host";

function deleteUser(token, userId) {
  axios
    .delete(`http://${config.host}:3001/api/login/deleteUser`, { 
      headers: { authorization: token },
      params: { userId }
  })
    .then((response) => {
      console.log(response);
  });
}

export default deleteUser;
