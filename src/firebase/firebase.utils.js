import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCrBkk91m1xzKz3SMsdzSXx_3CF4j323DQ",
  authDomain: "ecommerce-db-7e1de.firebaseapp.com",
  projectId: "ecommerce-db-7e1de",
  storageBucket: "ecommerce-db-7e1de.appspot.com",
  messagingSenderId: "279721719838",
  appId: "1:279721719838:web:a5b701d3024e29d14c560f",
  measurementId: "G-4Q2CYB4YY3",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
