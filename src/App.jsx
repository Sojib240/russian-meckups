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

const App = () => {
    const [openCart, setopenCart] = useState(false);
    const location = useLocation();

    // Variants for page transitions
    const pageVariants = {
        initial: {
            opacity: 0,
            x: -100,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
        exit: {
            opacity: 0,
            x: 100,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
    };

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
                </Routes>
            <Footer />
            </AnimatePresence>
        </>
    );
};

export default App;
