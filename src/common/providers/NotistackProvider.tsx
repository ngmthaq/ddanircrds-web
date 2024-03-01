import React, { FC, ReactNode, useEffect } from "react";
import {
  SnackbarKey,
  SnackbarProvider,
  useSnackbar,
  VariantType,
  enqueueSnackbar,
} from "notistack";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { EventBusUtils } from "../utils";

export type SnackbarInputType = {
  message: string;
  variant: VariantType;
};

export function useHandleSnackbar() {
  const openSnackbar = ({ message, variant }: SnackbarInputType) => {
    enqueueSnackbar(message, { variant });
  };

  useEffect(() => {
    EventBusUtils.on<SnackbarInputType>("openSnackbar", openSnackbar);
    return () => EventBusUtils.off<SnackbarInputType>("openSnackbar", openSnackbar);
  });
}

export const NotistackProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      action={(snackbarKey) => <SnackbarCloseButton snackbarKey={snackbarKey} />}
    >
      {children}
    </SnackbarProvider>
  );
};

const SnackbarCloseButton: FC<{
  snackbarKey: SnackbarKey;
}> = ({ snackbarKey }) => {
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton onClick={() => closeSnackbar(snackbarKey)}>
      <Close />
    </IconButton>
  );
};
