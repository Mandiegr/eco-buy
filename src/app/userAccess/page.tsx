'use client'
import React, { useState } from 'react';
import styles from '../../../styles/PageLogin.module.css'
import { Google} from 'react-bootstrap-icons';
import { signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth';
import { auth } from '../services/firebase';
import { Login } from './login/page';
import { Register } from './register/page';



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
    <div>

    <div className={styles.container}>
    <div className={styles.formContainer}> 
    <span className={styles.logo}>Eco Buy</span>

     <Login/>
      </div>

      <div className={styles.user}>
        {user.photoURL && <img className={styles.image} src={user.photoURL} width="100" height="100" alt="Foto do usuário" />}
        <strong>{user.displayName}</strong>
        <small>{user.email}</small>
      </div>

      <h3>Entre com sua a conta Google</h3>

      <button type="button" onClick={handleGoogleSignIn} className={styles.buttonGoogle}>
        <Google />
      </button>
    </div>
    </div>
  );
};
export default PageLogin;