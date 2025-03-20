import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { motion, useScroll, useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Payments = () => {
    const line2Ref = useRef();
    const lineImageRef = useRef();
    const PamentMethodsRef = useRef();
    const paymentMainRef = useRef();
    // let paymentBigScreenTimeline;
    // let paymentSmallScreenTimeline;

    // useGSAP(() => {
    //     const PamentMethods =
    //         PamentMethodsRef.current.querySelectorAll(".payCard");
    //     ScrollTrigger.matchMedia({
    //         "(max-width:1024px)": () => {
    //             if (paymentBigScreenTimeline) paymentBigScreenTimeline.kill();
    //             paymentSmallScreenTimeline = gsap.timeline({
    //                 scrollTrigger: {
    //                     trigger: line2Ref.current,
    //                     start: "top bottom",
    //                     end: "bottom top",
    //                     scrub: true,
    //                     // markers: true,
    //                 },
    //             });
    //             paymentSmallScreenTimeline.to(
    //                 lineImageRef.current,
    //                 {
    //                     rotateX: "0deg",
    //                     ease: "none",
    //                 },
    //                 "b"
    //             );
    //         },
    //         "(min-width:1025px)": () => {
    //             if (paymentSmallScreenTimeline)
    //                 paymentSmallScreenTimeline.kill();
    //             paymentBigScreenTimeline = gsap.timeline({
    //                 scrollTrigger: {
    //                     trigger: line2Ref.current,
    //                     start: "top bottom",
    //                     end: "bottom top",
    //                     scrub: true,
    //                     // markers: true,
    //                 },
    //             });
    //             paymentBigScreenTimeline
    //                 .to(
    //                     lineImageRef.current,
    //                     {
    //                         rotateX: "0deg",
    //                         ease: "none",
    //                     },
    //                     "b"
    //                 )
    //                 .to(
    //                     PamentMethods[0],
    //                     {
    //                         y: "-28vw",
    //                         ease: "none",
    //                     },
    //                     "b"
    //                 )
    //                 .to(
    //                     PamentMethods[1],
    //                     {
    //                         y: "-25vw",
    //                         ease: "none",
    //                     },
    //                     "b"
    //                 )
    //                 .to(
    //                     PamentMethods[2],
    //                     {
    //                         y: "-20vw",
    //                         ease: "none",
    //                     },
    //                     "b"
    //                 );
    //         },
    //     });
    // }, []);
    const { scrollYProgress } = useScroll({
        target: paymentMainRef,
        offset: ["start end", "end start"],
    });
    const [paymentResponsive, setpaymentResponsive] = useState(window.innerWidth >= 1023);
    useEffect(() => {
        window.addEventListener("resize", () => {
            setpaymentResponsive(window.innerWidth >= 1023);
        });
        return () => {
            window.removeEventListener("resize", () => {});
        };
    }, []);
    const y = useTransform(scrollYProgress, [0, 1], ["0", "-20vw"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0", "-20vw"]);
    const y3 = useTransform(scrollYProgress, [0, 1], ["0", "-20vw"]);
    const rotateX = useTransform(scrollYProgress, [0, 1], [90, 0]);
    return (
        <div ref={paymentMainRef} className="w-full relative">
            <div
                // ref={line2Ref}
                className="w-full h-[70vw] absolute top-0 left-0"
            >
                <motion.img
                    ref={lineImageRef}
                    style={{ rotateX }}
                    className="w-full h-full object-cover rotate-x-90 origin-top"
                    src="/Images/line.svg"
                    alt=""
                />
            </div>
            <div className="w-[69.8vw] h-[69.8vw] rounded-full bg-[#D6DBE0] mx-auto relative z-30 px-[2vw] pb-[4vw] flex items-center justify-center font-font5 font-bold tracking-[-0.5vw]">
                <h2 className=" text-[8vw] leading-[9vw] sm:text-[9.5vw] sm:leading-[9.5vw] text-center">
                    we <br /> accept <br /> payments <br /> from all over <br />
                    the world
                </h2>
                <div
                    // ref={PamentMethodsRef}
                    className="absolute top-1/2 w-full -translate-x-1/2 left-1/2 -translate-y-1/2 lg:-translate-y-[40%] grid grid-cols-3 grid-rows-6 p-[15vw]"
                >
                    <motion.div
                        style={{ y: paymentResponsive ? y : 0 }}
                        className="payCard pointer-events-none lg:pointer-events-auto w-[10vw] sm:w-[7vw] col-span-3 row-span-1 justify-self-end"
                    >
                        <img className="w-full" src="/Images/VISA.svg" alt="" />
                    </motion.div>
                    <motion.div
                        style={{ y: paymentResponsive ? y3 : 0 }}
                        className="payCard pointer-events-none lg:pointer-events-auto w-[10vw] sm:w-[7vw] col-span-3 row-span-4 justify-self-start"
                    >
                        <img
                            className="w-full"
                            src="/Images/MASTER.svg"
                            alt=""
                        />
                    </motion.div>
                    <motion.div
                        style={{ y: paymentResponsive ? y2 : 0 }}
                        className="payCard pointer-events-none lg:pointer-events-auto w-[10vw] sm:w-[7vw] ml-[10vw] col-span-3 row-span-1 justify-self-center"
                    >
                        <img className="w-full" src="/Images/MIR.svg" alt="" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Payments;
