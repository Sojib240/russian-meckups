import React, { useContext, useState } from "react";
import Hero from "../Components/Hero";
import Empty from "../Components/Empty";
import BestSellers from "../Components/BestSellers";
import NewOnes from "../Components/NewOnes";
import Payments from "../Components/Payments";
import { productContext } from "../Utils/Context";
import MarqueeSection from "../Components/MarqueeSection";

const Home = () => {
    // const [mockupsApiData] = useContext(productContext);
    // console.log(mockupsApiData);

    return (
        <div className="bg-[#D6DBE0] min-h-screen">
            <Hero />
            <BestSellers />
            <NewOnes />
            <Payments />
            {/* <Empty /> */}
            {/* <Empty /> */}
            {/* <Empty /> */}
            <MarqueeSection />
        </div>
    );
};

export default Home;
