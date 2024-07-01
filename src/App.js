import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Country from "./Pages/Country";
import CountryNotFound from "./Pages/CountryNotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/country/:name" element={<Country />} />
                <Route path="/country" element={<CountryNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
