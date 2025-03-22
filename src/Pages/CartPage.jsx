import React, { useContext, useEffect, useState } from "react";
import Inner from "../Inner";
import NavBar from "../Components/Common/NavBar";
import { CartDataContext } from "../Utils/CartContext";
import Footer from "../Components/Common/Footer";

const CartPage = ({ openCart, setopenCart }) => {
    const [cartPageAccordianOpen, setcartPageAccordianOpen] = useState(false);
    const [cart, setcart] = useContext(CartDataContext);
    // handle remove
    const handleRemove = (title) => {
        const filterForRemove = cart.filter((cartF) => cartF.title !== title);
        setcart(filterForRemove);
    };
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
            <NavBar openCart={openCart} setopenCart={setopenCart} />
            {cart.length == 0 ? (
                <div className="flex flex-col justify-center items-center pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-18 lg:pb-24 bg-[#D6DBE0] relative z-50">
                    <div className="w-[150px] sm:w-[210px] md:w-[250px] lg:w-[350px]">
                        <img className="w-full" src="/Images/Icons/empty-cart.svg" alt="" />
                    </div>
                    <h4 className="font-font5 text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4 sm:mt-4 md:mt-5 lg:mt-7 capitalize">cart is empty</h4>
                </div>
            ) : (
                <div className="px-4 sm:px-[3vw] md:px-[2vw] lg:px-[1.5vw] min-h-[80vh] bg-[#D6DBE0] pt-[70px] sm:pt-[80px] md:pt-[80px] lg:pt-[100px] relative z-50 flex flex-col lg:flex-row justify-between gap-5 lg:gap-[8vw] pb-[14vw] sm:pb-18 md:pb-[8vw] lg:pb-[6vw]">
                    <div className="w-full lg:w-[50%] xl:w-[55%] 2xl:w-[62%] ">
                        <div className="hidden md:flex justify-between items-center gap-5 text-xl lg:text-[28px] font-font5 border-b-none lg:border-b pb-3">
                            <h4>Product</h4>
                            <h4>Total</h4>
                        </div>
                        <div className="">
                            {cart.map(({ title, price, image, id }) => {
                                return (
                                    <div
                                        key={id}
                                        className="flex justify-between items-center lg:items-start py-2 sm:py-4 md:py-5 lg:py-7 border-b-none lg:border-b"
                                    >
                                        <div className="flex justify-between items-center gap-5">
                                            <div className="w-[80px] sm:w-[100px] md:w-[120px]">
                                                <img
                                                    className="w-full object-cover"
                                                    src={image}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="font-font4">
                                                <h4 className="text-sm md:text-base">
                                                    {title}
                                                </h4>
                                                <h4 className="mt-1 mb-1 text-sm md:text-base">
                                                    {price} ₽
                                                </h4>
                                                <button
                                                    onClick={() =>
                                                        handleRemove(title)
                                                    }
                                                    className="underline hover:no-underline cursor-pointer text-[12px] mt-2"
                                                >
                                                    Remove item
                                                </button>
                                            </div>
                                        </div>
                                        <h4 className="font-font4 text-sm md:text-base">
                                            {price} ₽
                                        </h4>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="w-full lg:w-[40%] xl:w-[35%] 2xl:w-[32%]">
                        <h4 className="font-font5 text-xl pt-5 lg:text-[28px] hidden md:block">
                            Cart Totals
                        </h4>
                        <div className="">
                            <div className="py-4 md:py-5 lg:py-4 border-b flex justify-between font-font4 text-sm md:text-base items-center">
                                <div className="border-t border-[#565759] w-full">
                                    <div className="pt-4">
                                        <button
                                            onClick={() =>
                                                setcartPageAccordianOpen(
                                                    !cartPageAccordianOpen
                                                )
                                            }
                                            className="flex items-center justify-between w-full cursor-pointer px-0 lg:px-4"
                                        >
                                            <span className="block font-font4 text-sm md:text-base">
                                                Add a coupon
                                            </span>
                                            <div className="w-3 sm:w-4 h-3 sm:h-4 relative">
                                                <span
                                                    className={`transition-all ease-in-out duration-300 block rounded-full ${
                                                        cartPageAccordianOpen
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
                                                cartPageAccordianOpen
                                                    ? "grid-rows-[1fr]"
                                                    : "grid-rows-[0fr]"
                                            }`}
                                        >
                                            {/*  */}
                                            <div className="overflow-hidden font-font3 leading-[25px] w-full">
                                                <div className="w-full flex gap-4 items-center justify-between">
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
                            <div className="py-4 md:py-5 lg:py-4 px-0 lg:px-4 border-b flex justify-between font-font4 text-sm md:text-base">
                                <h4>Subtotal:</h4>
                                <h4>{categoryprice} ₽</h4>
                            </div>
                            <div className="py-4 md:py-5 lg:py-4 px-0 lg:px-4 flex justify-between font-font4 text-sm md:text-base">
                                <h4>Total:</h4>
                                <h4>{categoryprice} ₽</h4>
                            </div>
                            <button className="uppercase font-font5 text-[12px] sm:text-sm py-3 sm:py-4 px-5 text-center border-[2px] w-full block bg-[#000] text-white hover:text-[#e7e7e7] border-black transition-all duration-150 cursor-pointer relative group">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </Inner>
    );
};

export default CartPage;
