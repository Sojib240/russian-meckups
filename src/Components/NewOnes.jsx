import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/free-mode";

import "swiper/css";
// import required modules
import { FreeMode } from "swiper/modules";
import { productContext } from "../Utils/Context";
import { Link } from "react-router-dom";

const NewOnes = () => {
    const [mockupsApiData] = useContext(productContext);
    //
    const [newFilterProduct, setnewFilterProduct] = useState([]);
    const newProducts = () => {
        mockupsApiData.productsDetails &&
            mockupsApiData.productsDetails.map((p) => {
                const filterData = mockupsApiData.productsDetails.filter(
                    (product) => p.newOnes !== product.newOnes
                );
                setnewFilterProduct(filterData);
            });
    };
    useEffect(() => {
        newProducts();
    }, [mockupsApiData]);
    // console.log(newFilterProduct);
    return (
        <div className="px-4 sm:px-[3vw] md:px-[2vw] lg:px-[1.5vw] mb-[20vw] sm:mb-[18vw]">
            <h2 className="font-font5 text-[10vw] tracking-[-0.6vw] pb-4 sm:pb-[1vw] lg:pb-0">
                new ones
            </h2>
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
                            slidesPerView: 3.08,
                            spaceBetween: 15,
                        },
                    }}
                    modules={[FreeMode]}
                >
                    {newFilterProduct.map(({ id, image, image2, title,slug }) => {
                        return (
                            <SwiperSlide
                                key={id}
                                className="select-none w-full group"
                            >
                                <div className="border relative overflow-hidden cursor-pointer">
                                    <Link to={`/shop/${slug[1]}/${title}`}>
                                        <img
                                            className="w-full h-auto"
                                            src={image}
                                            alt=""
                                        />
                                    </Link>
                                    <Link to={`/shop/${slug[1]}/${title}`} className="absolute group-hover:opacity-0 group-hover:invisible top-0 left-0 right-0 bottom-0 opacity-100 visible duration-300 transition-all block">
                                        <img
                                            className="w-full h-auto"
                                            src={image2}
                                            alt=""
                                        />
                                    </Link>
                                    <div className="border-t absolute bottom-0 left-0 w-full text-center font-font5 py-1 sm:py-2 md:py-3 lg:py-3 text-[12px] md:text-sm lg:text-base bg-[#D6DBE0] uppercase opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all hover:bg-[#FEE69D] duration-200">
                                        add to cart
                                    </div>
                                </div>
                                <div className="font-font4 pt-2 sm:mt-[0.4vw]">
                                    <p className="uppercase text-sm sm:text-lg">
                                        {title}
                                    </p>
                                    <p className="text-[12px] lg:text-base">
                                        999 ₽
                                    </p>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default NewOnes;
