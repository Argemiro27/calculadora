import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../Home";

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home  />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesApp;