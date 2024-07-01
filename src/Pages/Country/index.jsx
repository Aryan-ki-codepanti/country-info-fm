import React from "react";
import "./Country.css";
import { useParams } from "react-router-dom";

const Country = () => {
    const { name } = useParams();

    console.log(name);
    return <div>Country {name}</div>;
};

export default Country;
