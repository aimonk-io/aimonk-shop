import { CartItem } from "../Index";

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (slug: string) => void;
  updateQuantity: (slug: string, delta: number) => void;
  subtotal: number;
}