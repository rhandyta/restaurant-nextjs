"use client";
import { createContext, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
    const [cart, setCart] = useState({});

    const cartContextValue = {
        cart,
        setCart,
    };

    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
        </CartContext.Provider>
    );
}
