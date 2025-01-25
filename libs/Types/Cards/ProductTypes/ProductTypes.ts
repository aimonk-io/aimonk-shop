import { CompleteLookItem } from "../Index";

export interface ProductProps {
  slug: string;
  name: string;
  brand: string;
  category: string[];
  price: number;
  sizes: string[];
  colors?: string[];
  mainImage: string;
  hoverImage: string;
  imaages: string[];
  discount?: number;
  description?: string;
  
  maxUnitsPerCustomer?: number;
  completeLook?: CompleteLookItem[];
}
