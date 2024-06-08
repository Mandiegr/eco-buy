import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Cart3, House, Heart } from 'react-bootstrap-icons';
import { useCart } from '@/context/CartContext';
import styled from 'styled-components';
import Colors from '@/theme/theme';

export const Header = () => {
  const { state } = useCart();
  const totalItems = state.products.reduce((a, c) => a + (c.quantity ?? 0), 0);

  return (
    <StyledHeader>
      <Seta>
        <a onClick={() => window.history.back()}>
          <StyledChevronLeft />
        </a>
      </Seta>
      <Navbar>
        <Link href="/">
          <StyledHouse />
        </Link>
        <Link href="/products/heart">
          <StyledHeart />
        </Link>
        <Link href="/products/cart">
          <CartContainer>
            <StyledCart3 />
            {totalItems > 0 && (
              <CartCount>{totalItems}</CartCount>
            )}
          </CartContainer>
        </Link>
            </Navbar>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem ; //24px
  background-color: #fbfbfb; 
  color: #ffffff;
  z-index: 1000;
  overflow-y: hidden;
  width: 100%;

  @media (max-width: 490px) {
    padding: 0.5rem;
    flex-direction: row;
    align-items: center;
    height: 3rem;
  }
`;

const Seta = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: #ce0d30;
    text-decoration: none;
    flex-wrap: wrap;

    @media (max-width: 600px) and (min-width: 320px){
      display: none;
     padding-right: 6rem;
    }
  }
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-left: 1.5rem;
    color: ${Colors.green200};
    text-decoration: none;

    &:hover {
      color: #228b22; 
    }

    @media  (max-width: 600px) and (min-width: 320px) {
      margin: 0.5rem;
      font-size: 1rem;
      display:none;
    }
  }
`;

const StyledChevronLeft = styled(ChevronLeft)`
  font-size: 30px;
  color: ${Colors.green200};

  &:hover {
      color: #228b22; 
    }


  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const StyledHouse = styled(House)`
  font-size: 30px;
  color: ${Colors.green200};

  &:hover {
    color: #228b22;
  }

  @media (max-width: 480px) {
    font-size: 25px;
  }
`;

const StyledHeart = styled(Heart)`
  font-size: 30px;
  color: ${Colors.green200};

  &:hover {
    color: #228b22;
  }

  @media (max-width: 480px) {
    font-size: 25px;
  }
`;

const StyledCart3 = styled(Cart3)`
  font-size: 30px;
  color: ${Colors.green200};

  &:hover {
    color: #228b22;
  }

  @media (max-width: 480px) {
    font-size: 25px;
  }
`;

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const CartCount = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  background: red;
  color: white;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
`;

export default Header;
 