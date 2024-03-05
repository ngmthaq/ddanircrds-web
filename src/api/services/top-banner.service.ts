import { collection, getDocs } from "firebase/firestore";
import { firebaseFirestore, firebaseStorageGetFromFullPath } from "@/configs/firebase";
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
