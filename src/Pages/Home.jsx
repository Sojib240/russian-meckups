import React from "react";
import Hero from "../Components/Hero";
import Empty from "../Components/Empty";
import BestSellers from "../Components/BestSellers";
import NewOnes from "../Components/NewOnes";
import Payments from "../Components/Payments";
import MarqueeSection from "../Components/MarqueeSection";
import AllCategories from "../Components/AllCategories";

const Home = () => {
    document.title = "Russian Mockups";

    return (
        <div className="bg-[#D6DBE0] min-h-screen z-50 relative">
            <Hero />
            <BestSellers />
            <AllCategories />
            <NewOnes />
            <Payments />
            <MarqueeSection />
            {/* <Empty /> */}
        </div>
    );
};

export default Home;
