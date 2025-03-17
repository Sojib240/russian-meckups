import React, { useState, createContext } from "react";

export const CartDataContext = createContext();

const CartContext = (props) => {
    const [cart, setcart] = useState([]);
    return (
        <CartDataContext.Provider value={[cart, setcart]}>
            {props.children}
        </CartDataContext.Provider>
    );
};

export default CartContext;
