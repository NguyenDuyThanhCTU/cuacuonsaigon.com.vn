import { getApp, getApps, initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDMOouORHB_fUK39D2xy7T_feL0yhHBi_A",

  authDomain: "cuacuonsaigon-ff6a3.firebaseapp.com",

  projectId: "cuacuonsaigon-ff6a3",

  storageBucket: "cuacuonsaigon-ff6a3.firebasestorage.app",

  messagingSenderId: "1050826307548",

  appId: "1:1050826307548:web:0dd4f5732b9f5e2bde0119",

  measurementId: "G-L6HN38J9E3",
};

export const app =
  getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export const auth = getAuth(app);
export const storage = getStorage(app);
