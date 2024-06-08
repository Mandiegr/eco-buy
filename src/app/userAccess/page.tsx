'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useAuth } from '../../context/AuthContext';
import NavBar from '@/components/NavBar';
import { EnvelopeAt, Lock } from 'react-bootstrap-icons';
import { Button, Container, FormContainer, Icon, Input, InputContainer, Logo, SwitchLink, SwitchText } from './styles';

export default function PageLogin() {
  const [isLogin, setIsLogin] = useState(true); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAuth(); 
  const router = useRouter();

  const handleAuth = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); 

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Login bem-sucedido');
        router.push('/');
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        setUser(userCredential.user);
        alert('Registro bem-sucedido');
        router.push('/'); 
      }

      setEmail('');
      setPassword('');
    } catch (error) {
      alert(isLogin ? 'Falha no login' : 'Falha ao cadastrar');
      console.error(error);
    }
  };

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <> 
    <NavBar />
    <Container>
      <FormContainer>
        <Logo>{isLogin ? 'Entre na sua conta' : 'Crie uma conta'}</Logo>
        <form onSubmit={handleAuth}>
          <InputContainer>
            <Icon><EnvelopeAt /></Icon>
            <Input
              placeholder="Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <Icon><Lock /></Icon>
            <Input
              placeholder="Senha"
              type="password"
              id="senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputContainer>
          <Button type="submit">
            {isLogin ? 'Entrar' : 'Criar'}
          </Button>
        </form>
        <SwitchText>
          {isLogin ? 'Novo por aqui?' : 'Já possui uma conta?'}
          <SwitchLink onClick={toggleForm}>
            {isLogin ? 'Cadastre-se' : 'Acesse sua conta'}
          </SwitchLink>
        </SwitchText>
      </FormContainer>
    </Container>
    </>
  );
}