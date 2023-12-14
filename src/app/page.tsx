"use client";
import React from 'react';
import { ProductInitial, products, } from '../../components/ProductsPage';
import {AboutSection} from '../../components/AboutUs';
import {Footer} from '../../components/footer';
import { NavBar } from '../../components/NavBar';
import { Banner } from './styles';

export default  function Home() {


  return (
    <div >
      <NavBar />
      <Banner/>
      <ProductInitial products={products} />
      <AboutSection />
      <ProductInitial products={products} />
      <Footer />
    </div>
  );
};
