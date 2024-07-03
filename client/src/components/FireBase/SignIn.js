// src/components/SignIn.js
import React, { useState } from 'react';
import { auth, provider } from './firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import axios from 'axios';
import './SignIn.css'; // Import the CSS file

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUserBackend = async (user) => {
    console.log(user)
    try {
      const response = await axios.post('http://localhost:8081/checkUser', {
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL
      });
      sessionStorage.setItem("prijavljenUporabnik", JSON.stringify(response.data));
      window.location.reload(); // Refresh to ensure data is available to other components
    } catch (error) {
      console.error('Error checking/creating user in backend:', error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await handleUserBackend(user);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
      setError("Failed to sign in with Google");
    }
  };

  const signInWithEmail = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await handleUserBackend(user);
    } catch (error) {
      console.error("Error signing in with email: ", error);
      setError("Failed to sign in with email");
    }
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signInWithEmail} className="sign-in-form">
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Sign in with Email</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <div className="sign-in-buttons">
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
    </div>
  );
};

export default SignIn;
