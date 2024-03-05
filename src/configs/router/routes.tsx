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
import {
  AdminAboutUsContentPage,
  shouldAdminAboutUsContentPageRevalidate,
  useAdminAboutUsContentPageAction,
  useAdminAboutUsContentPageLoader,
} from "@/features/AdminAboutUsContentPage";
import {
  AdminBannerSliderPage,
  shouldAdminBannerSliderPageRevalidate,
  useAdminBannerSliderPageAction,
  useAdminBannerSliderPageLoader,
} from "@/features/AdminBannerSliderPage";
import {
  AdminMusicSubmissionPage,
  shouldAdminMusicSubmissionPageRevalidate,
  useAdminMusicSubmissionPageAction,
  useAdminMusicSubmissionPageLoader,
} from "@/features/AdminMusicSubmissionPage";

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

export const AdminAboutUsContentPagePath: Route = {
  path: "/admin/about",
  id: "AdminAboutUsContentPagePath",
  element: <AdminAboutUsContentPage />,
  errorElement: <ErrorPage />,
  loader: useAdminAboutUsContentPageLoader,
  action: useAdminAboutUsContentPageAction,
  shouldRevalidate: shouldAdminAboutUsContentPageRevalidate,
};

export const AdminBannerSliderPagePath: Route = {
  path: "/admin/banner/slider",
  id: "AdminBannerSliderPagePath",
  element: <AdminBannerSliderPage />,
  errorElement: <ErrorPage />,
  loader: useAdminBannerSliderPageLoader,
  action: useAdminBannerSliderPageAction,
  shouldRevalidate: shouldAdminBannerSliderPageRevalidate,
};

export const AdminMusicSubmissionPagePath: Route = {
  path: "/admin/music/submission",
  id: "AdminMusicSubmissionPagePath",
  element: <AdminMusicSubmissionPage />,
  errorElement: <ErrorPage />,
  loader: useAdminMusicSubmissionPageLoader,
  action: useAdminMusicSubmissionPageAction,
  shouldRevalidate: shouldAdminMusicSubmissionPageRevalidate,
};
