import React, { useState } from "react";
import axios from 'axios';

import { connect } from 'react-redux';

import useFetchQR from "../hooks/useFetchQR";

import { useNavigate } from "react-router-dom";

import styles from "../assets/styles/QRStyles";

import LoggedNavBar from "../layouts/LoggedNavBar";
import HeaderInfoQR from "../components/HeaderInfoQR";

import URL from "../components/URL";
import AddLinkForm from "../components/Forms/AddLinkForm";
import ScansInfo from "../components/ScansInfo";

function QR() {

    let navigate = useNavigate(); 
    const routeChange = (path) => navigate(path);

    const [linkName, setLinkName] = useState('');
    const [osName, setOsName] = useState('');
    const [timeRestriction, setTimeRestriction] = useState('');
    const [locRestriction, setLocRestriction] = useState('');
    const [link, setLink] = useState('');

    const token = localStorage.getItem('token');
    if(!token) routeChange('/login');
    const selectedQR = localStorage.getItem('selectedQR');

    const { qr, links, scans } = useFetchQR(token, selectedQR);

      const createLink = () => {
        axios.put(`http://localhost:3001/api/qr/createLink`, {
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

    const redirect = `http://192.168.68.123:3000/redirect?qrId=${selectedQR}`;

    return(
        <div style={styles.QRStyles}>
            <LoggedNavBar />
            <HeaderInfoQR qrName={qr.qrName} url={redirect} links={links.length} scans={scans.length} defaultLink={qr.defaultLink} />
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
        </div>
    )
}

export default connect(state => ({ token: state.login.token }))(QR);