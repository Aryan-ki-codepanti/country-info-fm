import React, { useState } from "react";
import "./FilterSearch.css";

const FilterSearch = () => {
    const [showRegion, setShowRegion] = useState(false);

    return (
        <div className="FilterSearch">
            <div className="search-bar">
                <div className="glass-icon"></div>
                <input type="text" placeholder="Search for a country..." />
            </div>

            <div className="filter">
                <div onClick={e => setShowRegion(prev => !prev)}>
                    <span>Filter by Region</span>
                    <div className="arrow-icon"></div>
                </div>

                {showRegion && (
                    <ul className="filters">
                        <li>Africa</li>
                        <li>Americas</li>
                        <li>Asia</li>
                        <li>Europe</li>
                        <li>Ocenia</li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default FilterSearch;
