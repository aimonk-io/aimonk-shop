import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const product: CartItem = {
  id: 1,
  name: 'Kith for the New York Rangers Skewed Delk Hoodie',
  price: 20100,
  quantity: 1,
  image: '/ProductCard-Images/KHM010655-211-FRONT_1512x.webp',
};

const Cart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleToggleCart = () => {
    setIsOpen(!isOpen);
  };

  const handleAddToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // Increment quantity if item already exists
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Add new item
        return [...prevItems, item];
      }
    });
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Disable page scrolling when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden'); // Cleanup on unmount
    };
  }, [isOpen]);

  return (
    <>
      {/* Cart Toggle Button */}
      <button
        className="fixed right-[90px] p-3 rounded-full z-50"
        onClick={handleToggleCart}
      >
        {isOpen ? <FaTimes size={20} /> : <FaShoppingCart size={20} />}
      </button>

      {/* Add to Cart Button handled here */}
      <div className="p-4">
        <button
          className="hidden bg-black text-white px-6 py-2 rounded-md"
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>

      {/* Slide-in Cart */}
      <div
        className={`fixed top-0 right-0 h-full w-[30%] !bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Cart Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Shopping Cart</h2>
          <button className="text-gray-500" onClick={handleToggleCart}>
            <FaTimes size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 overflow-y-auto flex-1">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 mb-4">
                <Image src={item.image} alt={item.name} width={72} height={72} />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold">{item.name}</h3>
                  <p className="text-gray-600 text-sm">₹{item.price.toLocaleString()}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="bg-gray-200 px-2 py-1 rounded-md"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="bg-gray-200 px-2 py-1 rounded-md"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="text-red-500"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          )}
        </div>

        {/* Cart Footer */}
        <div className="p-4 border-t">
          <div className="flex justify-between text-sm mb-4">
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>
          <button className="w-full bg-black text-white py-2 rounded-md">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
