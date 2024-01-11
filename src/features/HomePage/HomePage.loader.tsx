import { LoaderFunction } from "react-router-dom";
import { PostService } from "@/api/services";

export const useHomePageLoader: LoaderFunction = async (ctx) => {
  const posts = await PostService.getAllPosts();
  return { posts };
};
