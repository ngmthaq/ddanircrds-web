import { ApiConst } from "@/configs/const";
import { Api } from "../api.config";
import { Post } from "../models";

export const getAllPosts = async (): Promise<Post[]> => {
  const api = new Api();
  const response = await api.get(ApiConst.API_ENDPOINTS.GET_ALL_POSTS);
  const posts: any = response.data;
  return posts.map((post: any) => new Post(post.id, post.title, post.body, post.userId));
};

export const createPost = async (formData: FormData): Promise<boolean> => {
  try {
    const api = new Api();
    await api.post(ApiConst.API_ENDPOINTS.POST_CREATE_POST, formData);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
