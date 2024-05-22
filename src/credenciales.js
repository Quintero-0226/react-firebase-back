// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZwPcvu76tF-MtL-c0wvHyy9QnGmWNvNI",
  authDomain: "react-backend-24f12.firebaseapp.com",
  projectId: "react-backend-24f12",
  storageBucket: "react-backend-24f12.appspot.com",
  messagingSenderId: "653984987670",
  appId: "1:653984987670:web:8f702878735c6f1ed81337",
  measurementId: "G-4LV2BPW17Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
