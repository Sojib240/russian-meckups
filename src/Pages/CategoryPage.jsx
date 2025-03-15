import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productContext } from "../Utils/Context";

const CategoryPage = () => {
    const [productsApiData] = useContext(productContext);
    const { param } = useParams();
    const { productsDetails } = productsApiData;
    const [newCategoriesData, setnewCategoriesData] = useState();
    const [shopTitle, setshopTitle] = useState("");

    document.title = `${shopTitle} - Russian Mockups`;
    // filter data
    useEffect(() => {
        const handleCategoriesFilter = () => {
            const filter =
                productsDetails &&
                productsDetails.filter((p) => {
                    if (Array.isArray(p.slug)) {
                        return p.slug.includes(param);
                    }
                    return p.slug === param;
                });
            setnewCategoriesData(filter);
            const cleanedSlug = param.replace(/-/g, " ");
            setshopTitle(cleanedSlug);
        };
        handleCategoriesFilter();
    }, [param, productsDetails]);

    return (
        <div className="px-4 sm:px-[3vw] md:px-[2vw] lg:px-[1.5vw] bg-[#D6DBE0] pt-18 lg:pt-10">
            <h2 className="font-font5 text-4xl sm:text-[42px] lg:text-[10vw] tracking-[-2px] sm:tracking-[-0.4vw] pb-3 lg:pb-8">
                {shopTitle}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-2 sm:gap-[3vw] md:gap-[2vw] lg:gap-[1.5vw]">
                {newCategoriesData &&
                    newCategoriesData.map(({ id, title, image, image2,slug }) => {
                        return (
                            <div key={id} className="select-none w-full group">
                                <div className="border relative overflow-hidden cursor-pointer">
                                    <Link to={`/shop/${slug[1]}/${title}/`}>
                                        <img
                                            className="w-full h-auto"
                                            src={image2}
                                            alt=""
                                        />
                                    </Link>
                                    <Link to={`/shop/${slug[1]}/${title}/`} className="absolute group-hover:opacity-0 group-hover:invisible top-0 left-0 right-0 bottom-0 opacity-100 visible duration-300 transition-all block">
                                        <img
                                            className="w-full h-auto"
                                            src={image}
                                            alt=""
                                        />
                                    </Link>
                                    <div className="border-t absolute bottom-0 left-0 w-full text-center font-font5 py-1 sm:py-2 md:py-3 lg:py-3 text-[12px] md:text-sm lg:text-base bg-[#D6DBE0] uppercase opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all hover:bg-[#FEE69D] duration-200">
                                        add to cart
                                    </div>
                                </div>
                                <div className="font-font4 pt-2 sm:mt-[0.4vw]">
                                    <p className="uppercase text-sm sm:text-lg">
                                        {title}
                                    </p>
                                    <p className="text-[12px] lg:text-base">
                                        999 ₽
                                    </p>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default CategoryPage;
