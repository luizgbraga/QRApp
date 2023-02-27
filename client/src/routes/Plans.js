import React from "react";

import SideBar from "../layouts/SideBar";
import TopBar from "../layouts/TopBar";

import PlanBox from "../components/PlanBox";

import useFetchUserQR from "../hooks/useFetchUserQR";

import styles from "../assets/styles/PlansStyles";

function Plans() {

    const token = localStorage.getItem('token');
    const qrList = useFetchUserQR(token);

    return(
        <div style={{ display: 'flex' }}>
            <SideBar qrList={qrList} />
            <div>
                <TopBar />
                <div style={styles.container}>
                    <p style={styles.title}>Planos</p>
                    <div style={styles.boxesContainer}>
                        <PlanBox />
                        <PlanBox />
                        <PlanBox />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plans;