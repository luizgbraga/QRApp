import React, { useState } from "react";

import styles from "../../assets/styles/Forms/AddLinkFormStyles";

import close from '../../assets/icons/close.png';

import AddLinkFormStep1 from "./AddLinkFormStep1";

import ProgressBar from "./ProgressBar";
import AddLinkFormStep2 from "./AddLinkFormStep2";
import AddLinkFormStep3 from "./AddLinkFormStep3";
import AddLinkFormStep4 from "./AddLinkFormStep4";
import AddLinkFormStep5 from "./AddLinkFormStep5";

function AddLinkForm({ setLinkName, setLink, setOsName, setTimeRestriction, setHourRestriction, setLocRestriction, createLink, overlay, setOverlay }) {

    let visible = overlay ? {} : { display: 'none' };
    const [nodes, setNodes] = useState([1, 0, 0, 0, 0]);
    const [current, setCurrent] = useState(1);

    const nextNode = () => {
        let updatedNodes = nodes;
        for(let i in updatedNodes) {
            if(updatedNodes[i] === 0) {
                updatedNodes[i] = 1;
                setCurrent(Number(i) + 1);
                break;
            }
        }
        setNodes(updatedNodes);
    }

    const previousNode = () => {
        let updatedNodes = nodes;
        if(current == nodes.length) {
            updatedNodes[nodes.length - 1] = 0;
            setCurrent(nodes.length - 1);
            setNodes(updatedNodes);
            return; 
        }
        for(let i in updatedNodes) {
            if(updatedNodes[i] === 0) {
                updatedNodes[i - 1] = 0;
                setCurrent(Number(i) - 1);
                break;
            }
        }
        setNodes(updatedNodes);
    }

    const closeOverlay = () => {
        setOverlay(false);
        setCurrent(1);
        let updatedNodes = nodes;
        for(let i in updatedNodes) {
            if(i == 0) {
                updatedNodes[i] = 1;
            } else {
                updatedNodes[i] = 0;
            } 
        }
        setNodes(updatedNodes);
    }

    return(
        <div style={{ ...styles.background, ...visible }}>
            <div style={styles.formContainer}>
                <img src={close} style={styles.close} onClick={closeOverlay} />
                <ProgressBar nodes={nodes} />
                {
                    current === 1 ? <AddLinkFormStep1 nextNode={nextNode} setOverlay={closeOverlay} setLinkName={setLinkName} setLink={setLink} /> :
                    current === 2 ? <AddLinkFormStep2 nextNode={nextNode} previousNode={previousNode} setOsName={setOsName} /> : 
                    current === 3 ? <AddLinkFormStep3 nextNode={nextNode} previousNode={previousNode} setTimeRestriction={setTimeRestriction} /> :
                    current === 4 ? <AddLinkFormStep4 nextNode={nextNode} previousNode={previousNode} setHourRestriction={setHourRestriction} /> :
                    current === 5 ? <AddLinkFormStep5 createLink={createLink} previousNode={previousNode} setLocRestriction={setLocRestriction} /> : false
                }
            </div>
        </div>
    )
}

export default AddLinkForm;