import { LoaderFunction } from "react-router-dom";
import { Palette } from "@mui/material";
import { StorageUtils } from "@/common/utils";
import { HomePagePath } from "@/configs/router/routes";

export const useAboutPageLoader: LoaderFunction = async (loader) => {
  const theme = StorageUtils.getStorage<Palette["mode"]>("theme");
  if (theme === "light") return window.location.replace(HomePagePath.path);
  return null;
};
