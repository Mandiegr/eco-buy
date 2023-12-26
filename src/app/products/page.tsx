"use client"
import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/Header';
import Products from '@/util/productListe';

const getData = async () => {
  const res = await fetch("http://localhost:3333/products");
  if (!res.ok) {
    throw new Error("Falha ao buscar os dados");
  }
  return res.json();
};

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setProducts(data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <section>
      <Header />
      <Products products={products} />
    </section>
  );
};

export default ProductsPage;
