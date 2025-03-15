import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const SideCart = ({ openCart, setopenCart }) => {
    return (
        <div className="">
            <div
                className={`overlay w-full h-screen bg-[#0000008c] fixed top-0 left-0 z-[99] duration-500 transition-all ease-in-out ${
                    openCart ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            ></div>
            <div
                className={`w-full sm:w-[600px] h-screen fixed top-0 right-0 z-[999] bg-[#D6DBE0] transition-all ease-in-out duration-500 px-5 origin-right-center sm:px-7 pb-8 flex flex-col justify-between ${
                    openCart ? "translate-x-0 opacity-100" : "translate-x-[100%] opacity-0"
                }`}
            >
                <div className="flex justify-between items-center gap-[2vw] w-full mb-8 sm:mb-[2vw] sm:px-0 border-b py-3">
                    <h2 className="uppercase text-sm font-font5">Cart</h2>
                    <span
                        onClick={() => setopenCart(false)}
                        className="cursor-pointer text-2xl"
                    >
                        <IoCloseSharp />
                    </span>
                </div>
                <div className="min-h-[50%] flex justify-center items-center">
                    <div className="">
                        <h4 className="font-font5 text-lg sm:text-[26px] mb-5 text-center">
                            No products in the cart.
                        </h4>
                        <Link className="py-3 text-center px-8 bg-black rounded-[5px] uppercase text-[12px] sm:text-sm block font-font5 text-white">
                            View cart
                        </Link>
                    </div>
                </div>
                <div className="pt-5 border-t border-[#C0C5C9]">
                    <div className="flex justify-between w-full pb-5 font-font4 capitalize text-lg">
                        <p>Subtotal:</p>
                        <p>0 ₽</p>
                    </div>
                    <div className="flex gap-3 w-full text-white font-font5">
                        <Link className="py-3 text-center bg-black rounded-[5px] w-full uppercase text-[12px] sm:text-sm">
                            View cart
                        </Link>
                        <Link className="py-3 text-center bg-black rounded-[5px] w-full uppercase text-[12px] sm:text-sm">
                            Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideCart;
