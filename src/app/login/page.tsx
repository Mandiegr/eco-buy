'use client'
import React, { useState } from 'react';
import styles from '../../../styles/PageLogin.module.css';
import { Google } from 'react-bootstrap-icons';
import { signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth';
import { auth } from '../services/firebase';
import Image from 'next/image';

const PageLogin = () => {
  const [user, setUser] = useState<User>({} as User);

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        {user.photoURL && <img className={styles.image} src={user.photoURL} width="100" height="100" alt="Foto do usuário" />}
        <strong>{user.displayName}</strong>
        <small>{user.email}</small>
      </div>

      <h1>Acesse sua conta</h1>

      <span>Utilizando autenticação social, por exemplo, autenticação com a Google você</span>

      <button type="button" onClick={handleGoogleSignIn} className={styles.button}>
        <Google />
        SignIn with Google
      </button>
    </div>
  );
};

export default PageLogin;
