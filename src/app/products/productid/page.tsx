'use client';
import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { firebaseConfig } from '../../services/firebase';
import { Header } from '../../../components/Header';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { Heart, HeartFill } from 'react-bootstrap-icons';
import ProductInitial, { products } from '@/components/Product';
import Promo from '@/components/Category';
import BannerTest, { bannerProducts } from '@/components/banner';
import LoadingSpinner from '@/components/Loading';
import styled from 'styled-components';
import CommentSection from '@/components/Comment';
import { AboutProducts, AboutProductsDiv, ActionRow, Button, ButtonAdd, ButtonContainer, ButtonText, Container, Content, Description, DetailsContainer, FlexColumn, HorizontalLine, Icon, ImageContainer, Item, PriceContainer, ProductName, Quantity, Value } from './styles';

interface Product {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  imagens: string[];
  quantity: number;
}

type SearchParams = { [key: string]: string | string[] | undefined };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const Details = ({ searchParams }: { searchParams: SearchParams }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { dispatch, state } = useCart();
  const [category, setCategory] = useState<string>('');

  const handleAddToCart = () => {
    if (product) {
      dispatch({ type: 'ADD_TO_CART', product });
    }
  };

  const increaseQuantity = () => {
    if (product) {
      dispatch({ type: 'INCREASE_QUANTITY', productId: product.id });
      setProduct((prevProduct) => prevProduct ? { ...prevProduct, quantity: prevProduct.quantity + 1 } : prevProduct);
    }
  };

  const decreaseQuantity = () => {
    if (product && product.quantity > 1) {
      dispatch({ type: 'DECREASE_QUANTITY', productId: product.id });
      setProduct((prevProduct) => prevProduct ? { ...prevProduct, quantity: prevProduct.quantity - 1 } : prevProduct);
    }
  };

  const toggleFavorite = () => {
    if (product) {
      dispatch({ type: 'TOGGLE_FAVORITE', product });
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productId = typeof searchParams?.id === 'string' ? parseInt(searchParams.id) : undefined;

        if (productId !== undefined && !isNaN(productId)) {
          const productRef = ref(database, `products/${productId}`);
          const snapshot = await get(productRef);
          if (snapshot.exists()) {
            const productData = snapshot.val() as Product;
            const cartProduct = state.products.find(p => p.id === productData.id);
            setProduct(cartProduct ? { ...productData, quantity: cartProduct.quantity } : { ...productData, quantity: 1 });
          } else {
            console.error('Produto não encontrado');
          }
        } else {
          console.error('ID do produto inválido');
        }
      } catch (error) {
        console.error('Erro ao buscar detalhes do produto:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [searchParams?.id, state.products]);

  return (
    <>
      <FlexColumn>
        <Header />
        <Promo setCategory={setCategory} />
      </FlexColumn>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {product ? (
            <Container>
              <Content>
                <ImageContainer>
                  <Image src={product?.imagens[0]} alt={product?.nome} style={{ maxHeight: '300px', display: 'flex', justifyItems: 'center' }} width={400} height={400} />
                </ImageContainer>

                <DetailsContainer>
                <ActionRow>
                  <Item>
                    <ProductName>{product?.nome}</ProductName>
                  </Item>

                  <Icon onClick={toggleFavorite}>
                      {state.favorites.some((p) => p.id === product.id) ? (
                        <HeartFill size={30} color={'#304918'} />
                      ) : (
                        <Heart size={30} color={'#304918'} />
                      )}
                    </Icon>
                    </ActionRow>

                  <PriceContainer>
                    <Value>R$ {product?.preco.toFixed(2)}</Value>
                    <ButtonContainer>
                      <Button onClick={decreaseQuantity}>-</Button>
                      <Quantity>{product?.quantity}</Quantity>
                      <Button onClick={increaseQuantity}>+</Button>
                    </ButtonContainer>
                  </PriceContainer>

                  <AboutProducts>
                    <AboutProductsDiv>About Products</AboutProductsDiv>
                    <Description>{product?.descricao}</Description>
                  </AboutProducts>

                 
                    <Link href="/products/cart">
                      <ButtonAdd onClick={handleAddToCart}>
                        <ButtonText>Add To Cart</ButtonText>
                      </ButtonAdd>
                    </Link>
                 
                </DetailsContainer>
              </Content>
            </Container>
          ) : (
            <p>Produto não encontrado.</p>
          )}
          <HorizontalLine />
          <CommentSection/>
        
          <BannerTest products={bannerProducts} />
          <ProductInitial products={products} />
        </>
      )}
    </>
  );
};

export default Details;

