import React, { useContext, useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CartDataContext } from "../../Utils/CartContext";

const SideCart = ({ openCart, setopenCart }) => {
    const [cart, setcart] = useContext(CartDataContext);
    // handle remove
    const handleRemove = (title) => {
        const filterForRemove = cart.filter((cartF) => cartF.title !== title);
        setcart(filterForRemove);
    };
    // handle price
    const [Price, setPrice] = useState(0);
    const handlePrice = () => {
        var priceing = 0;

        cart.map((product) => {
            priceing += 1 * product.price;
            setPrice(priceing);
        });
        if (cart.length == 0) {
            setPrice(0);
        }
    };
    useEffect(() => {
        handlePrice();
    });

    return (
        <div className="">
            <div
                onClick={() => setopenCart(false)}
                className={`w-full h-svh bg-[#0000008c] fixed top-0 left-0 z-[99999] duration-500 transition-all ease-in-out ${
                    openCart ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            ></div>
            <div
                className={`w-full sm:w-[600px] h-screen fixed top-0 right-0 z-[99999] bg-[#D6DBE0] transition-all ease-in-out duration-500 px-5 origin-right-center sm:px-7 pb-8 flex flex-col ${
                    openCart
                        ? "translate-x-0 scale-x-100 opacity-100"
                        : "translate-x-[100%] opacity-0 scale-x-0"
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
                <div
                    className={`cartMain h-full overflow-x-hidden overflow-y-scroll z-[999]  ${
                        cart.length == 0 ? "justify-center" : "justify-start"
                    } flex flex-col items-center `}
                >
                    {!cart.length == 0 ? (
                        cart.map(
                            ({ id, title, price, image, image2, slug }) => {
                                return (
                                    <div
                                        key={id}
                                        className="cart-card flex flex-row justify-between items-center gap-3 sm:gap-6 w-full border-b border-[#C0C5C9] mb-4 pb-4 pr-2"
                                    >
                                        <div className="">
                                            <Link
                                                onClick={() =>
                                                    setopenCart(false)
                                                }
                                                to={`/shop/${slug[1]}/${title}/`}
                                                className="block w-[80px]"
                                            >
                                                <img
                                                    className="w-full"
                                                    src={image}
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex flex-wrap justify-between items-center w-full gap-x-5 gap-y-2">
                                            <p className="font-font5 uppercase text-sm">
                                                {title}
                                            </p>
                                            <div className="">
                                                <p className="font-font5 uppercase flex justify-between items-center gap-1 text-lg">
                                                    {price}{" "}
                                                    <span className="text-sm">
                                                        ₽
                                                    </span>
                                                </p>
                                                <button
                                                    onClick={() =>
                                                        handleRemove(title)
                                                    }
                                                    className="capitalize font-font4 text-[12px] block cursor-pointer"
                                                >
                                                    remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        )
                    ) : (
                        <div className="">
                            <h4 className="font-font5 text-lg sm:text-[26px] mb-5 text-center">
                                No products in the cart.
                            </h4>
                            <Link
                                onClick={() => setopenCart(false)}
                                to={"/product-category/all-mockups/"}
                                className="py-3 text-center px-8 bg-black rounded-[5px] uppercase text-[12px] sm:text-sm block font-font5 text-white"
                            >
                                Go to shop
                            </Link>
                        </div>
                    )}
                </div>
                <div className="pt-5 border-t border-[#C0C5C9]">
                    <div className="flex justify-between w-full pb-5 font-font4 capitalize text-lg">
                        <p>Subtotal:</p>
                        <p>{Price} ₽</p>
                    </div>
                    <div className="flex gap-3 w-full text-white font-font5">
                        <Link
                            onClick={() => {cart.length == 0 ? setopenCart(true) : setopenCart(false)}}
                            to={cart.length == 0 ? "" : "/cart/"}
                            className={`py-3 text-center bg-black rounded-[5px] w-full uppercase text-[12px] sm:text-sm ${cart.length == 0 ? "cursor-not-allowed" : "cursor-pointer"}`}
                        >
                            View cart
                        </Link>
                        <Link
                            onClick={() => {cart.length == 0 ? setopenCart(true) : setopenCart(false)}}
                            to={cart.length == 0 ? "" : "/checkout/"}
                        className={`py-3 text-center bg-black rounded-[5px] w-full uppercase text-[12px] sm:text-sm ${cart.length == 0 ? "cursor-not-allowed" : "cursor-pointer"}`}>
                            Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideCart;
