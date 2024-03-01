import React from "react";
import { withRouterLoader, type LoaderFC } from "@/common/components/H.O.C";
import { BaseLayout } from "@/common/layouts";
import {
  AdminSocialPageContext,
  type AdminSocialPageContextType,
} from "@/features/AdminSocialPage/AdminSocialPage.context";

const Page: LoaderFC = () => {
  const AdminSocialPageContextValue: AdminSocialPageContextType = {};

  return (
    <AdminSocialPageContext.Provider value={AdminSocialPageContextValue}>
      <BaseLayout>Social Management</BaseLayout>
    </AdminSocialPageContext.Provider>
  );
};

export const AdminSocialPage = withRouterLoader(Page);
