import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productContext } from "../Utils/Context";
import { CartDataContext } from "../Utils/CartContext";
import { motion } from "framer-motion";
import Inner from "../Inner";
import NavBar from "../Components/Common/NavBar";

const CategoryPage = ({ openCart, setopenCart }) => {
    const [cart, setcart] = useContext(CartDataContext);
    const [productsApiData] = useContext(productContext);
    const { param } = useParams();
    const { productsDetails } = productsApiData;
    const [newCategoriesData, setnewCategoriesData] = useState();
    const [shopTitle, setshopTitle] = useState("");

    document.title = `${shopTitle} - Russian Mockups`;
    // filter data
    useEffect(() => {
        const handleCategoriesFilter = () => {
            const filter =
                productsDetails &&
                productsDetails.filter((p) => {
                    if (Array.isArray(p.slug)) {
                        return p.slug.includes(param);
                    }
                    return p.slug === param;
                });
            setnewCategoriesData(filter);
            const cleanedSlug = param.replace(/-/g, " ");
            setshopTitle(cleanedSlug);
        };
        handleCategoriesFilter();
    }, [param, productsDetails]);
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
        <Inner>
            <NavBar openCart={openCart} setopenCart={setopenCart} />
            <div className="px-4 sm:px-[3vw] md:px-[2vw] lg:px-[1.5vw] bg-[#D6DBE0] pt-18 lg:pt-10 relative z-50">
                <h2 className="font-font5 text-4xl sm:text-[60px] lg:text-[10vw] tracking-[-1px] md:tracking-[-3px] lg:tracking-[-0.4vw] pb-3 lg:pb-8">
                    {shopTitle}
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-2 sm:gap-[3vw] md:gap-[2vw] lg:gap-[1.5vw] pb-[18vw] sm:pb-24 md:pb-[12vw] lg:pb-[10vw]">
                    {newCategoriesData &&
                        newCategoriesData.map(
                            ({ id, title, image, image2, slug, price }) => {
                                return (
                                    <div
                                        key={id}
                                        className="select-none w-full group"
                                    >
                                        <div className="border relative overflow-hidden cursor-pointer">
                                            <Link
                                                to={`/shop/${slug[1]}/${title}/`}
                                            >
                                                <img
                                                    className="w-full h-auto"
                                                    src={image2}
                                                    alt=""
                                                />
                                            </Link>
                                            <Link
                                                to={`/shop/${slug[1]}/${title}/`}
                                                className="absolute group-hover:opacity-0 group-hover:invisible top-0 left-0 right-0 bottom-0 opacity-100 visible duration-300 transition-all block"
                                            >
                                                <img
                                                    className="w-full h-auto"
                                                    src={image}
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
                                                        <motion.img
                                                            initial={{
                                                                scale: 0,
                                                            }}
                                                            animate={{
                                                                scale: 1,
                                                            }}
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
                                    </div>
                                );
                            }
                        )}
                </div>
            </div>
        </Inner>
    );
};

export default CategoryPage;
