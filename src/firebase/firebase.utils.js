import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAeLqHohBjToEVd1tXipM3EqWWC8V1zWhs",
  authDomain: "crwn-db-f8ecf.firebaseapp.com",
  databaseURL: "https://crwn-db-f8ecf.firebaseio.com",
  projectId: "crwn-db-f8ecf",
  storageBucket: "crwn-db-f8ecf.appspot.com",
  messagingSenderId: "888649939692",
  appId: "1:888649939692:web:edf6f9b8bb6f993590c3c9",
  measurementId: "G-834GMBQ7RB",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
