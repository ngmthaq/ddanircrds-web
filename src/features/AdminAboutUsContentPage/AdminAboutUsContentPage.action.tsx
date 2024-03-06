import { ActionFunction } from "react-router-dom";
import { AppUtils } from "@/common/utils";
import { ApiConst } from "@/configs/const";
import { AboutUsModel } from "@/api/models";
import { AboutUsServices } from "@/api/services";

export const useAdminAboutUsContentPageAction: ActionFunction = async (action) => {
  try {
    AppUtils.openLoading();
    const formData = await action.request.formData();
    const id = formData.get("id");
    const content = formData.get("content");
    const model = new AboutUsModel(id as string, content as string);
    const response = await AboutUsServices.updateAboutUsContent(model);
    await AppUtils.delay(2);
    AppUtils.openLoading(false);
    if (response.ok) {
      AppUtils.openSnackbar({
        message: "Update about us content successfully",
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
