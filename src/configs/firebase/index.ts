import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCN5h01GxYh0RZ_vIlsTLuiYGFKJ0YYQfo",
  authDomain: "ddani-crrds-dev.firebaseapp.com",
  projectId: "ddani-crrds-dev",
  storageBucket: "ddani-crrds-dev.appspot.com",
  messagingSenderId: "1016428273795",
  appId: "1:1016428273795:web:a9dcc040aeec9ad8c5bbb6",
  measurementId: "G-XS2JSFWNLX",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAnalytics = getAnalytics(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);
export const firebaseFirestore = getFirestore(firebaseApp);
