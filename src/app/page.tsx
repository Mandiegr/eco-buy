import React from 'react';
import {Header} from '../../components/Header';
import {Banner} from '../../components/Banner';
import {ProductList, products, } from '../../components/Products';
import {AboutSection} from '../../components/AboutUs';
import {Footer} from '../../components/footer';

export default  function Home() {


  return (
    <div>
      <Header />
      <Banner />
      <ProductList products={products} />
      <AboutSection />
      <ProductList products={products} />
      <Footer />
    </div>
  );
};
