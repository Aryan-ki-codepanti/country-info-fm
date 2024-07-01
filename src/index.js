import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeState from "./Context/Theme/ThemeState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ThemeState>
            <App />
        </ThemeState>
    </React.StrictMode>
);
