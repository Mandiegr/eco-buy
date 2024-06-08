import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { firebaseConfig } from '../app/services/firebase';
import Link from 'next/link';
import Image from 'next/image';
import style from '../styles/productData.module.css';
import { Heart, HeartFill, Share } from 'react-bootstrap-icons';
import { useCart } from '@/context/CartContext';
import LoadingSpinner from '../components/Loading';

interface Product {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  imagens: string[];
  quantity: number;
  category: string;
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

interface ProductListProps {
  category: string;
}

const ProductList: React.FC<ProductListProps> = ({ category }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { dispatch, state } = useCart();

  const addToCart = (id: number) => {
    const productToAdd = products.find(product => product.id === id);
    if (productToAdd) {
      dispatch({ type: 'ADD_TO_CART', product: productToAdd });
    } else {
      console.error('Produto não encontrado para adicionar ao carrinho.');
    }
  };

  const toggleFavorite = (product: Product) => {
    dispatch({ type: 'TOGGLE_FAVORITE', product });
  };

  useEffect(() => {
    const productsRef = ref(database, 'products');
    get(productsRef)
      .then((snapshot) => {
        const productsData: Product[] = [];
        snapshot.forEach((childSnapshot) => {
          const product = childSnapshot.val();
          product.id = childSnapshot.key || '';
          productsData.push(product);
        });
        setProducts(productsData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error getting products: ', error);
        setLoading(false);
      });
  }, []);

  const filteredProducts = category
    ? products.filter(product => product.category === category)
    : products;

  return (
    <>
      <section className={style.products}>
        <div className={style.boxContainer}>
          {loading ? (
            <LoadingSpinner />
          ) : filteredProducts.length > 0 ? (
            <div className={style.products}>
              {filteredProducts.map((product) => (
                <div className={style.box} key={product.id} style={{ margin: '10px', border: '1px solid #ccc' }}>
                  <Link href={{ pathname: "/products/productid", query: { id: product.id } }}>
                    <p className={style.link}>
                      <div className={style.image}>
                        <Image src={product.imagens[0]} width={200} height={200} alt={product.nome} />
                        <div className={style.icons} onClick={() => toggleFavorite(product)}>
                          <Link href="#" className={style.uilHeart}>
                            {state.favorites.some((p) => p.id === product.id) ? (
                              <HeartFill size={26} color={'#b3ec7e'} />
                            ) : (
                              <Heart size={26} color={'#ffffff'} />
                            )}
                          </Link>
                          <a href="#" onClick={() => addToCart(product.id)} className={style.link}>
                            more...
                          </a>
                          <Link href="#" className={style.share}><Share size={26} /></Link>
                        </div>
                      </div>
                      <div className={style.content}>
                        <h3>{product.nome}</h3>
                        <div className="price">
                          <span> R$ {product.preco.toFixed(2)}</span>
                        </div>
                      </div>
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p>Nenhum produto encontrado.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductList;
