import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductCardProps } from '@/libs/Types/Cards/Index';
import { useCart } from '@/contexts/CartContext';

const ProductCard = ({ slug, name, brand, price, mainImage, hoverImage, sizes, inStock, discount }: ProductCardProps) => {
    const { addToCart } = useCart();
    const [isImageHovered, setIsImageHovered] = useState(false);

    const [isDescriptionHovered, setIsDescriptionHovered] = useState(false);

    // Calculate discounted price if discount exists
    const discountedPrice = discount ? price - (price * (discount / 100)) : price;

    function addToCartt(arg0: { id: string; name: string; price: number; discount: number | undefined; size: string; image: string; }) {
        // throw new Error('Function not implemented.');
        const productToAdd = {
            slug: arg0.id,
            name: arg0.name,
            price: arg0.price,
            image: arg0.image,
            size: arg0.size,
            color: [0],
            quantity: 1,

        }
        addToCart(productToAdd);
        console.log(arg0);
    }

    return (
        <Link href={`/products/${slug}`} className="block w-full max-w-sm">
            <div className="cursor-pointer">
                {/* Image Container */}
                <div
                    className="relative aspect-square overflow-hidden"
                    onMouseEnter={() => setIsImageHovered(true)}
                    onMouseLeave={() => setIsImageHovered(false)}
                >
                    {!inStock && (
                        <div className="absolute top-0 right-0 bg-black font-['proxima-nova', 'sans-serif'] text-white text-[10px] font-bold px-2 py-1 transform uppercase z-10">
                            Sold Out
                        </div>
                    )}
                    {discount !== undefined && discount > 0 && (
                        <div className="absolute top-0 left-0 bg-red-500 font-['proxima-nova', 'sans-serif'] text-white text-[10px] font-bold px-2 py-1 transform uppercase z-10">
                            {discount}% OFF
                        </div>
                    )}
                    <Image
                        src={isImageHovered ? hoverImage : mainImage}
                        alt={name}
                        width={382}
                        height={382}
                        className="transition-all duration-300"
                    />
                </div>

                {/* Content Container */}
                <div
                    className="relative mt-4 h-[60px]"
                    onMouseEnter={() => setIsDescriptionHovered(true)}
                    onMouseLeave={() => setIsDescriptionHovered(false)}
                >
                    {/* Product Info */}
                    <div className={`absolute w-full transition-opacity duration-300 ${isImageHovered || isDescriptionHovered ? 'opacity-0' : 'opacity-100'
                        }`}>
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-sm font-medium text-gray-900">{name}</h3>
                                <p className="text-sm text-gray-500">{brand}</p>
                            </div>
                            <div className="text-right">
                                {discount !== undefined && discount > 0 ? (
                                    <>
                                        <p className="text-sm font-medium text-gray-400 line-through">
                                            Rs. {price.toLocaleString()}.00
                                        </p>
                                        <p className="text-sm font-medium text-red-500">
                                            Rs. {discountedPrice.toLocaleString()}.00
                                        </p>
                                    </>
                                ) : (
                                    <p className="text-sm font-medium text-gray-900">
                                        Rs. {price.toLocaleString()}.00
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Sizes */}
                    <div className={`absolute w-full transition-opacity duration-300 ${isImageHovered || isDescriptionHovered ? 'opacity-100' : 'opacity-0'
                        }`}>
                        <div className="flex justify-center gap-4">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors cursor-pointer hover:underline"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        addToCartt({
                                            id: slug,
                                            name,
                                            price: discountedPrice,
                                            discount,
                                            size,
                                            image: mainImage,
                                        });
                                    }}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;