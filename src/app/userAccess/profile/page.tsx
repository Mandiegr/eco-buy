'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getDatabase, ref, set, get, child } from 'firebase/database';
import { auth, signOut } from '../../services/firebase'; // Import signOut function from your firebase setup
import { PlusCircleFill } from 'react-bootstrap-icons';
import styled from 'styled-components';
import NavBar from '@/components/NavBar';
import Image from 'next/image';
import { Button, ButtonContainer, ButtonPlus, ConfirmationDialog, Container, InputContainer, Photo, ProfileContainer } from './styles';


const Profile = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [email, setEmail] = useState('');
  const [showPhotoInput, setShowPhotoInput] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;
      if (user) {
        const dbRef = ref(getDatabase());
        try {
          const snapshot = await get(child(dbRef, `users/${user.uid}`));
          if (snapshot.exists()) {
            const userData = snapshot.val();
            setName(userData.name || '');
            setAddress(userData.address || '');
            setPhotoURL(userData.photoURL || '');
            setEmail(user.email || '');
          } else {
            console.log('No data available');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        alert('Usuário não autenticado');
      }
    };

    fetchData();
  }, []);

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();

    const user = auth.currentUser;
    if (user) {
      const db = getDatabase();
      const userRef = ref(db, 'users/' + user.uid);

      try {
        await set(userRef, {
          name,
          address,
          photoURL
        });

        alert('Perfil atualizado com sucesso!');
      } catch (error) {
        console.error('Erro ao salvar perfil:', error);
      }
    } else {
      alert('Usuário não autenticado');
    }
  };

  const handlePhotoClick = () => {
    setShowPhotoInput(!showPhotoInput);
  };

  const handleLogoutClick = () => {
    setShowLogoutConfirmation(true);
  };

  const handleConfirmLogout = async () => {
    try {
      await signOut();
      router.push('/userAccess'); 
    } catch (error) {
      console.error('Erro ao sair:', error);
    }
  };

  const handleCancelLogout = () => {
    setShowLogoutConfirmation(false);
  };

  return (
    <>
      <NavBar/>
      <Container>
        <ProfileContainer>
          <h2></h2>
          <form onSubmit={handleSaveProfile}>
            <div>
            {photoURL ? (
              <Photo>
                <img
                  src={photoURL}
                  alt="Foto de Perfil"
                  onClick={handlePhotoClick}
                />
              </Photo>
            ) : (
                <ButtonPlus> 
                <PlusCircleFill
                  color='#156207'
                  onClick={handlePhotoClick}
                  size='70px'
                />
                </ButtonPlus>
              )}
              {showPhotoInput && (
                <InputContainer>
                  <label htmlFor="photoURL">URL da Foto de Perfil</label>
                  <input
                    type="text"
                    id="photoURL"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                  />
                </InputContainer>
              )}
            </div>
            <InputContainer>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                readOnly
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="address">Endereço</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </InputContainer>
            <ButtonContainer>
              <Button type="submit">Salvar Perfil</Button>
              <Button type="button" onClick={handleLogoutClick}>Sair</Button>
            </ButtonContainer>
           
          </form>
        </ProfileContainer>
      </Container>

      {showLogoutConfirmation && (
        <ConfirmationDialog>
          <p>Tem certeza de que deseja sair?</p>
          <Button onClick={handleConfirmLogout}>Sim</Button>
          <Button onClick={handleCancelLogout}>Cancelar</Button>
        </ConfirmationDialog>
      )}
    </>
  );
};

export default Profile;
