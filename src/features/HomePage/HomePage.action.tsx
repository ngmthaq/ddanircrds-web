import { ActionFunction, ShouldRevalidateFunction } from "react-router-dom";
import { PostService } from "@/api/services";
import { useLoading } from "@/common/hooks";

export const useHomePageAction: ActionFunction = async (ctx) => {
  const { openAppLoading } = useLoading();
  openAppLoading(true);
  const formData = await ctx.request.formData();
  const isSuccess = await PostService.createPost(formData);
  openAppLoading(false);
  return isSuccess;
};

export const shouldHomePageRevalidate: ShouldRevalidateFunction = (ctx) => {
  return true;
};
