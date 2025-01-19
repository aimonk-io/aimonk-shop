import Hero from "@/components/layout/Hero/Hero";
import ProductGrid from "@/components/layout/Section/Section";

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
