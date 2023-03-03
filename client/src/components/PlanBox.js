import React from "react";

import styles from "../assets/styles/PlansStyles";

import DefaultButton from './Buttons/DefaultButton';

import qrcode from '../assets/icons/qrcode.png';
import close from '../assets/icons/no.png';
import link from '../assets/icons/link.png';
import os from '../assets/icons/os.png';
import tracking from '../assets/icons/tracking.png';
import clock from '../assets/icons/clock.png';

function PlanBox({ planInfo, userPlan, setPlan }) {
    let plan = planInfo ? planInfo : { features: [] };
    let selected = userPlan == plan.planTitle;
    return(
        <div style={selected ? styles.selectedBox : styles.box}>
            <p style={styles.planTitle}>{plan.planTitle}</p>
            <div style={styles.featuresContainer}>
                {
                    plan.features.map((el, idx) => (
                        <div style={el.enabled ? styles.feature : styles.featureUnabled} key={el.featureTitle}>
                            {
                                el.enabled ?
                                idx == 0 ?
                                <img src={qrcode}  style={styles.icon} />
                                : 
                                idx == 1 ?
                                <img src={link}  style={styles.icon} />
                                :
                                idx == 2 ?
                                <img src={os}  style={styles.icon} />  
                                :                                 
                                idx == 3 ?
                                <img src={tracking}  style={styles.icon} />
                                :
                                idx == 4 ?
                                <img src={clock}  style={styles.icon} />
                                : false :
                                <img src={close}  style={styles.icon} />     
                            }
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