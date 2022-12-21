import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesApp;