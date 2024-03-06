import React, { useMemo, useState } from "react";
import { useLocation, useSubmit } from "react-router-dom";
import { AdminLayout } from "@/common/layouts";
import { withRouterAdminLoader, type LoaderFC } from "@/common/components/H.O.C";
import { MusicSubmissionModel } from "@/api/models";
import {
  AdminMusicSubmissionPageContext,
  type AdminMusicSubmissionPageContextType,
} from "./AdminMusicSubmissionPage.context";
import { useAdminMusicSubmissionPagePagination } from "./AdminMusicSubmissionPagePagination.hook";
import { AdminMusicSubmissionPageTable } from "./AdminMusicSubmissionPageTable.component";
import { AdminMusicSubmissionPageSearch } from "./AdminMusicSubmissionPageSearch.component";
import { AdminMusicSubmissionPageDetails } from "./AdminMusicSubmissionPageDetails.component";

const Page: LoaderFC = ({ loaderData }) => {
  const submit = useSubmit();
  const location = useLocation();

  const totalSubmissions = useMemo<MusicSubmissionModel[]>(() => loaderData, [loaderData]);

  const { page, totalPages, submissions, searchValue, handleChangePage, handleChangeSearchValue } =
    useAdminMusicSubmissionPagePagination({
      submissions: totalSubmissions,
    });

  const [selectedSubmission, setSelectedSubmission] = useState<MusicSubmissionModel | null>(null);

  const handleRefetch = () => {
    const formData = new FormData();
    formData.set("intent", "refresh");
    submit(formData, {
      action: location.pathname + location.search,
      method: "post",
      encType: "multipart/form-data",
    });
  };

  const handleSetSelectSubmission = (submission: MusicSubmissionModel | null) => {
    setSelectedSubmission(submission);
  };

  const AdminMusicSubmissionPageContextValue: AdminMusicSubmissionPageContextType = {
    page: page,
    totalPages: totalPages,
    submissions: submissions,
    selectedSubmission: selectedSubmission,
    searchValue: searchValue,
    handleChangePage: handleChangePage,
    handleChangeSearchValue: handleChangeSearchValue,
    handleRefetch: handleRefetch,
    handleSetSelectSubmission: handleSetSelectSubmission,
  };

  return (
    <AdminMusicSubmissionPageContext.Provider value={AdminMusicSubmissionPageContextValue}>
      <AdminLayout title="Music Submission" contentMaxWidth="100%">
        <AdminMusicSubmissionPageSearch />
        <AdminMusicSubmissionPageTable />
        <AdminMusicSubmissionPageDetails />
      </AdminLayout>
    </AdminMusicSubmissionPageContext.Provider>
  );
};

export const AdminMusicSubmissionPage = withRouterAdminLoader(Page);
