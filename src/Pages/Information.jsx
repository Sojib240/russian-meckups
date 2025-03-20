import React, { useState } from "react";
import { Link } from "react-router-dom";

const Information = () => {
    const [accordianOpen, setaccordianOpen] = useState(0);
    const handleAccordian = (index) => {
        setaccordianOpen(accordianOpen === index ? 0 : index);
    }
    return (
        <div className="px-4 sm:px-[3vw] md:px-[2vw] lg:px-[1.5vw] bg-[#D6DBE0] relative z-50">
            <div className="flex items-start gap-[2vw] font-font3 leading-[30px] text-[17px] border-t">
                <div className="w-[40%] font-font5 text-[40px] py-22 lg:py-[120px] sticky top-0">
                    <h4>Frequently asked questions</h4>
                </div>
                <div className="w-[60%] py-22 lg:py-[120px]">
                    <div className="border-t border-[#565759]">
                        <div className="pt-2 sm:pt-3 md:pt-3 lg:pt-4">
                            <button
                                onClick={() => handleAccordian(1)}
                                className="flex items-center justify-between w-full mb-8 lg:mb-5 cursor-pointer"
                            >
                                <span className="block uppercase text-sm font-font5">
                                    From which countries can I purchase the
                                    product?
                                </span>
                                <div className="w-4 h-4 relative">
                                    <span className="w-full h-[1px] bg-black block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full" />
                                    <span
                                        className={`h-[1px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all ease-in-out duration-300 bg-black block rotate-90 rounded-full ${
                                            accordianOpen === 1 ? "w-0" : "w-full"
                                        }`}
                                    />
                                </div>
                            </button>
                            <div
                                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                                    accordianOpen===1
                                        ? "grid-rows-[1fr]"
                                        : "grid-rows-[0fr]"
                                }`}
                            >
                                {/*  */}
                                <div className="overflow-hidden font-font3 leading-[25px]">
                                    <p>
                                        Do I need to create an account to make a
                                        purchase?
                                    </p>

                                    <p className="pt-6 pb-6">
                                        If you’ve signed up for an account
                                        during checkout, just log in to your
                                        account and navigate to your purchases
                                        to re-download your mockups. In case you
                                        don’t have account, you’ll find the
                                        download link in your purchase
                                        confirmation email.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2 sm:pt-3 md:pt-3 lg:pt-4 border-t">
                            <button
                                onClick={() => handleAccordian(2)}
                                className="flex items-center justify-between w-full mb-8 lg:mb-5 cursor-pointer"
                            >
                                <span className="block uppercase text-sm font-font5">
                                Do I need to create an account to make a purchase?
                                </span>
                                <div className="w-4 h-4 relative">
                                    <span className="w-full h-[1px] bg-black block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full" />
                                    <span
                                        className={`h-[1px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all ease-in-out duration-300 bg-black block rotate-90 rounded-full ${
                                            accordianOpen === 2 ? "w-0" : "w-full"
                                        }`}
                                    />
                                </div>
                            </button>
                            <div
                                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                                    accordianOpen===2
                                        ? "grid-rows-[1fr]"
                                        : "grid-rows-[0fr]"
                                }`}
                            >
                                {/*  */}
                                <div className="overflow-hidden font-font3 leading-[25px]">
                                    <p className="pb-6">
                                    If you’ve signed up for an account during checkout, just log in to your account and navigate to your purchases to re-download your mockups. In case you don’t have account, you’ll find the download link in your purchase confirmation email.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2 sm:pt-3 md:pt-3 lg:pt-4 border-t">
                            <button
                                onClick={() => handleAccordian(3)}
                                className="flex items-center justify-between w-full mb-8 lg:mb-5 cursor-pointer"
                            >
                                <span className="block uppercase text-sm font-font5">
                                    Can I use these mockups for commercial
                                    projects?
                                </span>
                                <div className="w-4 h-4 relative">
                                    <span className="w-full h-[1px] bg-black block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full" />
                                    <span
                                        className={`h-[1px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all ease-in-out duration-300 bg-black block rotate-90 rounded-full ${
                                            accordianOpen === 3 ? "w-0" : "w-full"
                                        }`}
                                    />
                                </div>
                            </button>
                            <div
                                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                                    accordianOpen===3
                                        ? "grid-rows-[1fr]"
                                        : "grid-rows-[0fr]"
                                }`}
                            >
                                {/*  */}
                                <div className="overflow-hidden font-font3 leading-[25px]">
                                    <p className="pb-6">
                                        Yes! Our mockups come with a full
                                        commercial license so you can use it for
                                        a project of any scale.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2 sm:pt-3 md:pt-3 lg:pt-4 border-t">
                            <button
                                onClick={() => handleAccordian(4)}
                                className="flex items-center justify-between w-full mb-8 lg:mb-5 cursor-pointer"
                            >
                                <span className="block uppercase text-sm font-font5">
                                How do I receive the download files after making a purchase?
                                </span>
                                <div className="w-4 h-4 relative">
                                    <span className="w-full h-[1px] bg-black block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full" />
                                    <span
                                        className={`h-[1px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all ease-in-out duration-300 bg-black block rotate-90 rounded-full ${
                                            accordianOpen === 4 ? "w-0" : "w-full"
                                        }`}
                                    />
                                </div>
                            </button>
                            <div
                                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                                    accordianOpen===4
                                        ? "grid-rows-[1fr]"
                                        : "grid-rows-[0fr]"
                                }`}
                            >
                                {/*  */}
                                <div className="overflow-hidden font-font3 leading-[25px]">
                                    <p className="pb-6">
                                    Once you make the purchase you will receive an e-mail with the download links and downloads will also be always available on your account page.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2 sm:pt-3 md:pt-3 lg:pt-4 border-t">
                            <button
                                onClick={() => handleAccordian(5)}
                                className="flex items-center justify-between w-full mb-8 lg:mb-5 cursor-pointer"
                            >
                                <span className="block uppercase text-sm font-font5">
                                I did not receive the e-mail after the purchase
                                </span>
                                <div className="w-4 h-4 relative">
                                    <span className="w-full h-[1px] bg-black block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full" />
                                    <span
                                        className={`h-[1px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all ease-in-out duration-300 bg-black block rotate-90 rounded-full ${
                                            accordianOpen === 5 ? "w-0" : "w-full"
                                        }`}
                                    />
                                </div>
                            </button>
                            <div
                                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                                    accordianOpen===5
                                        ? "grid-rows-[1fr]"
                                        : "grid-rows-[0fr]"
                                }`}
                            >
                                {/*  */}
                                <div className="overflow-hidden font-font3 leading-[25px]">
                                    <p>
                                    E-mails are sent out automatically and if you have not receveid the e-mail the problem is wrongly inserted e-mail address or the e-mail is in your spam folder. If you have not received the e-mail please contact us at hey@russianmockups.shop and we will be happy to help you.
                                    </p>
                                    <p className="pt-6 pb-6">
                                    Also – all information about your purchase is available on your {' '} <Link to="/account" className="font-font5">account page.</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-start gap-[2vw] border-t">
                <div className="w-[40%] font-font5 text-[40px] py-16 lg:py-[60px] sticky top-0">
                    <h4>Refund policy</h4>
                </div>
                <div className="w-[60%] pr-[18vw] py-16 lg:py-[60px] font-font3 text-[17px] leading-[30px]">
                    <p>
                        Due to the nature of digital download products, we don't
                        accept refunds.
                    </p>
                    <div className="mt-6 font-font3 leading-[25px] text-[17px]">
                        <span>
                            However, if you're having problems with the product
                            or aren't completely satisfied, please contact us
                            and we'll do our best to assist you.Any questions
                            regarding returns should be directed to
                        </span>{" "}
                        <span className="block font-font5">
                            hey@russianmockups.shop
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex items-start gap-[2vw] border-t">
                <div className="w-[40%] font-font5 text-[40px] py-16 lg:py-[60px] sticky top-0">
                    <h4>License terms</h4>
                </div>
                <div className="w-[60%] pr-[18vw] overflow-hidden font-font3 leading-[25px] text-[17px] py-16 lg:py-[60px]">
                    <p>
                        These license terms (the “License”) govern the use of
                        digital mockup products (“Products”) provided by Russian
                        Mockups. By accessing or using the Products, you
                        ('Licensee') agree to be bound by the terms and
                        conditions set forth in this License.
                    </p>
                    <h4 className="py-6 font-font5">1. Grant of License:</h4>
                    <p>
                        Russian Mockups grants the Licensee a non-exclusive,
                        non-transferable license to use the Products for
                        personal or commercial purposes, subject to the
                        restrictions outlined below.
                    </p>
                    <h4 className="py-6 font-font5">
                        2. Intellectual Property:
                    </h4>
                    <h4 className="font-font5 pb-1">Ownership:</h4>
                    <p>
                        The Licensee acknowledges and agrees that Russian
                        Mockups retains all rights, title, and interest in and
                        to the Products. The Licensee does not acquire any
                        ownership rights in the Products.
                    </p>
                    <h4 className="pt-6 font-font5 pb-1">Restrictions:</h4>
                    <p>
                        The Licensee shall not sell, distribute, sublicense, or
                        otherwise transfer the Products to any third party,
                        whether for financial gain or otherwise.
                    </p>
                    <h4 className="py-6 font-font5">3. Permitted Usage:</h4>
                    <p>
                        The Licensee is authorized to use the Products in the
                        following manner: <br />
                        Incorporate the Products into personal or commercial
                        projects. Display, advertise, or promote the Products as
                        part of the Licensee's own work. <br />
                        Modify the Products to fit the Licensee's project
                        requirements.
                    </p>
                    <h4 className="py-6 font-font5">4. Prohibited Usage:</h4>
                    <p className="pb-6">
                        The Licensee is expressly prohibited from:
                    </p>
                    <p>
                        Selling, reselling, distributing, or sublicensing the
                        Products, in whole or in part, to any third party.{" "}
                        <br />
                        Making the Products available on any platform,
                        marketplace, or repository for download or
                        redistribution. <br />
                        Using the Products in a manner that infringes upon the
                        rights of any third party. <br />
                        Using the Products in a way that is defamatory, obscene,
                        or violates any applicable laws or regulations.
                    </p>
                    <h4 className="py-6 font-font5">
                        5. Warranty and Liability:
                    </h4>
                    <h4 className="font-font5 pb-1">Warranty:</h4>
                    <p>
                        Russian Mockups provides the Products “as is” without
                        any warranties, whether expressed or implied. The
                        Licensee acknowledges that the Products may not be
                        error-free or uninterrupted.
                    </p>
                    <h4 className="font-font5 pt-6 pb-1">
                        Limitation of Liability:
                    </h4>
                    <p>
                        In no event shall Russian Mockups be liable for any
                        direct, indirect, incidental, consequential, or special
                        damages arising out of or in connection with the use of
                        the Products.
                    </p>
                    <h4 className="py-6 font-font5">6. Governing Law:</h4>
                    <p>
                        This License shall be governed by and construed in
                        accordance with the laws of Russian Federation. Any
                        disputes arising from this License shall be subject to
                        the exclusive jurisdiction of the courts in Russian
                        Federation.
                    </p>
                    <p className="py-6">
                        By accessing or using the Products, the Licensee
                        acknowledges that they have read, understood, and agreed
                        to the terms and conditions of this License.
                    </p>
                </div>
            </div>
            <div className="flex items-start gap-[2vw] border-t">
                <div className="w-[40%] font-font5 text-[40px] py-16 lg:py-[60px] sticky top-0">
                    <h4>Privacy policy</h4>
                </div>
                <div className="w-[60%] pr-[18vw] overflow-hidden font-font3 leading-[25px] text-[17px] py-16 lg:py-[60px]">
                    <div>
                        <p>
                            Protecting your private information is our priority.
                            This Privacy Policy applies to{" "}
                            <span className="font-font5">
                                russianmockups.shop
                            </span>{" "}
                            and governs data collection and usage. By using the
                            Russian Mockups website, you consent to the data
                            practices described in this statement.
                        </p>
                    </div>
                    <p className="py-6 font-font5">
                        Collection of your Personal Information
                    </p>
                    <p>
                        In order to better provide you with products and
                        services offered on our Site, Russian Mockups may
                        collect personally identifiable information, such as
                        your:
                    </p>
                    <div className="py-6">
                        <p>– First and Last Name</p>
                        <p>– E-mail Address</p>
                        <p>– Billing address</p>
                    </div>
                    <p>
                        If you purchase products and services from Russian
                        Mockups, we collect billing and payment information to
                        complete the transaction. It’s important to note that
                        billing information, including credit card details, is
                        collected and securely processed by third-party payment
                        processors. These payment processors have their own
                        privacy policies and security measures in place, and
                        they retain billing information according to their
                        policies. We do not store or have access to your billing
                        information.
                    </p>
                    <p className="py-6">
                        We do not collect personal information unless
                        voluntarily provided. However, certain services may
                        require the submission of personal information, such as
                        creating an account, participating in promotions, or
                        making purchases.
                    </p>
                    <h4 className="font-font5 pb-6">
                        Use of your Personal Information
                    </h4>
                    <p>
                        Russian Mockups collects and uses your personal
                        information to operate its website and deliver requested
                        services. We may also use your information to inform you
                        about other products or services available from Russian
                        Mockups and its affiliates.
                    </p>
                    <h4 className="pt-6 font-font5 pb-6">
                        Sharing Information with Third Parties
                    </h4>
                    <p>
                        Russian Mockups does not sell, rent, or lease customer
                        information to third parties. We may share data with
                        trusted partners to perform statistical analysis, send
                        email or postal mail, provide customer support, or
                        arrange deliveries. Third parties are prohibited from
                        using your personal information except to provide these
                        services to Russian Mockups. We may also disclose your
                        personal information if required by law or to protect
                        our rights or safety.
                    </p>
                    <p className="py-6">Tracking User Behavior</p>
                    <p>
                        Russian Mockups may track user activity on our website
                        to determine popular services and customize content and
                        advertising based on user interests.
                    </p>
                    <h4 className="py-6 font-font5">
                        Automatically Collected Information
                    </h4>
                    <p>
                        We automatically collect information about your computer
                        hardware and software, including IP address, browser
                        type, domain names, access times, and referring website
                        addresses. This data is used for service operation,
                        quality maintenance, and general usage statistics.
                    </p>
                    <h4 className="py-6 font-font5">Use of Cookies</h4>
                    <p className="pb-6">
                        The Russian Mockups website may use cookies to enhance
                        your online experience. Cookies are text files placed on
                        your computer’s hard drive and can only be read by our
                        web server. They simplify tasks like saving personalized
                        information for future visits.
                    </p>
                    <h4 className="font-font5">Changes to this Statement</h4>
                    <p className="py-6">
                        Russian Mockups reserves the right to change this
                        Privacy Policy. Significant changes will be communicated
                        via email and on our site. Your continued use of the
                        site after modifications implies acknowledgment and
                        agreement with the updated policy.
                    </p>
                </div>
            </div>
            <div className="flex items-start gap-[2vw] border-t">
                <div className="w-[40%] font-font5 text-[40px] py-16 lg:py-[60px] sticky top-0">
                    <h4 className="">Contact information</h4>
                </div>
                <div className="w-[60%] pr-[18vw] overflow-hidden font-font3 leading-[25px] text-[17px] py-16 lg:py-[60px]">
                    <div className="">
                        <p className="font-font5">Email</p>
                        <p>hey@russianmockups.shop</p>
                    </div>
                    <div className="py-6">
                        <p className="font-font5">Instagram</p>
                        <p>@russianmockups</p>
                    </div>
                    <div className="">
                        <p className="font-font5">Trade name</p>
                        <p> Russian Mockups</p>
                        <p>IP Markovsky Artem Michailovich</p>
                        <p>OGRNIP 314774602001168</p>
                    </div>
                </div>
            </div>
            <div className="flex items-start gap-[2vw] border-t">
                <div className="w-[40%] font-font5 text-[40px] py-16 lg:py-[60px] sticky top-0">
                    <h4 className="">Public Offer Agreement</h4>
                </div>
                <div className="w-[60%] pr-[18vw] overflow-hidden font-font3 leading-[25px] text-[17px] py-16 lg:py-[60px]">
                    <div className="">
                        <p className="font-font5">
                            Public Offer Agreement / Договор публичной оферты
                        </p>
                        <p>Download PDF</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;
