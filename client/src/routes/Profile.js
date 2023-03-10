import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import useFetchUser from "../hooks/useFetchUser";
import useFetchUserQR from "../hooks/useFetchUserQRs";

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

    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardExpiration, setCardExpiration] = useState('');
    const [cardCVV, setCardCVV] = useState('');

    const qrLen = qrList.length;
    const maxLinks = 2

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
                            <p style={info === 1 ? styles.subtitle : styles.unabledSubtitle} onClick={() => selectInfo(1)}>Informa????es pessoais</p>
                            <p style={info === 2 ? styles.subtitle : styles.unabledSubtitle} onClick={() => selectInfo(2)}>Uso da conta</p>
                            <p style={info === 3 ? styles.subtitle : styles.unabledSubtitle} onClick={() => selectInfo(3)}>Informa????es de cobran??a</p>
                        </div>
                        <Line w='calc(100vw - 590px)'/>
                        {
                            info == 1 ? <PersonalInfo userName={user.userName} userEmail={user.email} userPassoword={user.password} userPlan={user.plan} setUserName={setUserName} setUserEmail={setUserEmail} /> :
                            info == 2 ? <AccountUsage qrCodes={qrLen} maxLinks={maxLinks} /> :
                            info == 3 ? <BillingInformation cardName={cardName} setCardName={setCardName} 
                                                            cardNumber={cardNumber} setCardNumber={setCardNumber} 
                                                            cardExpiration={cardExpiration} setCardExpiration={setCardExpiration} 
                                                            cardCVV={cardCVV} setCardCVV={setCardCVV} /> : false
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
