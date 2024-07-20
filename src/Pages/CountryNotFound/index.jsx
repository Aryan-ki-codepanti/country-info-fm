import React from "react";
import "./CountryNotFound.css";
import errorImg from "../../Images/location-error.jpeg";

const CountryNotFound = () => {
    return (
        <div className="container CountryNotFound">
            <h1>404</h1>
            <p>Sorry Page not found</p>

            <img src={errorImg} alt="not-found-image" />
        </div>
    );
};

export default CountryNotFound;
