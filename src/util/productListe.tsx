import React from 'react';
import Link from "next/link";
import Image from "next/image";
import style from '../../styles/productData.module.css';
import { Heart, Share } from 'react-bootstrap-icons'

interface ProductProps {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  previousPrice: number;
  isNew: boolean;
  category: string;
  brand: string;
}

interface Props {
  products: ProductProps[];
}

const Products = ({ products }: Props) => {
  return (
    <div style={{ flex: 1, backgroundColor: ' #ffffff', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '30px' }}>
        <section className={style.products}>
          <div className={style.boxContainer}>
            {products.map((item) => (
              <Link className={style.box} href={{ pathname: "/products/productid", query: { id: item?.id } }} key={item.id}>
                <div className={style.image}>
                  <Image src={item?.image} width={160} height={150} alt="" />
                  <div className={style.icons}>
                    <a href="#" className={style.uilHeart}><Heart size={26} /></a>
                    <Link href={"/products/cart"} className={style.link}> add to car</Link>
                    <a href="#" className={style.share}> <Share size={26} /></a>
                  </div>
                </div>
                <div className={style.content}>
                  <h3>{item?.name}</h3>
                  <div className="price">
                    <span>{item?.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
