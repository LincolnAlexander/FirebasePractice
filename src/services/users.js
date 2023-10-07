import { db } from "../firebase_config.js";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDoc,
  getDocs,
} from "firebase/firestore";
const collectionRef = collection(db, "Users");

class Users {
  async getUsers() {
    const mySnapshot = await getDocs(collectionRef);
    mySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  }
}

export default new Users();
