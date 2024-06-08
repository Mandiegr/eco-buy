// FavoritesPage.tsx
'use client'
import React, { useState } from 'react';
import { Header } from '../../../components/Header';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import Promo from '@/components/Category';

const FavoritesPage = () => {
  const { state } = useCart();
  const [category, setCategory] = useState<string>('');
  const favorites = state.favorites;

  return (
    <>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Promo setCategory={setCategory} />
      </div>
      <div style={{ padding: '90px' }}>
        {favorites.length === 0 ? (
          <p>Você não tem itens favoritados.</p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {favorites.map((product) => (
              <div key={product.id} style={{ margin: '10px', border: '1px solid #ccc', padding: '10px' }}>
                <Link href={{ pathname: "/products/productid", query: { id: product.id } }}>
                  <Image src={product.imagens[0]} width={200} height={200} alt={product.nome} />
                </Link>
                <h3>{product.nome}</h3>
                <p>R$ {product.preco.toFixed(2)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FavoritesPage;
