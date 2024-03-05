import React, { ChangeEventHandler, useMemo, useState } from "react";
import { Divider } from "@mui/material";
import { AdminLayout } from "@/common/layouts";
import { withRouterAdminLoader, type LoaderFC } from "@/common/components/H.O.C";
import { TopBannerModel } from "@/api/models";
import {
  AdminBannerSliderPageContext,
  type SelectedBannerType,
  type AdminBannerSliderPageContextType,
} from "./AdminBannerSliderPage.context";
import { AdminBannerSliderPageNote } from "./AdminBannerSliderPageNote.component";
import { AdminBannerSliderPageGrid } from "./AdminBannerSliderPageGrid.component";
import { AdminBannerSliderPageUploadDialog } from "./AdminBannerSliderPageUploadDialog.component";

const Page: LoaderFC = ({ loaderData }) => {
  const banners = useMemo<TopBannerModel[]>(() => loaderData, [loaderData]);

  const [selectedBanner, setSelectedBanner] = useState<SelectedBannerType>({
    id: null,
    image: null,
    preview: null,
    element: null,
  });

  const handleCancelUpload = () => {
    if (selectedBanner.element) selectedBanner.element.value = "";
    setSelectedBanner((currentState) => ({
      ...currentState,
      id: null,
      image: null,
      element: null,
      preview: null,
    }));
  };

  const handleChangeBanner: ChangeEventHandler<HTMLInputElement> = (event) => {
    const files = event.target.files;
    if (files && files.length > 0 && Boolean(files.item(0))) {
      const bannerId = event.target.getAttribute("data-id");
      const file = files.item(0);
      const preview = URL.createObjectURL(file as File);
      setSelectedBanner((currentState) => ({
        ...currentState,
        id: bannerId,
        image: file,
        element: event.target,
        preview: preview,
      }));
    } else {
      handleCancelUpload();
    }
  };

  const AdminBannerSliderPageContextValue: AdminBannerSliderPageContextType = {
    banners: banners,
    selectedBanner: selectedBanner,
    handleChangeBanner: handleChangeBanner,
    handleCancelUpload: handleCancelUpload,
  };

  return (
    <AdminBannerSliderPageContext.Provider value={AdminBannerSliderPageContextValue}>
      <AdminLayout title="Top Banner Slider" contentMaxWidth="100%">
        <AdminBannerSliderPageNote />
        <Divider />
        <AdminBannerSliderPageGrid />
        <AdminBannerSliderPageUploadDialog />
      </AdminLayout>
    </AdminBannerSliderPageContext.Provider>
  );
};

export const AdminBannerSliderPage = withRouterAdminLoader(Page);
