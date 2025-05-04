
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";


const Hero = () => {
    const mainRef = useRef();
    
    const [heroResponsive, setheroResponsive] = useState(window.innerWidth >= 1023);
    useEffect(() => {
        window.addEventListener("resize", () => {
            setheroResponsive(window.innerWidth >= 1023);
        });
        return () => {
            window.removeEventListener("resize", () => {});
        };
    }, []);
    const { scrollYProgress } = useScroll({
        target: mainRef,
        offset: ["start end", "end start"],
    });
    const scale = useTransform(scrollYProgress, [0.5, 1], [1, 1.25]);
    const scale2 = useTransform(scrollYProgress, [0.5, 1], [1, 0.85]);
    const rotateX = useTransform(scrollYProgress, [0.5, 1], [68, 0]);

    return (
        <div
            ref={mainRef}
            className="px-4 sm:px-[3vw] md:px-[2vw] lg:px-[1.5vw] bg-[#D6DBE0] pt-[80px] lg:pt-[60px] relative z-50  pb-0 lg:pb-[18vw]"
        >
            <div className="w-full relative z-50">
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
                <div className="w-full absolute h-[41vw] overflow-hidden top-0 mt-[1vw] lg:block bg-[#D6DBE0]">
                    <motion.img
                        style={{ rotateX: heroResponsive ? rotateX : 0 }}
                        className="w-full h-full object-cover rotate-x-[68deg] origin-top"
                        src="/Images/line.svg"
                        alt=""
                    />
                </div>
                <div
                   
                    className="cards flex items-center justify-between w-full mx-0 lg:mx-[1.5vw] pt-[5vw] md:pt-[0vw] sm:mt-[10px] md:mt-[-25px] lg:mt-[1vw] xl:mt-[-3vw] font-font5 text-[4vw] md:text-[3vw] lg:text-[1.7vw] gap-[1.6vw] z-50 relative lg:z-auto"
                >
                    {/* top card for mobile */}
                    <div className="flex-1 font-font5 origin-left border mt-[4vw] sm:mt-0 lg:mt-[4vw] group block lg:hidden relative z-50 lg:z-40">
                        <div className="group-hover:bg-[#D6DBE0] h-full relative flex flex-col gap-[12vw] sm:gap-[100px] md:gap-[150px] justify-between transition-all duration-200 px-[2.5vw] md:px-[2vw] lg:px-[1vw] pt-[1.5vw] md:pt-[1vw] lg:pt-[0.8vw] bg-[#FEE69D]">
                            <h4 className="capitalize">moscow</h4>
                            <h4 className="text-[12vw] md:text-[4.5vw] lg:text-[3.6vw] tracking-[-0.1vw]">
                                36
                            </h4>
                        </div>
                    </div>
                    {/* top card for pc */}
                    <motion.div
                        style={{ scale: heroResponsive ? scale2 : 1 }}
                        className="card first-card flex-1 origin-left border mt-[-4vw] sm:mt-[-40px] md:mt-[-70px] lg:mt-[4vw] h-auto lg:h-[23vw] group z-40 lg:relative lg:z-50"
                    >
                        <div className="group-hover:bg-[#FEE69D] h-full relative flex flex-col gap-[12vw] sm:gap-[100px] md:gap-[150px] justify-between transition-all duration-200 px-[2.5vw] md:px-[2vw] lg:px-[1vw] pt-[1.5vw] md:pt-[1vw] lg:pt-[0.8vw] bg-[#D6DBE0]">
                            <h4 className="capitalize">St.Petersburg</h4>
                            <h4 className="text-[12vw] md:text-[4.5vw] lg:text-[3.6vw] tracking-[-0.1vw]">
                                soon
                            </h4>
                        </div>
                    </motion.div>
                    {/* center card for pc */}
                    <motion.div
                        style={{ scale }}
                        className="w-[36%] h-[35vw] lg:block hidden"
                    >
                        <Link
                            to={`/product-category/all-mockups/`}
                            className="card center-card w-full h-full origin-center border bg-transparent lg:relative group hidden lg:block"
                        >
                            <div className="absolute group-hover:bg-transparent bg-[#FEE69D] top-0 left-0 right-0 w-full h-full select-none z-30 flex flex-col justify-between px-5 lg:px-[1vw] pt-2">
                                <h4 className="text-[2vw] capitalize">
                                    Moscow
                                </h4>
                                <h4 className="text-[5vw] tracking-[-0.1vw]">
                                    36
                                </h4>
                            </div>
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                src="/Videos/hero-video.mp4"
                            ></video>
                        </Link>
                    </motion.div>
                    {/* bottom card */}
                    <motion.div
                        style={{ scale: heroResponsive ? scale2 : 1 }}
                        className="card first-card hidden lg:block flex-1 origin-right border mt-[-4vw] sm:mt-[-40px] md:mt-[-70px] lg:mt-[4vw] h-auto lg:h-[23vw] group z-40 lg:relative lg:z-50"
                    >
                        <div className="group-hover:bg-[#FEE69D] h-full relative flex flex-col gap-[12vw] sm:gap-[100px] md:gap-[150px] justify-between transition-all duration-200 px-[2.5vw] md:px-[2vw] lg:px-[1vw] pt-[1.5vw] md:pt-[1vw] lg:pt-[0.8vw] bg-[#D6DBE0] ">
                            <h4>more сities to come…</h4>
                        </div>
                    </motion.div>
                </div>
                {/* for mobile */}
                <div className="w-full h-[85vw] block lg:hidden mt-[-12vw] relative z-50 mb-28 sm:mb-[28vw] md:mb-[22vw] lg:mb-0">
                    <div className="card w-full h-auto border bg-transparent">
                        <video
                            className="w-full h-[30%] object-cover"
                            autoPlay
                            muted
                            loop
                            src="/Videos/hero-video.mp4"
                        ></video>
                    </div>
                    <p className="font-font5 text-base leading-6 sm:text-[4vw] sm:leading-[6vw] md:leading-auto md:text-[3vw] mt-[2.5vw] md:mt-[1.5vw]">
                        Brand Identity mockups from lovely Russian Сities
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
