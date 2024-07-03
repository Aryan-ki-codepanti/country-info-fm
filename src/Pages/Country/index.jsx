import React, { useEffect, useState } from "react";
import "./Country.css";
import { useLocation, useParams } from "react-router-dom";

const Country = () => {
    const { name } = useParams();
    const { state } = useLocation();

    const [countryInfo, setCountryInfo] = useState(null);

    // set or Fetch country info if not brought from back page
    useEffect(() => {
        if (state?.country) {
            setCountryInfo(prev => state.country);
            return;
        }

        // else fetch lol
        const fetchCountry = async () => {
            const resp = await fetch(
                `https://restcountries.com/v3.1/name/${name}`
            );
            const res = await resp.json();
            for (const obj of res)
                if (obj?.name?.common?.toLowerCase() === name.toLowerCase())
                    setCountryInfo(prev => obj);
        };

        fetchCountry();
    }, [state, name]);

    return (
        <div>
            Country {name} {countryInfo?.name?.common}
        </div>
    );
};

export default Country;
