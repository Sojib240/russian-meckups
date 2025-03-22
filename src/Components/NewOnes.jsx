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
import { CartDataContext } from "../Utils/CartContext";
import { motion } from "framer-motion";

const NewOnes = ({ openCart, setopenCart }) => {
    const [mockupsApiData] = useContext(productContext);
    const [cart, setcart] = useContext(CartDataContext);
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
    // product adding to cart
    const [renderLoadingImg, setrenderLoadingImg] = useState(false);
    const handleLoadingImg = (isLoading) => {
        setrenderLoadingImg(isLoading);
        setTimeout(() => {
            setrenderLoadingImg(false);
        }, 1200);
    };
    const addToCart = (product) => {
        let isActive = false;
        cart.map((cartP) => {
            if (cartP.id === product.id) {
                isActive = true;
            }
        });
        if (isActive) {
            return;
        }
        setTimeout(() => {
            setcart([...cart, product]);
        }, 1200);
    };
    return (
        <div className="px-4 sm:px-[3vw] md:px-[2vw] lg:px-[1.5vw] pb-20 sm:pb-[18vw] relative z-50 bg-[#D6DBE0]">
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
                    {newFilterProduct.map(
                        ({ id, image, image2, title, slug, price }) => {
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
                                        <Link
                                            to={`/shop/${slug[1]}/${title}`}
                                            className="absolute group-hover:opacity-0 group-hover:invisible top-0 left-0 right-0 bottom-0 opacity-100 visible duration-300 transition-all block"
                                        >
                                            <img
                                                className="w-full h-auto"
                                                src={image2}
                                                alt=""
                                            />
                                        </Link>
                                        <button
                                            onClick={() => {
                                                addToCart({
                                                    id,
                                                    image,
                                                    image2,
                                                    title,
                                                    slug,
                                                    price,
                                                });
                                                handleLoadingImg(true);
                                                setTimeout(() => {
                                                    setopenCart(true);
                                                }, 1200);
                                            }}
                                            className="border-t absolute bottom-0 left-0 w-full text-center font-font5 py-2 sm:py-2 md:py-2 lg:py-2 xl:py-2 2xl:py-3 text-[11px] md:text-[12px] lg:text-sm bg-[#D6DBE0] uppercase opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all hover:bg-[#FEE69D] duration-200 cursor-pointer"
                                        >
                                            {renderLoadingImg && (
                                                <div className="pl-5 w-9 absolute top-1/2 left-0 -translate-y-1/2">
                                                    <motion.img initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                        className="animate-spin w-full"
                                                        src="/Images/Icons/loading.png"
                                                        alt=""
                                                    />
                                                </div>
                                            )}
                                            <div className="relative inline-block">
                                                <span>add to cart</span>
                                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black scale-x-0 origin-right transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-hover:origin-left"></span>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="font-font4 pt-2 sm:mt-[0.4vw]">
                                        <p className="uppercase text-sm sm:text-lg">
                                            {title}
                                        </p>
                                        <p className="text-[12px] lg:text-base">
                                            {price} ₽
                                        </p>
                                    </div>
                                </SwiperSlide>
                            );
                        }
                    )}
                </Swiper>
            </div>
        </div>
    );
};

export default NewOnes;
