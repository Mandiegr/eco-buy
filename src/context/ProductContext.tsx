// ProductContext.tsx
"use client"
import React, { createContext, useContext, ReactNode } from 'react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface ProductContextProps {
  products: Product[];
  getProductById: (id: number) => Promise<Product | undefined>;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode; products: Product[] }> = ({ children, products }) => {
  const getProductById = async (id: number): Promise<Product | undefined> => {
    return products.find((product) => product.id === id);
  };

  return (
    <ProductContext.Provider value={{ products, getProductById }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct deve ser utilizado dentro de um ProductProvider');
  }
  return context;
};
