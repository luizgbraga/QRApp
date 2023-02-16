import React from "react";

import styles from "../assets/styles/SloganStyles";

function Slogan() {
    return(
        <div style={styles.sloganContainer}>
            <p style={styles.title}>Vários links em um só QR Code</p>
            <p style={styles.subtitle}>Já pensou em ter somente um QR Code para seu negócio que aponta para vários links diferentes? Com a Thunder Code você pode gerar seus QR Codes personalizados, acompanhar seu desempenho e gerar valor para o seu negócio. </p>
        </div>
    )
}

export default Slogan;