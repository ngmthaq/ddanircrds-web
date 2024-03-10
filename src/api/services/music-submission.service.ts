import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { firebaseFirestore } from "@/configs/firebase";
import { CommonUtils } from "@/common/utils";
import { responseError, responseSuccess } from "../configs";
import { MusicSubmissionModel } from "../models";

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

export async function insert(submission: MusicSubmissionModel) {
  try {
    const ref = doc(firebaseFirestore(), "music-submissions", submission.id);
    const data = {
      createdAt: submission.createdAt,
      email: submission.email,
      info: submission.info,
      instagram: submission.instagram,
      musicLinks: JSON.stringify(submission.musicLinks),
      name: submission.name,
      spotify: submission.spotify,
    };
    await setDoc(ref, data);
    return responseSuccess(submission);
  } catch (error) {
    return responseError(error);
  }
}
