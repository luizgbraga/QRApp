import React from "react";

import NavBar from "../layouts/NavBar";
import Slogan from "../components/Slogan";
import Sticker from '../components/Sticker';
import ButtonStartNow from "../components/ButtonStartNow";

import { useNavigate } from "react-router-dom";

function Landing() {

    let navigate = useNavigate(); 

    const midStyles = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '72px 100px 20px 100px',
        justifyContent: 'space-between'
    }

    return(
        <div>
            <NavBar />
            <div style={midStyles}>
                <Slogan />
                <Sticker />
            </div>
            <ButtonStartNow label='Comece agora' onClick={() => navigate('/signin')} />
        </div>
    )
}

export default Landing;