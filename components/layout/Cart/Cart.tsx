
import { useCart } from '@/contexts/CartContext'; // Adjust import path
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { CartRecommendationsCard } from '../Cards/CartRecommendationsCard/CartRecommendationsCard';

export const Cart: React.FC = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, subtotal } = useCart(); // Now using context
  const totalItems = Array.isArray(cartItems) ? cartItems.reduce((acc, item) => acc + item.quantity, 0) : 0;
  const handleToggleCart = () => setIsCartOpen(!isCartOpen);

  useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isCartOpen]);

  return (
    <>
      <button className="fixed right-[0px] p-3 rounded-full z-50 relative" onClick={handleToggleCart}>
        {isCartOpen ? "" : <FaShoppingBag size={20} />}
        {totalItems > 0 && (
          <span className="absolute -top-[.04rem] -right-[0.06rem] text-black font-bold text-xs w-6 h-6 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      <div className={`fixed top-0 right-0 h-full w-[400px] bg-white shadow-xl transform transition-transform duration-300 z-50 flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        {/* Cart Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-black text-lg font-['sens-serf']">Shopping Cart</h2>
          <button className="text-black transform uppercase font-bold text-[11px]" onClick={() => setIsCartOpen(false)}>
            Close
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="p-6 text-center">
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="p-6">
                {cartItems.map((item) => (
                  <div key={`${item.slug}-${item.size}`} className="flex gap-4 mb-4 pb-4 border-b border-gray-200 last:border-b-0">
                    <div className="w-24 h-24 bg-gray-100 flex-shrink-0">
                      <Link href={`/products/${item.slug}`}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover hover:shadow hover:shadow-black transition-shadow"
                        />
                      </Link>
                    </div>
                    <div className="flex-1">
                      <Link href={`/products/${item.slug}`}>
                        <h3 className="text-sm font-medium font-['Georgia','sens-serif'] mb-1 hover:underline">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-gray-600 mb-1">{item.size}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <button
                            className="px-2 py-1 text-sm"
                            onClick={() => updateQuantity(item.slug, item.size, -1)}
                          >
                            −
                          </button>
                          <span className="px-2 py-1 text-sm">{item.quantity}</span>
                          <button
                            className="px-2 py-1 text-sm"
                            onClick={() => updateQuantity(item.slug, item.size, 1)}
                          >
                            +
                          </button>
                        </div>
                        <span className="font-['proxima-nova', 'sans-serif'] font-medium text-xs tracking-[.064rem]">
                          Rs. {item.price.toLocaleString('en-IN', { maximumFractionDigits: 2 })}.00
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Footer */}
              <div className="p-4 border-t mt-auto">
                <div className="flex justify-between font-['proxima-nova', 'sans-serif'] text-sm mb-4 tracking-[.064rem]">
                  <span>Subtotal</span>
                  <span>₹ {subtotal.toLocaleString()}.00</span>
                </div>
                <p className="text-center text-sm py-4 font-['sans-serif']">
                  Shipping & taxes calculated at checkout
                </p>
                <button className="w-full py-5 bg-[#333333] text-white hover:bg-white hover:text-black transition-colors duration-300 transform uppercase">
                  Checkout
                </button>
              </div>

              {/* Recommendations */}
              <div className="p-4">
                <p className="text-base font-['Georgia','sans-serif'] mb-6">Consider these items as well</p>
                <CartRecommendationsCard />
              </div>
            </>
          )}
        </div>


      </div>
    </>
  );
}

