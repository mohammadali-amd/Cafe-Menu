import { createContext, useContext, useState } from "react";
import { MenuItem } from "../types";

interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: MenuItem) => void;
  decreaseQuantity: (item: MenuItem) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  getItemQuantity: (item: MenuItem) => number;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  decreaseQuantity: () => {},
  clearCart: () => {},
  totalItems: 0,
  totalPrice: 0,
  getItemQuantity: () => 0,
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.item.title === item.title);
      if (existingItem) {
        return prev.map((i) =>
          i.item.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const decreaseQuantity = (item: MenuItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.item.title === item.title);
      if (existingItem && existingItem.quantity > 1) {
        return prev.map((i) =>
          i.item.title === item.title ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      return prev.filter((i) => i.item.title !== item.title);
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.item.price) * item.quantity,
    0
  );

  const getItemQuantity = (item: MenuItem) => {
    const cartItem = cartItems.find((i) => i.item.title === item.title);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseQuantity,
        clearCart,
        totalItems,
        totalPrice,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
