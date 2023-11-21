import React from 'react';
import Product from "../products/data/ProductList";
import { Header } from '../../../components/Header';

const ProductsPage = () => {
  return (
    <section>
    <Header/>
     <div style={{ flex: 1 , backgroundColor:' #fff', width:'100%'}}>   {/*#ffe5aa*/}
       
       
       <div style={{ display: 'flex',flexDirection:'row', justifyContent:'center', padding:'30px'}}>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
       </div>
      
      </div>

    </section> 
   
  );
};



export default ProductsPage;