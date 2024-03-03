import { ActionFunction, redirect } from "react-router-dom";
import { CredentialModel } from "@/api/models";
import { AuthServices } from "@/api/services";
import { AdminSocialPagePath } from "@/configs/router/routes";
import { AppUtils } from "@/common/utils";

export const useAdminLoginPageAction: ActionFunction = async (action) => {
  AppUtils.openLoading();
  const formData = await action.request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const credential = new CredentialModel(email, password);
  const response = await AuthServices.login(credential);
  await AppUtils.delay(1);
  AppUtils.openLoading(false);
  if (response.ok) return redirect(AdminSocialPagePath.path);
  return { message: AuthServices.handleErrorMessage(response.data as string) };
};
