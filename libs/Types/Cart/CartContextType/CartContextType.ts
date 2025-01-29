import { CartItem } from "../Index";

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (slug: string, size: string) => void;
  updateQuantity: (slug: string, size: string, delta: number) => void;
  subtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}