import { LoaderFunction } from "react-router-dom";
import { firebaseGetAuthenticatedUser } from "@/configs/firebase";
import { AdminLoginPagePath } from "@/configs/router/routes";

export const useAdminSocialPageLoader: LoaderFunction = async (loader) => {
  try {
    const user = await firebaseGetAuthenticatedUser();
    if (!user) return window.location.replace(AdminLoginPagePath.path);
    console.info("Welcome Back,", user.email);
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
