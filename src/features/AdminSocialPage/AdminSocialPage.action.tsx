import { ActionFunction } from "react-router-dom";
import { ApiConst } from "@/configs/const";
import { SocialModel } from "@/api/models";
import { SocialServices } from "@/api/services";
import { AppUtils } from "@/common/utils";

export const useAdminSocialPageAction: ActionFunction = async (action) => {
  try {
    AppUtils.openLoading();
    const json: any[] = await action.request.json();
    const socialModels = json.map((data) => {
      const id = data.id || "";
      const name = data.name || "";
      const profile = data.profile || "";
      const icon = data.icon || "";
      const logo = data.logo || "";
      const isOpen = Boolean(data.isOpen);
      const order = data.order || 0;
      return new SocialModel(id, name, profile, icon, logo, isOpen, order);
    });
    const response = await SocialServices.updateSocialList(socialModels);
    await AppUtils.delay(2);
    AppUtils.openLoading(false);
    if (response.ok) {
      AppUtils.openSnackbar({
        message: "Update social network configurations successfully",
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
