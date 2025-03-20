import React, { useContext, useEffect, useRef, useState } from "react";
import AnimatedTitle from "./AnimatedTitle";
import { Link } from "react-router-dom";
import SideCart from "./SideCart";
import { productContext } from "../../Utils/Context";
import { CartDataContext } from "../../Utils/CartContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavBar = ({ openCart, setopenCart }) => {
    const [mockupsApiData] = useContext(productContext);
    const [cart] = useContext(CartDataContext);

    const [menu, setmenu] = useState(false);
    const menuFunction = () => {
        setmenu(!menu);
    };
    const hambarger1 = useRef();
    const hambarger2 = useRef();

    useGSAP(() => {
        const timel = gsap.timeline();
        if (menu) {
            timel.to(
                hambarger1.current,
                {
                    top: "50%",
                    duration: 0.1,
                    ease: "power4.inOut",
                },
                "a"
            );
            timel.to(
                hambarger2.current,
                {
                    top: "50%",
                    duration: 0.1,
                    ease: "power4.inOut",
                },
                "a"
            );
            timel.to(
                hambarger1.current,
                {
                    delay: 0.1,
                    rotate: "45deg",
                    duration: 0.1,
                    ease: "power4.inOut",
                },
                "b"
            );
            timel.to(
                hambarger2.current,
                {
                    delay: 0.1,
                    rotate: "-45deg",
                    duration: 0.1,
                    ease: "power4.inOut",
                },
                "b"
            );
        } else {
            timel.to(
                hambarger1.current,
                {
                    rotate: "0deg",
                    duration: 0.1,
                    ease: "power4.inOut",
                },
                "a"
            );
            timel.to(
                hambarger2.current,
                {
                    rotate: "0deg",
                    duration: 0.1,
                    ease: "power4.inOut",
                },
                "a"
            );
            timel.to(
                hambarger1.current,
                { delay: 0.1, top: "0%", duration: 0.1, ease: "power1.inOut" },
                "b"
            );
            timel.to(
                hambarger2.current,
                {
                    delay: 0.1,
                    top: "100%",
                    duration: 0.1,
                    ease: "power4.inOut",
                },
                "b"
            );
        }
    }, [menu]);
    return (
        <>
            <div className="relative">
                <nav className="flex justify-between items-center py-4 lg:py-3 px-4 sm:px-[3vw] md:px-[2vw] lg:px-[1.5vw] bg-[#D6DBE0] border-b w-full fixed top-0 z-[999]">
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
                    <div className="gap-6 xl:gap-8 w-[70%] justify-center leading-none hidden lg:flex">
                        {mockupsApiData.categories &&
                            mockupsApiData.categories.map(({ param, id }) => {
                                return (
                                    <Link
                                        key={id}
                                        to={`/product-category/${param}/`}
                                    >
                                        <AnimatedTitle
                                            text={param.replace(/-/, " ")}
                                        />
                                    </Link>
                                );
                            })}
                    </div>
                    {/* account and cart */}
                    <div className="flex gap-6 lg:gap-8 w-full lg:w-[15%] items-center justify-end leading-none">
                        <Link to={"/account/"} className="hidden lg:block">
                            <AnimatedTitle text={"account"} />
                        </Link>
                        <div className="relative">
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
                            {cart.length != 0 && (
                                <span className="w-4 h-4 lg:h-[18px] lg:w-[18px] rounded-full bg-black text-white text-[9px] lg:text-[10px] flex items-center justify-center font-font5 absolute top-[-6px] right-[-8px] pointer-events-none">
                                    {cart.length}
                                </span>
                            )}
                        </div>
                        <button
                            onClick={() => menuFunction()}
                            className="h-[20px] sm:h-[25px] flex items-center justify-center cursor-pointer"
                        >
                            <div
                                className={`w-[20px] sm:w-[25px] h-[8px] block lg:hidden  cursor-pointer relative`}
                            >
                                <span
                                    ref={hambarger1}
                                    className={`hambarger-line absolute w-full bg-black h-[2px] block transition-all duration-200 pointer-events-none`}
                                />
                                <span
                                    ref={hambarger2}
                                    className="hambarger-line absolute top-1/2 -translate-y-1/2 w-full bg-black h-[2px] block transition-all duration-200 pointer-events-none"
                                />
                            </div>
                        </button>
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
                        mockupsApiData.categories.map(({ param, id }) => {
                            return (
                                <Link
                                    key={id}
                                    className="block border-b pb-4 pt-2 border-[#C5CACE]"
                                    onClick={() => setmenu(false)}
                                    to={`/product-category/${param}/`}
                                >
                                    <AnimatedTitle
                                        text={param.replace(/-/, " ")}
                                    />
                                </Link>
                            );
                        })}
                    <Link
                        onClick={() => setmenu(false)}
                        to={"/account/"}
                        className="block pb-2"
                    >
                        <AnimatedTitle text={"account"} />
                    </Link>
                </div>
            </div>
            <SideCart openCart={openCart} setopenCart={setopenCart} />
        </>
    );
};

export default NavBar;
