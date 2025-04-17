"use client";

import { createContext, useContext, useReducer, useEffect, Dispatch } from "react";

export interface CartItem {
  id: number;
  name: string;
  slug: string;
  category: string;
  img: string;
  price: number;
  quantity: number;
  details: {
    [key: number]: string | undefined; 
  };
  des: string;
}

type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "ADD_QUANTITY"; payload: string } // payload is item id
  | { type: "REDUCE_QUANTITY"; payload: string}
  | { type: "REMOVE_FROM_CART"; payload: string }
  | { type: "CLEAR_CART" };

interface CartContextType {
  cart: CartItem[];
  dispatch: Dispatch<CartAction>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const loadCart = (): CartItem[] => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  }
  return [];
};

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.find(item => item.slug === action.payload.slug);
      if (existingItem) {
        return state.map(item =>
          item.slug === action.payload.slug
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    }

    case "ADD_QUANTITY":
      return state.map(item =>
        item.slug === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "REDUCE_QUANTITY":
      return state.map(item =>
        item.slug === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    case "REMOVE_FROM_CART":
      return state.filter(item => item.slug !== action.payload);

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, [], loadCart);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
