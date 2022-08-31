// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY65fS2Vuol9DkvvDJCXaQvzwwD-rcDMM",
  authDomain: "laundri-omiist.firebaseapp.com",
  projectId: "laundri-omiist",
  storageBucket: "laundri-omiist.appspot.com",
  messagingSenderId: "58318373286",
  appId: "1:58318373286:web:de283c7894b552b8dc0f67",
  measurementId: "G-DXPV3RT2DD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);