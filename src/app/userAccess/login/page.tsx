import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import styles from '../../../../styles/PageLogin.module.css'
import { EnvelopeAt, Lock } from 'react-bootstrap-icons';
import { auth } from '@/app/services/firebase';


export const Login = () =>  {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
          await signInWithEmailAndPassword(auth, email, password);
    
          alert('Login bem-sucedido');
    
          setEmail('');
          setPassword('');
        } catch (error) {
      
          alert('Falha no login');
          console.error(error);
        }
      };

  return (
    <div>

     <div className={styles.cadratar}>
      <form className={styles.form}>
      <span className={styles.logo}>Entre na sua conta</span>
     
      <div className={styles.inputContainer}>
      <span className={styles.icons}><EnvelopeAt /></span>
      <input
      className={styles.input}
      placeholder="Email"
      type="email"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      />
      </div>
      <div className={styles.inputContainer}>
      <span className={styles.icons}><Lock /></span>
      <input
      className={styles.input}
      placeholder="...."
      type="password"
      id="senha"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      /> 
      </div>
    <button type="button" onClick={handleLogin} className={styles.button}>
        Entrar
      </button>
     
      </form>
      
      
      </div>

      </div>
  );
};
