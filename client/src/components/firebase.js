import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTjkJQKReQE_tA5kPhkzUwOAir02LfsjQ",
  authDomain: "praktikumiibestbrew.firebaseapp.com",
  projectId: "praktikumiibestbrew",
  storageBucket: "praktikumiibestbrew.appspot.com",
  messagingSenderId: "436622968036",
  appId: "1:436622968036:web:387b7e3e3e4908cbf3d8f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };