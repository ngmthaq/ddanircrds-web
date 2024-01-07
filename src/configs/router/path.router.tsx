import { RouteObject } from "react-router-dom";
import { HomePage, HomePageAction, HomePageLoader } from "@/features/HomePage";

export const HomePagePath: RouteObject = {
  path: "/",
  element: <HomePage />,
  loader: HomePageLoader,
  action: HomePageAction,
};
