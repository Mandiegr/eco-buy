import Link from 'next/link';
import styles from '../styles/Header.module.css';


export const NavBar = () => {
  
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>EcoBuy</h1>
      </div>
      <nav className={styles.navbar}>
        <Link href={"/products"} >
          Products
        </Link>
        <Link href={"/about"}>
          About Us
        </Link>
        <Link href={"/login"}>
          Login
        </Link>
        <Link href={"products/details/cart"}>
          Cart
        </Link>
      </nav>
    </header>
  );
};