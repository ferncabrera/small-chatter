import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2aycU1Z76bUsOSsM5avhVJoXP1spko2g",
  authDomain: "small-chatter.firebaseapp.com",
  projectId: "small-chatter",
  storageBucket: "small-chatter.appspot.com",
  messagingSenderId: "191543470430",
  appId: "1:191543470430:web:2d97ee33995510fc6dc7cf",
  measurementId: "G-MNBCZV26NH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
