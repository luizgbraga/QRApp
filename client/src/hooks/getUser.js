import React, { useState, useEffect } from "react";
import axios from 'axios';
import config from "../config/host";

function useFetchUser(token) {

    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(`http://${config.host}:3001/api/login/getUser`, {
          headers: {
            authorization: token
          }
        }).then((response) => {
          setUser(response.data);
        });
      }, []);

      return user;
      
}

export default useFetchUser;