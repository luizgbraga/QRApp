import React, { useState, useEffect } from "react";
import axios from 'axios';

import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";

function Profile() {
  
    let navigate = useNavigate(); 
    const routeChange = (path) => navigate(path);

    const [user, setUser] = useState({});

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

    const logOut = () => {
      localStorage.removeItem('token');
      routeChange('/login');
    }

    return(
        <div>
            <p>{user.userName}</p>
            <p>{user._id}</p>
            <button onClick={() => routeChange('/home')}>Home</button>
            <button onClick={() => routeChange('/new')}>New QR</button>
            <button onClick={logOut}>LogOut</button>
        </div>
    )
}

export default connect(state => ({ token: state.login.token }))(Profile);