import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UserModel } from "@/api/models";
import { AppUtils } from "@/common/utils";

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

const firebaseGetFunctions = (functionName: string) => {
  return httpsCallable(firebaseFunctions(), functionName);
};

const firebaseGetStorageRef = () => {
  return ref(firebaseStorage());
};

const firebaseGetStorageFolderRef = (folder: string) => {
  return ref(firebaseGetStorageRef(), folder);
};

const firebaseStorageUpload = async (file: File | Blob, path: string) => {
  return uploadBytes(firebaseGetStorageFolderRef(path), file);
};

const firebaseStorageGetFromFullPath = async (
  fullPath: string,
  responseType: "base64" | "blob" | "url" = "url",
) => {
  const url = await getDownloadURL(ref(firebaseStorage(), fullPath));
  if (responseType === "url") return url;
  const response = await fetch(url);
  const blob = await response.blob();
  if (responseType === "blob") return blob;
  return AppUtils.convertBlobToBase64(blob);
};

const firebaseStorageDeleteFromFullPath = async (fullPath: string) => {
  const imageRef = ref(firebaseStorage(), fullPath);
  await deleteObject(imageRef);
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
  firebaseGetFunctions,
  firebaseGetStorageRef,
  firebaseGetStorageFolderRef,
  firebaseStorageUpload,
  firebaseStorageGetFromFullPath,
  firebaseStorageDeleteFromFullPath,
};
