import Colors from "@/theme/theme";
import { styled } from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:${Colors.green200};
`;

export const ProfileContainer = styled.div`
  background-color: #ffffff;
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    color: #156207;
    margin-top: 5px;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #156207;
    border-radius: 0.25rem;
  }
`;

 export const ButtonContainer = styled.div`
  
  display: flex;
  flex-direction: row;
  //padding-right: 1rem;
  //align-items: center;
 // justify-content: center;
 `

export const Button = styled.button`
  height: 30px;
  width: 130px;
  background-color: ${Colors.green200};
  color: #ffffff;
  border: none;
  border-radius: 2px;
  margin-top: 16px;
 //margin-bottom: 10px;
  margin-right: 10px;
  margin-left: 10px;
 // margin: 0px 10px ;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.green300};
  }
`;

export const Photo = styled.div`
  margin-left: 100px;
  width: 70px;
  height: 70px;
  border-radius: 50%; 
  overflow: hidden; 
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ButtonPlus = styled.div`
   margin-left: 100px;
`;

export const ConfirmationDialog = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;