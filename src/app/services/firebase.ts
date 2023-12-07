import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCg7kTMJKbYqjjGxfZwbnEApKW3ELAXlbY",
  authDomain: "ecobuy-login-register.firebaseapp.com",
  projectId: "ecobuy-login-register",
  storageBucket: "ecobuy-login-register.appspot.com",
  messagingSenderId: "356444502618",
  appId: "1:356444502618:web:6358f85d7c4da1d67df663"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);