import { CompleteLookItem } from "../Index";

export interface ProductProps {
  slug: string; // map the _id coming from the database
  name: string;
  brand: string;
  price: number;
  mainImage: string;
  hoverImage: string;
  sizes: string[];
  colors?: string[];
  description?: string;
  maxUnitsPerCustomer?: number;
  isAvailable?: boolean;
  rating?: number;
  reviewsCount?: number;
  discountPercentage?: number;
  category?: string;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  completeLook?: CompleteLookItem[];
}
