// src/components/UserProfile.js
import React from 'react';
import { getAuth } from 'firebase/auth';

const UserProfile = ({ user }) => {
  const auth = getAuth();

  return (
    <div>
      <img src={user.photoURL} alt={user.displayName} />
      <p>Welcome, {user.displayName}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  );
};

export default UserProfile;
