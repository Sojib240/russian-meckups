import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AnimatedTitle from "./AnimatedTitle";
import { motion, useScroll, useTransform } from "framer-motion";


const Footer = () => {
    const location = useLocation();
    const footerBottomRef = useRef();
    const emptyDivRef = useRef();
    const footerImageRef = useRef();
    const [height, setheight] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [scrollEnd, setscrollEnd] = useState(0);

    useEffect(() => {
        if ((imageLoaded && footerBottomRef.current) || location) {
            const footerHeight = footerBottomRef.current.offsetHeight;
            setheight(footerHeight);
            setscrollEnd(window.innerHeight - footerHeight);
        }
        window.addEventListener("resize", () => {
            if ((imageLoaded && footerBottomRef.current) || location) {
                const footerHeight = footerBottomRef.current.offsetHeight;
                setheight(footerHeight);
                setscrollEnd(window.innerHeight - footerHeight);
            }
        });
    }, [imageLoaded, location]);

    const [footerResponsive, setfooterResponsive] = useState(
        window.innerWidth >= 1023
    );
    useEffect(() => {
        window.addEventListener("resize", () => {
            setfooterResponsive(window.innerWidth >= 1023);
        });
        return () => {
            window.removeEventListener("resize", () => {});
        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: footerImageRef,
        offset: [`start end`, `end ${scrollEnd}px`],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const y2 = useTransform(scrollYProgress, [0.5, 1], ["60%", "0%"]);
    // const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);



    
    return (
        <>
            {/* footer top */}
            <div
                ref={footerImageRef}
                className="w-full footer-top pt-8 xl:pt-0 relative z-40"
            >
                <div className="px-4 sm:px-[3vw] md:px-[2vw] lg:px-[1.5vw] flex flex-col-reverse md:flex-row items-start justify-between leading-[9vw] pb-8 sm:pb-[7vw] md:pb-0">
                    <h4 className="text-base leading-6 sm:text-[4vw] sm:leading-[4.3vw] md:text-[2vw] font-font5 w-full sm:w-[90%] md:w-[33%] md:leading-[2.4vw] pt-[2vw]">
                        For designers and agencies who want to achieve a
                        realistic context for the created brand identity
                    </h4>
                    <h3 className="font-font5 text-4xl leading-9 sm:leading-[8.5vw] sm:text-[10vw] pb-3 sm:pb-0 text-left md:text-right w-full sm:w-[50%]">
                        present authentic
                    </h3>
                </div>
                <div className="mt-5 sm:mt-[6vw] z-20">
                    <motion.div
                        style={{
                            y: footerResponsive ? y : 0,
                        }}
                        className="w-[50%] sm:w-[46%] lg:w-[30%] mx-auto z-20 mb-16 sm:mb-20 lg:mb-0"
                    >
                        <Link
                            to={`/product-category/all-mockups/`}
                            className="p-[6px] sm:p-[1vw] bg-[#D6DBE0] inline-block border w-full transition-all duration-200 hover:bg-[#FEE69D]"
                        >
                            <div className="w-full">
                                <img
                                    className="w-full"
                                    src="/Images/shop-3.jpg"
                                    alt=""
                                />
                            </div>
                            <p className="pt-2 sm:pt-[1.2vw] text-[11px] sm:text-sm md:text-base font-font5 uppercase text-center">
                                shop all
                            </p>
                        </Link>
                    </motion.div>
                </div>
            </div>
            {/* empty div */}
            <div
                ref={emptyDivRef}
                style={{ height: `${height}px` }}
                className="bg-transparent lg:block hidden relative z-40 pointer-events-none"
            ></div>
            {/* footer bottom */}
            <motion.div
                style={{ y: footerResponsive ? y2 : 0, 
                    // opacity: footerResponsive ? opacity : 1 
                }}
                ref={footerBottomRef}
                className="w-full lg:fixed lg:bottom-0 py-5 xl:pb-[1vw] px-4 sm:px-[3vw] md:px-[2vw] lg:px-[1.5vw] z-0 bg-[#D6DBE0]"
            >
                <div className="flex justify-between flex-col lg:flex-row gap-[2vw] py-[2vw] border-b mb-[1vw]">
                    <div className="w-full lg:w-[40%] lg:pr-8">
                        <div className="uppercase flex flex-col justify-between gap-1 lg:gap-5 font-font5 text-sm max-w-full w-full lg:max-w-[400px]">
                            <div>
                                <p>
                                    Russian Mockups is a pet project by Artem
                                    Markovsky from ARCR, which was made with
                                    love and passion for the culture, design and
                                    architecture of Russia.
                                </p>
                                <p className="my-5">© 2025 Russian Mockups</p>
                            </div>
                            <div className="flex flex-col items-end sm:flex-row sm:items-center gap-3 w-full sm:w-[80%] md:w-[60%] lg:w-full">
                                <input
                                    className="w-full outline-none text-black text-base font-font5 border-b-[2px] pb-1"
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Email for updates"
                                />
                                <Link
                                    to={""}
                                    className="uppercase px-4 text-sm border-[2px] py-1"
                                >
                                    subscribe
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[60%] leading-none my-5 sm:my-8 md:my-10 lg:mt-0">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 md:gap-[2vw] w-full">
                            <div className="col-span-1 flex flex-col gap-3 md:gap-6">
                                <div>
                                    <Link
                                        to={"/product-category/all-mockups/"}
                                        className="inline-block"
                                    >
                                        <AnimatedTitle text={"shop all"} />
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        to={"/product-category/billboards/"}
                                        className="inline-block"
                                    >
                                        <AnimatedTitle text={"billboards"} />
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        to={"/product-category/posters/"}
                                        className="inline-block"
                                    >
                                        <AnimatedTitle text={"posters"} />
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        to={"/product-category/signs/"}
                                        className="inline-block"
                                    >
                                        <AnimatedTitle text={"signs"} />
                                    </Link>
                                </div>
                                <div className="">
                                    <Link
                                        to={"/product-category/pylons/"}
                                        className="inline-block"
                                    >
                                        <AnimatedTitle text={"pylons"} />
                                    </Link>
                                </div>
                                <div className="">
                                    <Link
                                        to={"/product-category/bus-stops/"}
                                        className="inline-block"
                                    >
                                        <AnimatedTitle text={"bus stops"} />
                                    </Link>
                                </div>
                                <div className="">
                                    <Link
                                        to={"/product-category/facades/"}
                                        className="inline-block"
                                    >
                                        <AnimatedTitle text={"facades"} />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-span-1 flex flex-col gap-3 md:gap-6">
                                <div className="">
                                    <Link
                                        to={"/information/"}
                                        className="inline-block"
                                    >
                                        <AnimatedTitle text={"FAQ"} />
                                    </Link>
                                </div>
                                <div className="">
                                    <Link
                                        to={"/information/"}
                                        className="inline-block"
                                    >
                                        <AnimatedTitle text={"Refund Policy"} />
                                    </Link>
                                </div>
                                <div className="">
                                    <Link
                                        to={"/information/"}
                                        className="inline-block"
                                    >
                                        <AnimatedTitle text={"License terms"} />
                                    </Link>
                                </div>
                                <div className="">
                                    <Link
                                        to={"/information/"}
                                        className="inline-block"
                                    >
                                        <AnimatedTitle
                                            text={"Privacy policy"}
                                        />
                                    </Link>
                                </div>
                                <div className="">
                                    <Link
                                        to={"/information/"}
                                        className="inline-block"
                                    >
                                        <AnimatedTitle text={"info"} />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-span-1 flex justify-between flex-col gap-5">
                                <div className="flex flex-col gap-3 md:gap-6">
                                    <div className="">
                                        <Link className="inline-block">
                                            <AnimatedTitle text={"instagram"} />
                                        </Link>
                                    </div>
                                    <div className="">
                                        <a
                                            href="https://www.instagram.com/accounts/login/?next=%2Frussianmockups%2F&source=omni_redirect"
                                            target="_blank"
                                            className="inline-block"
                                        >
                                            <AnimatedTitle
                                                text={"#russianmockups"}
                                            />
                                        </a>
                                    </div>
                                    <div className="">
                                        <a
                                            href="https://www.instagram.com/#russianmockups"
                                            target="_blank"
                                            className="inline-block"
                                        >
                                            <AnimatedTitle
                                                text={"hey@russianmockups.shop"}
                                            />
                                        </a>
                                    </div>
                                    <div className="">
                                        <a
                                            href="https://arcr.ru/"
                                            target="_blank"
                                            className="inline-block"
                                        >
                                            <AnimatedTitle
                                                text={"made in ARCR"}
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <img src="/Images/Payment.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <img
                        onLoad={() => setImageLoaded(true)}
                        className="w-full"
                        src="/Images/Footer-mockup.svg"
                        alt=""
                    />
                </div>
            </motion.div>
        </>
    );
};

export default Footer;
