import { initializeApp } from 'firebase/app';
import { getAuth, signOut as firebaseSignOut } from 'firebase/auth';
import { getDatabase, ref, set, get } from 'firebase/database';

// Configuração do Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyCg7kTMJKbYqjjGxfZwbnEApKW3ELAXlbY",
  authDomain: "ecobuy-login-register.firebaseapp.com",
  projectId: "ecobuy-login-register",
  storageBucket: "ecobuy-login-register.appspot.com",
  messagingSenderId: "356444502618",
  appId: "1:356444502618:web:6358f85d7c4da1d67df663"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { auth, database };

const productsData = [
  {
    id: 0,
    nome: "creme orange",
    preco: 100.00,
    descricao: "Creme de Laranja - Creme Hidratante Antienvelhecimento Diurno E Noturno Para Reduzir Rugas - Creme Para Pescoço E Decote Com Colágeno E Ácido Hialurônico - Cuidados Com A Pele Hidratante Facial Para Mulheres E Homens - 50Ml",
    imagens: ["/assets/22.png"],
    category: "skincare"
  },
  {
    id: 1,
    nome: "kit pessêgo",
    preco: 300.00,
    descricao: "Kit Pessêgo - Creme Hidratante Antienvelhecimento Diurno E Noturno Para Reduzir Rugas - Creme Para Pescoço E Decote Com Colágeno E Ácido Hialurônico - Cuidados Com A Pele Hidratante Facial Para Mulheres E Homens - 50Ml",
    imagens: ["/assets/25.png"],
    category: "presentes"
  },
  {
    id: 2,
    nome: "Hidratante",
    preco: 40.00,
    descricao: "Hidratante - Creme Hidratante Antienvelhecimento Diurno E Noturno Para Reduzir Rugas - Creme Para Pescoço E Decote Com Colágeno E Ácido Hialurônico - Cuidados Com A Pele Hidratante Facial Para Mulheres E Homens - 50Ml",
    imagens: ["/assets/27.png"],
    category: "skincare"
  },
  {
    id: 3,
    nome: "Creme facial",
    preco: 60.00,
    descricao: " Creme Facial- Creme Hidratante Antienvelhecimento Diurno E Noturno Para Reduzir Rugas - Creme Para Pescoço E Decote Com Colágeno E Ácido Hialurônico - Cuidados Com A Pele Hidratante Facial Para Mulheres E Homens - 50Ml",
    imagens: ["/assets/26.png"],
    category: "skincare"
  },
  {
    id: 4,
    nome: "Perfume Lima",
    preco: 200.00,
    descricao: "Perfume de Lima - Creme Hidratante Antienvelhecimento Diurno E Noturno Para Reduzir Rugas - Creme Para Pescoço E Decote Com Colágeno E Ácido Hialurônico - Cuidados Com A Pele Hidratante Facial Para Mulheres E Homens - 50Ml",
    imagens: ["/assets/28.png"],
    category: "perfumaria"
  },
  {
    id: 5,
    nome: "colônia oli",
    preco: 190.00,
    descricao: " Colônia Oli- Creme Hidratante Antienvelhecimento Diurno E Noturno Para Reduzir Rugas - Creme Para Pescoço E Decote Com Colágeno E Ácido Hialurônico - Cuidados Com A Pele Hidratante Facial Para Mulheres E Homens - 50Ml",
    imagens: ["/assets/29.png"],
    category: "perfumaria"
  },
  {
    id: 6,
    nome: "Creme coconut",
    preco: 40.00,
    descricao: "Creme Coconut - Creme Hidratante Antienvelhecimento Diurno E Noturno Para Reduzir Rugas - Creme Para Pescoço E Decote Com Colágeno E Ácido Hialurônico - Cuidados Com A Pele Hidratante Facial Para Mulheres E Homens - 50Ml",
    imagens: ["/assets/33.png"],
    category: "corpo-e-banho"
  },
  {
    id: 7,
    nome: "kit oli coconut",
    preco: 140.00,
    descricao: "Kit Oli Coconut- Creme Hidratante Antienvelhecimento Diurno E Noturno Para Reduzir Rugas - Creme Para Pescoço E Decote Com Colágeno E Ácido Hialurônico - Cuidados Com A Pele Hidratante Facial Para Mulheres E Homens - 50Ml",
    imagens: ["/assets/23.png"],
    category: "presentes"
  },
  {
    id: 8,
    nome: "coconut essence",
    preco: 40.00,
    descricao: "Coconut Essence- Creme Hidratante Antienvelhecimento Diurno E Noturno Para Reduzir Rugas - Creme Para Pescoço E Decote Com Colágeno E Ácido Hialurônico - Cuidados Com A Pele Hidratante Facial Para Mulheres E Homens - 50Ml",
    imagens: ["/assets/24.png"],
    category: "corpo-e-banho"
  },
  {
    id: 9,
    nome: "creme de babosa",
    preco: 40.00,
    descricao: "Creme de Babosa- Creme Hidratante Antienvelhecimento Diurno E Noturno Para Reduzir Rugas - Creme Para Pescoço E Decote Com Colágeno E Ácido Hialurônico - Cuidados Com A Pele Hidratante Facial Para Mulheres E Homens - 50Ml",
    imagens: ["/assets/27.png"],
    category: "skincare"
  },
  {
    id: 10,
    nome: "creme de pera",
    preco: 50.00,
    descricao: "Creme de Pera - Creme Hidratante Antienvelhecimento Diurno E Noturno Para Reduzir Rugas - Creme Para Pescoço E Decote Com Colágeno E Ácido Hialurônico - Cuidados Com A Pele Hidratante Facial Para Mulheres E Homens - 50Ml",
    imagens: ["/assets/26.png"],
    category: "skincare"
  },
  {
    id: 11,
    nome: "colônia n1",
    preco: 400.00,
    descricao: "Colônia n1 - Creme Hidratante Antienvelhecimento Diurno E Noturno Para Reduzir Rugas - Creme Para Pescoço E Decote Com Colágeno E Ácido Hialurônico - Cuidados Com A Pele Hidratante Facial Para Mulheres E Homens - 50Ml",
    imagens: ["/assets/28.png"],
    category: "perfumaria"
  },
  {
    id: 12,
    nome: "Sabonete Ervas",
    preco: 400.00,
    descricao:"Sabonete de Ervas - Creme Hidratante Antienvelhecimento Diurno E Noturno Para Reduzir Rugas - Creme Para Pescoço E Decote Com Colágeno E Ácido Hialurônico - Cuidados Com A Pele Hidratante Facial Para Mulheres E Homens - 50Ml",
    imagens: ["/assets/30.png"],
    category: "corpo-e-banho"
  },
  {
    id: 13,
    nome: "kit Eco make",
    preco: 379.00,
    descricao: "Kit Eco make -Kit make eco Com Retinol - Creme Hidratante Antienvelhecimento Diurno E Noturno Para Reduzir Rugas - Creme Para Pescoço E Decote Com Colágeno E Ácido Hialurônico - Cuidados Com A Pele Hidratante Facial Para Mulheres E Homens - 50Ml",
    imagens: ["/assets/31.png"],
    category: "make"
  },
  {
    id: 14,
    nome: "Pó compacto",
    preco: 80.00,
    descricao: "Pó Compacto - Creme Hidratante Antienvelhecimento Diurno E Noturno Para Reduzir Rugas - Creme Para Pescoço E Decote Com Colágeno E Ácido Hialurônico - Cuidados Com A Pele Hidratante Facial Para Mulheres E Homens - 50Ml",
    imagens: ["/assets/32.png"],
    category: "make"
  },
  {
    id: 15,
    nome: "kit Eloar",
    preco: 240.00,
    descricao: "Kit make eco Com Retinol - Creme Hidratante Antienvelhecimento Diurno E Noturno Para Reduzir Rugas - Creme Para Pescoço E Decote Com Colágeno E Ácido Hialurônico - Cuidados Com A Pele Hidratante Facial Para Mulheres E Homens - 50Ml",
    imagens: ["/assets/34.png"],
    category: "presentes"
  },
  {
    id: 16,
    nome: "Kit Eloar",
    preco: 245.00,
    descricao:"Kit Eloar - Creme Hidratante Antienvelhecimento Diurno E Noturno Para Reduzir Rugas - Creme Para Pescoço E Decote Com Colágeno E Ácido Hialurônico - Cuidados Com A Pele Hidratante Facial Para Mulheres E Homens - 50Ml",
    imagens: ["/assets/35.png"],
    category: "presentes"
  },
  {
    id: 17,
    nome: "corretivo Eco",
    preco: 70.00,
    descricao: "Correttivo Eco - Creme Hidratante Antienvelhecimento Diurno E Noturno Para Reduzir Rugas - Creme Para Pescoço E Decote Com Colágeno E Ácido Hialurônico - Cuidados Com A Pele Hidratante Facial Para Mulheres E Homens - 50Ml",
    imagens: ["/assets/36.png"],
    category: "make"
  },
  {
    id: 18,
    nome: "Kit Eloar ",
    preco: 279.00,
    descricao: "Kit Eloar - Creme Hidratante Antienvelhecimento Diurno E Noturno Para Reduzir Rugas - Creme Para Pescoço E Decote Com Colágeno E Ácido Hialurônico - Cuidados Com A Pele Hidratante Facial Para Mulheres E Homens - 50Ml",
    imagens: ["/assets/37.png"],
    category: "presentes"
  },
  {
    id: 19,
    nome: "Batom Terracota",
    preco: 120.00,
    descricao: "Batom Terracota - Creme Hidratante Antienvelhecimento Diurno E Noturno Para Reduzir Rugas - Creme Para Pescoço E Decote Com Colágeno E Ácido Hialurônico - Cuidados Com A Pele Hidratante Facial Para Mulheres E Homens - 50Ml",
    imagens: ["/assets/38.png"],
    category: "make"
  },
  {
    id: 20,
    nome: "colônia Pessêgo",
    preco: 100.00,
    descricao: "Colônia de Pessêgo - Creme Hidratante Antienvelhecimento Diurno E Noturno Para Reduzir Rugas - Creme Para Pescoço E Decote Com Colágeno E Ácido Hialurônico - Cuidados Com A Pele Hidratante Facial Para Mulheres E Homens - 50Ml",
    imagens: ["/assets/39.png"],
    category: "perfumaria"
  },
  {
    id: 21,
    nome: "Sabonte Camômila",
    preco: 65.00,
    descricao: "Sabonete de Camômila - Creme Hidratante Antienvelhecimento Diurno E Noturno Para Reduzir Rugas - Creme Para Pescoço E Decote Com Colágeno E Ácido Hialurônico - Cuidados Com A Pele Hidratante Facial Para Mulheres E Homens - 50Ml",
    imagens: ["/assets/40.png"],
    category: "corpo-e-banho"
  },
  {
    id: 22,
    nome: "colônia Man",
    preco: 179.99,
    descricao: "Colônia Man - Creme Hidratante Antienvelhecimento Diurno E Noturno Para Reduzir Rugas - Creme Para Pescoço E Decote Com Colágeno E Ácido Hialurônico - Cuidados Com A Pele Hidratante Facial Para Mulheres E Homens - 50Ml",
    imagens: ["/assets/41.png"],
    category: "perfumaria"
  },
  {
    id: 23,
    nome: "colônia Laranja",
    preco: 250.00,
    descricao: "Colônia- Creme Hidratante Antienvelhecimento Diurno E Noturno Para Reduzir Rugas - Creme Para Pescoço E Decote Com Colágeno E Ácido Hialurônico - Cuidados Com A Pele Hidratante Facial Para Mulheres E Homens - 50Ml",
    imagens: ["/assets/42.png"],
    category: "perfumaria"
  },
];



const productsRef = ref(database, 'products');

// Configurando os dados dos produtos no Firebase
set(productsRef, productsData)
  .then(() => {
    console.log("Data set successfully");
  })
  .catch((error) => {
    console.error("Error setting data: ", error);
  });

// Recuperando os dados dos produtos do Firebase
get(productsRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val()); // Access product data
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error("Error getting data: ", error);
  });


  export const signOut = async () => {
    const auth = getAuth();
    try {
      await firebaseSignOut(auth);
      console.log('Usuário deslogado com sucesso');
    } catch (error) {
      console.error('Erro ao deslogar o usuário', error);
    }
  };