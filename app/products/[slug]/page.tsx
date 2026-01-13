import ProductPage from "@/components/layout/ProductPage/ProductPage";
import { ProductCardProps } from "@/libs/Types/Cards/Index";

async function getProduct(slug: string ): Promise<ProductCardProps> {
  // In a real app, this would be an API call
  return {
    slug: slug,
    name: '&Kin Tweed Julius Blazer',
    brand: '&Kin',
    price: 61900,
    colors: ['Black', 'White', 'Blue'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'The &Kin Tweed Julius Blazer is crafted of Italian boucle tweed...',
    mainImage: '/ProductCard-Images/KHM010655-211-FRONT_1512x.webp',
    hoverImage: '/ProductCard-Images/KHM010655-211-FRONT_1512x.webp',
    maxUnitsPerCustomer: 2,
    completeLook: [
      {
        id: '2',
        name: '&Kin Speckled Boucle Walker Turtleneck',
        color: ['Black', 'White', 'Blue'],
        price: 25900,
        image: '/ProductCard-Images/KHM010655-211-FRONT_1512x.webp',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        
      },
      {
        id: '3',
        name: '&Kin Tweed Kylan Pleated Trouser',
        color: ['Fin', 'Black', 'Blue'],
        price: 35200,
        image: '/ProductCard-Images/KHM010655-211-FRONT_1512x.webp',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      },
    ],
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  console.log(product);
  return <ProductPage product={product} />;
}
