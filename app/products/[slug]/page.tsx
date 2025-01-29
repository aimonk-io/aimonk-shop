import ProductPage from "@/components/layout/ProductPage/ProductPage";
import { ProductProps } from "@/libs/Types/Cards/Index";


async function getProduct(slug: string ): Promise<ProductProps> {

  // In a real app, this would be an API call
  // const res = await fetch(`http://localhost:3000/api/products/${slug}`);
  // const data = await res.json();
  // console.log(data)

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
        slug: '2',
        name: '&Kin Speckled Boucle Walker Turtleneck',
        color: ['Black', 'White', 'Blue'],
        price: 25900,
        image: '/ProductCard-Images/KHM010655-211-FRONT_1512x.webp',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        discount: 10,
        inStock: false
      },
      {
        slug: '3',
        name: '&Kin Tweed Kylan Pleated Trouser',
        color: ['Fin', 'Black', 'Blue'],
        price: 35200,
        image: '/ProductCard-Images/KHM010655-211-FRONT_1512x.webp',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        discount: 10,
        inStock: false
      },
    ],
  };
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const product = await getProduct(slug);

  return <ProductPage product={product} />;
}
