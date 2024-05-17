import LoginPage from "./components/LoginPage"
import {BrowserRouter, Routes, Route } from "react-router-dom"
import PhoneAuth from "./components/PhoneAuth";
import DashBoard from "./components/DashBoard";
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import {useEffect, useState} from 'react';
import {onAuthStateChanged} from 'firebase/auth';

function App() {
    const firebaseConfig = {
      apiKey: "AIzaSyCqOfvQiGgrzvgB8uzJ3rW0hMsicpFvoWU",
      authDomain: "insurance-cb094.firebaseapp.com",
      projectId: "insurance-cb094",
      storageBucket: "insurance-cb094.appspot.com",
      messagingSenderId: "422637108249",
      appId: "1:422637108249:web:33deb0298129500a36be88",
      measurementId: "G-BQBH8W2BTC"
    };
    firebase.initializeApp(firebaseConfig);
    
    const [user, setUser] = useState(null);
    useEffect(() => {
      const unRegistered = onAuthStateChanged(firebase.auth(), (currentUser) => {
        console.log(currentUser);
        console.log(user);
        setUser(currentUser);
      })
      return () => unRegistered();
    })

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<LoginPage />} />
          <Route path="/otp" element={<PhoneAuth auth={firebase.auth()}/>}/>
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>  
    </div>
  )
}     

export default App;
