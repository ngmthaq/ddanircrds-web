import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import { AdminBannerSliderPageContext } from "./AdminBannerSliderPage.context";
import { PreviewCard } from "./AdminBannerSliderPage.styled";

export const AdminBannerSliderPageUploadDialog = () => {
  type ErrorType = {
    size: boolean;
    ext: boolean;
    name: boolean;
  };

  const { selectedBanner, handleCancelUpload } = useContext(AdminBannerSliderPageContext);

  const [errors, setErrors] = useState<ErrorType>({ size: false, ext: false, name: false });

  const isOpen = Boolean(selectedBanner && selectedBanner.image);

  const isError = errors.ext || errors.name || errors.size;

  useEffect(() => {
    if (isOpen) {
      setErrors((currentState) => ({ ...currentState, size: false, ext: false, name: false }));
    }
  }, [isOpen, selectedBanner]);

  return (
    <Dialog fullWidth open={isOpen}>
      <DialogTitle>Upload Confirmation</DialogTitle>
      <DialogContent>
        <PreviewCard>
          {!isError && (
            <img src={selectedBanner?.preview || ""} alt={selectedBanner?.id || "preview image"} />
          )}
          <Divider />
          <Typography variant="subtitle2" marginTop={2}>
            Image validation:
          </Typography>
          <Typography
            variant="caption"
            display="block"
            color={(theme) => (errors.size ? theme.palette.error.main : theme.palette.success.main)}
            marginTop={1}
          >
            1. File size maximum 20MB
          </Typography>
          <Typography
            variant="caption"
            display="block"
            color={(theme) => (errors.ext ? theme.palette.error.main : theme.palette.success.main)}
          >
            2. Using image in PNG/JPG/JPEG format
          </Typography>
          <Typography
            variant="caption"
            display="block"
            color={(theme) => (errors.name ? theme.palette.error.main : theme.palette.success.main)}
          >
            3. File name should only contain characters from a-z, A-Z, 0-9
          </Typography>
          <Typography
            variant="caption"
            display="block"
            color={(theme) => (errors.name ? theme.palette.error.main : theme.palette.success.main)}
          >
            4. File name length maximum 100 characters
          </Typography>
        </PreviewCard>
      </DialogContent>
      <DialogActions>
        <Button fullWidth variant="outlined" onClick={handleCancelUpload}>
          Cancel
        </Button>
        <Button fullWidth variant="contained" disabled={isError}>
          Upload
        </Button>
      </DialogActions>
    </Dialog>
  );
};
