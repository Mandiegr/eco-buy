import React from 'react';
import Image from 'next/image';
import { productListItems } from '../../../../util/product';
import Link from 'next/link';

const Product = () => {
  type PropsItem = {
    productName: string;
    image: string;
    value: string;
  };

  const ProductItem: React.FC<PropsItem> = ({ productName, image, value }) => {
    return (
      <div style={styles.item}>
        <Image src={image} alt={productName} style={styles.image} />
        <div style={styles.productInfo}>
          <h3 style={styles.name}>{productName}</h3>
          <p style={styles.value}>{value}</p>
        </div>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={styles.container}>
        <Link href={'/products/details'} style={styles.link}>
          {productListItems.map((productItem, index) => (
            <ProductItem
              key={index}
              productName={productItem.productName}
              image={productItem.image}
              value={productItem.value}
            />
          ))}
        </Link>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'row', 
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    margin: '0 auto',
  },
  item: {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    paddingTop: '20px',
    margin: '0 10px', 
  },
  link: {
    textDecoration: 'none',
  },
  image: {
    width: 300,
    height: 250,
    borderRadius: '10px',
  },
  name: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    color: 'green',
  },
  productInfo: {
    flex: 1,
    marginRight: 10,
  },
};

export default Product;
