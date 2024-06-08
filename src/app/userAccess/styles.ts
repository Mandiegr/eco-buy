import Colors from "@/theme/theme";
import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.green200};
`;

export const FormContainer = styled.div`
  background-color: rgb(255, 255, 255);
  height: 300px;
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 12rem;
`;

export const Logo = styled.h2`
  margin-bottom: 1rem;
  position: relative;
  margin-top: -15rem;
`;

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${Colors.green200};
  border-radius: 0.25rem;
  padding-left: 2.5rem;
`;

export const Icon = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  top: 0.5rem;
`;

export const Button = styled.button`
  height: 30px;
  width: 130px;
  background-color: ${Colors.green200};
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 2px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.green200};
  }
`;

export const SwitchText = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SwitchLink = styled.span`
  cursor: pointer;
  color: ${Colors.green200};
`;
