// src/components/SignIn.js
import React from 'react';
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';

const SignIn = () => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
