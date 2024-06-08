import React from 'react';
import styled from 'styled-components';
import { CreditCard, Paypal, PiggyBank } from 'react-bootstrap-icons';
import Colors from '@/theme/theme';


export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <BoxContainer>
        <Box>
          <BoxTitle>quick links</BoxTitle>
          <BoxLink href="#">home</BoxLink>
          <BoxLink href="#">about</BoxLink>
          <BoxLink href="#">products</BoxLink>
          <BoxLink href="#">review</BoxLink>
          <BoxLink href="#">contact</BoxLink>
        </Box>
        <Box>
          <BoxTitle>extra links</BoxTitle>
          <BoxLink href="#">my account</BoxLink>
          <BoxLink href="#">my order</BoxLink>
          <BoxLink href="#">my favorite</BoxLink>
        </Box>
        <Box>
          <BoxTitle>locations</BoxTitle>
          <BoxLink href="#">india</BoxLink>
          <BoxLink href="#">USA</BoxLink>
          <BoxLink href="#">japan</BoxLink>
          <BoxLink href="#">france</BoxLink>
          <BoxLink href="#">Brazil</BoxLink>
        </Box>
        <Box>
          <BoxTitle>contact info</BoxTitle>
          <BoxLink href="#">+123-456-7890</BoxLink>
          <BoxLink href="#">example@gmail.com</BoxLink>
          <BoxLink href="#">Belém, Brazil - 809000</BoxLink>
          <div>
            <CreditCard /> <Paypal /> <PiggyBank />
          </div>
        </Box>
      </BoxContainer>
      <Credit>
        create by <span>mandiegr</span>
      </Credit>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 2rem 0;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-left: 8rem;
`;

const Box = styled.div`
  flex: 1 1 25rem;
`;

const BoxTitle = styled.h3`
  color:${Colors.green200};
  font-size: 1.5rem;
  padding: 1rem 0;
`;

const BoxLink = styled.a`
  display: block;
  color: #666;
  font-size: 1rem;
  padding: 1rem 0;

  &:hover {
    color: var(--green);
    text-decoration: underline;
  }
`;

const BoxImage = styled.img`
  margin-top: 1rem;
  justify-items: center;
  align-items: center;
  width: 20rem;
`;

const Credit = styled.div`
  text-align: center;
  padding: 1.5rem;
  margin-top: 1.5rem;
  padding-top: 2.5rem;
  font-size: 2rem;
  color: #333;
  border-top: 0.1rem solid rgba(0, 0, 0, 0.1);
`;