import { Palette, createTheme } from "@mui/material/styles";
import { breakpointValues } from "./configs/breakpoints";
import { zIndex } from "./configs/z-index";
import {
  lightPaletteError,
  lightPaletteInfo,
  lightPalettePrimary,
  lightPaletteSecondary,
  lightPaletteSuccess,
  lightPaletteWaring,
} from "./configs/palette-light";
import {
  darkPaletteError,
  darkPaletteInfo,
  darkPalettePrimary,
  darkPaletteSecondary,
  darkPaletteSuccess,
  darkPaletteWaring,
} from "./configs/palette-dark";
import { EventBusUtils, StorageUtils } from "@/common/utils";

export const getDefaultTheme = (mode: Palette["mode"]) => {
  return createTheme({ palette: { mode } });
};

export const getTheme = (mode: Palette["mode"]) => {
  const defaultTheme = getDefaultTheme(mode);
  return createTheme(defaultTheme, {
    breakpoints: {
      values: breakpointValues,
    },
    palette: {
      mode: mode,
      primary: mode === "light" ? lightPalettePrimary : darkPalettePrimary,
      secondary: mode === "light" ? lightPaletteSecondary : darkPaletteSecondary,
      error: mode === "light" ? lightPaletteError : darkPaletteError,
      warning: mode === "light" ? lightPaletteWaring : darkPaletteWaring,
      info: mode === "light" ? lightPaletteInfo : darkPaletteInfo,
      success: mode === "light" ? lightPaletteSuccess : darkPaletteSuccess,
    },
    zIndex: zIndex,
  });
};

export const changeTheme = (mode: Palette["mode"]) => {
  StorageUtils.setStorage<Palette["mode"]>("theme", mode);
  EventBusUtils.emit<Palette["mode"]>("changeTheme", mode);
};
