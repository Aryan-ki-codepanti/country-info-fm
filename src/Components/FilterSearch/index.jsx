import React, { useContext, useState } from "react";
import "./FilterSearch.css";
import CountryContext from "../../Context/Country/CountryContext";

const FilterSearch = () => {
    const { countrySearch, setCountrySearch, region, setRegion } =
        useContext(CountryContext);
    const [showRegion, setShowRegion] = useState(false);

    const filters = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
    const handleFilterSet = (e, f) => {
        setRegion(prev => f);
        setShowRegion(prev => false);
    };

    return (
        <div className="FilterSearch">
            <div className="search-bar">
                <div className="glass-icon"></div>
                <input
                    type="text"
                    placeholder="Search for a country..."
                    value={countrySearch}
                    onChange={e => setCountrySearch(prev => e.target.value)}
                />
            </div>

            <div className="filter">
                <div>
                    <span>{region ? region : "Filter by Region"}</span>
                    {!region && (
                        <div
                            className="arrow-icon"
                            onClick={e => setShowRegion(prev => !prev)}
                        ></div>
                    )}
                    {region && (
                        <div
                            className="cross-icon"
                            onClick={e => setRegion(prev => "")}
                        ></div>
                    )}
                </div>

                {showRegion && (
                    <ul className="filters">
                        {filters.map((f, i) => (
                            <li onClick={e => handleFilterSet(e, f)} key={i}>
                                {f}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default FilterSearch;
