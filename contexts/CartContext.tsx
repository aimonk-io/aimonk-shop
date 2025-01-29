"use client";
import { CartItem, CartContextType } from '@/libs/Types/Cart/Index';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedCart = localStorage.getItem('cart');
        const parsedCart = savedCart ? JSON.parse(savedCart) : [];
        return Array.isArray(parsedCart) ? parsedCart : [];
      } catch (error) {
        console.error('Failed to parse cart items:', error);
        return [];
      }
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };
  // Save to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

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
      openCart();
      return updatedCart;
    });
  };

  const removeFromCart = (slug: string, size: string) => {
    setCartItems((prevItems) => 
      prevItems.filter((item) => 
        !(item.slug === slug && item.size === size)
      )
    );
  };

  const updateQuantity = (slug: string, size: string, delta: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.slug === slug && item.size === size) {
          const newQuantity = item.quantity + delta;
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
  
      // Remove items with quantity <= 0
      return updatedItems.filter((item) => item.quantity > 0);
    });
  }; 

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, subtotal, isCartOpen, setIsCartOpen }}>
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
