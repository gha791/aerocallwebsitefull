
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBk6iGUE-fw8NOFpUx_216L2_OXtcNHd-k",
  authDomain: "dev-wed-10291.firebaseapp.com",
  projectId: "dev-wed-10291",
  storageBucket: "dev-wed-10291.appspot.com",
  messagingSenderId: "560410052303",
  appId: "1:560410052303:web:38b32c31e6268b8120c151"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}

const db = getFirestore(app);

export { db };
