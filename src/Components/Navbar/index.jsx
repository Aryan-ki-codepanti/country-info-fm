import React, { useContext } from "react";
import "./Navbar.css";
import ThemeContext from "../../Context/Theme/ThemeContext";

const Navbar = () => {
    const { setTheme } = useContext(ThemeContext);

    return (
        <div className="nav-contain">
            <div className="navbox container">
                <h1>Where in the world?</h1>

                <div
                    className="theme-switch"
                    onClick={e => {
                        setTheme(prev => (prev === "light" ? "dark" : "light"));
                    }}
                >
                    <div className="icon"></div>
                    <span>Dark Mode</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
