// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo410vuwU2YPHwMD9GKzGHp-mjHCoAhao",
  authDomain: "textile-trainer.firebaseapp.com",
  projectId: "textile-trainer",
  storageBucket: "textile-trainer.appspot.com",
  messagingSenderId: "889732458462",
  appId: "8soCfP12Ph19mi914zQaZz2KsGGtcANVhVVfKAnmVRqM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;