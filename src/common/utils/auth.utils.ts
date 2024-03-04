import { AuthServices } from "@/api/services";
import { AdminLoginPagePath } from "@/configs/router/routes";
import { AppUtils } from "./index";

export async function logout({ openLoading }: { openLoading: boolean }) {
  try {
    if (openLoading) AppUtils.openLoading();
    await AuthServices.logout();
    localStorage.clear();
    sessionStorage.clear();
    await AppUtils.delay(1);
    window.location.href = AdminLoginPagePath.path;
  } catch (error) {
    console.error(error);
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = AdminLoginPagePath.path;
  }
}
