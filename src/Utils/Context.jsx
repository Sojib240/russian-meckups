import axios from "axios";
import React, { createContext, useState } from "react";

export const productContext = createContext();

const Context = (props) => {
    const [mockupsApiData, setmockupsApiData] = useState({
        categories: [
            {
                id: 1,
                categoryName: "all mockups",
                param: "all-mockups",
            },
            {
                id: 2,
                categoryName: "devices",
                param: "devices",
            },
            {
                id: 3,
                categoryName: "billboards",
                param: "billboards",
            },
            {
                id: 4,
                categoryName: "posters",
                param: "posters",
            },
            {
                id: 5,
                categoryName: "signs",
                param: "signs",
            },
            {
                id: 6,
                categoryName: "pylons",
                param: "pylons",
            },
            {
                id: 7,
                categoryName: "facades",
                param: "facades",
            },
            {
                id: 8,
                categoryName: "bus stops",
                param: "bus-stops",
            },
        ],
        productsDetails: [
            {
                id: 1,
                image: "/Images/Products/MSC-003-1.jpg",
                image2: "/Images/Products/MSC-003-2.jpg",
                slug: ["all-mockups", "pylons"],
                newOnes: null,
                bestSeller: true,
                price: 999,
                amount: 1,
                title: "msc-003",
            },
            {
                id: 2,
                image: "/Images/Products/MSC-021-1.jpg",
                image2: "/Images/Products/MSC-021-2.jpg",
                slug: ["all-mockups", "bus-stops"],
                newOnes: null,
                bestSeller: true,
                price: 999,
                amount: 1,
                title: "msc-021",
            },
            {
                id: 3,
                image: "/Images/Products/MSC-035-1.jpg",
                image2: "/Images/Products/MSC-035-2.jpg",
                slug: ["all-mockups", "posters"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-035",
            },
            {
                id: 4,
                image: "/Images/Products/MSC-018-1.jpg",
                image2: "/Images/Products/MSC-018-2.jpg",
                slug: ["all-mockups", "facades"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-018",
            },
            {
                id: 5,
                image: "/Images/Products/MSC-015-1.jpg",
                image2: "/Images/Products/MSC-015-2.jpg",
                slug: ["all-mockups", "billboards"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-015",
            },
            {
                id: 6,
                image: "/Images/Products/MSC-005-1.jpg",
                image2: "/Images/Products/MSC-005-2.jpg",
                slug: ["all-mockups", "posters"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-005",
            },
            {
                id: 7,
                image: "/Images/Products/MSC-006-1.jpg",
                image2: "/Images/Products/MSC-006-2.jpg",
                slug: ["all-mockups", "billboards"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-006",
            },
            {
                id: 8,
                image: "/Images/Products/MSC-025-1.jpg",
                image2: "/Images/Products/MSC-025-2.jpg",
                slug: ["all-mockups", "signs"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-025",
            },
            {
                id: 9,
                image: "/Images/Products/MSC-007-1.jpg",
                image2: "/Images/Products/MSC-007-2.jpg",
                slug: ["all-mockups", "facades"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-007",
            },
            {
                id: 10,
                image: "/Images/Products/MSC-001-1.jpg",
                image2: "/Images/Products/MSC-001-2.jpg",
                slug: ["all-mockups", "pylons"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-001",
            },
            {
                id: 11,
                image: "/Images/Products/MSC-009-1.jpg",
                image2: "/Images/Products/MSC-009-2.jpg",
                slug: ["all-mockups", "bus-stops"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-009",
            },
            {
                id: 12,
                image: "/Images/Products/MSC-010-1.jpg",
                image2: "/Images/Products/MSC-010-2.jpg",
                slug: ["all-mockups", "billboards"],
                newOnes: null,
                bestSeller: true,
                price: 999,
                amount: 1,
                title: "msc-010",
            },
            {
                id: 13,
                image: "/Images/Products/MSC-013-1.jpg",
                image2: "/Images/Products/MSC-013-2.jpg",
                slug: ["all-mockups", "posters"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-013",
            },
            {
                id: 14,
                image: "/Images/Products/MSC-014-1.jpg",
                image2: "/Images/Products/MSC-014-2.jpg",
                slug: ["all-mockups", "billboards"],
                newOnes: null,
                bestSeller: true,
                price: 999,
                amount: 1,
                title: "msc-014",
            },
            {
                id: 15,
                image: "/Images/Products/MSC-032-1.jpg",
                image2: "/Images/Products/MSC-032-2.jpg",
                slug: ["all-mockups", "pylons"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-032",
            },
            {
                id: 16,
                image: "/Images/Products/MSC-038-1.jpg",
                image2: "/Images/Products/MSC-038-2.jpg",
                slug: ["all-mockups", "posters"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-038",
            },
            {
                id: 17,
                image: "/Images/Products/MSC-004-1.jpg",
                image2: "/Images/Products/MSC-004-2.jpg",
                slug: ["all-mockups", "posters"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-004",
            },
            {
                id: 18,
                image: "/Images/Products/MSC-016-1.jpg",
                image2: "/Images/Products/MSC-016-2.jpg",
                slug: ["all-mockups", "posters"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-016",
            },
            {
                id: 19,
                image: "/Images/Products/MSC-033-1.jpg",
                image2: "/Images/Products/MSC-033-2.jpg",
                slug: ["all-mockups", "pylons"],
                newOnes: null,
                bestSeller: true,
                price: 999,
                amount: 1,
                title: "msc-033",
            },
            {
                id: 20,
                image: "/Images/Products/MSC-036-1.jpg",
                image2: "/Images/Products/MSC-036-2.jpg",
                slug: ["all-mockups", "posters"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-036",
            },
            {
                id: 21,
                image: "/Images/Products/MSC-029-1.jpg",
                image2: "/Images/Products/MSC-029-2.jpg",
                slug: ["all-mockups", "signs"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-029",
            },
            {
                id: 22,
                image: "/Images/Products/MSC-039-1.jpg",
                image2: "/Images/Products/MSC-039-2.jpg",
                slug: ["all-mockups", "pylons"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-039",
            },
            {
                id: 23,
                image: "/Images/Products/MSC-040-1.jpg",
                image2: "/Images/Products/MSC-040-2.jpg",
                slug: ["all-mockups", "facades"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-040",
            },
            {
                id: 24,
                image: "/Images/Products/BKL-001-1.jpg",
                image2: "/Images/Products/BKL-001-2.jpg",
                slug: ["all-mockups", "devices"],
                newOnes: true,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "bkl-001",
            },
            {
                id: 25,
                image: "/Images/Products/BKL-002-1.jpg",
                image2: "/Images/Products/BKL-002-2.jpg",
                slug: ["all-mockups", "devices"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "bkl-002",
            },
            {
                id: 26,
                image: "/Images/Products/BKL-003-1.jpg",
                image2: "/Images/Products/BKL-003-2.jpg",
                slug: ["all-mockups", "devices"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "bkl-003",
            },
            {
                id: 27,
                image: "/Images/Products/BKL-004-1.jpg",
                image2: "/Images/Products/BKL-004-2.jpg",
                slug: ["all-mockups", "devices"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "bkl-004",
            },
            {
                id: 28,
                image: "/Images/Products/BKL-005-1.jpg",
                image2: "/Images/Products/BKL-005-2.jpg",
                slug: ["all-mockups", "devices"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "bkl-005",
            },
            {
                id: 29,
                image: "/Images/Products/BKL-006-1.jpg",
                image2: "/Images/Products/BKL-006-2.jpg",
                slug: ["all-mockups", "devices"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "bkl-006",
            },
            {
                id: 30,
                image: "/Images/Products/BKL-007-1.jpg",
                image2: "/Images/Products/BKL-007-2.jpg",
                slug: ["all-mockups", "devices"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "bkl-007",
            },
            {
                id: 31,
                image: "/Images/Products/BKL-008-1.jpg",
                image2: "/Images/Products/BKL-008-2.jpg",
                slug: ["all-mockups", "devices"],
                newOnes: true,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "bkl-008",
            },
            {
                id: 32,
                image: "/Images/Products/BKL-009-1.jpg",
                image2: "/Images/Products/BKL-009-2.jpg",
                slug: ["all-mockups", "devices"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "bkl-009",
            },
            {
                id: 33,
                image: "/Images/Products/BKL-010-1.jpg",
                image2: "/Images/Products/BKL-010-2.jpg",
                slug: ["all-mockups", "devices"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "bkl-010",
            },
            {
                id: 34,
                image: "/Images/Products/MSC-017-1.jpg",
                image2: "/Images/Products/MSC-017-2.jpg",
                slug: ["all-mockups", "pylons"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-017",
            },
            {
                id: 35,
                image: "/Images/Products/MSC-044-1.jpg",
                image2: "/Images/Products/MSC-044-2.jpg",
                slug: ["all-mockups", "signs"],
                newOnes: true,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-044",
            },
            {
                id: 36,
                image: "/Images/Products/MSC-041-1.jpg",
                image2: "/Images/Products/MSC-041-2.jpg",
                slug: ["all-mockups", "signs"],
                newOnes: true,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-041",
            },
            {
                id: 37,
                image: "/Images/Products/MSC-019-1.jpg",
                image2: "/Images/Products/MSC-019-2.jpg",
                slug: ["all-mockups", "pylons"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-019",
            },
            {
                id: 38,
                image: "/Images/Products/MSC-008-1.jpg",
                image2: "/Images/Products/MSC-008-2.jpg",
                slug: ["all-mockups", "pylons"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-008",
            },
            {
                id: 39,
                image: "/Images/Products/MSC-020-1.jpg",
                image2: "/Images/Products/MSC-020-2.jpg",
                slug: ["all-mockups", "pylons"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-020",
            },
            {
                id: 40,
                image: "/Images/Products/MSC-023-1.jpg",
                image2: "/Images/Products/MSC-023-2.jpg",
                slug: ["all-mockups", "facades"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-023",
            },
            {
                id: 41,
                image: "/Images/Products/MSC-024-1.jpg",
                image2: "/Images/Products/MSC-024-2.jpg",
                slug: ["all-mockups", "facades"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-024",
            },
            {
                id: 42,
                image: "/Images/Products/MSC-027-1.jpg",
                image2: "/Images/Products/MSC-027-2.jpg",
                slug: ["all-mockups", "signs"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-027",
            },
            {
                id: 43,
                image: "/Images/Products/MSC-026-1.jpg",
                image2: "/Images/Products/MSC-026-2.jpg",
                slug: ["all-mockups", "signs"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-026",
            },
            {
                id: 44,
                image: "/Images/Products/MSC-022-1.jpg",
                image2: "/Images/Products/MSC-022-2.jpg",
                slug: ["all-mockups", "signs"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-022",
            },
            {
                id: 45,
                image: "/Images/Products/MSC-030-1.jpg",
                image2: "/Images/Products/MSC-030-2.jpg",
                slug: ["all-mockups", "facades"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-030",
            },
            {
                id: 46,
                image: "/Images/Products/MSC-031-1.jpg",
                image2: "/Images/Products/MSC-031-2.jpg",
                slug: ["all-mockups", "pylons"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-031",
            },
            {
                id: 47,
                image: "/Images/Products/MSC-037-1.jpg",
                image2: "/Images/Products/MSC-037-2.jpg",
                slug: ["all-mockups", "signs"],
                newOnes: null,
                bestSeller: null,
                price: 999,
                amount: 1,
                title: "msc-037",
            },
        ],
    });

    // const callProducts = () => {
    //     const api =
    //         "https://russian-mackups-default-rtdb.firebaseio.com/allDatas.json";
    //     axios
    //         .get(api)
    //         .then((res) => {
    //             const formatedValue = Object.values(res.data);
    //             setmockupsApiData((prevState) => ({
    //                 ...prevState,
    //                 isLoaded: true,
    //                 products: formatedValue[0],
    //             }));
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };
    // useEffect(() => {
    //     callProducts();
    // }, []);

    return (
        <productContext.Provider value={[mockupsApiData, setmockupsApiData]}>
            {props.children}
        </productContext.Provider>
    );
};
export default Context;
