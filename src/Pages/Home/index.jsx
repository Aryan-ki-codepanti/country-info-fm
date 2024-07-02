import React, { useContext } from "react";
import "./Home.css";
import FilterSearch from "../../Components/FilterSearch";
import CountryCard from "../../Components/CountryCard";
import CountryContext from "../../Context/Country/CountryContext";

const Home = () => {
    const { countries } = useContext(CountryContext);
    const temp_count = countries.slice(0, 9);
    return (
        <div className="container">
            <FilterSearch />

            <div className="cards-grid">
                {countries.length > 0 &&
                    temp_count.map(country => (
                        <CountryCard
                            key={country?.name?.common}
                            country={country}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Home;
