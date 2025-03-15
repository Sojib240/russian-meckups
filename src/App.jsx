import React, { useContext } from "react";
import Home from "./Pages/Home";
import NavBar from "./Components/Common/NavBar";
import LenisSmoothScroll from "./Utils/LenisSmoothScroll";
import { productContext } from "./Utils/Context";
import { Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import Details from "./Pages/Details";
import Footer from "./Components/Common/Footer";
import ScrollToTop from "./Components/Common/ScrollToTop";
import CategoryPage from "./Pages/CategoryPage";

const App = () => {
    return (
        <>
            <LenisSmoothScroll />
            <ScrollToTop />
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/product-category/:param"
                    element={<CategoryPage />}
                />
                {/* <Route path="/shop/:param" element={<Shop />} /> */}
                <Route
                    path="/shop/:title"
                    element={<Details />}
                />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
