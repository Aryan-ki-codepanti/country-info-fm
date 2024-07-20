import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeState from "./Context/Theme/ThemeState";
import CountryState from "./Context/Country/CountryState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ThemeState>
            <CountryState>
                <App />
            </CountryState>
        </ThemeState>
    </React.StrictMode>
);
