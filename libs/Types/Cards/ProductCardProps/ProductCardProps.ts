export interface ProductCardProps {
  slug: string; // map the _id coming from the database
  name: string;
  brand: string;
  price: number;
  sizes: string[];
  mainImage: string;
  hoverImage: string;
  inStock?: boolean;
  discount?: number;
}

