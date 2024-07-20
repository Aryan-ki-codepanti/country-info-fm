import { useEffect, useState } from "react";
import CountryContext from "./CountryContext";

const CountryState = ({ children }) => {
    const [countries, setCountries] = useState([]);

    const [countrySearch, setCountrySearch] = useState("");
    const [region, setRegion] = useState("");

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const resp = await fetch(`https://restcountries.com/v3.1/all`);
                const res = await resp.json();

                setCountries(prev => res);
            } catch (err) {
                console.log("Error ", err);
            }
        };

        fetchCountries();
    }, []);

    return (
        <CountryContext.Provider
            value={{
                countries,
                countrySearch,
                setCountrySearch,
                region,
                setRegion
            }}
        >
            {children}
        </CountryContext.Provider>
    );
};

export default CountryState;
