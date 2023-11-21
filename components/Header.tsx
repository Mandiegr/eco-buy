// // components/Header.js
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { ChevronLeft, Cart3, House, Heart } from 'react-bootstrap-icons';


export const Header = () => {
  
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
      <Link href={"/"}>
          <ChevronLeft size={26} />
      </Link>
      </div>
      <div>
      <nav className={styles.navbar}>
        <Link href={"/"} >
          <House size={26}/>
        </Link>
        <Link href={"/products/details"}>
        <Heart size={26}/>
        </Link>
        <Link href={"/products/details/cart"}>
         <Cart3 size={26}/>
        </Link>
      </nav>
      </div>
     
    </header>
  );
};
