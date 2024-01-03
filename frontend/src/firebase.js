import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAA-Jz6gxizj4ZpP7jkm56-T8BM812C_vU",
  authDomain: "fazbuk-84ed4.firebaseapp.com",
  projectId: "fazbuk-84ed4",
  storageBucket: "fazbuk-84ed4.appspot.com",
  messagingSenderId: "958183470618",
  appId: "1:958183470618:web:c81f447bbbcbe20607c3a3"
};




 const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);