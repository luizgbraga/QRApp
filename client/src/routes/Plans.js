import React, { useState } from "react";
import axios from "axios";

import config from "../config/host";

import SideBar from "../layouts/SideBar";
import TopBar from "../layouts/TopBar";

import PlanBox from "../components/PlanBox";

import useFetchUserQR from "../hooks/useFetchUserQRs";
import useFetchUser from "../hooks/useFetchUser";
import useFetchPlans from "../hooks/useFetchPlans";

import styles from "../assets/styles/PlansStyles";

import CreateNewForm from '../components/Forms/CreateNewForm'

function Plans() {

    const token = localStorage.getItem('token');
    const qrList = useFetchUserQR(token);
    const user = useFetchUser(token);
    const [overlay, setOverlay] = useState(false);
    const [overlayCheckout, setOverlayCheckout] = useState(false);
    const [plan, setPlan] = useState(user.plan);

    const updatePlan = () => {
        axios.post(`http://${config.host}:3001/api/login/updatePlan`, { 
          
        })
            .then((response) => {
                localStorage.setItem('token', response.data);
            });
    }

    const plans = useFetchPlans();

    return(
        <div style={{ display: 'flex' }}>
            <CreateNewForm overlay={overlay} setOverlay={setOverlay} />
            <SideBar qrList={qrList} setOverlay={setOverlay} />
            <div>
                <TopBar setOverlay={setOverlay} />
                <div style={styles.container}>
                    <p style={styles.title}>Planos</p>
                    <div style={styles.boxesContainer}>
                        <PlanBox planTitle='Plano Premium' planInfo={plans[0]} userPlan={user.plan} setPlan={setPlan} />
                        <PlanBox planTitle='Plano Empresa' planInfo={plans[1]} userPlan={user.plan} setPlan={setPlan} />
                        <PlanBox planTitle='Plano Individual' planInfo={plans[2]} userPlan={user.plan} setPlan={setPlan} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plans;