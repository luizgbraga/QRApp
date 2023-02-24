import React from "react";

import { useNavigate } from "react-router-dom";
import config from "../config/host";

import useFetchUserQR from "../hooks/useFetchUserQR";

import CardQR from "../components/CardQR";
import LoggedNavBar from "../layouts/LoggedNavBar";

function Home() {

    let navigate = useNavigate(); 
    const routeChange = (path) => navigate(path);

    const token = localStorage.getItem('token');
    const qrList = useFetchUserQR(token)

    const selectQR = (qrId) => {
        localStorage.setItem('selectedQR', qrId);
        routeChange('/qr');
    }

    if(!token) routeChange('/login');

    return(
        <div>
          <LoggedNavBar />
            {
              qrList.map(el => (
                <CardQR 
                  key={el._id}
                  url={`http://${config.host}:3000/redirect?qrId=${el._id}`}
                  qrName={el.qrName} 
                  scans={el.scans.length}
                  links={el.links.length}
                  onClick={() => selectQR(el._id)} />
              ))
            }
        </div>
    )
}

export default Home;