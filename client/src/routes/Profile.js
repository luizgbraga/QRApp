import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import useFetchUser from "../hooks/useFetchUser";
import useFetchUserQR from "../hooks/useFetchUserQR";

import styles from "../assets/styles/ProfileStyles";

import SideBar from "../layouts/SideBar";
import TopBar from "../layouts/TopBar";

import CreateNewForm from '../components/Forms/CreateNewForm'

import LoggedNavBar from "../layouts/LoggedNavBar";


function Profile() {
  
    let navigate = useNavigate(); 
    const routeChange = (path) => navigate(path);

    const token = localStorage.getItem('token');
    if(!token) routeChange('/login');
    const user = useFetchUser(token);

    const logOut = () => {
      localStorage.removeItem('token');
      routeChange('/login');
    }

    const [overlay, setOverlay] = useState(false);
    const qrList = useFetchUserQR(token);

    return(
        <div style={{ display: 'flex' }}>
            <CreateNewForm overlay={overlay} setOverlay={setOverlay} />
            <SideBar qrList={qrList} setOverlay={setOverlay} />
            <div>
                <TopBar setOverlay={setOverlay} />
                <p style={styles.userName}>Nome do usuário: {user.userName}</p>
                <p onClick={logOut}>Sair</p>
            </div>
        </div>
    )
}

export default Profile;
