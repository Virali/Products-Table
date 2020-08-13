import { createContext, useContext } from 'react';

export const CartContext = createContext();

export const useCartValue = () => useContext(CartContext);
