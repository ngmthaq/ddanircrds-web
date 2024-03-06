import { collection, doc, getDocs, runTransaction } from "firebase/firestore";
import {
  firebaseFirestore,
  firebaseStorageDeleteFromFullPath,
  firebaseStorageGetFromFullPath,
  firebaseStorageUpload,
} from "@/configs/firebase";
import { responseError, responseSuccess } from "../configs";
import { TopBannerModel } from "../models";

export async function getAll() {
  try {
    const querySnapshot = await getDocs(collection(firebaseFirestore(), "top-banner-sliders"));
    const tmpOutputs: TopBannerModel[] = [];
    querySnapshot.forEach(async (snapshot) => {
      const data: any = snapshot.data();
      const model = new TopBannerModel(snapshot.id, data.order, data.url, "");
      tmpOutputs.push(model);
    });
    tmpOutputs.sort((next, prev) => next.order - prev.order);
    const outputs = await getAllWithImage(tmpOutputs);
    return responseSuccess<TopBannerModel[]>(outputs);
  } catch (error) {
    return responseError(error);
  }
}

export async function getAllWithImage(
  banners: TopBannerModel[],
  index: number = 0,
): Promise<TopBannerModel[]> {
  if (banners.length === 0) return banners;
  if (index === banners.length) return banners;
  const banner = banners[index];
  const publicUrl = (await firebaseStorageGetFromFullPath(banner.url, "url")) as string;
  banners[index]["publicUrl"] = publicUrl;
  return getAllWithImage(banners, index + 1);
}

export async function updateBanner(bannerId: string, file: File) {
  try {
    const transactionResult = await runTransaction(firebaseFirestore(), async (transaction) => {
      const tmpPath = "top-banner-sliders/" + Date.now() + "_" + file.name;
      const uploadedFile = await firebaseStorageUpload(file, tmpPath);
      const fullPath = uploadedFile.ref.fullPath;
      const documentRef = doc(firebaseFirestore(), "top-banner-sliders", bannerId);
      const document = await transaction.get(documentRef);
      const data: any = document.data();
      const oldFullPath = data.url;
      if (!document.exists()) throw new Error(`Document ${bannerId} does not exist!`);
      transaction.update(documentRef, { url: fullPath });
      const publicUrl = (await firebaseStorageGetFromFullPath(fullPath, "url")) as string;
      const newDocument = new TopBannerModel(document.id, data.order, fullPath, publicUrl);
      await firebaseStorageDeleteFromFullPath(oldFullPath);
      return newDocument;
    });
    return responseSuccess<TopBannerModel>(transactionResult);
  } catch (error) {
    return responseError(error);
  }
}
