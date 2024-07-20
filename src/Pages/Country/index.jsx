import React, { useContext, useEffect, useState } from "react";
import "./Country.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CountryContext from "../../Context/Country/CountryContext";

const Country = () => {
    const { name } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();

    const { countries } = useContext(CountryContext);

    const [countryInfo, setCountryInfo] = useState(null);

    const getNativeNames = nativeNameInfo => {
        const names = [];
        for (const key in nativeNameInfo)
            names.push(nativeNameInfo[key].common);
        return names.join(", ");
    };

    const getCurrencyInfo = curr => {
        if (!curr) return "NA";
        const currs = [];
        for (const key in curr) currs.push(curr[key].name);
        return currs.join(", ");
    };

    // ultimate
    const getCountryName = three_code =>
        countries?.find(country => country.cca3 === three_code)?.name?.common;

    // set or Fetch country info if not brought from back page
    useEffect(() => {
        if (state?.country) {
            setCountryInfo(prev => state.country);
            return;
        }

        // else fetch lol
        const fetchCountry = async () => {
            try {
                const resp = await fetch(
                    `https://restcountries.com/v3.1/name/${name}`
                );

                const res = await resp.json();

                // country not found error
                if (res?.status === 404) {
                    navigate("/country-not-found");
                    return;
                }

                for (const obj of res)
                    if (obj?.name?.common?.toLowerCase() === name.toLowerCase())
                        setCountryInfo(prev => obj);
            } catch (err) {
                console.log("Error ", err);
            }
        };

        fetchCountry();
    }, [state, name, navigate]);

    return (
        <div className="container">
            <div className="back-btn" onClick={e => navigate("/")}>
                <div className="back-icon"></div>
                <span>Back</span>
            </div>
            <div className="country-info">
                <div className="flag">
                    <img src={countryInfo?.flags?.svg} alt="country-flag" />
                </div>

                <div className="info">
                    <h1>{countryInfo?.name?.common}</h1>

                    <div className="items-l">
                        <span>
                            <b>Native Name : </b>
                            {getNativeNames(countryInfo?.name?.nativeName)}
                        </span>
                        <span>
                            <b>Population : </b>
                            {countryInfo?.population?.toLocaleString("en-US")}
                        </span>
                        <span>
                            <b>Region : </b>
                            {countryInfo?.region || "NA"}
                        </span>
                        <span>
                            <b>Sub Region : </b>
                            {countryInfo?.subregion || "NA"}
                        </span>
                        <span>
                            <b>Capital : </b>
                            {countryInfo?.capital?.length > 0
                                ? countryInfo?.capital[0]
                                : "NA"}
                        </span>
                    </div>
                    <div className="items-r">
                        <span>
                            <b>Top Level Domain : </b>
                            {countryInfo?.tld?.length > 0
                                ? countryInfo.tld[0]
                                : "NA"}
                        </span>
                        <span>
                            <b>Currencies : </b>
                            {getCurrencyInfo(countryInfo?.currencies)}
                        </span>
                        <span>
                            <b>Languages : </b>
                            {countryInfo?.languages
                                ? Object.values(countryInfo?.languages).join(
                                      ", "
                                  )
                                : "NA"}
                        </span>
                    </div>

                    <div className="border">
                        <b>Border Countries: </b>

                        <ul>
                            {countryInfo?.borders
                                ? countryInfo.borders.map((b, i) => (
                                      <li
                                          key={i}
                                          onClick={e =>
                                              navigate(
                                                  `/country/${getCountryName(
                                                      b
                                                  )}`
                                              )
                                          }
                                      >
                                          {getCountryName(b)}
                                      </li>
                                  ))
                                : "No Borders"}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;
