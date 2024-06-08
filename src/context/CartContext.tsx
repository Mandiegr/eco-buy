'use client';
import React, { createContext, useContext, useReducer, ReactNode, useEffect, useRef } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { auth, database } from '../app/services/firebase';

interface Product {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  imagens: string[];
  quantity: number;
}

type CartState = {
  products: Product[];
  favorites: Product[];
  userId: string | null;
};

type CartAction =
  | { type: 'ADD_TO_CART'; product: Product }
  | { type: 'REMOVE_FROM_CART'; productId: number }
  | { type: 'INCREASE_QUANTITY'; productId: number }
  | { type: 'DECREASE_QUANTITY'; productId: number }
  | { type: 'TOGGLE_FAVORITE'; product: Product }
  | { type: 'SET_CART'; products: Product[] }
  | { type: 'SET_FAVORITES'; favorites: Product[] }
  | { type: 'SET_USER'; userId: string | null };

type CartContextType = {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProduct = state.products.find((p) => p.id === action.product.id);
      if (existingProduct) {
        return {
          ...state,
          products: state.products.map((p) =>
            p.id === action.product.id
              ? { ...p, quantity: (p.quantity || 1) + 1 }
              : p
          ),
        };
      } else {
        return {
          ...state,
          products: [
            ...state.products,
            {
              ...action.product,
              quantity: 1,
              preco: action.product.preco || 0,
            },
          ],
        };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        products: state.products.filter((p) => p.id !== action.productId),
      };
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        products: state.products.map((p) =>
          p.id === action.productId ? { ...p, quantity: (p.quantity || 1) + 1 } : p
        ),
      };
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        products: state.products.map((p) =>
          p.id === action.productId && (p.quantity || 1) > 1
            ? { ...p, quantity: (p.quantity || 1) - 1 }
            : p
        ),
      };
    case 'TOGGLE_FAVORITE':
      const isFavorited = state.favorites.some((p) => p.id === action.product.id);
      return {
        ...state,
        favorites: isFavorited
          ? state.favorites.filter((p) => p.id !== action.product.id)
          : [...state.favorites, action.product],
      };
    case 'SET_CART':
      return {
        ...state,
        products: action.products,
      };
    case 'SET_FAVORITES':
      return {
        ...state,
        favorites: action.favorites,
      };
    case 'SET_USER':
      return {
        ...state,
        userId: action.userId,
      };
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { products: [], favorites: [], userId: null });
  const total = state.products.reduce(
    (acc, product) => acc + product.preco * (product.quantity || 1),
    0
  );

  // Ref to track initial load
  const initialLoad = useRef(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = user.uid;
        dispatch({ type: 'SET_USER', userId });

        const cartRef = ref(database, `carts/${userId}`);
        const favoritesRef = ref(database, `favorites/${userId}`);

        // Carregar o carrinho e os favoritos do Firebase
        onValue(cartRef, (cartSnapshot) => {
          if (cartSnapshot.exists()) {
            const products: Product[] = Object.values(cartSnapshot.val());
            dispatch({ type: 'SET_CART', products });
          }
        });

        onValue(favoritesRef, (favoritesSnapshot) => {
          if (favoritesSnapshot.exists()) {
            const favorites: Product[] = Object.values(favoritesSnapshot.val());
            dispatch({ type: 'SET_FAVORITES', favorites });
          }
        });
      } else {
        dispatch({ type: 'SET_USER', userId: null });
        dispatch({ type: 'SET_CART', products: [] });
        dispatch({ type: 'SET_FAVORITES', favorites: [] });
      }
    });

    return () => unsubscribe();
  }, []);

  // Persistir o estado ao mudar os produtos ou favoritos
  useEffect(() => {
    if (!initialLoad.current && state.userId) {
      const cartRef = ref(database, `carts/${state.userId}`);
      const favoritesRef = ref(database, `favorites/${state.userId}`);
      set(cartRef, state.products);
      set(favoritesRef, state.favorites);
    }
  }, [state.products, state.favorites, state.userId]);

  useEffect(() => {
    initialLoad.current = false;
  }, []);

  return (
    <CartContext.Provider value={{ state, dispatch, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
