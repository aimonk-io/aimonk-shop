"use client";
import React from 'react';
import ProductCard from '../Cards/ProductCard/ProductCard';
import { SectionProps } from '@/libs/Types/Sections/Index';

const ProductGrid = ({ cards } : SectionProps) => {  
  return (
    <div className={`grid gap-3 p-6 grid-cols-1 sm:grid-cols-4`}>
      {cards.map((card, index) => (
        <ProductCard
          key={index}
          slug={card.slug}
          name={card.name}
          brand={card.brand}
          price={card.price}
          mainImage={card.mainImage}
          hoverImage={card.hoverImage}
          sizes={card.sizes}
          inStock={card.inStock}
          discount={card.discount}
        />
      ))}
    </div>
  );
};

export default ProductGrid;