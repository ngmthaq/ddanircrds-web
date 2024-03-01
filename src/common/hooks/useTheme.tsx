import { useEffect, useState } from "react";
import { Palette, Theme } from "@mui/material";
import { changeTheme, getTheme } from "@/theme/material";
import { EventBusUtils, StorageUtils } from "../utils";

export function useTheme() {
  const [mode, setMode] = useState<Palette["mode"]>(
    StorageUtils.getStorage<Palette["mode"]>("theme") || "light",
  );
  const [theme, setTheme] = useState<Theme>(getTheme(mode));

  const handleThemeChanged = (mode: Palette["mode"]) => {
    const newTheme = getTheme(mode);
    setMode(mode);
    setTheme(newTheme);
  };

  useEffect(() => {
    EventBusUtils.on<Palette["mode"]>("changeTheme", handleThemeChanged);
    return () => EventBusUtils.off<Palette["mode"]>("changeTheme", handleThemeChanged);
  });

  return { theme, mode, changeTheme };
}
