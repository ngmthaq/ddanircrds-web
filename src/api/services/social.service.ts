import { firebaseFirestore } from "@/configs/firebase";
import { collection, getDocs, query } from "firebase/firestore";

export async function getAllSocials() {
  const queryDocs = query(collection(firebaseFirestore(), "socials"));
  const querySnapshot = await getDocs(queryDocs);
  return querySnapshot;
}
