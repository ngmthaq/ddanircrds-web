import { ActionFunction } from "react-router-dom";
import { PostService } from "@/api/services";

export const useHomePageAction: ActionFunction = async (action) => {
  await PostService.createPost(action.request);
  return null;
};
