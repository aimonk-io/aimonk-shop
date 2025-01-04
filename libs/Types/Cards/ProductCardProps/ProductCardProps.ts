export interface ProductCardProps {
    name: string;
    brand: string;
    price: number;
    mainImage: string;
    hoverImage: string;
    sizes: string[];
    slug?: string;
}