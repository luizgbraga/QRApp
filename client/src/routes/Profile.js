import React, { useState, useEffect } from "react";
import axios from 'axios';

import { connect } from 'react-redux';

function Profile() {

    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(`http://192.168.68.123:3001/api/login/getUser`).then((response) => {
            console.log(response);
          setUser(response.data);
        });
      }, []);

    return(
        <div>
            <p>123</p>
        </div>
    )
}

export default Profile;