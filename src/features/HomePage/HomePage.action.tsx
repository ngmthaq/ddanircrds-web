import { ActionFunction } from "react-router-dom";
import { ApiConst } from "@/configs/const";
import { AppUtils, CommonUtils } from "@/common/utils";
import { MusicSubmissionServices } from "@/api/services";
import { MusicSubmissionModel } from "@/api/models";
import { MusicSubmissionPayload } from "./HomePage.context";

export const useHomePageAction: ActionFunction = async (action) => {
  try {
    AppUtils.openLoading();
    const payload: MusicSubmissionPayload = await action.request.json();
    const model = new MusicSubmissionModel(
      CommonUtils.randomString(20),
      payload.email,
      payload.info,
      payload.instagram,
      payload.musics,
      payload.name,
      payload.spotify,
      Math.ceil(Date.now() / 1000),
    );
    const response = await MusicSubmissionServices.insert(model);
    await AppUtils.delay(2);
    AppUtils.openLoading(false);
    if (response.ok) {
      AppUtils.openSnackbar({
        message: "Your submission was sent successfully",
        variant: "success",
      });
    } else {
      AppUtils.openSnackbar({
        message: "Something wrong, please try again later",
        variant: "error",
      });
    }
    return null;
  } catch (error) {
    console.error(error);
    throw new Response(null, { status: ApiConst.HTTPS_STT_CODE.internalServerError });
  }
};
