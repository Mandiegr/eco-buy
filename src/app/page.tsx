"use client";
import React, { useState, useEffect } from 'react';
import { ProductInitial, products } from '../components/Product';
import { AboutSection } from '../components/AboutUs';
import { Footer } from '../components/footer';
import { NavBar } from '../components/NavBar';
import { Banner } from './styles';
import LoadingSpinner from '../components/Loading'; 

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

  
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <NavBar />
          <Banner />
          <ProductInitial products={products} />
          <AboutSection />
          <ProductInitial products={products} />
          <Footer />
        </>
      )}
    </div>
  );
}
