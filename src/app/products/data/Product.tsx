import Image from 'next/image';
import React from 'react';
import style from '../../../../styles/productData.module.css';
import {Heart, Share} from 'react-bootstrap-icons'
import Link from 'next/link';
import { products } from '@/util/productListe';

const ProductList = () => {
  

  return (
    <section className={style.products} id="products">

      <div className={style.boxContainer}>
        {products.map((product, index) => (
          <div className={style.box} key={index}>
            <span className={style.discount}>{product.discount}</span>
            <div className={style.image}>
            <Link href={"/products/details"}>  <Image src={product.image} width={150} height={150} alt="" /></Link>
              <div className={style.icons}>
                <a href="#" className={style.uilHeart}><Heart size={26}/></a>
                <Link href={"/products/details/cart"} className={style.link}> add to car</Link>
                <a href="#" className={style.share}> <Share size={26} /></a>
              </div>
            </div>
            <div className={style.content}>
              <h3>{product.name}</h3>
              <div className="price">
                {product.price} <span>{product.discountedPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
