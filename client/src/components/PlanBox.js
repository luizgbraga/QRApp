import React from "react";

import styles from "../assets/styles/PlansStyles";

import DefaultButton from './Buttons/DefaultButton';

function PlanBox({ planInfo }) {
    let plan = planInfo ? planInfo : { features: [] };
    console.log(plan)
    return(
        <div style={styles.box}>
            <p style={styles.planTitle}>{plan.planTitle}</p>
            <div style={styles.featuresContainer}>
                {
                    plan.features.map(el => (
                        <div style={el.enabled ? styles.feature : styles.featureUnabled}>
                            <p>{el.featureTitle}</p>
                        </div>
                    ))
                }
            </div>
            <div style={styles.priceContainer}>
                <p style={styles.price}><span style={styles.cifra}>R$ </span>{plan.price}<span style={styles.permonth}>/mês</span></p>
            </div>
            <DefaultButton label='Escolher' w={300} />
        </div>
    )
}

export default PlanBox;