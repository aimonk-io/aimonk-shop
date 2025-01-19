import { ProductCardProps } from "../../Cards/Index";

export interface ProductDetails extends ProductCardProps {
    colors: string[];
    description: string;
    completeLook: {
      id: string;
      name: string;
      color: string;
      price: number;
      image: string;
      sizes: string[];
    }[];
    maxUnitsPerCustomer: number;
  }
  