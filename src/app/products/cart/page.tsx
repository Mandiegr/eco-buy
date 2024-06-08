'use client';
import React, { useState } from 'react';
import { Header } from '../../../components/Header';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import Promo from '@/components/Category';
import styled from 'styled-components';

const CartPage = () => {
  const { state, dispatch, total } = useCart();
  const [category, setCategory] = useState<string>('');
  const [modalProduct, setModalProduct] = useState<number | null>(null);

  const removeProduct = (productId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', productId });
    setModalProduct(null);
  };

  const increaseQuantity = (productId: number) => {
    dispatch({ type: 'INCREASE_QUANTITY', productId });
  };

  const decreaseQuantity = (productId: number) => {
    const product = state.products.find(p => p.id === productId);
    if (product && product.quantity > 1) {
      dispatch({ type: 'DECREASE_QUANTITY', productId });
    } else {
      setModalProduct(productId);
    }
  };

  return (
    <>
      <FlexColumn>
        <Header />
        <Promo setCategory={setCategory} />
      </FlexColumn>
      <Container>
        {state.products.length === 0 ? (
          <EmptyCartMessage>Carrinho Vazio</EmptyCartMessage>
        ) : (
          <ProductList>
            {state.products.map((product) => (
              <ProductItem key={product.id}>
                <BoxContainer>
                  <ImageContainer>
                    {product.imagens.length > 0 ? (
                      <StyledImage src={product.imagens[0]} width={250} height={200} alt="" />
                    ) : (
                      <NoImage>No Image Available</NoImage>
                    )}
                  </ImageContainer>
                  {/*  <StyledVerticalLine /> */}
                  <InfoContainer>
                    <Describe>
                      <ProductName>{product.nome}</ProductName>
                      <Price>
                        <Value>R$ {product.preco.toFixed(2)}</Value>
                      </Price>
                    </Describe>
                    <Des>
                      <ButtonContainer>
                        <QuantityButton onClick={() => decreaseQuantity(product.id)}>-</QuantityButton>
                        <Quant>{product.quantity}</Quant>
                        <QuantityButton onClick={() => increaseQuantity(product.id)}>+</QuantityButton>
                      </ButtonContainer>
                    </Des>
                  </InfoContainer>
                </BoxContainer>
              </ProductItem>
            ))}
          </ProductList>
        )}
        {state.products.length > 0 && (
          <Total>
            <ContentTotal>
              <Price>
                <TotalText>Valor Total:</TotalText>
                <TotalValue>R$ {total.toFixed(2)}</TotalValue>
              </Price>
            </ContentTotal>
            <ButtonsContainer>
              <StyledButton onClick={() => window.history.back()}>Back</StyledButton>
              <Link href="">
                <StyledButton>Continue</StyledButton>
              </Link>
            </ButtonsContainer>
          </Total>
        )}
      </Container>
      {modalProduct !== null && (
        <ModalOverlay>
          <ModalContent>
            <ModalText>Tem certeza que deseja excluir?</ModalText>
            <ModalButtons>
              <ModalButton onClick={() => removeProduct(modalProduct)}>Excluir</ModalButton>
              <ModalButton onClick={() => setModalProduct(null)}>Cancelar</ModalButton>
            </ModalButtons>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default CartPage;


const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const EmptyCartMessage = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: gray;
`;

const ProductList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProductItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  background-color: #fff;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid #f6f6f6;
`;

const StyledImage = styled(Image)`
  max-width: 100%;
  height: auto;
  
  align-items: center;
  justify-content: center;
`;

const NoImage = styled.span`
  color: gray;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  padding: 1rem;
  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media(max-width: 590px) and (min-width: 360px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Describe = styled.div`
  @media(min-width: 768px) {
    flex: 1;
    padding-right: 1rem;
  }
  @media(max-width: 590px) and (min-width: 360px){
    font-size: 0.8rem;
  }
`;

const ProductName = styled.h3`
  font-size: 1.25rem;
  color: #333;
  @media(max-width: 490px) {
    font-size: 1rem;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Value = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  @media(max-width: 590px) and (min-width: 360px) {
    font-size: 1rem;
  }
`;

const Des = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  
  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  background:#304918;
`;

const QuantityButton = styled.button`
  background-color: #304918;
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #263913;
  }

  @media(max-width: 590px) and (min-width: 360px) {
    font-size: 0.8rem;
  }
`;

const Quant = styled.span`
  margin: 0 1rem;
  font-size: 1rem;
  color: #fff;
  @media(max-width: 490px) {
    font-size: 0.8rem;
  }
`;

const Total = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ContentTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const TotalText = styled.h2`
  font-size: 1.5rem;
  padding: 1rem;
  @media(max-width: 590px) and (min-width: 360px) {
    font-size: 1rem;
  }
`;

const TotalValue = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  @media(max-width: 590px) and (min-width: 360px) {
    font-size: 1rem;
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media(max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  @media(min-width: 768px) {
    flex-direction: row;
  }
  @media(max-width: 590px) and (min-width: 360px) {
    flex-direction: row;
    align-items: center;
  }
`;

const StyledButton = styled.button`
  background-color: #304918;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  width: 200px; 
  text-align: center;
  &:hover {
    background-color: #263913;
  }

  @media(max-width: 590px) and (min-width: 360px) {
    width: auto; 
    min-width: 140px; 
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
`;

const ModalText = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
`;

const ModalButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const ModalButton = styled.button`
  background-color: #304918;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #263913;
  }
`;
