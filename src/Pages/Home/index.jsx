import React, { useContext } from "react";
import "./Home.css";
import FilterSearch from "../../Components/FilterSearch";
import CountryCard from "../../Components/CountryCard";
import CountryContext from "../../Context/Country/CountryContext";

const Home = () => {
    const { countries, countrySearch, region } = useContext(CountryContext);

    const isGoodCountry = country => {
        if (
            country?.name?.common
                ?.toLowerCase()
                .includes(countrySearch.toLowerCase()) &&
            country?.region?.toLowerCase().includes(region.toLowerCase())
        )
            return true;

        return false;
    };

    return (
        <div className="container">
            <FilterSearch />

            <div className="cards-grid">
                {countries.length > 0 &&
                    countries.map(
                        country =>
                            isGoodCountry(country) && (
                                <CountryCard
                                    key={country?.name?.common}
                                    country={country}
                                />
                            )
                    )}
            </div>
        </div>
    );
};

export default Home;
