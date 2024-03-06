import React, { Fragment } from "react";
import { Typography } from "@mui/material";
import { AppConst } from "@/configs/const";

export const AdminBannerSliderPageNote = () => {
  return (
    <Fragment>
      <Typography variant="caption" display="block" marginBottom={1}>
        <strong>Advice about User Experience:</strong> High quality images should be used to improve
        user experience. However, you should not upload files that are too large to overload the
        server <strong>(maximum {AppConst.ACCEPTABLE_IMAGE_FILE_SIZE}MB)</strong>.
      </Typography>
      <Typography variant="caption" display="block" marginBottom={1}>
        <strong>Advice about Browser Compatibility:</strong> We recommend using images in{" "}
        <strong>PNG/JPG/JPEG</strong> format because they are compatible with all browsers.
      </Typography>
      <Typography variant="caption" display="block" marginBottom={1}>
        <strong>Note about File Name:</strong> The file name should only contain characters from{" "}
        <strong>a-z, A-Z</strong> and <strong>numbers from 0-9</strong>, should not contain special
        characters and the maximum file name length is <strong>100 characters</strong>.
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
    </Fragment>
  );
};
