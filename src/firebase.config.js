import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

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
const db = firebaseApp.firestore();
export const storage = firebaseApp.storage();

export default db;
