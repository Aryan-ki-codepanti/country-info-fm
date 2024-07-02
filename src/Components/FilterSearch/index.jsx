import React from "react";
import "./FilterSearch.css";

const FilterSearch = () => {
    return (
        <div className="FilterSearch">
            <div className="search-bar">
                <div className="glass-icon"></div>
                <input type="text" placeholder="Search for a country..." />
            </div>

            <div className="filter">
                <div>
                    <span>Filter by Region</span>
                    <div className="arrow-icon"></div>
                </div>

                <ul className="filters">
                    <li>Africa</li>
                    <li>Americas</li>
                    <li>Asia</li>
                    <li>Europe</li>
                    <li>Ocenia</li>
                </ul>
            </div>
        </div>
    );
};

export default FilterSearch;
