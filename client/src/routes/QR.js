import React, { useState } from "react";
import axios from 'axios';
import useFetchUserQR from "../hooks/useFetchUserQR";

import useFetchQR from "../hooks/useFetchQR";
import config from "../config/host";

import { useNavigate } from "react-router-dom";

import HeaderInfoQR from "../components/HeaderInfoQR";
import Links from "../components/Links";

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
    const [hourRestriction, setHourRestriction] = useState('');
    const [locRestriction, setLocRestriction] = useState('');
    const [link, setLink] = useState('');

    const token = localStorage.getItem('token');
    if(!token) routeChange('/login');
    const selectedQR = localStorage.getItem('selectedQR');

    const { qr, links, scans } = useFetchQR(token, selectedQR);
    const qrList = useFetchUserQR(token);

      const createLink = () => {
        setLinkOverlay(false);
        axios.put(`http://${config.host}:3001/api/qr/createLink`, {
            headers: {
                authorization: token
            },
            params: {
                qrId: selectedQR,
                linkName: linkName,
                osName: osName.toString(),
                timeRestriction: timeRestriction,
                hourRestriction: hourRestriction,
                locRestriction: locRestriction.toString(),
                link: link
            }
        })
      }

    const redirect = `http://${config.host}:3000/redirect?qrId=${selectedQR}`;

    const success = scans.lenght == 0 ? '-' : `${Math.round(((scans.filter(el => el.osName != 'unknown').length)/scans.length) * 10000)/100}%`

    return(
        <div style={{ display: 'flex' }}>
            <AddLinkForm overlay={linkOverlay} setOverlay={setLinkOverlay} setLinkName={setLinkName} setLink={setLink} setOsName={setOsName} setTimeRestriction={setTimeRestriction} setHourRestriction={setHourRestriction} setLocRestriction={setLocRestriction} createLink={createLink} />
            <CreateNewForm overlay={overlay} setOverlay={setOverlay} />
            <SideBar qrList={qrList} setOverlay={setOverlay} />
            <div>
                <TopBar setOverlay={setOverlay} />
                <HeaderInfoQR qrName={qr.qrName} url={redirect} links={links.length} scans={scans.length} defaultLink={qr.defaultLink} success={success} />
                <Links links={links} defaultLink={qr.defaultLink} setOverlay={setLinkOverlay} />
            </div>
            <ScansInfo scans={scans} />
        </div>
    )
}

export default QR;