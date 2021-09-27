import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCcjwLPMAT5sfo61-Cz-GpZgUILBNf4j9A",
  authDomain: "cbsolsite.firebaseapp.com",
  projectId: "cbsolsite",
  storageBucket: "cbsolsite.appspot.com",
  messagingSenderId: "305838610519",
  appId: "1:305838610519:web:26a9ba6128a9acece0eb12",
  measurementId: "G-R4XHJHCLTT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
