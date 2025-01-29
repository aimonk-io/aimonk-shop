"use client";
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import ProductGrid from '../Section/Section';
import SizeGuide from '../SizeGuide/SizeGuide';
import { useCart } from '@/contexts/CartContext';
import { ShopMoreProductCardDate } from '@/Data/Cards';
import { ProductProps } from '@/libs/Types/Cards/Index';
import CollapsibleSection from '../../ui/CollapsibleSection/CollapsibleSection';
import RecommendationCard from '../Cards/RecommendationCard/RecommendationCard';



const ProductPage = ({ product }: { product: ProductProps }) => {
  const { addToCart, setIsCartOpen } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes?.[0] || '');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors?.[0] || '');

  const handleAddToCart = () => {
  if (!selectedSize) return;
  
  const productToAdd = {
    slug: product.slug,
    name: product.name,
    price: product.price,
    image: product.mainImage,
    size: selectedSize,
    color: selectedColor || product.colors?.[0] || '',
    quantity: 1,
    maxUnitsPerCustomer: product.maxUnitsPerCustomer || 1
  };
  addToCart(productToAdd);
  setIsCartOpen(true);
  };

  return (
    <>
      {/* Product Info */}
      <div className="pt-[5rem] px-2 sm:px-6">
        <nav className="text-sm mb-1">
          <ol className="flex items-center space-x-2">
            <li><Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
            <li className="text-gray-500">&rarr;</li>
            <li><Link href="/mens" className="text-gray-500 hover:text-gray-700">{product.brand}</Link></li>
          </ol>
        </nav>
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Product Image */}
          <div className="lg:w-[60%]">
            <div className="aspect-w-1 aspect-h-1 bg-gray-100 overflow-hidden">
              <Image
                src={product.mainImage}
                alt={product.name}
                width={897}
                height={948}
                className="object-cover object-center"
                priority
              />
              {product.hoverImage && (
                <Image
                  src={product.hoverImage}
                  alt={`${product.name} hover`}
                  width={897}
                  height={948}
                  className="hidden"
                />
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-[40%]">
            <h1 className="text-2xl font-semibold text-gray-900">{product.name}</h1>
            <p className="mt-2 text-lg text-gray-500">{product.brand}</p>
            <p className="mt-2 text-2xl text-gray-900">Rs. {product.price.toLocaleString()}.00</p>
            

            {/* Color Selection (if colors exist) */}
            <div className='border-b border-gray-500'>
              {product.colors && product.colors.length > 0 && (
                <div className="mt-6">
                  {/* <h3 className="mb-4 text-sm font-bold text-gray-900">Color</h3> */}
                  
                   <div className='mb-4 border-b border-gray-500'></div>

                  <div className="mb-4 flex space-x-2">
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
            </div>

            {/* Size Selection */}
            <div className='border-b border-gray-500'>
              <div className="my-6 flex flex-row justify-between items-center">
                <h3 className="text-sm font-bold text-gray-900">Size</h3>
                <div className="flex justify-end space-x-4">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`text-sm rounded-md hover:underline ${selectedSize === size ? 'font-bold underline' : 'font-normal'}`}>
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              className="mt-8 w-full font-['proxima-nova', 'sans-serif'] bg-[#333333] text-[14px] text-white py-3 px-4 hover:bg-white hover:text-black disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors transform uppercase"
              disabled={!selectedSize}
              onClick={handleAddToCart}
            >
              {selectedSize ? 'Add to Cart' : 'Select a Size'}
            </button>

            {product.maxUnitsPerCustomer && (
              <p className="mt-4 text-sm text-gray-500">
                Limited to {product.maxUnitsPerCustomer} Units Per Customer
              </p>
            )}

            {/* Complete the Look RecommendationCard*/}
            {product.completeLook && product.completeLook.length > 0 && (
              <div className="mt-12">
                <h2 className="text-lg font-medium text-gray-900">COMPLETE THE LOOK</h2>
                <div className="mt-6 space-y-6">
                  {product.completeLook.map((item) => (
                    <RecommendationCard key={item.slug} item={item} />
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


            {/* Dropdown for Details, Size Info, Shipping and Returns */}
            <div className="container mx-auto py-8">
              <CollapsibleSection title="Details" defaultOpen>
                <div className="text-[.75rem] font-[700] font-['Georgia'] py-1">
                  <h3>Available India only</h3>
                </div>
                <div className="text-[.75rem] font-normal font-['Georgia'] py-1">
                  <p className="py-1">Premium leather</p>
                  <p className="py-1">Front zip fastening with AVIREX hardware</p>
                  <p className="py-1">Features co-branded Kith logos with the New York Knicks, Rangers, and Madison Square Garden artwork</p>
                  <p className="py-1">Logo artwork at collar back, front, and chest</p>
                  <p className="py-1">Two welt pockets on front</p>
                  <p className="py-1">Striped rib at the hem and sleeve cuffs</p>
                  <p className="py-1">Professional leather cleaning only</p>
                  <br />
                  <p className="py-1">Style: kif24o27</p>
                  <p className="py-1">Color: Multi</p>
                  <p className="py-1">Material: Leather</p>

                  <br />
                  <Link href={'/products'}><span className='uppercase'>Shop All Kokkivo</span></Link>
                </div>
              </CollapsibleSection>

              <CollapsibleSection title="Size Info">
                <SizeGuide productName={product.name} modelSize={'Model is wearing a size extra large'} productImage={product.mainImage} />
              </CollapsibleSection>


              <CollapsibleSection title="Shipping and Returns">
                <div className="flex flex-col gap-2 text-[.75rem] font-normal font-['Georgia'] py-1">
                  <p className="py-1">Most products are shipped Standard Ground UPS or Fedex based on delivery location.
                    USPS final delivery where applicable and is estimated to arrive in 5-10 business days.
                    In rare cases, delays can occur at the warehouse or carrier level that extend that time frame.
                  </p>
                  <p className="py-1">Made-To-Order products are shipped based on time frames of product development.</p>
                  <p className="py-1">This is a final sale product, so returns and exchanges are not permitted.</p>
                </div>
              </CollapsibleSection>
            </div>

          </div>
        </div>
      </div>

      {/* Shop More */}
      <div>
        <h1 className="text-2xl text-center font-['Georgia'] font-300 mb-4 py-6">Shop More</h1>
        <ProductGrid cards={ShopMoreProductCardDate} />
      </div>
    </>
  );
};

export default ProductPage;