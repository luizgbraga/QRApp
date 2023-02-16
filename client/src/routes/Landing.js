import React from "react";

import NavBar from "../layouts/NavBar";
import Slogan from "../components/Slogan";
import Sticker from '../components/Sticker';
import ButtonStartNow from "../components/ButtonStartNow";


function Landing() {
    const midStyles = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '120px 100px 60px 100px',
        justifyContent: 'space-between'
    }

    return(
        <div>
            <NavBar />
            <div style={midStyles}>
                <Slogan />
                <Sticker />
            </div>
            <ButtonStartNow label='Comece agora' />
        </div>
    )
}

export default Landing;