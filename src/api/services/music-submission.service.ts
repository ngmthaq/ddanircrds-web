import { collection, getDocs } from "firebase/firestore";
import { firebaseFirestore } from "@/configs/firebase";
import { responseError, responseSuccess } from "../configs";
import { MusicSubmissionModel } from "../models";
import { CommonUtils } from "@/common/utils";

export async function getAll() {
  try {
    const querySnapshot = await getDocs(collection(firebaseFirestore(), "music-submissions"));
    const outputs: MusicSubmissionModel[] = [];
    querySnapshot.forEach((snapshot) => {
      const data: any = snapshot.data();
      const model = new MusicSubmissionModel(
        snapshot.id,
        data.email,
        data.info,
        data.instagram,
        CommonUtils.parseJson<string[]>(data.musicLinks, []),
        data.name,
        data.spotify,
        data.createdAt,
      );
      outputs.push(model);
    });
    outputs.sort((next, prev) => prev.createdAt - next.createdAt);
    return responseSuccess<MusicSubmissionModel[]>(outputs);
  } catch (error) {
    return responseError(error);
  }
}
