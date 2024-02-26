import type { RouteObject } from "react-router-dom";
import { ErrorPage } from "@/features/ErrorPage";
import { HomePage, shouldHomePageRevalidate, useHomePageAction, useHomePageLoader } from "@/features/HomePage";

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
