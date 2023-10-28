import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../firebase_config.js";

import {
  collection,
  addDoc,
  setDoc,
  doc,
  serverTimestamp,
  getDoc,
  getDocs,
} from "firebase/firestore";
const collectionRef = collection(db, "Users");
class Users {
  // Get all documents in a collection
  async getUsers() {
    const mySnapshot = await getDocs(collectionRef);
    mySnapshot.forEach((doc) => {
      console.log(doc.data());
    });

    // get sub collection from collection
    const doc = await getDocs(
      collection(db, "Users", "4WekEDWw9i2BkLb3FBFl", "Data")
    );
    doc.forEach((doc) => console.log(doc.data()));
  }

  async createUser(email, password) {
    // Retrieve doc by its ID.
    // const docRef = doc(db, "Users", "OrycI1THXuS7bdqFGFnCmaeR2ku2");
    // const docSnap = await getDoc(docRef);
    //console.log(docSnap.exists());
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          console.log("here");
          this.createUserInUsersCollection(userCredentials.user);
          console.log(userCredentials.user);
        })

        .catch((e) => {
          return e;
        });
      return res;
    } catch (error) {}
  }

  async createUserInUsersCollection(userCredentials) {
    const userObject = {
      name: "Lincoln",
      age: 22,
    };
    const docRef = doc(db, "Users", userCredentials.uid);
    await setDoc(docRef, userObject);
  }
}

export default new Users();
