import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
  /*   apiKey: "AIzaSyAFn-L79jprF4soT2sdvg-o8fenrmUklQ4",
  authDomain: "webprojekt-6a04b.firebaseapp.com",
  projectId: "webprojekt-6a04b",
  storageBucket: "webprojekt-6a04b.appspot.com",
  messagingSenderId: "454298933007",
  appId: "1:454298933007:web:803f812f134736d263107a",
  measurementId: "G-HJ05DYVE0T", */

  apiKey: "AIzaSyCb7VZftF4W6Mxl3p6K0AwakZ6fXhmRykY",
  authDomain: "web2-73238.firebaseapp.com",
  projectId: "web2-73238",
  storageBucket: "web2-73238.appspot.com",
  messagingSenderId: "572279712704",
  appId: "1:572279712704:web:b42a29dc0e438407b5f625",
  measurementId: "G-PP9PGBRH8P",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const firestore = getFirestore(app);
export const realtimeDB = getDatabase(app);

export default auth;

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsub;
  }, []);

  return currentUser;
}
