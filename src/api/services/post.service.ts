import { ApiConst } from "@/configs/const";
import { api } from "../api.config";
import { Post } from "../models";

export const getAllPosts = async (): Promise<Post[]> => {
  const response = await api.default().get(ApiConst.API_ENDPOINTS.GET_ALL_POSTS);
  const posts: any = response.data;
  return posts.map((post: any) => new Post(post.id, post.title, post.body, post.userId));
};

export const createPost = async (request: Request): Promise<void> => {
  const formData = await request.formData();
  await api.default().post(ApiConst.API_ENDPOINTS.POST_CREATE_POST, formData);
};
