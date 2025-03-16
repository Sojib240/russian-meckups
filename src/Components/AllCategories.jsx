import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const AllCategories = () => {
    const AllCategoriesSectionData = [
        {
            id: 1,
            image: "/Images/All-catagories/allCatagories-1.jpg",
            title: "billboards",
            direction: "/product-category/billboards/",
        },
        {
            id: 2,
            image: "/Images/All-catagories/allCatagories-2.jpg",
            title: "bus stops",
            direction: "/product-category/bus-stops/",
        },
        {
            id: 3,
            image: "/Images/All-catagories/allCatagories-3.jpg",
            title: "facades",
            direction: "/product-category/facades/",
        },
        {
            id: 4,
            image: "/Images/All-catagories/allCatagories-4.jpg",
            title: "posters",
            direction: "/product-category/posters/",
        },
        {
            id: 5,
            image: "/Images/All-catagories/allCatagories-5.jpg",
            title: "pylons",
            direction: "/product-category/pylons/",
        },
        {
            id: 6,
            image: "/Images/All-catagories/allCatagories-6.jpg",
            title: "signs",
            direction: "/product-category/signs/",
        },
    ];
    const textCardRef = useRef();
    useEffect(() => {
        const textCards = textCardRef.current.querySelectorAll(".card-text");
        textCards.forEach((textCard) => {
            // move
            textCard.addEventListener("mousemove", (e) => {
                const clientx = e.clientX;
                const clienty = e.clientY;
                const top = textCard.getBoundingClientRect().top;
                const left = textCard.getBoundingClientRect().left;
                gsap.set(textCard.querySelector(".card-image"), {
                    ease: "none",
                    left: clientx - left,
                    top: clienty - top,
                });
            });
            // enter
            textCard.addEventListener("mouseenter", () => {
                textCard.querySelector(".card-image").style.display = "block";
            });
            // leave
            textCard.addEventListener("mouseleave", () => {
                textCard.querySelector(".card-image").style.display = "none";
            });
        });
    }, []);
    return (
        <div className="w-full px-4 sm:px-[3vw] md:px-[4vw] lg:px-[5vw] pt-16 sm:pt-[4.5vw] overflow-hidden pb-18 sm:pb-[11vw] md:pb-[9vw] lg:pb-[9.5vw]">
            <h4 className="text-5xl sm:text-[10vw] tracking-[-0.6vw] font-font5 text-center">
                all
            </h4>
            <div
                ref={textCardRef}
                className="flex justify-center text-center flex-wrap text-3xl sm:text-4xl md:text-5xl lg:text-[4vw] leading-none font-font5 tracking-[-0.22vw] gap-x-5 sm:gap-x-0 mt-4 sm:mt-[1vw]"
            >
                {AllCategoriesSectionData.map(
                    ({ id, title, image, direction }) => {
                        return (
                            <Link
                                key={id}
                                to={direction}
                                className="relative card-text pl-0 sm:px-[2vw] py-[1vw]"
                            >
                                <h4 className="relative z-40">{title}</h4>
                                <div className="card-image w-[300px] h-[400px] hidden absolute top-1/2 pointer-events-none -translate-y-1/2 left-1/2 -translate-x-1/2 p-1 bg-orange-400">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={image}
                                        alt=""
                                    />
                                </div>
                            </Link>
                        );
                    }
                )}
            </div>
        </div>
    );
};

export default AllCategories;
