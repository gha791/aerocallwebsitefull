
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXZQcEAALFZTNnpl1W9VFMSGA55guhVHc",
  authDomain: "globalflow-mc9l7.firebaseapp.com",
  projectId: "globalflow-mc9l7",
  storageBucket: "globalflow-mc9l7.appspot.com",
  messagingSenderId: "324267415379",
  appId: "1:324267415379:web:739e0e1bf183fbd9f8f3a6"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const db = getFirestore(app);

export { db };
