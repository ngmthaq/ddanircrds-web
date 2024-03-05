import React from "react";
import { AdminLayout } from "@/common/layouts";
import { withRouterLoader, type LoaderFC } from "@/common/components/H.O.C";
import {
  AdminMusicSubmissionPageContext,
  type AdminMusicSubmissionPageContextType,
} from "./AdminMusicSubmissionPage.context";

const Page: LoaderFC = ({ loaderData }) => {
  const AdminMusicSubmissionPageContextValue: AdminMusicSubmissionPageContextType = {};

  return (
    <AdminMusicSubmissionPageContext.Provider value={AdminMusicSubmissionPageContextValue}>
      <AdminLayout title="Social Network" contentMaxWidth="100%">
        AdminMusicSubmissionPage
      </AdminLayout>
    </AdminMusicSubmissionPageContext.Provider>
  );
};

export const AdminMusicSubmissionPage = withRouterLoader(Page);
