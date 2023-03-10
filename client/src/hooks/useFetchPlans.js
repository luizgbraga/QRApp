import { useState, useEffect } from "react";
import axios from 'axios';
import config from "../config/host";

function useFetchPlans() {
  
    const [plans, setPlans] = useState({});
    useEffect(() => {
      axios
        .get(`http://${config.host}:3001/api/product/getPlans`)
        .then((response) => {
          setPlans(response.data);
      });
    }, []);
    
    return plans;
}

export default useFetchPlans;