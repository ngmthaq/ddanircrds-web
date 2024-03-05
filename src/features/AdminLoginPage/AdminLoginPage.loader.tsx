import { LoaderFunction } from "react-router-dom";
import { firebaseGetAuthenticatedUser } from "@/configs/firebase";
import { AdminSocialPagePath } from "@/configs/router/routes";
import { AppUtils } from "@/common/utils";

export const useAdminLoginPageLoader: LoaderFunction = async (loader) => {
  try {
    AppUtils.openLoading();
    await AppUtils.delay(2);
    const user = await firebaseGetAuthenticatedUser();
    AppUtils.openLoading(false);
    if (!user) return null;
    return window.location.replace(AdminSocialPagePath.path);
  } catch (error) {
    console.error(error);
    return null;
  }
};
