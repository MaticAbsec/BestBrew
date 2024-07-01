import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavB from './components/NavB';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AnimacijaStrani from './components/AnimacijaStrani';
import Polnoletnost from './components/FireBase/ageAuth';
import Footer from './components/footer'


const App = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <>
      <NavB user={user} />
      <AnimacijaStrani />
      <Polnoletnost />
      <Footer />
    </>
  );
}

export default App;