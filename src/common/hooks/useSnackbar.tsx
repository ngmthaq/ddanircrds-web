import { VariantType, enqueueSnackbar } from "notistack";
import { useEffect } from "react";
import { EventBusUtils } from "../utils";

export type SnackbarInputType = { message: string; variant: VariantType };

export const useHandleSnackbar = () => {
  const openSnackbar = ({ message, variant }: SnackbarInputType) => {
    enqueueSnackbar(message, { variant });
  };

  useEffect(() => {
    EventBusUtils.on<SnackbarInputType>("openSnackbar", openSnackbar);
    return () => EventBusUtils.off<SnackbarInputType>("openSnackbar", openSnackbar);
  });
};

export const useSnackbar = () => {
  const openSnackbar = (params: SnackbarInputType) => {
    EventBusUtils.emit<SnackbarInputType>("openSnackbar", params);
  };

  return { openSnackbar };
};
