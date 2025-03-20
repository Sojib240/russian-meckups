import React from "react";
import Hero from "../Components/Hero";
import Empty from "../Components/Empty";
import BestSellers from "../Components/BestSellers";
import NewOnes from "../Components/NewOnes";
import Payments from "../Components/Payments";
import MarqueeSection from "../Components/MarqueeSection";
import AllCategories from "../Components/AllCategories";
import Banner from "../Components/Banner";
const Home = ({openCart, setopenCart}) => {
    document.title = "Russian Mockups";

    return (
        <div className="bg-[#D6DBE0] min-h-screen z-50 relative">
            <Hero />
            <Banner />
            <BestSellers openCart={openCart} setopenCart={setopenCart} />
            <AllCategories />
            <NewOnes openCart={openCart} setopenCart={setopenCart} />
            <Payments />
            <MarqueeSection />
        </div>
    );
};

export default Home;
