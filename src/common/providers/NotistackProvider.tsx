import React, { FC, ReactNode } from "react";
import { SnackbarKey, SnackbarProvider, useSnackbar } from "notistack";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const NotistackProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      action={(snackbarKey) => <SnackbarCloseButton snackbarKey={snackbarKey} />}
    >
      {children}
    </SnackbarProvider>
  );
};

const SnackbarCloseButton: FC<{ snackbarKey: SnackbarKey }> = ({ snackbarKey }) => {
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton onClick={() => closeSnackbar(snackbarKey)}>
      <Close />
    </IconButton>
  );
};
