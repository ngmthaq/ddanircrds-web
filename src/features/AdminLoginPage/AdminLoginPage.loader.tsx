import { LoaderFunction } from "react-router-dom";
import { firebaseGetAuthenticatedUser } from "@/configs/firebase";
import { AdminSocialPagePath } from "@/configs/router/routes";

export const useAdminLoginPageLoader: LoaderFunction = async (loader) => {
  try {
    const user = await firebaseGetAuthenticatedUser();
    if (!user) return null;
    return window.location.replace(AdminSocialPagePath.path);
  } catch (error) {
    console.error(error);
    return null;
  }
};
