import React, { useState, useEffect } from "react";
import axios from 'axios';

function useFetchLocation() {
    const [location, setLocation] = useState({});
    useEffect(() => {
        axios.get("https://ipapi.co/json/")
            .then((response) => {
            setLocation({
                country: response.data.country_name,
                region: response.data.region,
                city: response.data.city
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return `${location.country}, ${location.region}, ${location.city}`;
}

export default useFetchLocation;
