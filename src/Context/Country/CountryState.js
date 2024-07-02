import { useEffect, useState } from "react";
import CountryContext from "./CountryContext";

const CountryState = ({ children }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            const resp = await fetch(`https://restcountries.com/v3.1/all`);
            const res = await resp.json();

            console.log(res);
            setCountries(prev => res);
        };

        fetchCountries();
    }, []);

    return (
        <CountryContext.Provider value={{ countries }}>
            {children}
        </CountryContext.Provider>
    );
};

export default CountryState;
