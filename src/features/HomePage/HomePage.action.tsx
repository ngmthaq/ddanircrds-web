import { PostService } from "@/api/services";
import { ActionFunction, ShouldRevalidateFunction } from "react-router-dom";

export const useHomePageAction: ActionFunction = async (ctx) => {
  const formData = await ctx.request.formData();
  return PostService.createPost(formData);
};

export const shouldHomePageRevalidate: ShouldRevalidateFunction = (ctx) => {
  return true;
};
