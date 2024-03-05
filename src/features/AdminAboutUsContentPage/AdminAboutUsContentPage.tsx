import React from "react";
import { AdminLayout } from "@/common/layouts";
import { withRouterAdminLoader, type LoaderFC } from "@/common/components/H.O.C";
import {
  AdminAboutUsContentPageContext,
  type AdminAboutUsContentPageContextType,
} from "./AdminAboutUsContentPage.context";

const Page: LoaderFC = ({ loaderData }) => {
  const AdminAboutUsContentPageContextValue: AdminAboutUsContentPageContextType = {};

  return (
    <AdminAboutUsContentPageContext.Provider value={AdminAboutUsContentPageContextValue}>
      <AdminLayout title="Social Network" contentMaxWidth="100%">
        AdminAboutUsContentPage
      </AdminLayout>
    </AdminAboutUsContentPageContext.Provider>
  );
};

export const AdminAboutUsContentPage = withRouterAdminLoader(Page);
