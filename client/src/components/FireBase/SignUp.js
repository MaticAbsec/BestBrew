// src/components/SignUp.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const signUpWithEmail = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      sessionStorage.setItem("prijavljenUporabnik", JSON.stringify({
        iduporabnik: user.uid,
        email: user.email,
        displayName: user.displayName || '',
        photoURL: user.photoURL || ''
      }));
      window.location.reload(); // Refresh to ensure data is available to other components
    } catch (error) {
      console.error("Error signing up with email: ", error);
      setError("Failed to sign up with email");
    }
  };

  return (
    <div>
      <form onSubmit={signUpWithEmail}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Sign up with Email</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignUp;
