import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useContext, useEffect, useRef } from "react";
import { productContext } from "../Utils/Context";

const Payments = () => {
    const [isLoaded] = useContext(productContext);
    const line2Ref = useRef();
    const lineImageRef = useRef();
    const PamentMethodsRef = useRef();
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const PamentMethods =
            PamentMethodsRef.current.querySelectorAll(".payCard");
        const mm = gsap.matchMedia();
        mm.add("(min-width:1024px)", () => {
            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: line2Ref.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    // markers: true,
                },
            });
            tl2.to(
                lineImageRef.current,
                {
                    rotateX: "0deg",
                    ease: "none",
                    // duration: 4,
                },
                "b"
            );
            tl2.to(
                PamentMethods[0],
                {
                    y: "-28vw",
                    ease: "none",
                    // duration: 3.5,
                },
                "b"
            );
            tl2.to(
                PamentMethods[1],
                {
                    y: "-25vw",
                    ease: "none",
                    // duration: 5,
                },
                "b"
            );
            tl2.to(
                PamentMethods[2],
                {
                    y: "-20vw",
                    ease: "none",
                    // duration: 4,
                },
                "b"
            );
        });
    }, []);

    //     if (isLoaded) {
    //         const PamentMethods =
    //             PamentMethodsRef.current.querySelectorAll(".payCard");
    //         const tl2 = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: line2Ref.current,
    //                 start: "top 95%",
    //                 end: "bottom -160%",
    //                 scrub: true,
    //                 markers: true,
    //             },
    //         });
    //         tl2.to(
    //             lineImageRef.current,
    //             {
    //                 rotateX: "0deg",
    //                 ease: "none",
    //                 duration: 4,
    //             },
    //             ">"
    //         );
    //         tl2.to(
    //             PamentMethods[0],
    //             {
    //                 y: "-28vw",
    //                 ease: "none",
    //                 duration: 3.5,
    //             },
    //             ">"
    //         );
    //         tl2.to(
    //             PamentMethods[1],
    //             {
    //                 y: "-25vw",
    //                 ease: "none",
    //                 duration: 5,
    //             },
    //             ">"
    //         );
    //         tl2.to(
    //             PamentMethods[2],
    //             {
    //                 y: "-20vw",
    //                 ease: "none",
    //                 duration: 4,
    //             },
    //             ">"
    //         );
    //     }
    // }, [isLoaded]);

    const animation = () => {
        // Refresh ScrollTrigger to ensure it picks up the new elements
        // ScrollTrigger.refresh();
    };
    // useEffect(() => {
    //     if (isLoaded) {
    //         animation();
    //     }
    // }, [isLoaded]);

    return (
        <div className="w-full relative">
            <div
                ref={line2Ref}
                className="w-full h-[70vw] absolute top-0 left-0"
            >
                <img
                    ref={lineImageRef}
                    className="w-full h-full object-cover lg:rotate-x-90 origin-top"
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
                    className="absolute top-1/2 w-full -translate-x-1/2 left-1/2 -translate-y-[40%] grid grid-cols-3 grid-rows-6 p-[15vw]"
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
