import React, { useState } from "react";
import axios from 'axios';
import useFetchUserQR from "../hooks/useFetchUserQR";

import useFetchQR from "../hooks/useFetchQR";
import config from "../config/host";

import { useNavigate } from "react-router-dom";

import styles from "../assets/styles/QRStyles";

import HeaderInfoQR from "../components/HeaderInfoQR";
import Links from "../components/Links";

import URL from "../components/LinkBox";
import AddLinkForm from "../components/Forms/AddLinkForm";
import ScansInfo from "../components/ScansInfo";

import SideBar from "../layouts/SideBar";
import TopBar from "../layouts/TopBar";

import CreateNewForm from '../components/Forms/CreateNewForm'


function QR() {

    let navigate = useNavigate(); 
    const routeChange = (path) => navigate(path);

    const [overlay, setOverlay] = useState(false);
    const [linkOverlay, setLinkOverlay] = useState(false);

    const [linkName, setLinkName] = useState('');
    const [osName, setOsName] = useState('');
    const [timeRestriction, setTimeRestriction] = useState('');
    const [locRestriction, setLocRestriction] = useState('');
    const [link, setLink] = useState('');

    const token = localStorage.getItem('token');
    if(!token) routeChange('/login');
    const selectedQR = localStorage.getItem('selectedQR');

    const { qr, links, scans } = useFetchQR(token, selectedQR);
    const qrList = useFetchUserQR(token);

      const createLink = () => {
        axios.put(`http://${config.host}:3001/api/qr/createLink`, {
            headers: {
                authorization: token
            },
            params: {
                qrId: selectedQR,
                linkName: linkName,
                osName: osName,
                timeRestriction: timeRestriction,
                locRestriction: locRestriction,
                link: link
            }
        })
      }

    const redirect = `http://${config.host}:3000/redirect?qrId=${selectedQR}`;

    const success = scans.lenght == 0 ? '-' : `${((scans.filter(el => el.osName == 'unknown').length)/scans.length) * 100}%`
    
    return(
        <div style={{ display: 'flex' }}>
            <AddLinkForm overlay={linkOverlay} setOverlay={setLinkOverlay} />
            <CreateNewForm overlay={overlay} setOverlay={setOverlay} />
            <SideBar qrList={qrList} setOverlay={setOverlay} />
            <div>
                <TopBar setOverlay={setOverlay} />
                <HeaderInfoQR qrName={qr.qrName} url={redirect} links={links.length} scans={scans.length} defaultLink={qr.defaultLink} success={success} />
                <Links links={links} defaultLink={qr.defaultLink} setOverlay={setLinkOverlay} />
            </div>
            { /*
            <AddLinkForm setOsName={setOsName} setLinkName={setLinkName} setTimeRestriction={setTimeRestriction} setLocRestriction={setLocRestriction} 
                        setLink={setLink} createLink={createLink}/>
            <div style={{ width: '1700px' }}>
                    {
                        links.map(el => (
                            <URL
                                key={el._id} 
                                linkName={el.linkName}
                                timeRestriction={el.timeRestriction}
                                locRestriction={el.locRestriction}
                                osName={el.osName}
                                url={el.link} />
                        ))
                    }
            </div>
            <ScansInfo scans={scans} />
            */
            }
        </div>
    )
}

export default QR;