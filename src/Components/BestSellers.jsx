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

const BestSellers = () => {
    const [mockupsApiData] = useContext(productContext);
    const [cart,setcart] = useContext(CartDataContext);
    //
    const [filterProduct, setfilterProduct] = useState([]);
    const topSeller = () => {
        mockupsApiData.productsDetails &&
            mockupsApiData.productsDetails.map((p) => {
                const filterData = mockupsApiData.productsDetails.filter(
                    (product) => p.bestSeller !== product.bestSeller
                );
                setfilterProduct(filterData);
            });
    };
    useEffect(() => {
        topSeller();
    }, [mockupsApiData]);

    // product adding to cart
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
        setcart([...cart, product]);
    };
    return (
        <div className="px-4 sm:px-[3vw] md:px-[2vw] lg:px-[1.5vw] pt-28 sm:pt-[25vw] md:pt-[20vw]">
            <h2 className="font-font5 text-[10vw] tracking-[-0.6vw] pb-4 sm:pb-[1vw] lg:pb-0">
                the best sellers
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
                    {filterProduct.map(
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
                                            onClick={() =>
                                                addToCart({
                                                    id,
                                                    image,
                                                    image2,
                                                    title,
                                                    slug,
                                                    price,
                                                })
                                            }
                                            className="border-t absolute bottom-0 left-0 w-full text-center font-font5 py-1 sm:py-2 md:py-3 lg:py-3 text-[12px] md:text-sm lg:text-base bg-[#D6DBE0] uppercase opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 hover:bg-[#FEE69D] cursor-pointer"
                                        >
                                            add to cart
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

export default BestSellers;
