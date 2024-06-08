'use client';
import React, { useState } from 'react';
import Header from '../../components/Header';
import ProductList from '@/util/productListe';
import styled from 'styled-components';
import Category from '@/components/Category';

const ProductsPage = () => {
  const [category, setCategory] = useState<string>('');

  return (
    <>
      <Content>
        <Header />
        <Category setCategory={setCategory} />
      </Content>
      <div style={{ flex: 1, backgroundColor: '#ffffff', width: '100%', marginTop: '-80px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '30px' }}>
          <ProductList category={category} />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;


const Content = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;

  @media(max-width: 600px) and (min-width: 320px) {
  }

`