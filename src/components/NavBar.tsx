import React from 'react';
import Link from 'next/link';
import { Cart3, Heart, Person } from 'react-bootstrap-icons';
import { useCart } from '@/context/CartContext';
import styled from 'styled-components';
import MenuHamburger from './button';
import Colors from '@/theme/theme';

export const NavBar = () => {
  const { state } = useCart();
  const totalItems = state.products.reduce((a, c) => a + (c.quantity ?? 0), 0);

  return (
    <Header>
      <Logo>EcoBuy<span>.</span></Logo>
      <MenuHamburger />
      
      <Navbar>
        <Link href="/">Home</Link>
        <Link href="#About">About Us</Link>
        <Link href="/products">Products</Link>
        <Link href="/userAccess">Login</Link>
        <Link href="#contact">Contact</Link>
      </Navbar>
      <Icons>
        <Link href="/userAccess/profile">
          <StyledPerson />
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
      </Icons>
    </Header>
  );
};
export default NavBar;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  padding: 1rem 9%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  overflow-y: hidden;
  width: 100%;

  @media (max-width: 1224px) {
    padding: 1rem 3%;
  }

  @media (max-width: 769px) {
    padding: 0.6rem 3%;
  }

  @media (max-width: 491px) {
    padding: 0 15px;
    height: 2.5rem;
  }
`;

const Logo = styled.p`
  font-size: 3rem;
  color: ${Colors.green200};
  font-weight: bolder;
  text-decoration: none;

  span {
    color: ${Colors.green200};
  }

  @media (max-width: 1400px) {
    font-size: 2rem;
  }

  @media (max-width: 1224px) {
    font-size: 1.5rem;
  }

  @media (max-width: 491px) {
    font-size: 1.5rem;
  }
`;

const Navbar = styled.nav`
  a {
    font-size: 2rem;
    padding: 0 1.5rem;
    color: #1e5c06;
    text-decoration: none;

    &:hover {
      color: #3d7737;
    }
  }

  @media (max-width: 1400px) {
    a {
      font-size: 1.5rem;
      padding: 0 1rem;
    }
  }

  @media (max-width: 1224px) {
    a {
      font-size: 1.2rem;
      padding: 0 0.5rem;
    }
  }

  @media (max-width: 769px) {
    a {
      font-size: 0.8rem;
      padding: 0 0.2rem;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    display: none;
    width: 100%;
    position: absolute;
    background-color: ${Colors.green200};
    top: 60px;
    left: 0;
    z-index: 1;

    a {
      margin: 10px;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;

  a {
    color: ${Colors.green200};
    margin-left: 1.5rem;

    &:hover {
      color: #3d7737;
    }
  }
  @media (max-width: 491px) {
    a {
      display: none;
    }
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

const StyledPerson = styled(Person)`
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


