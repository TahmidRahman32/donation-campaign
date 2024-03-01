// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// import.meta.env.VITE_APP_TITLE;

const firebaseConfig = {
   apiKey: "AIzaSyB_fKN-zjwUluTYsTeiHY2TAfNYDPVzojw",
   authDomain: "donation-campaign-7f79e.firebaseapp.com",
   projectId: "donation-campaign-7f79e",
   storageBucket: "donation-campaign-7f79e.appspot.com",
   messagingSenderId: "441866487677",
   appId: "1:441866487677:web:6268c793c79952c2e92e14",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
