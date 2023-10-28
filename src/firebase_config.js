import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB3iGfLU4imWcLIvnbUe1yorPTSkG0ytRk",
  authDomain: "caboodle-e2e23.firebaseapp.com",
  projectId: "caboodle-e2e23",
  storageBucket: "caboodle-e2e23.appspot.com",
  messagingSenderId: "801518285018",
  appId: "1:801518285018:web:74714aa3b87525935775e3",
  measurementId: "G-Y2LJKX13FH",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
