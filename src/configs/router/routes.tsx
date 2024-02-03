import type { RouteObject } from "react-router-dom";
import { ErrorPage } from "@/features/ErrorPage";
import { HomePage, shouldHomePageRevalidate, useHomePageLoader } from "@/features/HomePage";
import { AboutPage, shouldAboutPageRevalidate, useAboutPageLoader } from "@/features/AboutPage";

export type Route = RouteObject & {
  path: string;
};

export const HomePagePath: Route = {
  path: "/",
  id: "HomePagePath",
  element: <HomePage />,
  errorElement: <ErrorPage />,
  loader: useHomePageLoader,
  shouldRevalidate: shouldHomePageRevalidate,
};

export const AboutPagePath: Route = {
  path: "/about",
  id: "AboutPagePath",
  element: <AboutPage />,
  errorElement: <ErrorPage />,
  loader: useAboutPageLoader,
  shouldRevalidate: shouldAboutPageRevalidate,
};
