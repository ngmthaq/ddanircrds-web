import { useEffect, useMemo, useState } from "react";
import { Palette, Theme } from "@mui/material";
import { getTheme } from "@/theme/material";
import { EventBusUtils, StorageUtils } from "../utils";

export function useTheme() {
  const mode = useMemo(() => StorageUtils.getStorage<Palette["mode"]>("theme") || "light", []);

  const [theme, setTheme] = useState<Theme>(getTheme(mode));

  const handleThemeChanged = (mode: Palette["mode"]) => {
    setTheme(getTheme(mode));
  };

  useEffect(() => {
    EventBusUtils.on<Palette["mode"]>("changeTheme", handleThemeChanged);
    return EventBusUtils.off<Palette["mode"]>("changeTheme", handleThemeChanged);
  });

  return theme;
}
