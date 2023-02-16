import { useState, useEffect } from "react";
import axios from 'axios';

function useFetchUser(token) {

    const [user, setUser] = useState({});

    useEffect(() => {
        axios
          .get(`http://localhost:3001/api/login/getUser`, {
            headers: { authorization: token }
        })
          .then((response) => {
            setUser(response.data);
        });

      }, []);

      return user;
}

export default useFetchUser;