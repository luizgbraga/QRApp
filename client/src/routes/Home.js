import React from "react";

import { useNavigate } from "react-router-dom";

import useFetchUserQR from "../hooks/useFetchUserQR";

import SideBar from "../layouts/SideBar";
import TopBar from "../layouts/TopBar";

function Home() {

    let navigate = useNavigate(); 
    const routeChange = (path) => navigate(path);

    const token = localStorage.getItem('token');
    const qrList = useFetchUserQR(token);

    if(!token) routeChange('/login');

    return(
        <div style={{ display: 'flex' }}>
          <SideBar qrList={qrList} />
          <TopBar />
        </div>
    )
}

export default Home;