import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { AppConst } from "@/configs/const";
import { AdminBannerSliderPageContext } from "./AdminBannerSliderPage.context";
import { PreviewCard } from "./AdminBannerSliderPage.styled";

export const AdminBannerSliderPageUploadDialog = () => {
  type ErrorType = {
    size: boolean;
    ext: boolean;
    mime: boolean;
    regex: boolean;
    length: boolean;
  };

  const { selectedBanner, handleCancelUpload, handleUpload } = useContext(
    AdminBannerSliderPageContext,
  );

  const [errors, setErrors] = useState<ErrorType>({
    size: false,
    ext: false,
    mime: false,
    regex: false,
    length: false,
  });

  const isOpen = Boolean(selectedBanner && selectedBanner.image);

  const isError = errors.size || errors.ext || errors.mime || errors.regex || errors.length;

  useEffect(() => {
    if (isOpen && selectedBanner && selectedBanner.image) {
      const file = selectedBanner.image;
      const fullFileName = file.name;
      const fileSize = file.size;
      const fileType = file.type;
      const fileNameArray = fullFileName.split(".");
      const fileExtension = fileNameArray.pop();
      const fileName = fileNameArray.join(".");

      setErrors((currentState) => ({
        ...currentState,
        size: false,
        ext: false,
        mime: false,
        regex: false,
        length: false,
      }));

      if (fileSize > AppConst.ACCEPTABLE_IMAGE_FILE_SIZE * 1024 * 1024) {
        setErrors((currentState) => ({ ...currentState, size: true }));
      }

      if (AppConst.ACCEPTABLE_IMAGE_EXTENSIONS.includes(fileExtension || "") === false) {
        setErrors((currentState) => ({ ...currentState, ext: true }));
      }

      if (AppConst.ACCEPTABLE_IMAGE_MIME_TYPES.includes(fileType) === false) {
        setErrors((currentState) => ({ ...currentState, mime: true }));
      }

      if (fileName.length > AppConst.ACCEPTABLE_IMAGE_FILE_NAME_LENGTH) {
        setErrors((currentState) => ({ ...currentState, length: true }));
      }

      if (fileName.match(AppConst.ACCEPTABLE_IMAGE_FILE_NAME_REGEX) === null) {
        setErrors((currentState) => ({ ...currentState, regex: true }));
      }
    }
  }, [isOpen, selectedBanner]);

  return (
    <Dialog fullWidth open={isOpen}>
      <DialogTitle>{isError ? "Upload Failure" : "Upload Preview"}</DialogTitle>
      <DialogContent>
        <PreviewCard>
          {isError ? (
            <Fragment>
              <Typography
                variant="caption"
                display="block"
                marginTop={1}
                color={(theme) =>
                  errors.size ? theme.palette.error.main : theme.palette.success.main
                }
              >
                - File size maximum {AppConst.ACCEPTABLE_IMAGE_FILE_SIZE}MB
              </Typography>
              <Typography
                variant="caption"
                display="block"
                color={(theme) =>
                  errors.ext ? theme.palette.error.main : theme.palette.success.main
                }
              >
                - Using image in {AppConst.ACCEPTABLE_IMAGE_EXTENSIONS.join(", ")} format
              </Typography>
              <Typography
                variant="caption"
                display="block"
                color={(theme) =>
                  errors.mime ? theme.palette.error.main : theme.palette.success.main
                }
              >
                - Using image in mimetypes {AppConst.ACCEPTABLE_IMAGE_MIME_TYPES.join(", ")}
              </Typography>
              <Typography
                variant="caption"
                display="block"
                color={(theme) =>
                  errors.regex ? theme.palette.error.main : theme.palette.success.main
                }
              >
                - File name should only contain characters from a-z, A-Z, 0-9 with no space
              </Typography>
              <Typography
                variant="caption"
                display="block"
                color={(theme) =>
                  errors.length ? theme.palette.error.main : theme.palette.success.main
                }
              >
                - File name length maximum {AppConst.ACCEPTABLE_IMAGE_FILE_NAME_LENGTH} characters
              </Typography>
            </Fragment>
          ) : (
            <img src={selectedBanner?.preview || ""} alt={selectedBanner?.id || "preview image"} />
          )}
        </PreviewCard>
      </DialogContent>
      <DialogActions>
        <Button fullWidth variant="outlined" onClick={handleCancelUpload}>
          Cancel
        </Button>
        {!isError && (
          <Button fullWidth variant="contained" onClick={handleUpload}>
            Upload
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};
