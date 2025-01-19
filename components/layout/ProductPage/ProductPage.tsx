'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductCardProps } from '@/libs/Types/Cards/Index';

const ProductPage = ({ product }: { product: ProductCardProps }) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors?.[0] || '');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Image */}
        <div className="lg:w-2/3">
          <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
            <nav className="text-sm mb-4">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
                <li className="text-gray-500">&rarr;</li>
                <li><Link href="/mens" className="text-gray-500 hover:text-gray-700">Mens</Link></li>
              </ol>
            </nav>
            <Image
              src={product.mainImage}
              alt={product.name}
              width={600}
              height={600}
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:w-1/3">
          <h1 className="text-2xl font-semibold text-gray-900">{product.name}</h1>
          <p className="mt-2 text-lg text-gray-500">{product.brand}</p>
          <p className="mt-2 text-2xl text-gray-900">Rs. {product.price.toLocaleString()}</p>

          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Color</h3>
              <div className="mt-2 flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-black' : 'border-gray-300'
                      }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    aria-label={`Select ${color} color`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size Selection */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Size</h3>
            <div className="mt-2 grid grid-cols-6 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 text-sm border rounded-md ${selectedSize === size
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            className="mt-8 w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            disabled={!selectedSize}
          >
            {selectedSize ? 'Add to Cart' : 'Select a Size'}
          </button>

          {product.maxUnitsPerCustomer && (
            <p className="mt-4 text-sm text-gray-500">
              Limited to {product.maxUnitsPerCustomer} Units Per Customer
            </p>
          )}

          {/* Complete the Look */}
          {product.completeLook && product.completeLook.length > 0 && (
            <div className="mt-12">
              <h2 className="text-lg font-medium text-gray-900">COMPLETE THE LOOK</h2>
              <div className="mt-6 space-y-6">
                {product.completeLook.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={96}
                        height={96}
                        className="object-cover object-center"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                      <p className="mt-1 text-sm font-medium text-gray-900">
                        Rs. {item.price.toLocaleString()}
                      </p>
                      <div className="mt-2 flex space-x-2">
                        {item.sizes.map((size) => (
                          <span key={size} className="text-xs text-gray-500">
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Editor's Note */}
          {product.description && (
            <div className="mt-12">
              <h2 className="text-lg font-medium text-gray-900">EDITOR&apos;S NOTE</h2>
              <p className="mt-4 text-sm text-gray-600">{product.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;