import Hero from "@/components/layout/Hero/Hero";
import Nav from "@/components/layout/Navigations/Index";
import ProductGrid from "@/components/layout/Section/Section";
import FocterComponent from "@/components/layout/Footer/Index"

// Data files
import { ProductCardDate } from "@/Data/Cards/ProductCards/ProductCards";
import { HomePageHero } from "@/Data/Hero";


export default function Home() {
  return (
    
    <div className="grid">
      <Nav />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      
      <Hero {...HomePageHero}/>

      <ProductGrid
        cards={ProductCardDate}
      />
      
      </main>
      <footer className="">
      </footer>
        <FocterComponent />
    </div>
  );
}
