import { CompleteLookItem } from "../Index";

export interface ProductCardProps {
  name: string;
  brand: string;
  price: number;
  mainImage: string;
  hoverImage: string;
  sizes: string[];
  slug: string;
  colors?: string[];
  description?: string;
  maxUnitsPerCustomer?: number;
  completeLook?: CompleteLookItem[];
}
