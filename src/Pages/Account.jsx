import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import Inner from "../Inner";
import NavBar from "../Components/Common/NavBar";

const Account = ({ openCart, setopenCart }) => {
    const [switchRegister, setswitchRegister] = useState(false);
    const loginLineRef = useRef();
    const registerLineRef = useRef();
    useEffect(() => {
        if (switchRegister == false) {
            gsap.to(loginLineRef.current, {
                scaleX: 1,
                ease: "power2.inOut",
                transformOrigin: "left",
                duration: 0.6,
            });
            gsap.to(registerLineRef.current, {
                scaleX: 0,
                ease: "power2.inOut",
                transformOrigin: "right",
                duration: 0.6,
            });
        } else {
            gsap.to(registerLineRef.current, {
                scaleX: 1,
                ease: "power2.inOut",
                transformOrigin: "left",
                duration: 0.6,
            });
            gsap.to(loginLineRef.current, {
                scaleX: 0,
                ease: "power2.inOut",
                transformOrigin: "right",
                duration: 0.6,
            });
        }
    }, [switchRegister]);

    return (
        <Inner>
            <NavBar openCart={openCart} setopenCart={setopenCart} />
            <div className="w-full pt-32 pb-20 md:pt-32 lg:pt-[10vw] md:pb-22 lg:pb-[10vw] xl:pt-[10vw] xl:pb-[10vw] relative z-50 bg-[#D6DBE0] px-4 sm:px-[3vw] md:px-[2vw] lg:px-[1.5vw]">
                <div className="max-w-[500px] lg:max-w-[600px] w-full py-2 mx-auto">
                    <div className="flex items-center justify-center text-[30px] md:text-[40px] lg:text-[60px] xl:text-[78px] tracking-[-1px] lg:tracking-[-3px] font-font5 gap-8 md:gap-10 lg:gap-16">
                        <button
                            className={`cursor-pointer text-[#A8ACB0] duration-200 transition-all ease-in-out hover:text-black relative`}
                            onClick={() => setswitchRegister(false)}
                        >
                            <span
                                className={`block ${
                                    !switchRegister ? "text-black" : ""
                                }`}
                            >
                                Login
                            </span>
                            <span
                                ref={loginLineRef}
                                className="block absolute bottom-0 left-0 w-full h-[1px] bg-black scale-x-0 origin-right"
                            ></span>
                        </button>
                        <button
                            className={`cursor-pointer text-[#A8ACB0] duration-200 transition-all ease-in-out hover:text-black relative`}
                            onClick={() => setswitchRegister(true)}
                        >
                            <span
                                className={`block ${
                                    switchRegister ? "text-black" : ""
                                }`}
                            >
                                Register
                            </span>
                            <span
                                ref={registerLineRef}
                                className="block absolute bottom-0 left-0 w-full h-[1px] bg-black scale-x-0 origin-right"
                            ></span>
                        </button>
                    </div>
                    <div className="py-5 mt-6 md:mt-6 lg:mt-5 xl:mt-10">
                        {switchRegister !== true ? (
                            <div className="w-full">
                                <div className="">
                                    <label
                                        className="block pb-1 font-font5 text-sm"
                                        htmlFor=""
                                    >
                                        Username or email address *
                                    </label>
                                    <input
                                        className="w-full border outline-none rounded-[5px] py-1 md:py-2 pl-2 bg-white"
                                        type="email"
                                        name=""
                                        id=""
                                    />
                                </div>
                                <div className="mt-4">
                                    <label
                                        className="block pb-1 font-font5 text-sm"
                                        htmlFor=""
                                    >
                                        Password *
                                    </label>
                                    <input
                                        className="w-full border outline-none rounded-[5px] py-1 md:py-2 pl-2 bg-white"
                                        type="password"
                                        name=""
                                        id=""
                                    />
                                </div>
                                <div className="mt-3 md:mt-5 flex gap-2 items-center">
                                    <input
                                        type="checkbox"
                                        name=""
                                        for="inputBox"
                                    />
                                    <label
                                        id="inputBox"
                                        className="font-font5 text-sm"
                                        htmlFor=""
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <button className="w-full border-[2px] border-black text-center font-font5 py-2 md:py-3 lg:py-3 text-[12px] md:text-sm cursor-pointer lg:text-base uppercase transition-all hover:bg-[#000] hover:text-white duration-200 mt-8 md:mt-12">
                                    log in
                                </button>
                                <p className="text-center mt-4 font-font5 text-[12px] md:text-sm cursor-pointer">
                                    Lost your password?
                                </p>
                            </div>
                        ) : (
                            <div className="">
                                <div className="">
                                    <label
                                        className="font-font5 text-sm pb-1 block"
                                        htmlFor=""
                                    >
                                        Email address *
                                    </label>
                                    <input
                                        className="w-full border outline-none rounded-[5px] py-1 md:py-2 pl-2 bg-white"
                                        type="email"
                                        name=""
                                        id=""
                                    />
                                </div>
                                <p className=" font-font4 mt-4 text-sm md:text-base">
                                    A link to set a new password will be sent to
                                    your email address.
                                </p>
                                <p className="mt-6 font-font4 text-sm md:text-base">
                                    Your personal data will be used to
                                    facilitate your further interaction with the
                                    site, manage access to your account and for
                                    other purposes described in the document.
                                    privacy policy.
                                </p>
                                <button className="w-full border-[2px] border-black text-center font-font5 py-2 md:py-3 lg:py-3 text-[12px] md:text-sm cursor-pointer lg:text-base uppercase transition-all hover:bg-[#000] hover:text-white duration-200 mt-10 md:mt-20">
                                    Register
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Inner>
    );
};

export default Account;
