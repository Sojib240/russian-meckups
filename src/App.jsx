import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./Pages/Home";
import NavBar from "./Components/Common/NavBar";
import LenisSmoothScroll from "./Utils/LenisSmoothScroll";
import Details from "./Pages/Details";
import Footer from "./Components/Common/Footer";
import ScrollToTop from "./Components/Common/ScrollToTop";
import CategoryPage from "./Pages/CategoryPage";
import Account from "./Pages/Account";
import Information from "./Pages/Information";
import CartPage from "./Pages/CartPage";
import CheckOut from "./Pages/CheckOut";

const App = () => {
    const [openCart, setopenCart] = useState(false);
    const location = useLocation();

    return (
        <>
            {/* Static components outside AnimatePresence */}
            {/* <ScrollToTop /> */}
            <LenisSmoothScroll />

            {/* AnimatePresence for page transitions */}
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route
                        path="/"
                        element={
                            <Home
                                openCart={openCart}
                                setopenCart={setopenCart}
                            />
                        }
                    />
                    <Route
                        path="/product-category/:param/"
                        element={
                            <CategoryPage
                                openCart={openCart}
                                setopenCart={setopenCart}
                            />
                        }
                    />
                    <Route
                        path="/account/"
                        element={
                            <Account
                                openCart={openCart}
                                setopenCart={setopenCart}
                            />
                        }
                    />
                    <Route
                        path="/shop/:slug/:title/"
                        element={
                            <Details
                                openCart={openCart}
                                setopenCart={setopenCart}
                            />
                        }
                    />
                    <Route
                        path="/information/"
                        element={
                            <Information
                                openCart={openCart}
                                setopenCart={setopenCart}
                            />
                        }
                    />
                        <Route
                            path="/cart/"
                            element={
                                <CartPage
                                    openCart={openCart}
                                    setopenCart={setopenCart}
                                />
                            }
                        />
                        <Route
                            path="/checkout/"
                            element={
                                <CheckOut openCart={openCart} setopenCart={setopenCart} />
                            }
                        />
                </Routes>
            </AnimatePresence>
        </>
    );
};

export default App;
