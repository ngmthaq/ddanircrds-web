import { createContext } from "react";
import { Post } from "@/api/models";

export type HomePageLoaderResponseType = {
  posts: Post[];
};

export type HomePageContextType = {
  loaderData?: HomePageLoaderResponseType;
};

export const HomePageContext = createContext<HomePageContextType>({});
