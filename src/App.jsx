import React, { useContext, useState } from "react";
import Home from "./Pages/Home";
import NavBar from "./Components/Common/NavBar";
import LenisSmoothScroll from "./Utils/LenisSmoothScroll";
import { productContext } from "./Utils/Context";
import { Route, Routes } from "react-router-dom";
// import Shop from "./Pages/Shop";
import Details from "./Pages/Details";
import Footer from "./Components/Common/Footer";
import ScrollToTop from "./Components/Common/ScrollToTop";
import CategoryPage from "./Pages/CategoryPage";
import Account from "./Pages/Account";
import Empty from "./Components/Empty";
import Information from "./Pages/Information";

const App = () => {

    return (
        <>
            <LenisSmoothScroll />
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/product-category/:param/"
                    element={<CategoryPage />}
                />
                <Route path="/account/" element={<Account />} />
                <Route path="/shop/:slug/:title/" element={<Details/>} />
                <Route path="/information/" element={<Information />} />
            </Routes>
            <ScrollToTop />
            <Footer />
            {/* <Empty /> */}
        </>
    );
};

export default App;
