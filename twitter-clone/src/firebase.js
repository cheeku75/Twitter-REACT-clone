// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBwmEqI2ZLF-NikkdI8aVVNaJeEvCOfGh0",
    authDomain: "twitter-clone-865b2.firebaseapp.com",
    projectId: "twitter-clone-865b2",
    storageBucket: "twitter-clone-865b2.appspot.com",
    messagingSenderId: "268109850770",
    appId: "1:268109850770:web:d032e88a7beac72b915e4b",
    measurementId: "G-3MHFGWFXN2"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

export default db;