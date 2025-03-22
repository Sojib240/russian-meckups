import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ScrollToTop from "./Components/Common/ScrollToTop";

const Inner = ({ children }) => {
    // Slide animation for the red overlay
    const slide = {
        initial: {
            top: 0,
            transition: {
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
                // delay: 0.5,
            },
        },
        enter: {
            top: "100vh",
            transition: {
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.5,
            },
        },
        exit: {
            top: 0,
            transition: {
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
            },
        },
    };

    // Perspective animation for scaling and translation
    const perspective = {
        initial: {
            y: -100,
            scale: 0.9,
            opacity: 0.6,
            transition: {
                duration: 1.1,
                ease: [0.76, 0, 0.24, 1],
            },
        },
        enter: {
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1.1,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.5,
            },
        },
        exit: {
            y: -100,
            scale: 0.9,
            opacity: 0.6,
            transition: {
                duration: 1.1,
                ease: [0.76, 0, 0.24, 1],
            },
        },
    };

    return (
        <div className="relative overflow-hidden">
            {/* Slide Animation */}
            <ScrollToTop />
            <motion.div
                className="fixed top-0 left-0 w-full h-[100vh] bg-[#D6DBE0] text-black flex items-center justify-center z-[9999] text-[5vw] lg:text-[4vw] uppercase font-font5 select-none"
                variants={slide}
                initial="initial"
                animate="enter"
                exit="exit"
            >
                <div className="w-1/2 ">
                    <img src="/Images/Icons/rm.svg" alt="" className="w-full" />
                </div>
            </motion.div>

            {/* Perspective + Content Animation */}
            <motion.div
                className="relative z-10 origin-top"
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Inner;
