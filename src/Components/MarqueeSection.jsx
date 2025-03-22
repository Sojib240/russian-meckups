import React, { useEffect, useRef, useState } from "react";
import MarqueeText from "./MarqueeText";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { motion, useScroll, useTransform } from "framer-motion";

const MarqueeSection = () => {
    // gsap.registerPlugin(ScrollTrigger);
    // const floatingCard1 = useRef();
    // const floatingCard2 = useRef();
    // let marqueeBigScreenTimeline;
    const marqueeMainRef = useRef();
    //
    const { scrollYProgress } = useScroll({
        target: marqueeMainRef,
        offset: ["start end", "end start"],
    });
    const [marqueeResponsive, setmarqueeResponsive] = useState(
        window.innerWidth >= 1023
    );
    useEffect(() => {
        window.addEventListener("resize", () => {
            setmarqueeResponsive(window.innerWidth >= 1023);
        });
        return () => {
            window.removeEventListener("resize", () => {});
        };
    }, []);
    const y = useTransform(scrollYProgress, [0, 1], ["0", "12vw"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0", "-10vw"]);

    // useGSAP(() => {
    //     ScrollTrigger.matchMedia({
    //         "(min-width:1025px)": () => {
    //             marqueeBigScreenTimeline = gsap.timeline({
    //                 scrollTrigger: {
    //                     trigger: floatingCard1.current,
    //                     start: "top 40%",
    //                     end: "bottom -20%",
    //                     scrub: true,
    //                     // markers:true
    //                 },
    //             });
    //             marqueeBigScreenTimeline
    //                 .to(
    //                     floatingCard1.current,
    //                     {
    //                         y: "10vw",
    //                         ease: "none",
    //                     },
    //                     "c"
    //                 )
    //                 .to(
    //                     floatingCard2.current,
    //                     {
    //                         y: "-10vw",
    //                         ease: "none",
    //                     },
    //                     "c"
    //                 );
    //         },
    //     });
    // }, []);
    return (
        <div
            ref={marqueeMainRef}
            className="w-full relative pt-[20vw] lg:pt-[10vw] pb-[18vw] sm:pb-28 md:pb-[14vw] lg:pb-[5vw]"
        >
            <motion.div
                style={{ y: marqueeResponsive ? y : 0 }}
                // ref={floatingCard1}
                className="flex flex-col-reverse items-start lg:flex-row lg:items-start gap-[5vw] sm:gap-[3vw] lg:gap-[5vw] pl-[4vw] pr-[10vw] mb-[-8vw] relative z-40"
            >
                <Link
                    to={`/product-category/all-mockups/`}
                    className="p-[6px] sm:p-[1vw] bg-[#D6DBE0] inline-block border w-[46%] lg:w-[33%] transition-all duration-200 hover:bg-[#FEE69D]"
                >
                    <div className="w-full">
                        <img
                            className="w-full"
                            src="/Images/shop-1.jpg"
                            alt=""
                        />
                    </div>
                    <p className="pt-2 sm:pt-[1.2vw] text-[11px] sm:text-sm md:text-base font-font5 uppercase text-center">
                        shop all
                    </p>
                </Link>
                <h4 className="font-font5 text-base leading-6 sm:text-[3vw] sm:leading-[3.5vw] lg:text-[2vw] lg:leading-[2.4vw] md:leading-auto md:text-[3vw] w-full lg:w-[67%] pr-[1vw] lg:pt-[5vw]">
                    We have spent a huge amount of hours on creating
                    high-quality mockups so that designers can show their unique
                    and stunning designs for Russian brands in a more authentic
                    and truthful environment.
                </h4>
            </motion.div>
            <div className="w-full relative overflow-hidden">
                <img
                    className="w-full"
                    src="/Images/Lines-for-designers.svg"
                    alt=""
                />
                <div className=" absolute top-1/2 left-0 -translate-y-1/2 overflow-hidden">
                    <Marquee direction="left" speed={60}>
                        <MarqueeText />
                    </Marquee>
                </div>
            </div>
            <motion.div
                style={{ y: marqueeResponsive ? y2 : 0 }}
                // ref={floatingCard2}
                className="pr-[4vw] w-[46%] lg:w-[33%] ml-auto mt-[-8vw] z-40 relative"
            >
                <Link
                    to={`/product-category/all-mockups/`}
                    className="p-[6px] sm:p-[1vw] bg-[#D6DBE0] inline-block border w-full transition-all duration-200 hover:bg-[#FEE69D]"
                >
                    <div className="w-full">
                        <img
                            className="w-full"
                            src="/Images/shop-2.jpg"
                            alt=""
                        />
                    </div>
                    <p className="pt-2 sm:pt-[1.2vw] text-[11px] sm:text-sm md:text-base font-font5 uppercase text-center">
                        shop all
                    </p>
                </Link>
            </motion.div>
        </div>
    );
};

export default MarqueeSection;
