import { useMediaQuery } from "@mui/material";
import { useTheme } from "./useTheme";

export function useResponsive() {
  const { theme } = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return { isMobile, isTablet, isDesktop };
}
