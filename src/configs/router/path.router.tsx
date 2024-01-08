import type { RouteObject } from "react-router-dom";
import { ErrorPage } from "@/features/ErrrorPage";
import { HomePage, useHomePageAction, useHomePageLoader } from "@/features/HomePage";
import { AboutPage, useAboutPageAction, useAboutPageLoader } from "@/features/AboutPage";

export type Route = RouteObject & {
  path: string;
};

export const HomePagePath: Route = {
  path: "/",
  id: "HomePagePath",
  element: <HomePage />,
  errorElement: <ErrorPage />,
  loader: useHomePageLoader,
  action: useHomePageAction,
};

export const AboutPagePath: Route = {
  path: "/about",
  id: "AboutPagePath",
  element: <AboutPage />,
  errorElement: <ErrorPage />,
  loader: useAboutPageLoader,
  action: useAboutPageAction,
};
