import styled from "styled-components";



export const HomeContainer = styled.main`  
  display: flex;
  width: 100%;
  max-width: calc(100vw - ((100vw - 1180px) / 2));
  margin-left: auto;
  min-height: 656;
  
  `;



export const Product = styled.div`  
  background:  #7465d4;
  border-radius: 8;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  img: {
    objectFit: cover
  };

  footer: {
    position: absolute;
    bottom: 0.25rem;
    left: 0.25rem;
    right: 0.25rem;
    padding: 2rem;

    borderRadius: 6;

    display: flex;
    alignItems: center;
    justifyContent: space-between;



    transform: translateY(110%);
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }

  
`