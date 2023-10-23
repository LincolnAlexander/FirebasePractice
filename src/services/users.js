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

  // async addUsers() {

  //   await addDoc(collection(db, "Users"), {
  //     name: "Lincoln",
  //     male: true,
  //   });
  // }
}

export default new Users();
