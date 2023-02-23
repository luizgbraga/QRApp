import React from "react";

import NavBar from "../layouts/NavBar";
import LoggedNavBar from "../layouts/LoggedNavBar";

function AboutUs() {
    const token = localStorage.getItem('token');
    return(
        <div>
            { token ? <LoggedNavBar /> : <NavBar /> }
        </div>
    )
}

export default AboutUs;