// src/components/UserProfile.js
import React from 'react';
import { auth } from './firebase';
import './UserProfile.css';

const UserProfile = ({ user, onSignOut }) => {
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      console.log('Sign-out successful');
      onSignOut(); // Call the passed down onSignOut function to update the state in NavB
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="user-profile">
      <img src={user.photoURL} alt={user.displayName} width="40" height="40" />
      <div className="user-info">
        <p>Welcome, {user.displayName}</p>
        <p>{user.email}</p>
      </div>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

export default UserProfile;
