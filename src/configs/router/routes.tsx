import type { RouteObject } from "react-router-dom";
import { ErrorPage } from "@/features/ErrorPage";
import {
  HomePage,
  shouldHomePageRevalidate,
  useHomePageAction,
  useHomePageLoader,
} from "@/features/HomePage";
import {
  AdminLoginPage,
  shouldAdminLoginPageRevalidate,
  useAdminLoginPageAction,
  useAdminLoginPageLoader,
} from "@/features/AdminLoginPage";
import {
  AdminSocialPage,
  shouldAdminSocialPageRevalidate,
  useAdminSocialPageAction,
  useAdminSocialPageLoader,
} from "@/features/AdminSocialPage";

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

export const AdminLoginPagePath: Route = {
  path: "/admin/login",
  id: "AdminLoginPagePath",
  element: <AdminLoginPage />,
  errorElement: <ErrorPage />,
  loader: useAdminLoginPageLoader,
  action: useAdminLoginPageAction,
  shouldRevalidate: shouldAdminLoginPageRevalidate,
};

export const AdminSocialPagePath: Route = {
  path: "/admin/social",
  id: "AdminSocialPagePath",
  element: <AdminSocialPage />,
  errorElement: <ErrorPage />,
  loader: useAdminSocialPageLoader,
  action: useAdminSocialPageAction,
  shouldRevalidate: shouldAdminSocialPageRevalidate,
};
