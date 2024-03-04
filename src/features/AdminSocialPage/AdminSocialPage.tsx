import React from "react";
import { withRouterLoader, type LoaderFC } from "@/common/components/H.O.C";
import { AdminLayout } from "@/common/layouts";
import { AdminSocialPageContext, AdminSocialPageContextType } from "./AdminSocialPage.context";

const Page: LoaderFC = () => {
  const AdminSocialPageContextValue: AdminSocialPageContextType = {};

  return (
    <AdminSocialPageContext.Provider value={AdminSocialPageContextValue}>
      <AdminLayout title="Social Management">Hi</AdminLayout>
    </AdminSocialPageContext.Provider>
  );
};

export const AdminSocialPage = withRouterLoader(Page);
