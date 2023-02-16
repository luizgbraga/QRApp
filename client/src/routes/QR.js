import React, { useState } from "react";
import axios from 'axios';
import QRCode from "react-qr-code";

import { connect } from 'react-redux';

import useFetchQR from "../hooks/useFetchQR";

import { useNavigate } from "react-router-dom";

import styles from "../assets/styles/QRStyles";

import TextInput from "../components/TextInput";
import Button from "../components/Button";
import URL from "../components/URL";

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
            <p style={styles.qrName}>Nome: {qr.qrName}</p>
            <QRCode value={redirect} size={160} style={styles.qrCode} />
            <div style={styles.row}>
                <div>
                    <TextInput 
                        w='300px' 
                        h='20px' 
                        labelText='Nome do link' 
                        value={linkName} 
                        setValue={setLinkName} />
                    <TextInput 
                        w='300px' 
                        h='20px' 
                        labelText='Sistema operacional' 
                        value={osName} 
                        setValue={setOsName} />
                    <TextInput 
                        w='300px' 
                        h='20px' 
                        labelText='Restrição de tempo' 
                        value={timeRestriction} 
                        setValue={setTimeRestriction} />
                    <TextInput 
                        w='300px' 
                        h='20px' 
                        labelText='Restrição de localização' 
                        value={locRestriction} 
                        setValue={setLocRestriction} />
                    <TextInput 
                        w='300px' 
                        h='20px' 
                        labelText='URL' 
                        value={link} 
                        setValue={setLink} />
                    <Button 
                        w='120px' 
                        h='40px' 
                        color='#90EE90'
                        buttonText='Criar URL'
                        onClick={createLink} />
                </div>
                <div>
                    {
                        links.map(el => (
                            <URL
                                key={el._id} 
                                linkName={el.linkName}
                                timeRestriction={el.timeRestriction}
                                osName={el.osName}
                                url={el.link} />
                        ))
                    }
                </div>
            </div>
            <p style={styles.qrName}>Scans</p>
            {
                scans.map(el => (
                    <p>{el.osName} - {el.scanLocation} - {el.scanDate}</p>
                ))
            }
        </div>
    )
}

export default connect(state => ({ token: state.login.token }))(QR);