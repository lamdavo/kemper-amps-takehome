'use client'

import { React, createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const initialPrice = 1799;
    const [cartPrice, setCartPrice] = useState(initialPrice);
    return (
        <CartContext.Provider
            value={{ cartPrice, setCartPrice }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCartContext = () => {
    return useContext(CartContext)
}