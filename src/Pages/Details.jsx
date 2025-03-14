import React, { useState } from "react";
import { Link } from "react-router-dom";
// swiper js
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
// import required modules
import { FreeMode } from "swiper/modules";
import { Thumbs } from "swiper/modules";

const Details = () => {
    const [accordianOpen, setaccordianOpen] = useState(false);
    const [thumbsSwiper, setThumbsSwiper] = useState();
    return (
        <div className="px-4 sm:px-[3vw] md:px-[2vw] lg:px-[1.5vw] bg-[#D6DBE0]">
            <div className="flex flex-col lg:flex-row gap-[2vw] relative">
                {/* pc */}
                <div className="hidden lg:flex flex-col gap-3 w-full lg:w-[64%] 2xl:w-[68%] pt-24 lg:pt-[80px]">
                    {" "}
                    <img
                        className="border"
                        src="/Images/Products/MSC-020-1.jpg"
                        alt=""
                    />
                    <img
                        className="border"
                        src="/Images/Products/MSC-020-2.jpg"
                        alt=""
                    />
                </div>
                {/* mobile */}
                <div className="slider block lg:hidden relative mt-[80px]">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={false}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[Thumbs]}
                        className="mySwiper2 border"
                    >
                        <SwiperSlide className="swiperslider w-full ">
                            <img
                                className="w-full h-full object-cover"
                                src="/Images/Products/MSC-001-1.jpg"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="swiperslider w-full object-cover">
                            <img
                                className="w-full h-full"
                                src="/Images/Products/MSC-001-2.jpg"
                            />
                        </SwiperSlide>
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={3}
                        freeMode={true}
                        direction={"horizontal"}
                        height={"auto"}
                        reverseDirection={true}
                        watchSlidesProgress={true}
                        modules={[Thumbs]}
                        className="mySwiper cursor-pointer mt-[10px]"
                    >
                        <SwiperSlide className="SwiperSlideThumb border">
                            <img
                                className="w-full h-full object-cover"
                                src="/Images/Products/MSC-001-1.jpg"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="SwiperSlideThumb border">
                            <img
                                className="w-full h-full object-cover"
                                src="/Images/Products/MSC-001-2.jpg"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/*  */}
                <div className="w-full lg:w-[36%] 2xl:w-[32%] px-0 lg:px-[1.5vw] min-h-[20vw] h-full sticky top-0 right-0 pt-6 lg:pt-[80px]">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-[80px] font-font5 tracking-[-2px] xl:tracking-[-3px] leading-none">
                        MSC-021
                    </h2>
                    <p className="font-font3 text-sm sm:text-base mt-5">
                        Fully customizable and high quality poster mockup, ready
                        for your impressive design.
                    </p>
                    <div className="font-font3 text-sm sm:text-base mt-3 sm:mt-5">
                        <p className="font-font5 uppercase text-[12px] sm:text-sm mb-2">
                            Features:
                        </p>
                        <p className="mt-1">
                            + Over 5000 pixels on the wide side
                        </p>
                        <p className="mt-1">
                            + Layered Adobe Photoshop .psd file
                        </p>
                        <p className="mt-1">+ Real shadows and reflexes</p>
                        <p className="mt-1">+ Easy to use and customizable</p>
                        <p className="mt-1">+ Commercial license</p>
                    </div>
                    <h4 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-[80px] font-font5 tracking-[-2px] xl:tracking-[-4px] leading-none pt-3 sm:pt-5 pb-8 md:pb-8">
                        999 ₽
                    </h4>
                    {/*  */}
                    <div className="border-t border-[#565759] mb-5 sm:mb-8 md:mb-10 lg:mb-16">
                        <div className="pt-2 sm:pt-3 md:pt-4 lg:pt-5">
                            <button
                                onClick={() => setaccordianOpen(!accordianOpen)}
                                className="flex items-center justify-between w-full mb-8 lg:mb-5 cursor-pointer"
                            >
                                <span className="block uppercase text-sm font-font5">
                                    About commercial license
                                </span>
                                <div className="w-4 h-4 relative">
                                    <span className="w-full h-[1px] bg-black block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full" />
                                    <span
                                        className={`h-[1px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all ease-in-out duration-300 bg-black block rotate-90 rounded-full ${
                                            accordianOpen ? "w-0" : "w-full"
                                        }`}
                                    />
                                </div>
                            </button>
                            <div
                                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                                    accordianOpen
                                        ? "grid-rows-[1fr]"
                                        : "grid-rows-[0fr]"
                                }`}
                            >
                                {/*  */}
                                <div className="overflow-hidden font-font3 leading-[25px]">
                                    <p>
                                        These license terms (the “License”)
                                        govern the use of digital mockup
                                        products (“Products”) provided by
                                        Russian Mockups. By accessing or using
                                        the Products, you (“Licensee”) agree to
                                        be bound by the terms and conditions set
                                        forth in this License.
                                    </p>
                                    <h4 className="py-6 font-font5">
                                        1. Grant of License:
                                    </h4>
                                    <p>
                                        Russian Mockups grants the Licensee a
                                        non-exclusive, non-transferable license
                                        to use the Products for personal or
                                        commercial purposes, subject to the
                                        restrictions outlined below.
                                    </p>
                                    <h4 className="py-6 font-font5">
                                        2. Intellectual Property:
                                    </h4>
                                    <h4 className="font-font5 pb-1">
                                        Ownership:
                                    </h4>
                                    <p>
                                        The Licensee acknowledges and agrees
                                        that Russian Mockups retains all rights,
                                        title, and interest in and to the
                                        Products. The Licensee does not acquire
                                        any ownership rights in the Products.
                                    </p>
                                    <h4 className="pt-6 font-font5 pb-1">
                                        Restrictions:
                                    </h4>
                                    <p>
                                        The Licensee shall not sell, distribute,
                                        sublicense, or otherwise transfer the
                                        Products to any third party, whether for
                                        financial gain or otherwise.
                                    </p>
                                    <h4 className="py-6 font-font5">
                                        3. Permitted Usage:
                                    </h4>
                                    <p>
                                        The Licensee is authorized to use the
                                        Products in the following manner: <br />
                                        Incorporate the Products into personal
                                        or commercial projects. Display,
                                        advertise, or promote the Products as
                                        part of the Licensee’s own work. <br />
                                        Modify the Products to fit the
                                        Licensee’s project requirements.
                                    </p>
                                    <h4 className="py-6 font-font5">
                                        4. Prohibited Usage:
                                    </h4>
                                    <p className="pb-6">
                                        The Licensee is expressly prohibited
                                        from:
                                    </p>
                                    <p>
                                        Selling, reselling, distributing, or
                                        sublicensing the Products, in whole or
                                        in part, to any third party. <br />
                                        Making the Products available on any
                                        platform, marketplace, or repository for
                                        download or redistribution. <br />
                                        Using the Products in a manner that
                                        infringes upon the rights of any third
                                        party. <br />
                                        Using the Products in a way that is
                                        defamatory, obscene, or violates any
                                        applicable laws or regulations.
                                    </p>
                                    <h4 className="py-6 font-font5">
                                        5. Warranty and Liability:
                                    </h4>
                                    <h4 className="font-font5 pb-1">
                                        Warranty:
                                    </h4>
                                    <p>
                                        Russian Mockups provides the Products
                                        “as is” without any warranties, whether
                                        expressed or implied. The Licensee
                                        acknowledges that the Products may not
                                        be error-free or uninterrupted.
                                    </p>
                                    <h4 className="font-font5 pt-6 pb-1">
                                        Limitation of Liability:
                                    </h4>
                                    <p>
                                        In no event shall Russian Mockups be
                                        liable for any direct, indirect,
                                        incidental, consequential, or special
                                        damages arising out of or in connection
                                        with the use of the Products.
                                    </p>
                                    <h4 className="py-6 font-font5">
                                        6. Governing Law:
                                    </h4>
                                    <p>
                                        This License shall be governed by and
                                        construed in accordance with the laws of
                                        Russian Federation. Any disputes arising
                                        from this License shall be subject to
                                        the exclusive jurisdiction of the courts
                                        in Russian Federation.
                                    </p>
                                    <p className="py-6">
                                        By accessing or using the Products, the
                                        Licensee acknowledges that they have
                                        read, understood, and agreed to the
                                        terms and conditions of this License.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <Link className="uppercase font-font5 text-[12px] sm:text-sm py-3 sm:py-4 px-5 text-center border-[2px] w-full block hover:bg-[#000] hover:text-[#fff] border-black transition-all duration-150">
                        {" "}
                        add to cart
                    </Link>
                </div>
            </div>
            <div className=" text-xl sm:text-2xl lg:text-[2vw] font-font5 mt-24 xl:mt-[7vw] 2xl:mt-[6vw]">
                <div className="pb-5 lg:pb-[1vw] gap-5 flex items-center justify-between w-full">
                    <h4>Related products</h4>
                    <p className="block lg:hidden text-[12px] sm:text-sm md:text-base">
                        1/4
                    </p>
                </div>
                <div className="w-full">
                    <Swiper
                        className="z-10 cursor-grab active:cursor-grabbing"
                        slidesPerView={1.35}
                        spaceBetween={8}
                        breakpoints={{
                            640: {
                                slidesPerView: 2.08,
                                spaceBetween: 8,
                            },
                            768: {
                                slidesPerView: 2.08,
                                spaceBetween: 8,
                            },
                            1024: {
                                slidesPerView: 3.06,
                                spaceBetween: 15,
                            },
                        }}
                        modules={[FreeMode]}
                    >
                        <SwiperSlide className="select-none w-full group">
                            <div className="border relative overflow-hidden cursor-pointer">
                                <Link>
                                    <img
                                        className="w-full h-auto"
                                        src="/Images/Products/MSC-001-2.jpg"
                                        alt=""
                                    />
                                </Link>
                                <Link className="absolute group-hover:opacity-0 group-hover:invisible top-0 left-0 right-0 bottom-0 opacity-100 visible duration-300 transition-all block">
                                    <img
                                        className="w-full h-auto"
                                        src="/Images/Products/MSC-001-1.jpg"
                                        alt=""
                                    />
                                </Link>
                                <div className="border-t absolute bottom-0 left-0 w-full text-center font-font5 py-1 sm:py-2 md:py-3 lg:py-3 text-[12px] md:text-sm lg:text-base bg-[#D6DBE0] uppercase opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all hover:bg-[#FEE69D] duration-200">
                                    add to cart
                                </div>
                            </div>
                            <div className="font-font4 pt-2 sm:mt-[0.4vw]">
                                <p className="uppercase text-sm sm:text-lg">
                                    MSC-041
                                </p>
                                <p className="text-[12px] lg:text-base">
                                    999 ₽
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="select-none w-full group">
                            <div className="border relative overflow-hidden cursor-pointer">
                                <Link>
                                    <img
                                        className="w-full h-auto"
                                        src="/Images/Products/MSC-016-1.jpg"
                                        alt=""
                                    />
                                </Link>
                                <Link className="absolute group-hover:opacity-0 group-hover:invisible top-0 left-0 right-0 bottom-0 opacity-100 visible duration-300 transition-all block">
                                    <img
                                        className="w-full h-auto"
                                        src="/Images/Products/MSC-016-2.jpg"
                                        alt=""
                                    />
                                </Link>
                                <div className="border-t absolute bottom-0 left-0 w-full text-center font-font5 py-1 sm:py-2 md:py-3 lg:py-3 text-[12px] md:text-sm lg:text-base bg-[#D6DBE0] uppercase opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all hover:bg-[#FEE69D] duration-200">
                                    add to cart
                                </div>
                            </div>
                            <div className="font-font4 pt-2 sm:mt-[0.4vw]">
                                <p className="uppercase text-sm sm:text-lg">
                                    MSC-041
                                </p>
                                <p className="text-[12px] lg:text-base">
                                    999 ₽
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="select-none w-full group">
                            <div className="border relative overflow-hidden cursor-pointer">
                                <Link>
                                    <img
                                        className="w-full h-auto"
                                        src="/Images/Products/MSC-037-1.jpg"
                                        alt=""
                                    />
                                </Link>
                                <Link className="absolute group-hover:opacity-0 group-hover:invisible top-0 left-0 right-0 bottom-0 opacity-100 visible duration-300 transition-all block">
                                    <img
                                        className="w-full h-auto"
                                        src="/Images/Products/MSC-037-2.jpg"
                                        alt=""
                                    />
                                </Link>
                                <div className="border-t absolute bottom-0 left-0 w-full text-center font-font5 py-1 sm:py-2 md:py-3 lg:py-3 text-[12px] md:text-sm lg:text-base bg-[#D6DBE0] uppercase opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all hover:bg-[#FEE69D] duration-200">
                                    add to cart
                                </div>
                            </div>
                            <div className="font-font4 pt-2 sm:mt-[0.4vw]">
                                <p className="uppercase text-sm sm:text-lg">
                                    MSC-041
                                </p>
                                <p className="text-[12px] lg:text-base">
                                    999 ₽
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="select-none w-full group">
                            <div className="border relative overflow-hidden cursor-pointer">
                                <Link>
                                    <img
                                        className="w-full h-auto"
                                        src="/Images/Products/MSC-027-1.jpg"
                                        alt=""
                                    />
                                </Link>
                                <Link className="absolute group-hover:opacity-0 group-hover:invisible top-0 left-0 right-0 bottom-0 opacity-100 visible duration-300 transition-all block">
                                    <img
                                        className="w-full h-auto"
                                        src="/Images/Products/MSC-027-2.jpg"
                                        alt=""
                                    />
                                </Link>
                                <div className="border-t absolute bottom-0 left-0 w-full text-center font-font5 py-1 sm:py-2 md:py-3 lg:py-3 text-[12px] md:text-sm lg:text-base bg-[#D6DBE0] uppercase opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all hover:bg-[#FEE69D] duration-200">
                                    add to cart
                                </div>
                            </div>
                            <div className="font-font4 pt-2 sm:mt-[0.4vw]">
                                <p className="uppercase text-sm sm:text-lg">
                                    MSC-041
                                </p>
                                <p className="text-[12px] lg:text-base">
                                    999 ₽
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Details;
