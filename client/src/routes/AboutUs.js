import React from "react";

import SideBar from "../layouts/SideBar";
import TopBar from "../layouts/TopBar";

import useFetchUserQR from "../hooks/useFetchUserQRs";

function AboutUs() {

    const token = localStorage.getItem('token');
    const qrList = useFetchUserQR(token);
    
    return(
        <div style={{ display: 'flex' }}>
            <SideBar qrList={qrList} />
            <div>
                <TopBar />
            </div>
        </div>
    )
}

export default AboutUs;