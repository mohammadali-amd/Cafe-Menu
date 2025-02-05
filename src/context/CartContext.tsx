import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
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

  const addToCart = useCallback((item: MenuItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.item.title === item.title);
      if (existingItem) {
        return prev.map((i) =>
          i.item.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  }, []);

  const decreaseQuantity = useCallback((item: MenuItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.item.title === item.title);
      if (existingItem && existingItem.quantity > 1) {
        return prev.map((i) =>
          i.item.title === item.title ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      return prev.filter((i) => i.item.title !== item.title);
    });
  }, []);

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const totalPrice = useMemo(
    () =>
      cartItems.reduce(
        (sum, item) => sum + Number(item.item.price) * item.quantity,
        0
      ),
    [cartItems]
  );

  const getItemQuantity = useCallback(
    (item: MenuItem) => {
      const cartItem = cartItems.find((i) => i.item.title === item.title);
      return cartItem ? cartItem.quantity : 0;
    },
    [cartItems]
  );

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
