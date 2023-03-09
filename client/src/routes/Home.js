import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import useFetchUserQR from "../hooks/useFetchUserQRs";

import SideBar from "../layouts/SideBar";
import TopBar from "../layouts/TopBar";

import CreateNewForm from '../components/Forms/CreateNewForm';


function Home() {

    let navigate = useNavigate(); 
    const routeChange = (path) => navigate(path);

    const token = localStorage.getItem('token');
    const qrList = useFetchUserQR(token);

    const [overlay, setOverlay] = useState(false);

    if(!token) routeChange('/login');

    return(
        <div style={{ display: 'flex' }}>
          <CreateNewForm overlay={overlay} setOverlay={setOverlay} />
          <SideBar qrList={qrList} setOverlay={setOverlay} />
          <TopBar setOverlay={setOverlay} />
        </div>
    )
}

export default Home;