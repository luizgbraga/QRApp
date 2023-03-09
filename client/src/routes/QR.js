import React, { useState } from "react";
import axios from 'axios';
import useFetchUserQR from "../hooks/useFetchUserQRs";

import useFetchQR from "../hooks/useFetchQR";
import useFetchUser from "../hooks/useFetchUser";
import useFetchLinks from "../hooks/useFetchLinks";
import useFetchQRScans from "../hooks/useFetchQRScans";
import createNewLink from "../hooks/createNewLink";
import config from "../config/host";

import { useNavigate } from "react-router-dom";

import HeaderInfoQR from "../components/HeaderInfoQR";
import Links from "../components/Links";

import AddLinkForm from "../components/Forms/AddLinkForm";
import EditLinkForm from "../components/Forms/EditLinkForm";

import ScansInfo from "../components/ScansInfo";
import Selector from "../components/Selector";

import SideBar from "../layouts/SideBar";
import TopBar from "../layouts/TopBar";

import CreateNewForm from '../components/Forms/CreateNewForm'


function QR() {

    let navigate = useNavigate(); 
    const routeChange = (path) => navigate(path);

    const [overlay, setOverlay] = useState(false);
    const [linkOverlay, setLinkOverlay] = useState(false);
    const [editOverlay, setEditOverlay] = useState(false);

    const [linkName, setLinkName] = useState('');
    const [linkNameWarning, setLinkNameWarning] = useState('');

    const [osName, setOsName] = useState('');

    const [timeRestriction, setTimeRestriction] = useState('');

    const [hourRestriction, setHourRestriction] = useState('');
    const [hourRestrictionWarning, setHourRestrictionWarning] = useState('');

    const [locRestriction, setLocRestriction] = useState('');

    const [link, setLink] = useState('');
    const [linkWarning, setLinkWarning] = useState('');

    const [selects, setSelects] = useState(0);

    const token = localStorage.getItem('token');
    if(!token) routeChange('/login');
    const selectedQR = localStorage.getItem('selectedQR');

    const qr = useFetchQR(token, selectedQR);
    const qrList = useFetchUserQR(token);
    const user = useFetchUser(token);
    const links = useFetchLinks(selectedQR);
    const scans = useFetchQRScans(token, selectedQR);

    console.log(links)

      const createLink = () => {
        setLinkOverlay(false);
        const newLink = { 
            qrId: selectedQR, 
            linkName,
            osName: osName.toString(),
            timeRestriction, hourRestriction, 
            locRestriction: locRestriction.toString(),
            url: link, 
            default: false,
            short: 'test'
        }
        createNewLink(token, newLink);
      }

    const redirect = `http://${config.host}:3000/redirect?qrId=${selectedQR}`;

    const success = 0

    return(
        <div style={{ display: 'flex' }}>
            <AddLinkForm overlay={linkOverlay} setOverlay={setLinkOverlay} setLinkName={setLinkName} setLink={setLink} setOsName={setOsName} setTimeRestriction={setTimeRestriction} setHourRestriction={setHourRestriction} setLocRestriction={setLocRestriction} createLink={createLink} userPlan={user.plan} />
            <CreateNewForm overlay={overlay} setOverlay={setOverlay} />
            <EditLinkForm overlay={editOverlay} setOverlay={setEditOverlay} />
            <SideBar qrList={qrList} setOverlay={setOverlay} />
            <div>
                <TopBar setOverlay={setOverlay} />
                <HeaderInfoQR qrName={qr.qrName} url={redirect} links={links.length} scans={scans.length} defaultLink={qr.defaultLink} success={success} />
                <Selector options={["Links cadastrados", "Leituras do QR Code"]} selected={selects} setSelector={setSelects} />
                {
                    selects == 0 ?
                    <Links links={links} defaultLink={qr.defaultLink} setOverlay={setLinkOverlay} setEditOverlay={setEditOverlay} />
                    : false
                }
            </div>
        </div>
    )
}

export default QR;