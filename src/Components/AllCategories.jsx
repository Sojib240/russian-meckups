import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const AllCategories = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoveredImage, sethoveredImage] = useState();
    const AllCategoriesSectionData = [
        {
            id: 1,
            image: "/Images/All-catagories/allCatagories-1.jpg",
            title: "devices",
            direction: "/product-category/devices/",
        },
        {
            id: 2,
            image: "/Images/All-catagories/allCatagories-2.jpg",
            title: "billboards",
            direction: "/product-category/billboards/",
        },
        {
            id: 3,
            image: "/Images/All-catagories/allCatagories-3.jpg",
            title: "bus stops",
            direction: "/product-category/bus-stops/",
        },
        {
            id: 4,
            image: "/Images/All-catagories/allCatagories-4.jpg",
            title: "facades",
            direction: "/product-category/facades/",
        },
        {
            id: 5,
            image: "/Images/All-catagories/allCatagories-5.jpg",
            title: "posters",
            direction: "/product-category/posters/",
        },
        {
            id: 6,
            image: "/Images/All-catagories/allCatagories-6.jpg",
            title: "pylons",
            direction: "/product-category/pylons/",
        },
        {
            id: 7,
            image: "/Images/All-catagories/allCatagories-7.jpg",
            title: "signs",
            direction: "/product-category/signs/",
        },
    ];
    const textCardRef = useRef();
    const blueRef = useRef();
    const chieldRef = useRef([]);
    var isHovered = false;
    // move
    const handleMouseMoveFunction = (e) => {
        const top = textCardRef.current.getBoundingClientRect().top;
        const left = textCardRef.current.getBoundingClientRect().left;
        const Xposition = e.clientX;
        const Yposition = e.clientY;
        setMousePosition({ x: Xposition, y: Yposition });
        gsap.to(blueRef.current, {
            ease: "power2.out",
            left: Xposition - left,
            top: Yposition - top,
        });
    };
    // enter
    const handleEnterFunction = (e) => {
        isHovered = true;
        const hoveredId = parseInt(e.currentTarget.getAttribute("data-id")); // Get the item's id
        const hoveredData = AllCategoriesSectionData.find(
            (item) => item.id === hoveredId
        ); // Find the corresponding data

        if (isHovered) {
            sethoveredImage(hoveredData.image);

            gsap.set(blueRef.current, {
                ease: "none",
                left:
                    e.clientX -
                    textCardRef.current.getBoundingClientRect().left,
                top:
                    e.clientY - textCardRef.current.getBoundingClientRect().top,
            });
            gsap.to(blueRef.current, {
                ease: "none",
                duration: 0.1,
                opacity: 1,
            });
        }
    };
    // leave
    const handleMouseLeave = () => {
        isHovered = false;
        if (!isHovered) {
            gsap.to(blueRef.current, {
                ease: "none",
                duration: 0.1,
                opacity: 0,
            });
        }
    };

    useEffect(() => {
        textCardRef.current.addEventListener(
            "mousemove",
            handleMouseMoveFunction
        );

        chieldRef.current.forEach((child) => {
            child.addEventListener("mouseenter", handleEnterFunction);
        });
        chieldRef.current.forEach((child) => {
            child.addEventListener("mouseleave", handleMouseLeave);
        });
    }, []);

    return (
        <div className="w-full px-4 sm:px-[3vw] md:px-[4vw] lg:px-[5vw] pt-10 sm:pt-20 md:pt-[8vw] lg:pt-[4.5vw] overflow-hidden pb-14 sm:pb-[11vw] md:pb-[9vw] lg:pb-[9.5vw] relative z-50 bg-[#D6DBE0]">
            <h4 className="text-6xl sm:text-[10vw] tracking-[-0.6vw] font-font5 text-center">
                all
            </h4>
            <div
                ref={textCardRef}
                className="flex justify-center text-center flex-wrap text-3xl sm:text-4xl md:text-5xl lg:text-[4vw] leading-none font-font5 tracking-[-0.22vw] gap-x-5 sm:gap-x-0 mt-4 sm:mt-[1vw] relative"
            >
                <div
                    ref={blueRef}
                    className="w-[300px] h-[320px] absolute top-1/2 left-1/2 -translate-1/2 pointer-events-none opacity-0"
                >
                    <img
                        src={hoveredImage}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                {AllCategoriesSectionData.map(
                    ({ id, title, image, direction }) => {
                        return (
                            <Link
                                key={id}
                                to={direction}
                                data-id={id}
                                ref={(el) => (chieldRef.current[id] = el)}
                                className="relative card-text group pl-0 px-0 sm:px-[3vw] lg:px-[2vw] py-[2vw] xl:py-[1vw]"
                            >
                                <div className="inline-block relative">
                                    <span className="block z-40 pb-1">
                                        {title}
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black scale-x-0 origin-right transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>
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
