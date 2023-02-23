import React from "react";

import NavBar from "../layouts/NavBar";
import LoggedNavBar from "../layouts/LoggedNavBar";

function Support() {

    const token = localStorage.getItem('token');

    return(
        <div>
            { token ? <LoggedNavBar /> : <NavBar /> }
        </div>
    )
}

export default Support;