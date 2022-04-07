
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDcOKh6M01_HP5OUBESkB1DrFWSXJvW_Qg",
  authDomain: "reactjs-project-990.firebaseapp.com",
  projectId: "reactjs-project-990",
  storageBucket: "reactjs-project-990.appspot.com",
  messagingSenderId: "467480635111",
  appId: "1:467480635111:web:df0151cd859bee8e3ee442"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)