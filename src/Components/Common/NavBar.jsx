import React, { useContext, useEffect, useState } from "react";
import AnimatedTitle from "./AnimatedTitle";
import { Link } from "react-router-dom";
import SideCart from "./SideCart";
import { productContext } from "../../Utils/Context";

const NavBar = () => {
    const [mockupsApiData] = useContext(productContext);

    const [openCart, setopenCart] = useState(false);
    const [menu, setmenu] = useState(false);
    const menuFunction = () => {
        setmenu(!menu);
    };
    return (
        <>
            <div className="relative">
                <nav className="flex justify-between items-center py-4 lg:py-3 px-4 sm:px-[3vw] md:px-[2vw] lg:px-[1.5vw] bg-[#D6DBE0] border-b w-full fixed top-0 z-50">
                    {/* logo */}
                    <div className="w-full lg:w-[15%]">
                        <Link
                            to={"/"}
                            className="logo max-w-[35px] lg:max-w-[28px] w-auto block"
                        >
                            <img
                                className="w-full"
                                src="/Images/Icons/RM_LOGO.svg"
                                alt=""
                            />
                        </Link>
                    </div>
                    {/* menu */}
                    <div className="gap-8 w-[70%] justify-center leading-none hidden lg:flex">
                        {mockupsApiData.categories &&
                            mockupsApiData.categories.map(({ param,id }) => {
                                return (
                                    <Link key={id} to={`/product-category/${param}`}>
                                        <AnimatedTitle text={param} />
                                    </Link>
                                );
                            })}
                        {/* <Link to={"/products/all-mockups"}>
                            <AnimatedTitle text={"all mockups"} />
                        </Link>
                        <Link to={"/products/billboards"}>
                            <AnimatedTitle text={"billboards"} />
                        </Link>
                        <Link to={"/products/posters"}>
                            <AnimatedTitle text={"posters"} />
                        </Link>
                        <Link to={"/products/signs"}>
                            <AnimatedTitle text={"signs"} />
                        </Link>
                        <Link to={"/products/pylons"}>
                            <AnimatedTitle text={"pylons"} />
                        </Link>
                        <Link to={"/products/facades"}>
                            <AnimatedTitle text={"facades"} />
                        </Link>
                        <Link to={"/products/bus-stops"}>
                            <AnimatedTitle text={"bus stops"} />
                        </Link> */}
                    </div>
                    {/* account and cart */}
                    <div className="flex gap-6 lg:gap-8 w-full lg:w-[15%] items-center justify-end leading-none">
                        <Link className="hidden lg:block">
                            <AnimatedTitle text={"account"} />
                        </Link>
                        <div>
                            <span
                                onClick={() => setopenCart(true)}
                                className="block cursor-pointer w-[14px]"
                            >
                                <img
                                    className="w-full"
                                    src="/Images/Icons/cart.svg"
                                    alt=""
                                />
                            </span>
                        </div>
                        <div
                            onClick={() => menuFunction()}
                            className={`w-[25px] h-[14px] flex lg:hidden flex-col cursor-pointer overflow-hidden origin-center justify-between`}
                        >
                            <span
                                className={`w-full bg-black h-[2px] block transition-all duration-200 ${
                                    menu
                                        ? "translate-x-[100%]"
                                        : "translate-x-[0%]"
                                }`}
                            ></span>
                            <span className="w-full bg-black h-[2px] block transition-all duration-200"></span>
                            <span
                                className={`w-[75%] bg-black h-[2px] block transition-all duration-200 ${
                                    menu
                                        ? "translate-x-[-110%]"
                                        : "translate-x-[0%]"
                                }`}
                            ></span>
                        </div>
                    </div>
                </nav>
                {/* mobile */}
                <div
                    className={`gap-5 leading-none flex flex-col fixed top-[56px] px-3 sm:px-[4vw] md:px-[3vw] lg:px-[0.8vw] transition-all duration-300 left-0 origin-top border-b bg-[#D6DBE0] z-[999] w-full h-[auto] py-3 ${
                        menu
                            ? "translate-y-[0] visible opacity-100"
                            : "translate-y-[20%] invisible opacity-0"
                    }`}
                >
                    {mockupsApiData.categories &&
                        mockupsApiData.categories.map(({ param,id }) => {
                            return (
                                <Link key={id}
                                    className="block border-b pb-4 pt-2 border-[#C5CACE]"
                                    onClick={() => setmenu(false)}
                                    to={`/product-category/${param}/`}
                                >
                                    <AnimatedTitle text={param} />
                                </Link>
                            );
                        })}
                    <Link
                        onClick={() => setmenu(false)}
                        to={"/products/account"}
                        className="block pb-2"
                    >
                        <AnimatedTitle text={"account"} />
                    </Link>
                    {/* <Link
                        onClick={() => setmenu(false)}
                        to={"/products/all-mockups"}
                        className="block border-b pb-4 pt-2 border-[#C5CACE]"
                    >
                        <AnimatedTitle text={"all mockups"} />
                    </Link>
                    <Link
                        onClick={() => setmenu(false)}
                        to={"/products/billboards"}
                        className="block border-b pb-4 border-[#C5CACE]"
                    >
                        <AnimatedTitle text={"billboards"} />
                    </Link>
                    <Link
                        onClick={() => setmenu(false)}
                        to={"/products/posters"}
                        className="block border-b pb-4 border-[#C5CACE]"
                    >
                        <AnimatedTitle text={"posters"} />
                    </Link>
                    <Link
                        onClick={() => setmenu(false)}
                        to={"/products/signs"}
                        className="block border-b pb-4 border-[#C5CACE]"
                    >
                        <AnimatedTitle text={"signs"} />
                    </Link>
                    <Link
                        onClick={() => setmenu(false)}
                        to={"/products/pylons"}
                        className="block border-b pb-4 border-[#C5CACE]"
                    >
                        <AnimatedTitle text={"pylons"} />
                    </Link>
                    <Link
                        onClick={() => setmenu(false)}
                        to={"/products/facades"}
                        className="block border-b pb-4 border-[#C5CACE]"
                    >
                        <AnimatedTitle text={"facades"} />
                    </Link>
                    <Link
                        onClick={() => setmenu(false)}
                        to={"/products/bus-stops"}
                        className="block pb-4 border-b border-[#C5CACE]"
                    >
                        <AnimatedTitle text={"bus stops"} />
                    </Link> */}
                    {/* <Link
                        onClick={() => setmenu(false)}
                        to={"/products/account"}
                        className="block pb-2"
                    >
                        <AnimatedTitle text={"account"} />
                    </Link> */}
                </div>
            </div>
            <SideCart openCart={openCart} setopenCart={setopenCart} />
        </>
    );
};

export default NavBar;
