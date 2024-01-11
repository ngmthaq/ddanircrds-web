import { LoaderFunction } from "react-router-dom";
import { PostService } from "@/api/services";
import { useLoading } from "@/common/hooks";

export const useHomePageLoader: LoaderFunction = async (ctx) => {
  const { openAppLoading } = useLoading();
  openAppLoading(true);
  const posts = await PostService.getAllPosts();
  openAppLoading(false);
  return { posts };
};
