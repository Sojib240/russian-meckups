import React from "react";
import Hero from "../Components/Hero";
import Empty from "../Components/Empty";
import BestSellers from "../Components/BestSellers";
import NewOnes from "../Components/NewOnes";
import Payments from "../Components/Payments";
import MarqueeSection from "../Components/MarqueeSection";
import AllCategories from "../Components/AllCategories";
import Banner from "../Components/Banner";
import Inner from "../Inner";
import NavBar from "../Components/Common/NavBar";
import Information from "./Information";
const Home = ({ openCart, setopenCart }) => {
    document.title = "Russian Mockups";

    return (
        <Inner>
            <div className="bg-[#D6DBE0]">
                <NavBar openCart={openCart} setopenCart={setopenCart} />
                <Hero />
                <Banner />
                <BestSellers openCart={openCart} setopenCart={setopenCart} />
                <AllCategories />
                <NewOnes openCart={openCart} setopenCart={setopenCart} />
                <Payments />
                <MarqueeSection />
                {/* <Information openCart={openCart} setopenCart={setopenCart} /> */}
            </div>
        </Inner>
    );
};

export default Home;
