import Colors from '@/theme/theme';
import Link from 'next/link';
import React, { useState } from 'react';
import { Justify } from 'react-bootstrap-icons';
import styled from 'styled-components';

const MenuHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button onClick={toggleMenu}>
        <Justify size={25} color="#304918" />
      </Button>
     
      {isOpen && (
        <MenuContainer>
           <MenuSection>
           <h3>Menu</h3>
          <MenuItem><Link href="/">Home</Link></MenuItem>
          <MenuItem><Link href="/salads">About Us</Link></MenuItem>
          <MenuItem><Link href="/products">Products</Link></MenuItem>
          <MenuItem><Link href="/userAccess">Login</Link></MenuItem>
          <MenuItem><Link href="/desserts">Contact</Link></MenuItem>
          <MenuItem><Link href="/userAccess/profile">Conta</Link></MenuItem>
          <MenuItem><Link href="/products/heart">Favoritos</Link></MenuItem>
          <MenuItem><Link href="/products/cart">Carrinho</Link></MenuItem>
          </MenuSection>
        </MenuContainer>
      )}
    </>
  );
};

export default MenuHamburger;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const MenuItem = styled.div`
  color: ${Colors.green200};
  text-decoration: none;
  font-size: 1.5rem;
  margin: 10px 0;

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: 491px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
 position: absolute;
  background: #ffffff;
  border: none;
  z-index: 1100;
  display: none;
  right: 10px;

  @media (max-width: 491px) and (min-width: 360px){
    display: block;
    font-size: 1rem;
  }
`;

const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  top: -30px;
`;
