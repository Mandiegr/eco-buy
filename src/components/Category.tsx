import Colors from '@/theme/theme';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, Justify } from 'react-bootstrap-icons';
import styled from 'styled-components';

interface PromoProps {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Category: React.FC<PromoProps> = ({ setCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 491);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };


  return (
    <>
      <StyledHeader>
        <nav>
          <NavItem onClick={() => { setCategory('lancamento'); closeMenu(); }}>Lançamento</NavItem>
          <NavItem onClick={() => { setCategory('promo'); closeMenu(); }}>Promo</NavItem>
          <NavItem onClick={() => { setCategory('perfumaria'); closeMenu(); }}>Perfumaria</NavItem>
          <NavItem onClick={() => { setCategory('presentes'); closeMenu(); }}>Presentes</NavItem>
          <NavItem onClick={() => { setCategory('corpo-e-banho'); closeMenu(); }}>Corpo e Banho</NavItem>
          <NavItem onClick={() => { setCategory('skincare'); closeMenu(); }}>SkinCare</NavItem>
          <NavItem onClick={() => { setCategory('marcas'); closeMenu(); }}>Marcas</NavItem>
        </nav>
      </StyledHeader>

      {isMobile && <MenuHamburguer isOpen={isOpen} toggleMenu={toggleMenu} />} 

      {isOpen && (
        <MenuContainer>
          <MenuSection > 
            <h3>Menu</h3>
              
                <MenuItem>
                  <Link href="/">Home</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/products/heart">Favoritos</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/products/cart">Carrinho</Link>
                </MenuItem>
              
       
          </MenuSection>

          <MenuSection>
            <h3>Categoria</h3>
              
                <MenuItem onClick={() => { setCategory('lancamento'); closeMenu(); }}>Lançamento</MenuItem>
                <MenuItem onClick={() => { setCategory('promo'); closeMenu(); }}>Promoção</MenuItem>
                <MenuItem onClick={() => { setCategory('perfumaria'); closeMenu(); }}>Perfumaria</MenuItem>
                <MenuItem onClick={() => { setCategory('presentes'); closeMenu(); }}>Presentes</MenuItem>
                <MenuItem onClick={() => { setCategory('corpo-e-banho'); closeMenu(); }}>Corpo e Banho</MenuItem>
                <MenuItem onClick={() => { setCategory('skincare'); closeMenu(); }}>SkinCare</MenuItem>
                <MenuItem onClick={() => { setCategory('marcas'); closeMenu(); }}>Marcas</MenuItem>
                <MenuItem onClick={() => { setCategory('make'); closeMenu(); }}>Make</MenuItem>
             
        
          </MenuSection>
        </MenuContainer>
      )}
    </>
  );
};

interface MenuHamburguerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MenuHamburguer: React.FC<MenuHamburguerProps> = ({ isOpen, toggleMenu }) => {
  return (
    <Container>
      <Seta>
        <a onClick={() => window.history.back()}>
          <StyledChevronLeft />
        </a>
      </Seta>
      <Button onClick={toggleMenu}>
        <Justify size={24} color="#304918" />
      </Button>
    </Container>
  );
};

export default Category;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
 top: -30px;
`;

const MenuItem = styled.a`
  color: ${Colors.green200};
  text-decoration: none;
  font-size: 1.5rem;
  margin: 10px 0;
  @media (max-width: 600px) {
    font-size: 1rem;
   
  }
`;

const Button = styled.button`
  display: flex;
  position: absolute;
  background: #ffffff;
  border: none;
  right: 20px;
  z-index: 1100;
  margin-top: -20px;

  @media (max-width: 600px) {
    display: block;
  }
`;

const StyledHeader = styled.header`
  position: relative;
  flex-direction: row;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: ${Colors.green200};
  color: #ffffff;
  z-index: 1000;
  width: 100%;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  @media (max-width: 600px) and (min-width: 320px) {
    display: none;

    nav {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const NavItem = styled.a`
  font-size: 1rem;
  color: #ffffff;
  text-decoration: none;
  margin: 0 1rem;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    margin: 0.5rem 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -20px;
`;

const StyledChevronLeft = styled(ChevronLeft)`
  color: ${Colors.green200};

  &:hover {
    color: #228b22; 
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Seta = styled.div`
  display: none;
  position: absolute;
  left: 20px;
  margin-top: -20px;
  background: #ffffff;
  border: none;
  z-index: 1100;

  @media (max-width: 600px) {
    display: block;
  }
`;
