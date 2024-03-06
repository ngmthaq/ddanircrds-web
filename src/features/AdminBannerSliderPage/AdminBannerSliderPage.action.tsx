import { ActionFunction } from "react-router-dom";
import { AppUtils } from "@/common/utils";
import { ApiConst } from "@/configs/const";
import { TopBannerServices } from "@/api/services";

export const useAdminBannerSliderPageAction: ActionFunction = async (action) => {
  try {
    AppUtils.openLoading();
    const formData = await action.request.formData();
    const bannerId = formData.get("bannerId");
    const file = formData.get("file");
    if (!bannerId || !file) {
      throw new Response("Missing payload", {
        status: ApiConst.HTTPS_STT_CODE.unprocessableContent,
      });
    }
    const response = await TopBannerServices.updateBanner(bannerId as string, file as File);
    await AppUtils.delay(2);
    AppUtils.openLoading(false);
    if (response.ok) {
      AppUtils.openSnackbar({
        message: "Update banner successfully",
        variant: "success",
      });
      return null;
    }
    throw new Response(response.message, { status: response.status });
  } catch (error) {
    console.error(error);
    throw new Response(null, { status: ApiConst.HTTPS_STT_CODE.internalServerError });
  }
};
