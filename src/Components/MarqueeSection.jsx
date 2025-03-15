import React, { useRef } from "react";
import MarqueeText from "./MarqueeText";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const MarqueeSection = () => {
    gsap.registerPlugin(ScrollTrigger);
    const floatingCard1 = useRef();
    const floatingCard2 = useRef();

    useGSAP(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.matchMedia({
                "(min-width:1025px)": () => {
                    let marqueeBigScreenTimeline = gsap.timeline({
                        scrollTrigger: {
                            trigger: floatingCard1.current,
                            start: "top 40%",
                            end: "bottom top",
                            scrub: true,
                            // markers: true,
                        },
                    });
                    marqueeBigScreenTimeline
                        .to(
                            floatingCard1.current,
                            {
                                marginBottom: "-20vw",
                                ease: "none",
                            },
                            "c"
                        )
                        .to(
                            floatingCard2.current,
                            {
                                marginTop: "-22vw",
                                ease: "none",
                            },
                            "c"
                        );
                },
            });
        });
        return () => {
            ctx.revert();
            ScrollTrigger.clearMatchMedia();
        };
    }, []);
    return (
        <div className="w-full relative pt-[20vw] sm:pt-[10vw]">
            <div
                ref={floatingCard1}
                className="flex flex-col-reverse items-start lg:flex-row lg:items-start gap-[5vw] sm:gap-[3vw] lg:gap-[5vw] pl-[4vw] pr-[10vw] mb-[-10vw] relative z-40"
            >
                <Link to={`/product-category/all-mockups/`} className="p-[6px] sm:p-[1vw] bg-[#D6DBE0] inline-block border w-[46%] lg:w-[33%] transition-all duration-200 hover:bg-[#FEE69D]">
                    <div className="">
                        <img src="/Images/shop-1.jpg" alt="" />
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
            </div>
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
            <div
                ref={floatingCard2}
                className="pr-[4vw] w-[46%] lg:w-[33%] ml-auto mt-[-12vw] z-40 relative"
            >
                <Link to={`/product-category/all-mockups/`} className="p-[6px] sm:p-[1vw] bg-[#D6DBE0] inline-block border w-full transition-all duration-200 hover:bg-[#FEE69D]">
                    <div className="">
                        <img src="/Images/shop-2.jpg" alt="" />
                    </div>
                    <p className="pt-2 sm:pt-[1.2vw] text-[11px] sm:text-sm md:text-base font-font5 uppercase text-center">
                        shop all
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default MarqueeSection;
