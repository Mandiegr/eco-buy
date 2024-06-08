import Colors from "@/theme/theme";
import { styled } from "styled-components";

 export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 1rem auto 5rem;
  max-width: 600px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  display: flex;
  background: #f4f4f4;
  justify-content: center;
  align-items: center;
 // position: relative;
  max-height: 400px;
`;

export const DetailsContainer = styled.div`
  margin: 1rem;
  position: relative;
`;

export const Icon = styled.div`
  margin-right: 20px;
  margin-top: 20px;
`;

export const Item = styled.div`
  margin-left: 20px;
`;

export const ProductName = styled.div`
  color: gray;
  font-weight: bold;
  font-size: 35px;
  margin-bottom: 10px;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
`;

export const Value = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-right: 10px;
  margin-bottom: 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 40px;
  background-color: ${Colors.green200};
`;

export const Button = styled.button`
  font-weight: bold;
  color: #ffffff;
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: ${Colors.green200};
  border: none;
  margin: 1rem;
`;

export const Quantity = styled.span`
  color: white;
`;

export const ButtonAdd = styled.div`
  display: flex;
  width: 32rem;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color:  ${Colors.green200};
  margin-top: 20px;

  @media (max-width: 600px) and (min-width: 490px) {
   width: 22rem
  }
 
  @media (max-width: 390px) and (min-width: 320px) {
   width: 19rem
  }


  
`;

export const ButtonText = styled.div`
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

export const AboutProducts = styled.div`
  margin-left: 20px;
  margin-bottom: 20px;
`;

export const AboutProductsDiv = styled.div`
  font-size: 25px;
  margin-bottom: 10px;
`;

export const Description = styled.div`
  font-size: 16px;
  margin-bottom: 15px;
`;

export const HorizontalLine = styled.hr`
  border: none;
  border-top: 2px solid #abb0a6;
  margin: 3rem 0;
  margin-top: -55px;
`;

export const ActionRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: -15px;

  
  
`;
