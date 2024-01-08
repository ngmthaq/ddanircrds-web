import type { RouteObject } from "react-router-dom";
import { HomePage, HomePageAction, HomePageLoader } from "@/features/HomePage";
import { AboutPage, AboutPageAction, AboutPageLoader } from "@/features/AboutPage";

export type Route = RouteObject & {
  path: string;
};

export const HomePagePath: Route = {
  path: "/",
  id: "HomePagePath",
  element: <HomePage />,
  loader: HomePageLoader,
  action: HomePageAction,
};

export const AboutPagePath: Route = {
  path: "/about",
  id: "AboutPagePath",
  element: <AboutPage />,
  loader: AboutPageLoader,
  action: AboutPageAction,
};
