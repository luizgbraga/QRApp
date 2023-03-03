import React from "react";

import styles from "../assets/styles/PlansStyles";

import DefaultButton from './Buttons/DefaultButton';

function PlanBox({ planInfo, userPlan, setPlan }) {
    let plan = planInfo ? planInfo : { features: [] };
    let selected = 'Plano Básico' == plan.planTitle;
    return(
        <div style={selected ? styles.selectedBox : styles.box}>
            <p style={styles.planTitle}>{plan.planTitle}</p>
            <div style={styles.featuresContainer}>
                {
                    plan.features.map(el => (
                        <div style={el.enabled ? styles.feature : styles.featureUnabled} key={el.featureTitle}>
                            <p>{el.featureTitle}</p>
                        </div>
                    ))
                }
            </div>
            <div style={styles.priceContainer}>
                <p style={styles.price}><span style={styles.cifra}>R$ </span>{plan.price}<span style={styles.permonth}>/mês</span></p>
            </div>
            {
                selected ?
                <DefaultButton label='Seu plano' disabled w='94%' />
                :
                <DefaultButton label='Escolher' w='94%' onClick={() => setPlan(plan.planTitle)} />
            }
        </div>
    )
}

export default PlanBox;