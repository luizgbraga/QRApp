import React, { useState, useEffect } from "react";
import axios from 'axios';
import QRCode from "react-qr-code";

import { connect } from 'react-redux';

import useFetchQR from "../hooks/getQR";

function QR() {

    const [linkName, setLinkName] = useState('');
    const [osName, setOsName] = useState('');
    const [timeRestriction, setTimeRestriction] = useState('');
    const [link, setLink] = useState('');

    const token = localStorage.getItem('token');
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
                link: link
            }
        })
      }

    console.log(scans)

    const redirect = `http://localhost:3000/redirect?qrId=${selectedQR}`;

    return(
        <div>
            <p>Nome do QR: {qr.qrName}</p>
            <p>Scans: {scans.length}</p>
            <QRCode value={redirect} size={120} />
            <p>Adicione um link</p>
            <label>Nome</label>
            <input id='linkName' name='linkName' onChange={(e) => setLinkName(e.target.value)} /><br></br>
            <label>OS</label>
            <input id='osName' name='osName' onChange={(e) => setOsName(e.target.value)} /><br></br>
            <label>Restrição de tempo</label>
            <input id='timeRestriction' name='timeRestriction' onChange={(e) => setTimeRestriction(e.target.value)} /><br></br>
            <label>Link</label>
            <input id='Link' name='Link' onChange={(e) => setLink(e.target.value)} />
            <button onClick={createLink}>Create link</button>
            <p>Links:</p>
            {
                links.map(el => (
                    <div key={el._id}>
                        <p>{el.linkName} - {el.osName} - {el.link}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default connect(state => ({ token: state.login.token }))(QR);