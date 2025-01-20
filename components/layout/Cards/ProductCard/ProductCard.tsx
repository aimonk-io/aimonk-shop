import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductCardProps } from '@/libs/Types/Cards/Index';



const ProductCard = ({ name, brand, price, mainImage, hoverImage, sizes, slug }: ProductCardProps) => {
    const [isImageHovered, setIsImageHovered] = useState(false);
    const [isDescriptionHovered, setIsDescriptionHovered] = useState(false);

    return (
        <Link href={`/products/${slug}`} className="block w-full max-w-sm">
            <div className="cursor-pointer">
                {/* Image Container */}
                <div
                    className="relative aspect-square overflow-hidden"
                    onMouseEnter={() => setIsImageHovered(true)}
                    onMouseLeave={() => setIsImageHovered(false)}
                >
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
                            <p className="text-sm font-medium text-gray-900">
                                Rs. {price.toLocaleString()}.00
                            </p>
                        </div>
                    </div>

                    {/* Sizes */}
                    <div className={`absolute w-full transition-opacity duration-300 ${isImageHovered || isDescriptionHovered ? 'opacity-100' : 'opacity-0'
                        }`}>
                        <div className="flex justify-center gap-4">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
                                    onClick={(e) => {
                                        e.preventDefault(); // Prevent navigation when clicking size buttons
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