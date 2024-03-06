import { firebaseFirestore } from "@/configs/firebase";
import { collection, doc, getDocs, runTransaction } from "firebase/firestore";
import { responseError, responseSuccess } from "../configs";
import { AboutUsModel } from "../models";

export async function getAboutUsContent() {
  try {
    const querySnapshot = await getDocs(collection(firebaseFirestore(), "about-us"));
    const outputs: AboutUsModel[] = [];
    querySnapshot.forEach((snapshot) => {
      const data: any = snapshot.data();
      const model = new AboutUsModel(snapshot.id, data.content);
      outputs.push(model);
    });
    if (outputs.length === 0) throw new Error("Cannot found any about-us content");
    return responseSuccess<AboutUsModel>(outputs[0]);
  } catch (error) {
    return responseError(error);
  }
}

export async function updateAboutUsContent(aboutUs: AboutUsModel) {
  try {
    const transactionResult = await runTransaction(firebaseFirestore(), async (transaction) => {
      const documentRef = doc(firebaseFirestore(), "about-us", aboutUs.id);
      const document = await transaction.get(documentRef);
      if (!document.exists()) throw new Error(`Document ${aboutUs.id} does not exist!`);
      transaction.update(documentRef, { content: aboutUs.content.trim() });
      return aboutUs;
    });
    return responseSuccess<AboutUsModel>(transactionResult);
  } catch (error) {
    return responseError(error);
  }
}
