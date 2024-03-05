import React from "react";
import { AdminLayout } from "@/common/layouts";
import { withRouterAdminLoader, type LoaderFC } from "@/common/components/H.O.C";
import {
  AdminBannerSliderPageContext,
  type AdminBannerSliderPageContextType,
} from "./AdminBannerSliderPage.context";

const Page: LoaderFC = ({ loaderData }) => {
  const AdminBannerSliderPageContextValue: AdminBannerSliderPageContextType = {};

  return (
    <AdminBannerSliderPageContext.Provider value={AdminBannerSliderPageContextValue}>
      <AdminLayout title="Social Network" contentMaxWidth="100%">
        Top Banner Slider
      </AdminLayout>
    </AdminBannerSliderPageContext.Provider>
  );
};

export const AdminBannerSliderPage = withRouterAdminLoader(Page);
