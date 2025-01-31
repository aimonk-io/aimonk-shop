import Carousel from "@/components/ui/Carousel/Carousel";
import ProductCard from "../Cards/ProductCard/ProductCard";
import { ProductCardDate } from '@/Data/Cards';

export const ProductCarousel = () => {
    return (
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <Carousel autoPlay={true} delay={4000} itemsPerSlide={5}>
          {ProductCardDate.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </Carousel>
      </div>
    );
  };
  