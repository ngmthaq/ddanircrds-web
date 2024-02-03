import { Palette, createTheme } from "@mui/material/styles";
import { EventBusUtils, StorageUtils } from "@/common/utils";
import { breakpointValues } from "./configs/breakpoints";
import { zIndex } from "./configs/z-index";
import * as paletteLight from "./configs/palette-light";
import * as paletteDark from "./configs/palette-dark";

export const getDefaultTheme = (mode: Palette["mode"]) => {
  return createTheme({ palette: { mode } });
};

export const getTheme = (mode: Palette["mode"]) => {
  const defaultTheme = getDefaultTheme(mode);
  return createTheme(defaultTheme, {
    zIndex: zIndex,
    breakpoints: { values: breakpointValues },
    palette: {
      mode: mode,
      primary: mode === "light" ? paletteLight.palettePrimary : paletteDark.palettePrimary,
      secondary: mode === "light" ? paletteLight.paletteSecondary : paletteDark.paletteSecondary,
      error: mode === "light" ? paletteLight.paletteError : paletteDark.paletteError,
      warning: mode === "light" ? paletteLight.paletteWaring : paletteDark.paletteWaring,
      info: mode === "light" ? paletteLight.paletteInfo : paletteDark.paletteInfo,
      success: mode === "light" ? paletteLight.paletteSuccess : paletteDark.paletteSuccess,
    },
  });
};

export const changeTheme = (mode: Palette["mode"]) => {
  StorageUtils.setStorage<Palette["mode"]>("theme", mode);
  EventBusUtils.emit<Palette["mode"]>("changeTheme", mode);
};
