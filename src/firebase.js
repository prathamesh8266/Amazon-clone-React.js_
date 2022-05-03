// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmPe5fdr3gpVW-BmPgt3QhHBFeGemYNM0",
  authDomain: "clone-a3958.firebaseapp.com",
  projectId: "clone-a3958",
  storageBucket: "clone-a3958.appspot.com",
  messagingSenderId: "978196349252",
  appId: "1:978196349252:web:bdabbf4f9f7048c1641711",
  measurementId: "G-LQYJQX08QC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
