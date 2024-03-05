import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { AdminLayout } from "@/common/layouts";
import { withRouterAdminLoader, type LoaderFC } from "@/common/components/H.O.C";
import {
  AdminBannerSliderPageContext,
  type AdminBannerSliderPageContextType,
} from "./AdminBannerSliderPage.context";
import {
  BackgroundGradient,
  EditButton,
  ImageWrapper,
  OrderText,
} from "./AdminBannerSliderPage.styled";

const Page: LoaderFC = ({ loaderData }) => {
  const AdminBannerSliderPageContextValue: AdminBannerSliderPageContextType = {};

  return (
    <AdminBannerSliderPageContext.Provider value={AdminBannerSliderPageContextValue}>
      <AdminLayout title="Top Banner Slider" contentMaxWidth="100%">
        <Typography variant="caption" display="block" marginBottom={1}>
          <strong>Advice about User Experience:</strong> High quality images should be used to
          improve user experience. However, you should not upload files that are too large to
          overload the server <strong>(maximum 20MB)</strong>.
        </Typography>
        <Typography variant="caption" display="block" marginBottom={1}>
          <strong>Advice about Browser Compatibility:</strong> We recommend using images in{" "}
          <strong>PNG/JPG/JPEG</strong> format because they are compatible with all browsers.
        </Typography>
        <Typography variant="caption" display="block" marginBottom={1}>
          <strong>Note about File Name:</strong> The file name should only contain characters from{" "}
          <strong>a-z, A-Z</strong> and <strong>numbers from 0-9</strong>, should not contain
          special characters and the maximum file name length is <strong>100 characters</strong>.
        </Typography>
        <Typography variant="caption" display="block" marginBottom={1}>
          <strong>Note about Firebase Storage:</strong> After being modified, images will be deleted
          from Firebase Storage to avoid memory overload leading to{" "}
          <strong>additional maintenance fees</strong>.
        </Typography>
        <Typography variant="caption" display="block" marginBottom={2}>
          <strong>Note about Slider Order:</strong> The order of sliders on the home page will
          correspond to the image position here. Make sure you have arranged the photo position
          correctly for your purpose.
        </Typography>

        <Divider />
        <Grid marginTop={2} container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
            <ImageWrapper>
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                alt="demo"
              />
              <OrderText>Image 1</OrderText>
              <EditButton>
                <Edit />
              </EditButton>
              <BackgroundGradient />
            </ImageWrapper>
          </Grid>
        </Grid>
      </AdminLayout>
    </AdminBannerSliderPageContext.Provider>
  );
};

export const AdminBannerSliderPage = withRouterAdminLoader(Page);
