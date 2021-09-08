import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcjwLPMAT5sfo61-Cz-GpZgUILBNf4j9A",
  authDomain: "cbsolsite.firebaseapp.com",
  projectId: "cbsolsite",
  storageBucket: "cbsolsite.appspot.com",
  messagingSenderId: "305838610519",
  appId: "1:305838610519:web:26a9ba6128a9acece0eb12",
  measurementId: "G-R4XHJHCLTT",
};

// Initialize Firebase
export const db = initializeApp(firebaseConfig);
