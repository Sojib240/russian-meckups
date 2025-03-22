import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedTitle from "./Common/AnimatedTitle";

const Banner = () => {
    const bannerRef = useRef();
    const { scrollYProgress } = useScroll({
        target: bannerRef,
        offset: ["start end", "end start"],
    });
    const [bannerResponsive, setbannerResponsive] = useState(window.innerWidth >= 1023);
    useEffect(() => {
        window.addEventListener("resize", () => {
            setbannerResponsive(window.innerWidth >= 1023);
        });
        return () => {
            window.removeEventListener("resize", () => {});
        };
    }, []);
    const y = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);
    return (
        <div
            ref={bannerRef}
            className="w-full h-auto md:h-auto lg:h-[80vw] xl:h-[80vw] relative z-50 bg-[#D6DBE0]"
        >
            <div className="w-full h-full overflow-hidden">
                <motion.img
                    style={{ y }}
                    className="w-full h-full object-cover scale-125 origin-top"
                    src="/Images/Banner-1-scaled.jpg"
                    alt=""
                />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[#D6DBE0] text-center w-full mb-[15vw] sm:mb-[15vw] md:mb-[10vw] lg:mb-[5vw]">
                <h3 className="text-[10vw] leading-none -tracking-[0.6vw] font-font5 font-bold">
                    Baikal Mockups <br />
                    Collection
                </h3>
                <div className="group mt-[5vw] md:mt-[4vw] lg:mt-[3vw] inline-block">
                    <Link to={"/product-category/all-mockups/"} className="leading-none px-8 py-3 border-[2px] group-hover:bg-white group-hover:text-black border-[#D6DBE0] block">
                        <AnimatedTitle text="Shop Collection" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
