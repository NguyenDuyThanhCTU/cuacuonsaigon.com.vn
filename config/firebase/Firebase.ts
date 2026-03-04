import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD3lnZMGJMlUQ3N2ZsJ0Qp_QvtmNWOZ1X4",

  authDomain: "xetaiminhtri.firebaseapp.com",

  projectId: "xetaiminhtri",

  storageBucket: "xetaiminhtri.appspot.com",

  messagingSenderId: "1003617252873",

  appId: "1:1003617252873:web:c3bea9da8f63adb11e2ad8",

  measurementId: "G-YZ2GMPE8ZS",
};

const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export const auth = getAuth(app);
