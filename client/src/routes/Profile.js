import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import useFetchUser from "../hooks/useFetchUser";
import useFetchUserQR from "../hooks/useFetchUserQR";

import styles from "../assets/styles/ProfileStyles";

import SideBar from "../layouts/SideBar";
import TopBar from "../layouts/TopBar";

import Line from '../components/Line';

import CreateNewForm from '../components/Forms/CreateNewForm'
import DefaultButton from "../components/Buttons/DefaultButton";
import PersonalInfo from "../components/Profile/PersonalInfo";
import AccountUsage from "../components/Profile/AccountUsage";
import BillingInformation from "../components/Profile/BillingInformation";


function Profile() {
  
    let navigate = useNavigate(); 
    const routeChange = (path) => navigate(path);

    const token = localStorage.getItem('token');
    if(!token) routeChange('/login');
    const user = useFetchUser(token);

    const [userName, setUserName] = useState(user.userName);
    const [userEmail, setUserEmail] = useState(user.email);

    const [overlay, setOverlay] = useState(false);
    const qrList = useFetchUserQR(token);

    const [info, selectInfo] = useState(1);

    const qrLen = qrList.length;
    const maxLinks = qrList.reduce((acc, el) => {
        if(el.links.length > acc) return el.links.length;
        else return acc;
    }, 0)

    return(
        <div style={{ display: 'flex' }}>
            <CreateNewForm overlay={overlay} setOverlay={setOverlay} />
            <SideBar qrList={qrList} setOverlay={setOverlay} />
            <div>
                <TopBar setOverlay={setOverlay} />
                <div style={styles.container}>
                    <div style={styles.profileContainer}>
                        <p style={styles.title}>Minha conta</p>
                        <div style={styles.header}>
                            <p style={info === 1 ? styles.subtitle : styles.unabledSubtitle} onClick={() => selectInfo(1)}>Informações pessoais</p>
                            <p style={info === 2 ? styles.subtitle : styles.unabledSubtitle} onClick={() => selectInfo(2)}>Uso da conta</p>
                            <p style={info === 3 ? styles.subtitle : styles.unabledSubtitle} onClick={() => selectInfo(3)}>Informações de cobrança</p>
                        </div>
                        <Line w='calc(100vw - 590px)'/>
                        {
                            info == 1 ? <PersonalInfo userName={user.userName} userEmail={user.email} userPassoword={user.password} userPlan={user.plan} setUserName={setUserName} setUserEmail={setUserEmail} /> :
                            info == 2 ? <AccountUsage qrCodes={qrLen} maxLinks={maxLinks} /> :
                            info == 3 ? <BillingInformation /> : false
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
