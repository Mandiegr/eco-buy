import React, { useState } from 'react';
import styles from '../../../../styles/PageLogin.module.css'
import { EnvelopeAt, Lock } from 'react-bootstrap-icons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';

export const Register = () => {
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      alert('Seus dados foram salvos com sucesso!');

    
      setEmail('');
      setPassword('');
    } catch (error) {
    
      alert('Falha ao cadastrar');
      console.error(error);
    }
  };


  return (
    <div>
     
     <div className={styles.cadratar}>
      <form className={styles.form}>
      <span className={styles.logo}>Crie uma conta</span>
     
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
      <span className={styles.icons}><Lock/></span>
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
    <button type="button" onClick={handleSignIn} className={styles.button}>
        Criar
      </button>
     
      </form>
      </div>

      </div>

  );
};
