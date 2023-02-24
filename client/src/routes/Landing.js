import React from "react";

import NavBar from "../layouts/NavBar";
import Slogan from "../components/Slogan";
import ButtonStartNow from "../components/Buttons/ButtonStartNow";

import { useNavigate } from "react-router-dom";
import LoggedNavBar from "../layouts/LoggedNavBar";

function Landing() {

    let navigate = useNavigate(); 
    const token = localStorage.getItem('token');

    const midStyles = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '92px 100px 60px 100px',
        justifyContent: 'space-between'
    }

    return(
        <div>
            { token ? <LoggedNavBar /> : <NavBar /> }
            <div style={midStyles}>
                <Slogan />
            </div>
            <ButtonStartNow label='Comece agora' onClick={() => navigate('/signin')} />
        </div>
    )
}

export default Landing;