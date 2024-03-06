import { LoaderFunction } from "react-router-dom";
import { firebaseGetAuthenticatedUser } from "@/configs/firebase";
import { AdminLoginPagePath } from "@/configs/router/routes";
import { AppUtils } from "@/common/utils";
import { SocialServices } from "@/api/services";
import { ApiConst } from "@/configs/const";

export const useAdminSocialPageLoader: LoaderFunction = async (loader) => {
  try {
    AppUtils.openLoading();
    const user = await firebaseGetAuthenticatedUser();
    if (!user) return window.location.replace(AdminLoginPagePath.path);
    console.info("Welcome Back,", user.email);
    const response = await SocialServices.getAllSocials();
    await AppUtils.delay(2);
    AppUtils.openLoading(false);
    if (response.ok) return response.data;
    else throw new Response(response.message, { status: response.status });
  } catch (error) {
    console.error(error);
    throw new Response(null, { status: ApiConst.HTTPS_STT_CODE.internalServerError });
  }
};
