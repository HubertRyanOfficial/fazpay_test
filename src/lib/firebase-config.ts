import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxQYSOqdbif_DnpNdBZO4B_TZ2R1bWn50",
  authDomain: "fazpay-ccfa2.firebaseapp.com",
  projectId: "fazpay-ccfa2",
  storageBucket: "fazpay-ccfa2.appspot.com",
  messagingSenderId: "833579997046",
  appId: "1:833579997046:web:771746a1011f94db918c57",
};

const app = initializeApp(firebaseConfig);

if (getApps().length === 0) {
  throw "Error with firebase config.";
}

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
