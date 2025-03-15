import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";

const Payments = () => {
    const line2Ref = useRef();
    const lineImageRef = useRef();
    const PamentMethodsRef = useRef();
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        let ctx = gsap.context(() => {
            const PamentMethods =
                PamentMethodsRef.current.querySelectorAll(".payCard");
            ScrollTrigger.matchMedia({
                "(max-width:1024px)": () => {
                    let paymentSmallScreenTimeline = gsap.timeline({
                        scrollTrigger: {
                            trigger: line2Ref.current,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                            // markers: true,
                        },
                    });
                    paymentSmallScreenTimeline
                    .to(
                        lineImageRef.current,
                        {
                            rotateX: "0deg",
                            ease: "none",
                        },
                        "b"
                    )
                },
                "(min-width:1025px)": () => {
                    let paymentBigScreenTimeline = gsap.timeline({
                        scrollTrigger: {
                            trigger: line2Ref.current,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                            // markers: true,
                        },
                    });
                    paymentBigScreenTimeline
                        .to(
                            lineImageRef.current,
                            {
                                rotateX: "0deg",
                                ease: "none",
                            },
                            "b"
                        )
                        .to(
                            PamentMethods[0],
                            {
                                y: "-28vw",
                                ease: "none",
                            },
                            "b"
                        )
                        .to(
                            PamentMethods[1],
                            {
                                y: "-25vw",
                                ease: "none",
                            },
                            "b"
                        )
                        .to(
                            PamentMethods[2],
                            {
                                y: "-20vw",
                                ease: "none",
                            },
                            "b"
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
        <div className="w-full relative">
            <div
                ref={line2Ref}
                className="w-full h-[70vw] absolute top-0 left-0"
            >
                <img
                    ref={lineImageRef}
                    className="w-full h-full object-cover rotate-x-90 origin-top"
                    src="/Images/line.svg"
                    alt=""
                />
            </div>
            <div className="w-[69.8vw] h-[69.8vw] rounded-full bg-[#D6DBE0] mx-auto relative z-30 px-[2vw] pb-[4vw] flex items-center justify-center font-font5 font-bold tracking-[-0.5vw]">
                <h2 className="text-2xl leading-8 sm:text-[9.5vw] sm:leading-[9.5vw] text-center">
                    we <br /> accept <br /> payments <br /> from all over <br />
                    the world
                </h2>
                <div
                    ref={PamentMethodsRef}
                    className="absolute top-1/2 w-full -translate-x-1/2 left-1/2 -translate-y-1/2 lg:-translate-y-[40%] grid grid-cols-3 grid-rows-6 p-[15vw]"
                >
                    <div className="payCard pointer-events-none lg:pointer-events-auto w-[7vw] col-span-3 row-span-1 justify-self-end">
                        <img className="w-full" src="/Images/VISA.svg" alt="" />
                    </div>
                    <div className="payCard pointer-events-none lg:pointer-events-auto w-[7vw] col-span-3 row-span-4 justify-self-start">
                        <img
                            className="w-full"
                            src="/Images/MASTER.svg"
                            alt=""
                        />
                    </div>
                    <div className="payCard pointer-events-none lg:pointer-events-auto w-[7vw] ml-[10vw] col-span-3 row-span-1 justify-self-center">
                        <img className="w-full" src="/Images/MIR.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payments;
