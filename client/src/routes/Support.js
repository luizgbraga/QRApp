import React from "react";

import SideBar from "../layouts/SideBar";
import TopBar from "../layouts/TopBar";

import useFetchUserQR from "../hooks/useFetchUserQR";

import styles from "../assets/styles/SupportStyles";

function Support() {

    const token = localStorage.getItem('token');
    const qrList = useFetchUserQR(token);
    
    return(
        <div style={{ display: 'flex' }}>
            <SideBar qrList={qrList} />
            <div>
                <TopBar />
                <div style={styles.supportContainer}>
                    <p style={styles.title}>Suporte</p>
                </div>
            </div>
        </div>
    )
}

export default Support;