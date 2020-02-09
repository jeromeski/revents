import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBGbia_wgz5OYt3_3ot3o-p1Uf1-ceMUAw",
  authDomain: "revents-266709.firebaseapp.com",
  databaseURL: "https://revents-266709.firebaseio.com",
  projectId: "revents-266709",
  storageBucket: "revents-266709.appspot.com",
  messagingSenderId: "895419089966",
  appId: "1:895419089966:web:20efd02be79dc0ce96cbbf",
  measurementId: "G-2T7MLQF9LG"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;