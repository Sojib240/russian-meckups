import React, { useContext, useEffect, useState } from "react";
import Inner from "../Inner";
import NavBar from "../Components/Common/NavBar";
import Footer from "../Components/Common/Footer";
import { Link } from "react-router-dom";
import { CartDataContext } from "../Utils/CartContext";
const CheckOut = ({ openCart, setopenCart }) => {
    document.title = "Checkout - Russian Мockups";
    const [checkOutPageAccordianOpen, setcheckOutPageAccordianOpen] =
        useState(false);
    const [cart, setcart] = useContext(CartDataContext);

    // handle price
    const [categoryprice, setcategoryprice] = useState(0);
    const handlePrice = () => {
        var priceing = 0;

        cart.map((product) => {
            priceing += 1 * product.price;
            setcategoryprice(priceing);
        });
        if (cart.length == 0) {
            setcategoryprice(0);
        }
    };
    useEffect(() => {
        handlePrice();
    });
    return (
        <Inner>
            <div>
                <NavBar openCart={openCart} setopenCart={setopenCart} />
                <div className="w-full bg-[#D6DBE0] py-25 pb-20 md:py-25 px-4 sm:px-[3vw] md:px-[2vw] lg:px-[1.5vw] relative z-50 flex flex-col lg:flex-row justify-between gap-[4vw]">
                    <div className="w-full lg:w-[54%] xl:w-[56%] 2xl:w-[62%]">
                        <div className="mb-5 sm:mb-8">
                            <h4 className="font-font5 text-xl md:text-3xl">
                                Contact information
                            </h4>
                            <h4 className="font-font4 text-[12px] sm:text-sm">
                                We'll use this email to send you details and
                                updates about your order.
                            </h4>
                        </div>
                        <input
                            className="w-full px-2 py-2 sm:py-3 rounded-[5px] border outline-none bg-white font-font4 text-sm sm:text-base"
                            type="text"
                            placeholder="Email address"
                        />
                        <div className="flex items-center gap-2 mt-5 sm:mt-12">
                            <input type="checkbox" name="" id="" />
                            <label
                                className="font-font5 text-[12px] sm:text-sm"
                                htmlFor=""
                            >
                                Create an account with Russian Мockups
                            </label>
                        </div>
                        <div className="mb-6 sm:mb-8 mt-7 sm:mt-10">
                            <h4 className="font-font5 pt-5 text-xl md:text-3xl">
                                Billing address
                            </h4>
                            <h4 className="font-font4 text-[12px] sm:text-sm">
                                Enter the billing address that matches your
                                payment method.
                            </h4>
                        </div>
                        <div className="grid grid-cols-2 gap-2 sm:gap-5 w-full">
                            <input
                                className="col-span-2 w-full border outline-none px-2 py-2 sm:py-3 rounded-[5px] bg-white font-font4 text-sm sm:text-base"
                                type="text"
                                placeholder="Country"
                            />
                            <input
                                className="col-span-1 w-full border outline-none px-2 py-2 sm:py-3 rounded-[5px] bg-white font-font4 text-sm sm:text-base"
                                type="text"
                                placeholder="First name"
                            />
                            <input
                                className="col-span-1 w-full border outline-none px-2 py-2 sm:py-3 rounded-[5px] bg-white font-font4 text-sm sm:text-base"
                                type="text"
                                placeholder="Last name"
                            />
                            <input
                                className="col-span-2 w-full border outline-none px-2 py-2 sm:py-3 rounded-[5px] bg-white font-font4 text-sm sm:text-base"
                                type="text"
                                placeholder="Address"
                            />
                            <p className="font-font4 text-[12px] sm:text-sm mt-3 sm:mt-6">
                                Add apartment, suite, etc.
                            </p>
                            <input
                                className="col-span-2 w-full border outline-none px-2 py-2 sm:py-3 rounded-[5px] bg-white font-font4 text-sm sm:text-base"
                                type="text"
                                placeholder="Appartment"
                            />
                            <input
                                className="col-span-1 w-full border outline-none px-2 py-2 sm:py-3 rounded-[5px] bg-white font-font4 text-sm sm:text-base"
                                type="text"
                                placeholder="City"
                            />
                            <input
                                className="col-span-1 w-full border outline-none px-2 py-2 sm:py-3 rounded-[5px] bg-white font-font4 text-sm sm:text-base"
                                type="text"
                                placeholder="State"
                            />
                            <input
                                className="col-span-1 w-full border outline-none px-2 py-2 sm:py-3 rounded-[5px] bg-white font-font4 text-sm sm:text-base"
                                type="number"
                                placeholder="Postal code"
                            />
                            <input
                                className="col-span-1 w-full border outline-none px-2 py-2 sm:py-3 rounded-[5px] bg-white font-font4 text-sm sm:text-base"
                                type="number"
                                placeholder="Phone (optional)"
                            />
                        </div>
                        <div className="mt-8 sm:mt-10">
                            <h4 className="font-font5 pt-5 text-xl md:text-3xl mb-4">
                                Payment options
                            </h4>
                            <h4 className="border-[2px] w-full rounded-[5px] py-2 sm:py-3 px-2 cursor-pointer font-font4 text-sm">
                                Robokassa Payment
                            </h4>
                        </div>
                        <div className="lg:block hidden pt-12 pb-5">
                            <p className="font-font4 text-[12px] sm:text-sm mt-10">
                                By proceeding with your purchase you agree to
                                our Terms and Conditions and Privacy Policy
                            </p>
                            <div className="flex justify-between items-center mt-10 sm:mt-14">
                                <div className="flex justify-center items-center flex-wrap gap-2">
                                    <span className="block w-5 rotate-180">
                                        <img
                                            src="/Images/Icons/right-arrow.png"
                                            alt=""
                                        />
                                    </span>
                                    <Link
                                        to
                                        className="font-font4 text-sm sm:text-base"
                                    >
                                        Return to Cart
                                    </Link>
                                </div>
                                <button className="bg-[#000] text-[12px] sm:text-sm text-white px-4 py-3 w-[55%] cursor-pointer uppercase font-font5">
                                    Place order
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[40%] xl:w-[38%] 2xl:w-[32%]">
                        <p className="font-font5 capitalize text-xl md:text-3xl mt-5 pb-3 block lg:hidden">
                            Order summary
                        </p>
                        <div className="border ">
                            <div className="py-4 md:py-5 lg:py-4 border-b flex justify-between font-font4 text-sm md:text-base items-center">
                                <div className="w-full">
                                    <p className="font-font4 text-sm md:text-base px-4 lg:block hidden">
                                        Order summary
                                    </p>
                                    <div className="">
                                        <div className="pb-10 lg:pb-12 pt-5 lg:pt-14 px-4 flex flex-col gap-8">
                                            {cart.map(
                                                ({
                                                    id,
                                                    title,
                                                    price,
                                                    slug,
                                                    image,
                                                }) => {
                                                    return (
                                                        <div
                                                            key={id}
                                                            className="flex items-start justify-between"
                                                        >
                                                            <div className="flex items-start gap-5">
                                                                <Link
                                                                    to={`/shop/${slug[1]}/${title}/`}
                                                                    className="w-[70px] relative"
                                                                >
                                                                    <img
                                                                        src={
                                                                            image
                                                                        }
                                                                        alt=""
                                                                    />
                                                                    <span className="w-4 h-4 rounded-full bg-black absolute top-[-5px] right-[-5px] text-white flex items-center justify-center text-[9px] font-font5 leading-none">
                                                                        1
                                                                    </span>
                                                                </Link>
                                                                <div className="flex flex-col gap-1">
                                                                    <p>
                                                                        {title}
                                                                    </p>
                                                                    <p>
                                                                        {price}{" "}
                                                                        ₽
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <p>{price} ₽</p>
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </div>
                                        <button
                                            onClick={() =>
                                                setcheckOutPageAccordianOpen(
                                                    !checkOutPageAccordianOpen
                                                )
                                            }
                                            className="flex items-center justify-between w-full cursor-pointer px-4"
                                        >
                                            <span className="block font-font4 text-sm md:text-base">
                                                Add a coupon
                                            </span>
                                            <div className="w-3 sm:w-4 h-3 sm:h-4 relative">
                                                <span
                                                    className={`transition-all ease-in-out duration-300 block rounded-full ${
                                                        checkOutPageAccordianOpen
                                                            ? "rotate-180"
                                                            : "rotate-0"
                                                    }`}
                                                >
                                                    <img
                                                        src="/Images/Icons/down-arrow.png"
                                                        alt=""
                                                    />
                                                </span>
                                            </div>
                                        </button>
                                        <div
                                            className={`grid overflow-hidden transition-all duration-300 ease-in-out w-full  ${
                                                checkOutPageAccordianOpen
                                                    ? "grid-rows-[1fr]"
                                                    : "grid-rows-[0fr]"
                                            }`}
                                        >
                                            {/*  */}
                                            <div className="overflow-hidden font-font3 leading-[25px] w-full">
                                                <div className="w-full flex gap-4 items-center justify-between px-4">
                                                    <input
                                                        type="text"
                                                        className="w-full border outline-none py-2 pl-2 bg-white mt-4 lg:mt-2"
                                                        placeholder="Enter code"
                                                    />
                                                    <button className="bg-[#000] text-white px-4 py-2  mt-4 lg:mt-2 ">
                                                        Apply
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                            </div>
                            <div className="py-4 md:py-5 lg:py-4 px-4 border-b flex justify-between font-font4 text-sm md:text-base">
                                <h4>Subtotal:</h4>
                                <h4>{categoryprice} ₽</h4>
                            </div>
                            <div className="py-4 md:py-5 lg:py-4 px-4 flex justify-between font-font4 text-sm md:text-base">
                                <h4>Total:</h4>
                                <h4>{categoryprice} ₽</h4>
                            </div>
                        </div>
                        <div className="block lg:hidden pt-5">
                            <p className="font-font4 text-[12px] sm:text-sm mt-6 md:dmt-10">
                                By proceeding with your purchase you agree to
                                our Terms and Conditions and Privacy Policy
                            </p>
                            <div className="flex justify-between items-center mt-10 sm:mt-14">
                                <div className="flex justify-center items-center flex-wrap gap-2">
                                    <span className="block w-4 sm:w-5 rotate-180">
                                        <img
                                            src="/Images/Icons/right-arrow.png"
                                            alt=""
                                        />
                                    </span>
                                    <Link
                                        to="/cart/"
                                        className="font-font4 text-[12px] sm:text-sm md:text-base"
                                    >
                                        Return to Cart
                                    </Link>
                                </div>
                                <button className="bg-[#000] text-[12px] md:text-sm text-white px-4 py-3 w-[55%] cursor-pointer uppercase font-font5">
                                    Place order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </Inner>
    );
};

export default CheckOut;
