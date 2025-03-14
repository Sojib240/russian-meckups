import React from "react";

const Footer = () => {
    return (
        <div>
            <div className="w-full footer-top mt-[13vw] relative">
                {/* <img
                    className="w-full object-cover"
                    src="/Images/footer-bg.jpg"
                    alt=""
                /> */}
                <div className="px-4 sm:px-[3vw] md:px-[2vw] lg:px-[1.5vw] flex flex-col-reverse md:flex-row items-start justify-between leading-[9vw]">
                    <h4 className="text-[4vw] leading-[4.3vw] md:text-[2vw] font-font5 w-[90%] md:w-[33%] md:leading-[2.4vw] pt-[2vw]">
                        For designers and agencies who want to achieve a
                        realistic context for the created brand identity
                    </h4>
                    <h3 className="font-font5 text-[10vw] pt-6 md:pt-0 text-left md:text-right w-[50%]">
                        present authentic
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Footer;
