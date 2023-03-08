import React, { useState } from "react";
import axios from "axios";

import config from "../config/host";

import SideBar from "../layouts/SideBar";
import TopBar from "../layouts/TopBar";

import PlanBox from "../components/PlanBox";

import useFetchUserQR from "../hooks/useFetchUserQR";
import useFetchUser from "../hooks/useFetchUser";

import styles from "../assets/styles/PlansStyles";

import CreateNewForm from '../components/Forms/CreateNewForm'

function Plans() {

    const token = localStorage.getItem('token');
    const qrList = useFetchUserQR(token);
    const user = useFetchUser(token);
    const [overlay, setOverlay] = useState(false);
    const [overlayCheckout, setOverlayCheckout] = useState(false);
    const [plan, setPlan] = useState(user.plan);

    console.log(user.plan)

    const updatePlan = () => {
        axios.post(`http://${config.host}:3001/api/login/updatePlan`, { 
          
        })
            .then((response) => {
                localStorage.setItem('token', response.data);
            });
    }

    const plans = [
        {
            planTitle: 'Plano Básico',
            price: '20',
            features: [
                { featureTitle: 'Gere até 5 QR Codes', enabled: true },
                { featureTitle: 'Adicione até 2 URLs por QR', enabled: true },
                { featureTitle: 'Restrição por SO', enabled: true },
                { featureTitle: 'Traqueamento de leituras', enabled: false },
                { featureTitle: 'Restrição por tempo e local', enabled: false }
            ]
        },

        {
            planTitle: 'Plano Empresa',
            price: '50',
            features: [
                { featureTitle: 'Gere até 12 QR Codes', enabled: true },
                { featureTitle: 'Adicione até 4 URLs por QR', enabled: true },
                { featureTitle: 'Restrição por SO', enabled: true },
                { featureTitle: 'Traqueamento de leituras', enabled: true },
                { featureTitle: 'Restrição por tempo e local', enabled: false }
            ]
        },

        {
            planTitle: 'Plano Premium',
            price: '90',
            features: [
                { featureTitle: 'QR Codes ilimitados', enabled: true },
                { featureTitle: 'URLs ilimitadas', enabled: true },
                { featureTitle: 'Restrição por SO', enabled: true },
                { featureTitle: 'Traqueamento de leituras', enabled: true },
                { featureTitle: 'Restrição por tempo e local', enabled: true }
            ]
        }
    ]

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