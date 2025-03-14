import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Hero = () => {
    const cardRef = useRef();
    const lineRef = useRef();
    gsap.registerPlugin(ScrollTrigger);

    // useGSAP(() => {
    //     const cards = cardRef.current.querySelectorAll(".card");
    //     // console.log(window.innerWidth);
    //     const mm = gsap.matchMedia();
    //     window.addEventListener("resize", () => {
    //         const windowWidth = window.innerWidth;
    //         if (windowWidth < 1460) {
    //             mm.add("(min-width:1024px)", () => {
    //                 let tl = gsap.timeline({
    //                     ease: "none",
    //                     scrollTrigger: {
    //                         trigger: cardRef.current,
    //                         start: "top 40%",
    //                         end: "bottom 20%",
    //                         scrub: true,
    //                         markers: true,
    //                     },
    //                 });
    //                 tl.to(
    //                     [cards[0], cards[2]],
    //                     {
    //                         scale: 0.9,
    //                     },
    //                     "<"
    //                 );
    //                 tl.to(
    //                     cards[1],
    //                     {
    //                         scale: 1.15,
    //                     },
    //                     "<"
    //                 );
    //                 tl.to(
    //                     lineRef.current,
    //                     {
    //                         transform: "translateY(0)",
    //                     },
    //                     "<"
    //                 );
    //                 firstmedia.revart();
    //             });
    //         } else {
    //             const firstmedia = mm.add("(min-width:1460px)", () => {
    //                 let tl = gsap.timeline({
    //                     ease: "none",
    //                     scrollTrigger: {
    //                         trigger: cardRef.current,
    //                         start: "top center",
    //                         end: "bottom 20%",
    //                         scrub: true,
    //                         markers: true,
    //                     },
    //                 });
    //                 tl.to(
    //                     [cards[0], cards[2]],
    //                     {
    //                         scale: 0.85,
    //                     },
    //                     "<"
    //                 );
    //                 tl.to(
    //                     cards[1],
    //                     {
    //                         scale: 1.25,
    //                     },
    //                     "<"
    //                 );
    //                 tl.to(
    //                     lineRef.current,
    //                     {
    //                         transform: "translateY(0)",
    //                     },
    //                     "<"
    //                 );
    //             });
    //         }
    //     });
    // }, []);
    useEffect(() => {
        const cards = cardRef.current.querySelectorAll(".card");
        const mm = gsap.matchMedia();
        mm.add("(min-width:1024px)", () => {
            let tl = gsap.timeline({
                ease: "none",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 40%",
                    end: "bottom top",
                    scrub: true,
                    // markers: true,
                },
            });
            tl.to(
                lineRef.current,
                {
                    // transform: "translateY(0)",
                    rotateX: 0,
                    // duration: 5,
                    ease:'none'
                },
                "<"
            );
            tl.to(
                [cards[0], cards[2]],
                {
                    scale: 0.85,
                    ease: "none",
                    // duration: 3,
                },
                "<"
            );
            tl.to(
                cards[1],
                {
                    scale: 1.25,
                    ease: "none",
                    // duration: 3,
                },
                "<"
            );
        });
        // firstmedia.revert();
        // mm.add("(min-width:1024px)", () => {
        //     let tl = gsap.timeline({
        //         ease: "power1.inOut",
        //         scrollTrigger: {
        //             trigger: cardRef.current,
        //             start: "top 40%",
        //             end: "bottom 20%",
        //             scrub: true,
        //             markers: true,
        //         },
        //     });
        //     tl.to(
        //         [cards[0], cards[2]],
        //         {
        //             scale: 0.9,
        //         },
        //         "<"
        //     );
        //     tl.to(
        //         cards[1],
        //         {
        //             scale: 1.15,
        //         },
        //         "<"
        //     );
        //     tl.to(
        //         lineRef.current,
        //         {
        //             transform: "translateY(0)",
        //         },
        //         "<"
        //     );
        // });
    }, []);
    return (
        <div className="px-4 sm:px-[3vw] md:px-[2vw] lg:px-[1.5vw] bg-[#D6DBE0] mt-[75px] lg:mt-[4vw]">
            <div className="w-full relative">
                <p className="font-font5 text-[1.8vw] leading-[2vw] capitalize absolute top-[2.3vw] right-[0.5vw] hidden lg:block">
                    Brand <br /> Identity <br /> mockups <br /> from Lovely{" "}
                    <br /> Russian <br /> Cities
                </p>
                <img
                    className="w-[430px] lg:w-full"
                    src="/Images/russian-hero-image.svg"
                    alt=""
                />
            </div>
            <div className="relative flex flex-col lg:flex-row">
                <div className="w-full absolute h-[41vw] overflow-hidden top-0 left-0 right-0 mt-[1vw] lg:block">
                    {/* rotate-x-[60deg] 2xl:rotate-x-[72deg]  translate-y-[-63%] */}
                    <img
                        ref={lineRef}
                        className="w-full h-full object-cover origin-top rotate-x-[60deg] 2xl:rotate-x-[67deg] "
                        src="/Images/line.svg"
                        alt=""
                    />
                </div>
                <div
                    ref={cardRef}
                    className="cards flex items-center justify-between w-full mx-0 lg:mx-[1.5vw] pt-[5vw] md:pt-[0vw] sm:mt-[10px] md:mt-[-25px] lg:mt-[2vw] xl:mt-[-3vw] font-font5 text-[4vw] md:text-[3vw] lg:text-[1.7vw] gap-[1.6vw] "
                >
                    {/* top card for mobile */}
                    <div className="flex-1 font-font5 origin-left border mt-[4vw] sm:mt-0 lg:mt-[4vw] group block lg:hidden relative z-40">
                        <div className="group-hover:bg-[#D6DBE0] h-full relative flex flex-col gap-[12vw] sm:gap-[100px] md:gap-[150px] justify-between transition-all duration-200 px-[2.5vw] md:px-[2vw] lg:px-[1vw] pt-[1.5vw] md:pt-[1vw] lg:pt-[0.8vw] bg-[#FEE69D]">
                            <h4 className="capitalize">moscow</h4>
                            <h4 className="text-[12vw] md:text-[4.5vw] lg:text-[3.6vw] tracking-[-0.1vw]">
                                36
                            </h4>
                        </div>
                    </div>
                    {/* top card for pc */}
                    <div className="card flex-1 origin-left border mt-[-4vw] sm:mt-[-40px] md:mt-[-70px] lg:mt-[4vw] h-auto lg:h-[23vw] group relative z-40">
                        <div className="group-hover:bg-[#FEE69D] h-full relative flex flex-col gap-[12vw] sm:gap-[100px] md:gap-[150px] justify-between transition-all duration-200 px-[2.5vw] md:px-[2vw] lg:px-[1vw] pt-[1.5vw] md:pt-[1vw] lg:pt-[0.8vw] bg-[#D6DBE0]">
                            <h4 className="capitalize">St.Petersburg</h4>
                            <h4 className="text-[12vw] md:text-[4.5vw] lg:text-[3.6vw] tracking-[-0.1vw]">
                                soon
                            </h4>
                        </div>
                    </div>
                    {/* center card for pc */}
                    <div className="card w-[36%] h-[35vw] origin-center border bg-transparent relative group hidden lg:block">
                        <div className="absolute group-hover:bg-transparent bg-[#FEE69D] top-0 left-0 w-full h-full select-none z-30 duration-200 transition-all flex flex-col justify-between px-5 lg:px-[1vw] pt-2">
                            <h4 className="text-[2vw] capitalize">Moscow</h4>
                            <h4 className="text-[5vw] tracking-[-0.1vw]">36</h4>
                        </div>
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            src="/Videos/hero-video.mp4"
                        ></video>
                    </div>
                    {/* bottom card */}
                    <div className="card h-[27vw] flex-1 border relative mt-0 lg:mt-[4vw] origin-right group hidden lg:block">
                        <div className="bg-[#D6DBE0] h-full hover:bg-[#FEE69D] px-5 lg:px-[1vw] pt-2 transition-all duration-200">
                            <h4>more сities to come…</h4>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[85vw] block lg:hidden mt-[-12vw] relative z-30">
                    <div className="card w-full h-auto border bg-transparent">
                        <video
                            className="w-full h-[30%] object-cover"
                            autoPlay
                            muted
                            loop
                            src="/Videos/hero-video.mp4"
                        ></video>
                    </div>
                    <p className="font-font5 text-lg sm:text-[4vw] leading-[6vw] md:leading-auto md:text-[3vw] mt-[2.5vw] md:mt-[1.5vw]">
                        Brand Identity mockups from lovely Russian Сities
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
