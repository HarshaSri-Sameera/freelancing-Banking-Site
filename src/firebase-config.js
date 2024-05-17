import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCqOfvQiGgrzvgB8uzJ3rW0hMsicpFvoWU",
  authDomain: "insurance-cb094.firebaseapp.com",
  projectId: "insurance-cb094",
  storageBucket: "insurance-cb094.appspot.com",
  messagingSenderId: "422637108249",
  appId: "1:422637108249:web:33deb0298129500a36be88",
  measurementId: "G-BQBH8W2BTC"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };