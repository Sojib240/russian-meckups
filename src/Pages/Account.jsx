import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const Account = () => {
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
        <div className="py-[10vw] w-full relative z-50 bg-[#D6DBE0]">
            <div className="max-w-[600px] mx-auto py-2">
                <div className="flex items-center justify-center text-[78px] tracking-[-3px] font-font5 gap-16">
                    <button
                        className={`cursor-pointer text-[#A8ACB0] duration-200 transition-all ease-in-out hover:text-black relative`}
                        onClick={() => setswitchRegister(false)}
                    >
                        <span className={`block ${!switchRegister ? "text-black" : ""}`}>Login</span>
                        <span
                            ref={loginLineRef}
                            className="block absolute bottom-0 left-0 w-full h-[1px] bg-black scale-x-0 origin-right"
                        ></span>
                    </button>
                    <button
                        className={`cursor-pointer text-[#A8ACB0] duration-200 transition-all ease-in-out hover:text-black relative`}
                        onClick={() => setswitchRegister(true)}
                    >
                        <span className={`block ${switchRegister ? "text-black" : ""}`}>Register</span>
                        <span
                            ref={registerLineRef}
                            className="block absolute bottom-0 left-0 w-full h-[1px] bg-black scale-x-0 origin-right"
                        ></span>
                    </button>
                </div>
                <div className="py-5 mt-10">
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
                                    className="w-full border outline-none rounded-[5px] py-2 pl-2 bg-white"
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
                                    className="w-full border outline-none rounded-[5px] py-2 pl-2 bg-white"
                                    type="password"
                                    name=""
                                    id=""
                                />
                            </div>
                            <div className="mt-5 flex gap-2 items-center">
                                <input type="checkbox" name="" for="inputBox" />
                                <label
                                    id="inputBox"
                                    className="font-font5 text-sm"
                                    htmlFor=""
                                >
                                    Remember me
                                </label>
                            </div>
                            <button className="w-full border-[2px] border-black text-center font-font5 py-1 sm:py-2 md:py-3 lg:py-3 text-[12px] md:text-sm cursor-pointer lg:text-base uppercase transition-all hover:bg-[#000] hover:text-white duration-200 mt-12">
                                log in
                            </button>
                            <p className="text-center mt-4 font-font5 text-sm cursor-pointer">
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
                                    className="w-full border outline-none rounded-[5px] py-2 pl-2 bg-white"
                                    type="email"
                                    name=""
                                    id=""
                                />
                            </div>
                            <p className=" font-font4 mt-4">
                                A link to set a new password will be sent to
                                your email address.
                            </p>
                            <p className="mt-6 font-font4">
                                Your personal data will be used to facilitate
                                your further interaction with the site, manage
                                access to your account and for other purposes
                                described in the document. privacy policy.
                            </p>
                            <button className="w-full border-[2px] border-black text-center font-font5 py-1 sm:py-2 md:py-3 lg:py-3 text-[12px] md:text-sm cursor-pointer lg:text-base uppercase transition-all hover:bg-[#000] hover:text-white duration-200 mt-20">
                                log in
                            </button>
                        </div>
                    )}
                    {/* <div className="w-full">
                        <div className="">
                            <label htmlFor="">
                                Username or email address *
                            </label>
                            <input
                                className="w-full border outline-none"
                                type="email"
                                name=""
                                id=""
                            />
                        </div>
                        <div className="">
                            <label htmlFor="">password *</label>
                            <input
                                className="w-full border outline-none"
                                type="password"
                                name=""
                                id=""
                            />
                        </div>
                        <div className="">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">remember me</label>
                        </div>
                        <button className="w-full border-[2px] border-black text-center font-font5 py-1 sm:py-2 md:py-3 lg:py-3 text-[12px] md:text-sm cursor-pointer lg:text-base uppercase transition-all hover:bg-[#000] hover:text-white duration-200">
                            log in
                        </button>
                        <p>Lost your password?</p>
                    </div> */}

                    {/* <div className="">
                        <div className="">
                            <label htmlFor="">Email address *</label>
                            <input className="w-full border border-black outline-none" type="email" name="" id="" />
                        </div>
                        <p>
                            A link to set a new password will be sent to your
                            email address.
                        </p>
                        <p>
                            Your personal data will be used to facilitate your
                            further interaction with the site, manage access to
                            your account and for other purposes described in the
                            document. privacy policy.
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Account;
