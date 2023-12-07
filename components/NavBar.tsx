
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { Cart3, Heart, Justify, Person } from 'react-bootstrap-icons';



export const NavBar = () => {
  return (
    <header className={styles.header}>
       <label htmlFor="toggler" className={`${styles.uilbars}`}>
        <Justify size={30} />
      </label>
      <a href="#" className={styles.logo}>
        EcoBuy<span>.</span>
      </a>
      <nav className={styles.navbar}>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/products">Products</Link>
        <Link href="/login">Login</Link>
        <Link href="#contact">contact</Link>
      </nav>
      <div className={styles.icons}>
        <a  className="uil uil-heart"> <Heart/></a>
        <a className="uil uil-shopping-cart"><Cart3/></a>
        <a  className="uil uil-user"><Person/></a>
      </div>
    </header>
    
  );
};
