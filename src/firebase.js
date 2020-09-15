import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDTI42cIc4p4H0ZSCILRwhnRhYcRpg-C6Y",
  authDomain: "challenge-61e31.firebaseapp.com",
  databaseURL: "https://challenge-61e31.firebaseio.com",
  projectId: "challenge-61e31",
  storageBucket: "challenge-61e31.appspot.com",
  messagingSenderId: "898575521681",
  appId: "1:898575521681:web:d6b2d867d6e4f2c04a2c30",
  measurementId: "G-EMK268JK60",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
