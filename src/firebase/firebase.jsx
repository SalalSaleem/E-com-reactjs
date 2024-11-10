import { initializeApp } from "firebase/app";
import {
  getAuth,
} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBR0NcoPaxztQ21hnlBFaPMWYaNUMB5LG4",
  authDomain: "login-and-signup-5e510.firebaseapp.com",
  projectId: "login-and-signup-5e510",
  storageBucket: "login-and-signup-5e510.appspot.com",
  messagingSenderId: "113653024663",
  appId: "1:113653024663:web:0a06902a991da6190e26d2",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
