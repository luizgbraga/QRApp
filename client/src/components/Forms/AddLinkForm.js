import React, { useState } from "react";

// Styles
import styles from "../../assets/styles/Forms/AddLinkFormStyles";

// Database communication
import createNewLink from "../../hooks/createNewLink";

// Icons and images
import close from '../../assets/icons/close.png';

// General components
import AddLinkFormStep1 from "./AddLinkFormStep1";
import AddLinkFormStep2 from "./AddLinkFormStep2";
import AddLinkFormStep3 from "./AddLinkFormStep3";
import AddLinkFormStep4 from "./AddLinkFormStep4";
import AddLinkFormStep5 from "./AddLinkFormStep5";
import ProgressBar from "./ProgressBar";

// Navigation
import { useNavigate } from "react-router-dom";

function AddLinkForm({ overlay, setOverlay, userPlan, qrId }) {

    let navigate = useNavigate(); 

    const token = localStorage.getItem('token');
    if(!token) navigate('/login');

    let visible = overlay ? {} : { display: 'none' };

    const [nodes, setNodes] = useState([1, 0, 0, 0, 0]);
    const [current, setCurrent] = useState(1);

    const [linkName, setLinkName] = useState('');
    const [linkNameWarning, setLinkNameWarning] = useState('');

    const [url, setUrl] = useState('');
    const [urlWarning, setUrlWarning] = useState('');

    const [osName, setOsName] = useState([]);
    const [osNameWarning, setOsNameWarning] = useState('');

    const [timeRestriction, setTimeRestriction] = useState('');
    const [timeRestrictionWarning, setTimeRestrictionWarning] = useState('');
    const [months, setMonths] = useState([]);
    const [monthsWarning, setMonthsWarning] = useState('');
    const [weekDays, setWeekDays] = useState([]);
    const [weekDaysWarning, setWeekDaysWarning] = useState('');

    const [hourRestriction, setHourRestriction] = useState('');
    const [hourRestrictionWarning, setHourRestrictionWarning] = useState('');
    const [from, setFrom] = useState('');
    const [fromWarning, setFromWarning] = useState('');
    const [to, setTo] = useState('');
    const [toWarning, setToWarning] = useState('');

    const [locRestriction, setLocRestriction] = useState('');

    const createLink = () => {
        setOverlay(false);
        const newLink = { 
            qrId, linkName,
            osName: osName.toString(),
            timeRestriction, hourRestriction, 
            locRestriction: locRestriction.toString(),
            url,
            default: false
        }
        createNewLink(token, newLink);
      }

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
        setLinkName('');
        setUrl('');
        setOsName('');
        setHourRestriction('');
        setTimeRestriction('');
        setLocRestriction('');
        setLinkNameWarning('')
        setUrlWarning('');
        setHourRestrictionWarning('');
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

    const handleTimeMonths = (monthsInputed) => {
        setMonths(monthsInputed);
        setTimeRestriction(`${months.toString()}-${weekDays}`);
        if(monthsInputed.length) {
            setMonthsWarning('');
        }
    }

    const handleTimeWeekDays = (weekDaysInputed) => {
        setWeekDays(weekDaysInputed);
        setTimeRestriction(`${months.toString()}-${weekDays}`);
        if(weekDaysInputed.length) {
            setWeekDaysWarning('');
        }
    }

    const handleHourFrom = (fromInputed) => {
        setFrom(fromInputed);
        setHourRestriction(`${from}-${to}`);
    }

    const handleHourTo = (toInputed) => {
        setTo(toInputed);
        setHourRestriction(`${from}-${to}`);
    }

    return(
        <div style={{ ...styles.background, ...visible }}>
            <div style={styles.formContainer}>
                <img src={close} style={styles.close} onClick={closeOverlay} />
                <ProgressBar nodes={nodes} userPlan={userPlan} names={['Link', 'SO', 'Tempo', 'Horário', 'Local']} />
                {
                    current === 1 ? 
                    
                    <AddLinkFormStep1 
                        nextNode={nextNode} 
                        setOverlay={closeOverlay} 
                        linkName={linkName} 
                        setLinkName={setLinkName} 
                        linkNameWarning={linkNameWarning} 
                        setLinkNameWarning={setLinkNameWarning} 
                        url={url} 
                        setUrl={setUrl} 
                        urlWarning={urlWarning} 
                        setUrlWarning={setUrlWarning} 
                        createLink={createLink} 
                        userPlan={userPlan} /> 
                    :
                    current === 2 ? 
                    
                    <AddLinkFormStep2 
                        nextNode={nextNode} 
                        previousNode={previousNode} 
                        osName={osName} 
                        setOsName={setOsName} 
                        osNameWarning={osNameWarning} 
                        setOsNameWarning={setOsNameWarning} 
                        createLink={createLink} 
                        userPlan={userPlan} /> 
                    : 
                    current === 3 ? 
                    
                    <AddLinkFormStep3 
                        nextNode={nextNode} 
                        previousNode={previousNode} 
                        months={months}
                        setMonths={setMonths}
                        weekDays={weekDays}
                        setWeekDays={setWeekDays}
                        monthsWarning={monthsWarning}
                        setMonthsWarning={setMonthsWarning}
                        weekDaysWarning={weekDaysWarning}
                        setWeekDaysWarning={setWeekDaysWarning}
                        handleTimeMonths={handleTimeMonths}
                        handleTimeWeekDays={handleTimeWeekDays}
                        timeRestriction={timeRestriction}
                        setTimeRestriction={setTimeRestriction} 
                        timeRestrictionWarning={timeRestrictionWarning}
                        setTimeRestrictionWarning={setTimeRestrictionWarning}
                        createLink={createLink}
                        userPlan={userPlan} /> 
                    :
                    current === 4 ? 
                    
                    <AddLinkFormStep4 
                        nextNode={nextNode} 
                        previousNode={previousNode}
                        from={from}
                        setFrom={setFrom}
                        to={to}
                        setTo={setTo}
                        toWarning={toWarning}
                        setToWarning={setToWarning}
                        fromWarning={fromWarning}
                        setFromWarning={setFromWarning}
                        handleHourFrom={handleHourFrom}
                        handleHourTo={handleHourTo}
                        hourRestriction={hourRestriction}
                        setHourRestriction={setHourRestriction} 
                        createLink={createLink} 
                        userPlan={userPlan} /> 
                    :
                    current === 5 ? <AddLinkFormStep5 createLink={createLink} previousNode={previousNode} setLocRestriction={setLocRestriction} userPlan={userPlan} /> : false
                }
            </div>
        </div>
    )
}

export default AddLinkForm;