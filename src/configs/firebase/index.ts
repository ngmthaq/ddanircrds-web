import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UserModel } from "@/api/models";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const firebaseApp = () => initializeApp(firebaseConfig);

const firebaseAnalytics = () => getAnalytics(firebaseApp());

const firebaseStorage = () => getStorage(firebaseApp());

const firebaseFirestore = () => getFirestore(firebaseApp());

const firebaseFunctions = () => getFunctions(firebaseApp());

const firebaseAuth = () => getAuth(firebaseApp());

const firebaseGetAuthenticatedUser = (): Promise<UserModel | null> => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(
      firebaseAuth(),
      (user) => {
        if (user) resolve(new UserModel(user.email, user.uid));
        else resolve(null);
      },
      (error) => reject(error),
    );
  });
};

export {
  firebaseConfig,
  firebaseApp,
  firebaseAuth,
  firebaseAnalytics,
  firebaseStorage,
  firebaseFirestore,
  firebaseFunctions,
  firebaseGetAuthenticatedUser,
};
