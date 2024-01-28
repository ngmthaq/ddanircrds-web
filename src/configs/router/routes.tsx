import type { RouteObject } from "react-router-dom";
import { ErrorPage } from "@/features/ErrorPage";
import { HomePage, shouldHomePageRevalidate, useHomePageAction, useHomePageLoader } from "@/features/HomePage";
import { AboutPage, shouldAboutPageRevalidate, useAboutPageAction, useAboutPageLoader } from "@/features/AboutPage";

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
  shouldRevalidate: shouldHomePageRevalidate,
};

export const AboutPagePath: Route = {
  path: "/about",
  id: "AboutPagePath",
  element: <AboutPage />,
  errorElement: <ErrorPage />,
  loader: useAboutPageLoader,
  action: useAboutPageAction,
  shouldRevalidate: shouldAboutPageRevalidate,
};
