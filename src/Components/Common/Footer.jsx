import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerBottomRef = useRef();
    const footerTopSectionRef = useRef();
    const [height, setheight] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
        if (imageLoaded && footerBottomRef.current) {
            const footerHeight = Math.floor(
                footerBottomRef.current.getBoundingClientRect().height
            );
            setheight(footerHeight);
            let footerTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: footerTopSectionRef.current,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: true,
                    // markers: true,
                },
            });
            footerTimeline.from(footerBottomRef.current, {
                y: '45%',
                duration: 5,
                ease: 'none',
            });
        }
    }, [imageLoaded]);

    // useEffect(() => {
    //     let footerTimeline = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: footerTopSectionRef.current,
    //             start: "top bottom",
    //             end: "bottom bottom",
    //             scrub: true,
    //             markers: true,
    //         },
    //     });
    //     footerTimeline.from(footerBottomRef.current, {
    //         y: '45%',
    //         duration: 5,
    //         ease: 'none',
    //     });
    // }, []);

    return (
        <div className="overflow-hidden">
            <div className="pt-26 sm:pt-[22vw] md:pt-[20vw] lg:pt-[18vw] xl:pt-[13vw] bg-[#D6DBE0] z-50 relative"></div>
            <div className="w-full footer-top pt-8 xl:pt-0 z-50 overflow-hidden relative">
                <div className="px-4 sm:px-[3vw] md:px-[2vw] lg:px-[1.5vw] flex flex-col-reverse md:flex-row items-start justify-between leading-[9vw] pb-8 sm:pb-[7vw] md:pb-0">
                    <h4 className="text-base leading-6 sm:text-[4vw] sm:leading-[4.3vw] md:text-[2vw] font-font5 w-full sm:w-[90%] md:w-[33%] md:leading-[2.4vw] pt-[2vw]">
                        For designers and agencies who want to achieve a
                        realistic context for the created brand identity
                    </h4>
                    <h3 className="font-font5 text-4xl leading-9 sm:leading-[8.5vw] sm:text-[10vw] pb-3 sm:pb-0 text-left md:text-right w-full sm:w-[50%]">
                        present authentic
                    </h3>
                </div>
                <div className="pb-[12vw] pt-5 sm:pt-[6vw]">
                    <div className="w-[60%] sm:w-[46%] lg:w-[30%] mx-auto z-40 relative">
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
                    </div>
                </div>
            </div>
            <div
                ref={footerTopSectionRef}
                style={{ height: `${height}px` }}
                className="bg-transparent lg:block hidden"
            ></div>
            <div
                ref={footerBottomRef}
                className="w-full  lg:fixed lg:bottom-0 footer-bottom py-5 xl:pb-[1vw] px-4 sm:px-[3vw] md:px-[2vw] lg:px-[1.5vw] z-30"
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
                                <button className="uppercase px-4 text-sm border-[2px] py-1">
                                    subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[60%] leading-none my-5 sm:my-8 md:my-10 lg:mt-0">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 md:gap-[2vw] w-full">
                            <div className="col-span-1 flex flex-col gap-3 md:gap-6">
                                <div>
                                    <Link className="inline-block">
                                        <AnimatedTitle text={"shop all"} />
                                    </Link>
                                </div>
                                <div>
                                    <Link className="inline-block">
                                        <AnimatedTitle text={"billboards"} />
                                    </Link>
                                </div>
                                <div>
                                    <Link className="inline-block">
                                        <AnimatedTitle text={"posters"} />
                                    </Link>
                                </div>
                                <div>
                                    <Link className="inline-block">
                                        <AnimatedTitle text={"signs"} />
                                    </Link>
                                </div>
                                <div className="">
                                    <Link className="inline-block">
                                        <AnimatedTitle text={"pylons"} />
                                    </Link>
                                </div>
                                <div className="">
                                    <Link className="inline-block">
                                        <AnimatedTitle text={"bus stops"} />
                                    </Link>
                                </div>
                                <div className="">
                                    <Link className="inline-block">
                                        <AnimatedTitle text={"facades"} />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-span-1 flex flex-col gap-3 md:gap-6">
                                <div className="">
                                    <Link className="inline-block">
                                        <AnimatedTitle text={"FAQ"} />
                                    </Link>
                                </div>
                                <div className="">
                                    <Link className="inline-block">
                                        <AnimatedTitle text={"Refund Policy"} />
                                    </Link>
                                </div>
                                <div className="">
                                    <Link className="inline-block">
                                        <AnimatedTitle text={"License terms"} />
                                    </Link>
                                </div>
                                <div className="">
                                    <Link className="inline-block">
                                        <AnimatedTitle
                                            text={"Privacy policy"}
                                        />
                                    </Link>
                                </div>
                                <div className="">
                                    <Link className="inline-block">
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
                                        <Link className="inline-block">
                                            <AnimatedTitle
                                                text={"#russianmockups"}
                                            />
                                        </Link>
                                    </div>
                                    <div className="">
                                        <Link className="inline-block">
                                            <AnimatedTitle
                                                text={"hey@russianmockups.shop"}
                                            />
                                        </Link>
                                    </div>
                                    <div className="">
                                        <Link className="inline-block">
                                            <AnimatedTitle
                                                text={"made in ARCR"}
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <img src="/Images/Payment.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full">
                    <img
                        onLoad={() => setImageLoaded(true)}
                        className="w-full h-full"
                        src="/Images/Footer-mockup.svg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
