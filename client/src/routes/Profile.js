import React, { useState, useEffect } from "react";
import axios from 'axios';

import { connect } from 'react-redux';

function Profile() {

    const [user, setUser] = useState({});
    const [qrList, setQRList] = useState([]);

    const token = localStorage.getItem('token');

    useEffect(() => {
        axios.get(`http://localhost:3001/api/login/getUser`, {
          headers: {
            authorization: token
          }
        }).then((response) => {
          setUser(response.data);
        });
      }, []);

    useEffect(() => {
        axios.get(`http://localhost:3001/api/qr/showUserQR`, {
          headers: {
            authorization: token
          }
        }).then((response) => {
          setQRList(response.data);
        });
      }, []);

    return(
        <div>
            <p>{user.userName}</p>
            <p>{user._id}</p>
            {
              qrList.map(el => (<p key={el._id}>{el.qrName}</p>))
            }
        </div>
    )
}

export default connect(state => ({ token: state.login.token }))(Profile);