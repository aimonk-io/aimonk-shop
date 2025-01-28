"use client";
import { CartItem, CartContextType } from '@/libs/Types/Cart/Index';
import React, { createContext, useContext, useState, ReactNode } from 'react';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) =>
          cartItem.slug === item.slug &&
          cartItem.size === item.size
      );
      const updatedCart = existingItem
        ? prevItems.map((cartItem) =>
            cartItem.slug === item.slug &&
            cartItem.size === item.size
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...prevItems, { ...item, quantity: 1 }];
      console.log('Updated Cart:', updatedCart); // Debug log
      return updatedCart;
    });
  };

  const removeFromCart = (slug: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.slug.toString() !== slug));
  };

  const updateQuantity = (slug: string, delta: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.slug.toString() === slug
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, subtotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
