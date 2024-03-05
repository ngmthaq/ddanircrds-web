import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { Edit } from "@mui/icons-material";
import {
  BackgroundGradient,
  EditButton,
  ImageWrapper,
  OrderText,
} from "./AdminBannerSliderPage.styled";
import { AdminBannerSliderPageContext } from "./AdminBannerSliderPage.context";
import { AppConst } from "@/configs/const";

export const AdminBannerSliderPageGrid = () => {
  const { banners, handleChangeBanner } = useContext(AdminBannerSliderPageContext);

  return (
    <Grid marginTop={2} container spacing={2}>
      {banners.map((banner) => (
        <Grid key={banner.id} item xs={12} sm={12} md={12} lg={6} xl={4}>
          <ImageWrapper>
            <img src={banner.publicUrl} alt={banner.url} />
            <OrderText>Slider {banner.order}</OrderText>
            <EditButton color="primary" title="Upload new image">
              <label htmlFor={"form_" + banner.id} style={{ cursor: "pointer" }}>
                <Edit />
                <input
                  type="file"
                  hidden
                  id={"form_" + banner.id}
                  data-id={banner.id}
                  onChange={handleChangeBanner}
                  accept={AppConst.ACCEPTABLE_IMAGE_MIME_TYPES.join(",")}
                />
              </label>
            </EditButton>
            <BackgroundGradient />
          </ImageWrapper>
        </Grid>
      ))}
    </Grid>
  );
};
