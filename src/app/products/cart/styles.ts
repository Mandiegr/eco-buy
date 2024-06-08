import Colors from "@/theme/theme";
import { Trash } from "react-bootstrap-icons";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;
  max-width: 800px;
  height: 100vh;

  @media (max-width: 768px) {
    //background: yellowgreen;
    

  }
`;

export const ProductItem = styled.li`
  list-style: none;
`;

export const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-bottom: 1rem;
`;

export const ImageContainer = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  background: #ffffff;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
   width: 180px;
   height: 180px;
    
  }
`;

export const Describe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Value = styled.div`
  font-size: 1.2rem;
`;

export const Des = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TrashIcon = styled(Trash)`
  margin-left: 2rem;
  cursor: pointer;
  color: ${Colors.green200};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:  ${Colors.green200};
  border-radius: 20px;
  width: 5rem;
  height: 2rem;
`;

export const Button = styled.button`
  font-weight: bold;
  color: #ffffff;
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: ${Colors.green200};
  border: none;
  margin: 0.5rem;
`;

export const Quant = styled.span`
  color: white;
`;

export const Total = styled.div`
  border-top: 1px solid #ccc;
  margin: 20px 0;
  padding: 20px;
`;

export const ContentTotal = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  display: flex;
  background:  ${Colors.green200};
  color: white;
  padding: 10px 6rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 5px 3rem; 

  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-top: 3rem;
`;