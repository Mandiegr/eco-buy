'use-client'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Products.module.css';
import { ChevronRight } from 'react-bootstrap-icons';


interface Products {
  image: string;
  id: number;
}

interface ProductListProps {
  products: Products[];
}

export const products: Products[] = [
  { id: 1, image: '/assets/6.jpg' },
  { id: 2, image: '/assets/7.jpg' },
  { id: 3, image: '/assets/8.jpg' },
  { id: 4, image: '/assets/9.jpg' },
  { id: 5, image: '/assets/18.jpg' },
  { id: 6, image: '/assets/12.jpg' },
  { id: 7, image: '/assets/12.jpg' },
];

export const ProductInitial: React.FC<ProductListProps> = ({ products }) => {
  const displayedProducts = products.slice(0, 4); // Mostra apenas os quatro primeiros produtos
  

  return (
    <div className={styles.Container}>
      {displayedProducts.map((product) => (
        <div key={product.id}>
          <Image src={product.image} alt="produto" width={300} height={280} style={{ marginRight: '30px' }} />
        </div>
      ))}
      <Link href={"/products"}>
          <ChevronRight size={26} />
        
      </Link>
    </div>
  );
};


