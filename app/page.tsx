"use client"

import ProductCard from "@/components/layout/Cards/ProductCard/ProductCard";
import Hero from "@/components/layout/Hero/Hero";
import ProductGrid from "@/components/layout/Section/Section";
import Carousel from "@/components/ui/Carousel/Carousel";

// Data files
import { ProductCardDate } from "@/Data/Cards/ProductCards/ProductCards";
import { HomePageHero } from "@/Data/Hero";


export default function Home() {
  return (

    <div className="grid">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <Hero {...HomePageHero} />

        <ProductGrid
          cards={ProductCardDate}
        />


        <Hero {...HomePageHero} />


        {/* This need fixing -- It should take in a product grid componet as a child!! FIX THIS ASAP */}
        
        <Carousel delay={5000}>
            {ProductCardDate.map((card, index) => (
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
        </Carousel>

        <ProductGrid
          cards={ProductCardDate}
        />


        <Hero {...HomePageHero} />

        <ProductGrid
          cards={ProductCardDate}
        />

      </main>
      <footer className="">
      </footer>

    </div>
  );
}
