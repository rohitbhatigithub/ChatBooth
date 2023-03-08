// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW4cuYTMZ9qP9tfzhMV_UUgkqkBZPSyK4",
  authDomain: "webchatapp-82d0c.firebaseapp.com",
  databaseURL: "https://webchatapp-82d0c-default-rtdb.firebaseio.com",
  projectId: "webchatapp-82d0c",
  storageBucket: "webchatapp-82d0c.appspot.com",
  messagingSenderId: "123440653917",
  appId: "1:123440653917:web:da2e36e2012be2d7044fb4"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);