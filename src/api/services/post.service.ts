import { ApiConst } from "@/configs/const";
import { HumpsUtils } from "@/common/utils";
import { api, responseError, responseSuccess } from "../configs";
import { Post } from "../models";

export const getAllPosts = async () => {
  try {
    const response = await api.default().get(ApiConst.API_ENDPOINTS.GET_ALL_POSTS);
    const responsePosts: any = HumpsUtils.camelizeKeys(response.data);
    const posts: Post[] = responsePosts.map((post: any) => new Post(post.id, post.title, post.body, post.userId));
    return responseSuccess(response, posts);
  } catch (error) {
    return responseError(error);
  }
};

export const createPost = async (formData: FormData) => {
  try {
    const response = await api.default().post(ApiConst.API_ENDPOINTS.POST_CREATE_POST, formData);
    return responseSuccess(response);
  } catch (error) {
    return responseError(error);
  }
};
