import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Country from "./Pages/Country";
import CountryNotFound from "./Pages/CountryNotFound";
import Navbar from "./Components/Navbar";
import { useContext } from "react";
import ThemeContext from "./Context/Theme/ThemeContext";

function App() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`App ${theme}`}>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/country/:name" element={<Country />} />
                    <Route path="/country" element={<CountryNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
